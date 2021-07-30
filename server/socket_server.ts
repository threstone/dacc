import { getLogger } from "log4js"
import * as WS from "ws"
import { IGameMessage, ProtoBufEncoder } from "./protobuf_encoder"
import { DaccUser } from "./dacc_user"
const logger = getLogger()
export class SocketServer {
    private _defaultListenPort = 9595
    private _emptySessionPool: DaccUser[]
    private _socketArr: any[]

    constructor() {
        this._emptySessionPool = []
        this._socketArr = []
        for (let i = 0; i < 1024; i++) {
            let session = new DaccUser()
            this._emptySessionPool.push(session)
            this._socketArr.push(null)
        }
    }

    startWsServer(listenPort: number = this._defaultListenPort) {
        let wss = new WS.Server({ port: listenPort })
        logger.info("服务器启动，监听端口:", listenPort)
        wss.on("connection", (ws, req) => {
            logger.info("新的连接")
            let session = this.getEmptySession()
            let clientId = this.getEmptyClientId()
            session.init(clientId)
            this._socketArr[clientId] = ws
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
            this._socketArr.push(null)
            return this._socketArr.length - 1
        }
        return temp
    }

    getEmptySession() {
        if (this._emptySessionPool.length == 0) {
            for (let i = 0; i < 64; i++) {
                let session = new DaccUser()
                this._emptySessionPool.push(session)
            }
        }
        return this._emptySessionPool.pop()
    }

    resetSession(session: DaccUser) {
        this._socketArr[session.clientId] = null
        session.reset()
        this._emptySessionPool.push(session)
    }

    onMessage(session: DaccUser, buf: Buffer) {
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
            const ws = this._socketArr[index]
            if (ws) {
                ws.send(buf)
            }

        }
    }

    sendMsg(clientId: number, msg: IGameMessage) {
        if (!this._socketArr[clientId]) {
            logger.error("error socket 不存在")
            return
        }
        this._socketArr[clientId].send(ProtoBufEncoder.encode(msg))
    }

    sendBuf(clientId: number, buf: Buffer) {
        if (!this._socketArr[clientId]) {
            logger.error("error socket 不存在")
            return
        }
        this._socketArr[clientId].send(buf)
    }

    onClose(session: DaccUser) {

    }

}