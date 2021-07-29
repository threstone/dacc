import { getLogger } from "log4js"
import * as WS from "ws"
const logger = getLogger()
export class SocketServer {
    private _defaultListenPort = 9595
    private _socketArr = []

    getEmptyClientId() {
        const temp = this._socketArr.indexOf(null)
        if (temp == -1) {
            return this._socketArr.length
        }
        return temp
    }

    startWsServer(listenPort: number = this._defaultListenPort) {
        let wss = new WS.Server({ port: listenPort })
        logger.info("服务器启动，监听端口:", listenPort)
        wss.on("connection", (ws, req) => {
            logger.info("新的连接")
            ws.index = this.getEmptyClientId()
            this._socketArr[ws.index] = ws
            ws.on("message", (msg: Buffer) => {
                this.onMessage(ws.index, msg, ws)
            })

            ws.on("error", (err) => {
                console.error("client connection is error! ", err)
            })

            ws.on("close", () => {
                this._socketArr[ws.index] = null
                this.onClose(ws.index)
            })
        })
    }

    onMessage(clientId: number, msg: Buffer, ws) {

    }

    onClose(clientId: number) {

    }

}