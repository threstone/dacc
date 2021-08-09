import { getLogger } from "log4js"
import { GlobalVar } from "./global_var"
import { IGameMessage } from "./protobuf_encoder"
let logger = getLogger()
export class DaccPlayer {
    private _clientId: number
    /**
     * 在player中的索引
     */
    index: number
    isReady: boolean = false
    isWatcher: boolean = false

    constructor(clientId: number) {
        this._clientId = clientId
    }

    get clientId() {
        return this._clientId
    }

    resetClientId() {
        this._clientId = -1
    }

    sendMsg(msg: IGameMessage) {
        if (this._clientId == -1) {
            logger.error("sendMsg error DaccPlayer clientId = -1")
            return
        }
        GlobalVar.server.sendMsg(this._clientId, msg)
    }

    sendBuf(buf: Buffer) {
        if (this._clientId == -1) {
            logger.error("sendBuf error DaccPlayer clientId = -1")
            return
        }
        GlobalVar.server.sendBuf(this._clientId, buf)
    }


    /**
     * 获取DaccSession
     */
    getSession() {
        return GlobalVar.server.getDaccSession(this._clientId)
    }

    destroy() {
        let session = this.getSession()
        if (session) {
            session.room = null
            session.player = null
        }
        this._clientId = -1
        this.index = -1
        this.isReady = false
        this.isWatcher = false
    }
}