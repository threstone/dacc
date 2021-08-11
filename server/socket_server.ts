import { getLogger } from "log4js"
import * as WS from "ws"
import { IGameMessage, ProtoBufEncoder } from "./protobuf_encoder"
import { DaccSession as DaccSession } from "./dacc_session"
import { LoginPto } from "./common_proto"
import { GlobalVar } from "./global_var"
const logger = getLogger()
export class SocketServer {
    private _defaultListenPort = 9595
    private _emptySessionPool: DaccSession[]
    private _socketArr: WS[]
    private _sessionArr: DaccSession[]

    constructor() {
        this._emptySessionPool = []
        this._socketArr = []
        this._sessionArr = []
        for (let i = 0; i < 1024; i++) {
            let session = new DaccSession()
            this._emptySessionPool.push(session)
            this._socketArr.push(null)
            this._sessionArr.push(null)
        }
    }

    startWsServer(listenPort: number = this._defaultListenPort) {
        let wss = new WS.Server({ port: listenPort })
        logger.info("服务器启动，监听端口:", listenPort)
        wss.on("connection", (ws, req) => {
            let session = this.getEmptySession()
            let clientId = this.getEmptyClientId()
            session.init(clientId)
            this._socketArr[clientId] = ws
            this._sessionArr[clientId] = session
            ws.on("message", (msg: Buffer) => {
                this.onMessage(session, msg)
            })

            ws.on("error", (err) => {
                console.error("client connection is error! ", err)
            })

            ws.on("close", () => {
                this.onClose(session)
            })
        })
    }

    private getEmptyClientId() {
        const temp = this._socketArr.indexOf(null)
        if (temp == -1) {
            this._socketArr.push(null)
            this._sessionArr.push(null)
            return this._socketArr.length - 1
        }
        return temp
    }

    private getEmptySession() {
        if (this._emptySessionPool.length == 0) {
            for (let i = 0; i < 64; i++) {
                let session = new DaccSession()
                this._emptySessionPool.push(session)
            }
        }
        return this._emptySessionPool.pop()
    }

    private onMessage(session: DaccSession, buf: Buffer) {
        if (buf.length < 8) {
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
            //未登录状态
            if (session.isLogin == false) {
                if (!(msg.cmd == LoginPto.C_LOGIN.prototype.cmd && (msg.scmd == LoginPto.C_LOGIN.prototype.scmd || msg.scmd == LoginPto.C_REGISTER.prototype.scmd))) {
                    logger.error('未登录状态下禁止请求除登录以外的协议。')
                    return
                }
            }
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

    async onClose(session: DaccSession) {
        if (session.userModel) {
            let clientId = await GlobalVar.redis.getData(`userClientId-${session.userModel.id}`)
            if (parseInt(clientId) == session.clientId) {
                GlobalVar.redis.delete(`userClientId-${session.userModel.id}`)
            }
        }
        session.onClose()
        this._socketArr[session.clientId] = null
        this._sessionArr[session.clientId] = null
        session.reset()
        this._emptySessionPool.push(session)
    }

    getDaccSession(clientId: number) {
        return this._sessionArr[clientId]
    }

    closeWs(clientId: number) {
        if (this._socketArr[clientId]) {
            this._socketArr[clientId].close()
        }
    }

    getAllSession() {
        return this._sessionArr
    }
}