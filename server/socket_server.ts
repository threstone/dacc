import { getLogger } from "log4js"
import * as WS from "ws"
import { HallPto } from "./common_proto"
import { ProtoBufEncoder } from "./protobuf_encoder"
import { HallHandle } from "./handle/hall_handle"
const logger = getLogger()
export class SocketServer {
    private _defaultListenPort = 9595
    private _socketArr = []

    constructor() {
        ProtoBufEncoder.init()
        ProtoBufEncoder.addProtoModule(HallPto, HallHandle)
    }

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

    onMessage(clientId: number, buf: Buffer, ws) {
        if (buf.length < 2) {
            logger.error(`消息长度不足,未知消息! clientId:${clientId}  buf:${buf}`)
            return
        }
        let msg = ProtoBufEncoder.decode(buf, 0)
        let fun = ProtoBufEncoder.getHandleFunction(msg.cmd, msg.scmd)
        if (!fun) {
            logger.error(`未知的协议 cmd:${msg.cmd} scmd:${msg.scmd}`)
            return
        }
        try {
            fun(clientId, msg)
        } catch (error) {
            logger.error(`执行协议函数出错 cmd:${msg.cmd} scmd:${msg.scmd}`)
            logger.error(error)
        }
    }

    onClose(clientId: number) {

    }

}