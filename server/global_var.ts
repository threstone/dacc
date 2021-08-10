import { SocketServer } from "./socket_server"
import { configure, getLogger } from "log4js"
import * as loggerConfig from "./config/log4js.json"
import * as serverConfig from "./config/server.json"
import { ProtoBufEncoder } from "./protobuf_encoder"
import * as fs from "fs"
import * as path from "path"
import * as allProto from "./common_proto"
import { RoomMgr } from "./room_mgr"
import { Utils } from "./utils"
import { DBManager } from "./db_mgr"
import * as mysqlConfig from './config/mysql.json'
import { RedisClientSelf } from "./redis"
import * as redisConfig from './config/redis.json'

let logger = getLogger()
/**
gate:网关，多开，分发消息，对外暴露

hall:游戏大厅，提供登录注册、聊天、选择游戏、修改资料等功能
      一区一个进程，玩家所在的hall会记录在redis，对外隐藏   连接redis、mysql。
     只有gate使用RPC连接自己

game:游戏服，提供游戏服务，单个游戏一个进程（可以拓展为多进程服务一个游戏），
          对外隐藏，连接redis。gate使用RPC连接自己

record:记录服，对外隐藏，连接mysql，多开。game、gate使用RPC连接来读写记录
*/
export class GlobalVar {

    private static _server: SocketServer
    private static _roomMgr: RoomMgr
    private static _dbMgr: DBManager
    private static _redisClient: RedisClientSelf

    private static _args: any//程序启动的参数

    //支持的游戏类型 用于在分布式部署过程中某一些节点只运行对应的逻辑。
    private static supportGameType_: Map<number, boolean> = new Map<number, boolean>()

    static get server() {
        return this._server
    }

    static get roomMgr() {
        return this._roomMgr
    }

    static get dbMgr() {
        return this._dbMgr
    }

    static get redis() {
        return this._redisClient
    }

    public static set_process_args(args) {
        GlobalVar._args = args
    }

    public static isSupportGame(gameType: number) {
        //如果没有设置过支持游戏 那么默认所以游戏都支持
        if (GlobalVar.supportGameType_.size === 0) {

            return true
        }
        return GlobalVar.supportGameType_.get(gameType) === true
    }
    public static addSupportGame(gameType: number) { GlobalVar.supportGameType_.set(gameType, true) }



    static init() {
        const arrString = process.argv.splice(2);
        let args = Utils.arrayStringSplit(arrString)
        console.log('程序启动参数是：', args)
        GlobalVar.set_process_args(args)

        configure(loggerConfig)

        //如果不是debug模式则说明该进程只单独支持某一游戏
        let openMode = args.openMode || serverConfig.openMode
        if (openMode != 'debug') {
            GlobalVar.addSupportGame(args.supportGameId || serverConfig.supportGameId)
        }

        this._dbMgr = new DBManager()
        this._dbMgr.init(mysqlConfig)

        this._redisClient = new RedisClientSelf(redisConfig)

        this.initMsgHandle()
        this._roomMgr = new RoomMgr()

        this._server = new SocketServer()
        this.server.startWsServer(args.port)
    }



    /**
     * 初始化protobuf协议映射
     */
    static initMsgHandle() {
        ProtoBufEncoder.init()
        let handleObj = {}
        let handlePath = path.join(__dirname, './handle')
        let files = fs.readdirSync(handlePath)
        for (let i = 0; i < files.length; i++) {
            if (files[i].endsWith('.js')) {
                let temp = require(handlePath + '/' + files[i])
                for (let key in temp) {
                    if (key.endsWith('Handle')) {
                        if (handleObj[key]) {
                            logger.error(`重复的handle文件:${key}`)
                            continue
                        }
                        handleObj[key] = temp[key]
                    }
                }
            }
        }

        for (const protoKey in allProto) {
            let protoClass = allProto[protoKey]
            for (const key in protoClass) {
                if (key.startsWith('C_') || key.startsWith('S_')) {
                    let temp = protoClass[key]
                    if (temp.prototype.cmd == undefined || !temp.prototype.scmd == undefined) {
                        logger.error(`${protoKey}.${key}不存在cmd scmd, 注册失败!`,)
                        continue
                    }
                    ProtoBufEncoder.setProtoClass(temp.prototype.cmd, temp.prototype.scmd, temp)
                    if (key.startsWith('S_')) {
                        continue
                    }
                    let isFind = false
                    for (const handleName in handleObj) {
                        let handle = handleObj[handleName]
                        if (handle[key]) {
                            ProtoBufEncoder.setHandle(temp.prototype.cmd, temp.prototype.scmd, handle[key].bind(handle))
                            console.log(`注册函数 ${key}`);
                            isFind = true
                            break
                        }
                    }
                    if (!isFind && ProtoBufEncoder.getHandleFunction(temp.prototype.cmd, temp.prototype.scmd) == undefined) {
                        logger.error(`${key} 未找到注册函数`)
                    }
                }
            }

        }
    }
}