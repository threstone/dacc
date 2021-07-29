import { getLogger } from "log4js"
import * as WS from "ws"
import { HallPto } from "./common_proto"
import { IGameMessage, ProtoBufEncoder } from "./protobuf_encoder"
import { HallHandle } from "./handle/hall_handle"
import { DaccSession } from "./session"
const logger = getLogger()
export class SocketServer {
    private _defaultListenPort = 9595
    private _emptySessionPool: DaccSession[]
    private _socketArr: DaccSession[]

    constructor() {
        this._emptySessionPool = []
        this._socketArr = []
        for (let i = 0; i < 1024; i++) {
            let session = new DaccSession()
            this._emptySessionPool.push(session)
        }
        ProtoBufEncoder.init()
        ProtoBufEncoder.addProtoModule(HallPto, HallHandle)
    }

    startWsServer(listenPort: number = this._defaultListenPort) {
        let wss = new WS.Server({ port: listenPort })
        logger.info("服务器启动，监听端口:", listenPort)
        wss.on("connection", (ws, req) => {
            logger.info("新的连接")
            let session = this.getEmptySession()
            let clientId = this.getEmptyClientId()
            session.init(ws, clientId)
            ws.on("message", (msg: Buffer) => {
                this.onMessage(session, msg)
            })

            ws.on("error", (err) => {
                console.error("client connection is error! ", err)
            })

            ws.on("close", () => {
                this.onClose(session)
                this.resetSession(session)
            })
        })
    }

    getEmptyClientId() {
        const temp = this._socketArr.indexOf(null)
        if (temp == -1) {
            return this._socketArr.length
        }
        return temp
    }

    getEmptySession() {
        if (this._emptySessionPool.length == 0) {
            for (let i = 0; i < 64; i++) {
                let session = new DaccSession()
                this._emptySessionPool.push(session)
            }
        }
        return this._emptySessionPool.pop()
    }

    resetSession(session: DaccSession) {
        this._socketArr[session.clientId] = null
        session.reset()
        this._emptySessionPool.push(session)
    }

    onMessage(session: DaccSession, buf: Buffer) {
        if (buf.length < 2) {
            logger.error(`消息长度不足,未知消息!   buf:${buf}`)
            return
        }
        let msg = ProtoBufEncoder.decode(buf, 0)
        let fun = ProtoBufEncoder.getHandleFunction(msg.cmd, msg.scmd)
        if (!fun) {
            logger.error(`未知的协议 cmd:${msg.cmd} scmd:${msg.scmd}`)
            return
        }
        try {
            fun(session, msg)
        } catch (error) {
            logger.error(`执行协议函数出错 cmd:${msg.cmd} scmd:${msg.scmd}`)
            logger.error(error)
        }
    }

    broadcast(msg: IGameMessage) {
        let buf = ProtoBufEncoder.encode(msg)
        for (let index = 0; index < this._socketArr.length; index++) {
            const element = this._socketArr[index]
            if (element) {
                element.sendBuf(buf)
            }

        }
    }

    onClose(session: DaccSession) {

    }

}