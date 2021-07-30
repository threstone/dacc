import { SocketServer } from "./socket_server"
import { configure } from "log4js"
import * as loggerConfig from "./config/log4js.json"
import { ProtoBufEncoder } from "./protobuf_encoder"
import { LoginPto } from "./common_proto"
import { LoginHandle } from "./handle/login_handle"
import { HallHandle } from "./handle/hall_handle"
import { HallPto } from "./common_proto"

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
        ProtoBufEncoder.addProtoModule(LoginPto, LoginHandle)
        ProtoBufEncoder.addProtoModule(HallPto, HallHandle)
    }
}