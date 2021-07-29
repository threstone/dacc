import { SocketServer } from "./socket_server"
import { configure } from "log4js"
import * as loggerConfig from "./config/log4js.json"
import { ProtoBufEncoder } from "./protobuf_encoder"
import { HallPto } from "./common_proto"

export class GlobalVal {
    static init() {
        configure(loggerConfig)

        ProtoBufEncoder.init()
        ProtoBufEncoder.addProtoModule(HallPto, {})
        let server = new SocketServer()
        server.startWsServer()
    }
}