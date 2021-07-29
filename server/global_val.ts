import { SocketServer } from "./socket_server"
import { configure } from "log4js"
import * as loggerConfig from "./config/log4js.json"

export class GlobalVal {
    static init() {
        configure(loggerConfig)

        let server = new SocketServer()
        server.startWsServer()
    }
}