"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalVar = void 0;
const socket_server_1 = require("./socket_server");
const log4js_1 = require("log4js");
const loggerConfig = require("./config/log4js.json");
const serverConfig = require("./config/server.json");
const protobuf_encoder_1 = require("./protobuf_encoder");
const fs = require("fs");
const path = require("path");
const allProto = require("./common_proto");
const room_mgr_1 = require("./room_mgr");
const utils_1 = require("./utils");
const db_mgr_1 = require("./db_mgr");
const mysqlConfig = require("./config/mysql.json");
const redis_1 = require("./redis");
const redisConfig = require("./config/redis.json");
let logger = log4js_1.getLogger();
/**
gate:网关，多开，分发消息，对外暴露

hall:游戏大厅，提供登录注册、聊天、选择游戏、修改资料等功能
      一区一个进程，玩家所在的hall会记录在redis，对外隐藏   连接redis、mysql。
     只有gate使用RPC连接自己

game:游戏服，提供游戏服务，单个游戏一个进程（可以拓展为多进程服务一个游戏），
          对外隐藏，连接redis。gate使用RPC连接自己

record:记录服，对外隐藏，连接mysql，多开。game、gate使用RPC连接来读写记录
*/
class GlobalVar {
    static get server() {
        return this._server;
    }
    static get roomMgr() {
        return this._roomMgr;
    }
    static get dbMgr() {
        return this._dbMgr;
    }
    static get redis() {
        return this._redisClient;
    }
    static set_process_args(args) {
        GlobalVar._args = args;
    }
    static isSupportGame(gameType) {
        //如果没有设置过支持游戏 那么默认所以游戏都支持
        if (GlobalVar.supportGameType_.size === 0) {
            return true;
        }
        return GlobalVar.supportGameType_.get(gameType) === true;
    }
    static addSupportGame(gameType) { GlobalVar.supportGameType_.set(gameType, true); }
    static init() {
        const arrString = process.argv.splice(2);
        let args = utils_1.Utils.arrayStringSplit(arrString);
        console.log('程序启动参数是：', args);
        GlobalVar.set_process_args(args);
        log4js_1.configure(loggerConfig);
        //如果不是debug模式则说明该进程只单独支持某一游戏
        let openMode = args.openMode || serverConfig.openMode;
        if (openMode != 'debug') {
            GlobalVar.addSupportGame(args.supportGameId || serverConfig.supportGameId);
        }
        this._dbMgr = new db_mgr_1.DBManager();
        this._dbMgr.init(mysqlConfig);
        this._redisClient = new redis_1.RedisClientSelf(redisConfig);
        this.initMsgHandle();
        this._roomMgr = new room_mgr_1.RoomMgr();
        this._server = new socket_server_1.SocketServer();
        this.server.startWsServer(args.port);
    }
    /**
     * 初始化protobuf协议映射
     */
    static initMsgHandle() {
        protobuf_encoder_1.ProtoBufEncoder.init();
        let handleObj = {};
        let handlePath = path.join(__dirname, './handle');
        let files = fs.readdirSync(handlePath);
        for (let i = 0; i < files.length; i++) {
            if (files[i].endsWith('.js')) {
                let temp = require(handlePath + '/' + files[i]);
                for (let key in temp) {
                    if (key.endsWith('Handle')) {
                        if (handleObj[key]) {
                            logger.error(`重复的handle文件:${key}`);
                            continue;
                        }
                        handleObj[key] = temp[key];
                    }
                }
            }
        }
        for (const protoKey in allProto) {
            let protoClass = allProto[protoKey];
            for (const key in protoClass) {
                if (key.startsWith('C_') || key.startsWith('S_')) {
                    let temp = protoClass[key];
                    if (temp.prototype.cmd == undefined || !temp.prototype.scmd == undefined) {
                        logger.error(`${protoKey}.${key}不存在cmd scmd, 注册失败!`);
                        continue;
                    }
                    protobuf_encoder_1.ProtoBufEncoder.setProtoClass(temp.prototype.cmd, temp.prototype.scmd, temp);
                    if (key.startsWith('S_')) {
                        continue;
                    }
                    let isFind = false;
                    for (const handleName in handleObj) {
                        let handle = handleObj[handleName];
                        if (handle[key]) {
                            protobuf_encoder_1.ProtoBufEncoder.setHandle(temp.prototype.cmd, temp.prototype.scmd, handle[key].bind(handle));
                            console.log(`注册函数 ${key}`);
                            isFind = true;
                            break;
                        }
                    }
                    if (!isFind && protobuf_encoder_1.ProtoBufEncoder.getHandleFunction(temp.prototype.cmd, temp.prototype.scmd) == undefined) {
                        logger.error(`${key} 未找到注册函数`);
                    }
                }
            }
        }
    }
}
exports.GlobalVar = GlobalVar;
//支持的游戏类型 用于在分布式部署过程中某一些节点只运行对应的逻辑。
GlobalVar.supportGameType_ = new Map();
