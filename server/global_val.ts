import { SocketServer } from "./socket_server"
import { configure, getLogger } from "log4js"
import * as loggerConfig from "./config/log4js.json"
import { ProtoBufEncoder } from "./protobuf_encoder"
import * as fs from "fs"
import * as path from "path"
import * as allProto from "./common_proto"
let logger = getLogger()
export class GlobalVal {

    private static _server: SocketServer
    static get server() {
        return this._server
    }
    static init() {
        configure(loggerConfig)

        this.initHandle()

        this._server = new SocketServer()
        this.server.startWsServer()
    }

    static initHandle() {
        ProtoBufEncoder.init()
        let handleObj = {}
        let handlePath = path.join(__dirname, './handle')
        let files = fs.readdirSync(handlePath)
        for (let i = 0; i < files.length; i++) {
            if (files[i].endsWith('.js')) {
                let temp = require(handlePath + '\\' + files[i])
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
                    for (const handleName in handleObj) {
                        let handle = handleObj[handleName]
                        if (handle[key]) {
                            ProtoBufEncoder.setHandle(temp.prototype.cmd, temp.prototype.scmd, handle[key].bind(handle[key]))
                            console.log(`注册函数 ${key}`);
                            break
                        }
                    }
                }
            }

        }
    }
}