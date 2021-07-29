import { SocketServer } from "./socket_server"
import { configure } from "log4js"
import * as loggerConfig from "./config/log4js.json"

export class GlobalVal {

    private static _server: SocketServer
    static get server() {
        return this._server
    }
    static init() {
        configure(loggerConfig)

        this._server = new SocketServer()
        this.server.startWsServer()
    }
}