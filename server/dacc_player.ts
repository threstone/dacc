import { getLogger } from "log4js"
import { GlobalVar } from "./global_var"
import { IGameMessage } from "./protobuf_encoder"
let logger = getLogger()
export class DaccPlayer {
    clientId: number
    /**
     * 在player中的索引
     */
    index: number
    isReady: boolean = false
    isWatcher: boolean = false

    constructor(clientId: number) {
        this.clientId = clientId
    }

    sendMsg(msg: IGameMessage) {
        if (this.clientId == -1) {
            logger.error("error DaccPlayer clientId = -1")
            return
        }
        GlobalVar.server.sendMsg(this.clientId, msg)
    }

    sendBuf(buf: Buffer) {
        if (this.clientId == -1) {
            logger.error("error DaccPlayer clientId = -1")
            return
        }
        GlobalVar.server.sendBuf(this.clientId, buf)
    }


    /**
     * 获取DaccSession
     */
    getSession() {
        return GlobalVar.server.getDaccSession(this.clientId)
    }

    destroy() {
        let session = this.getSession()
        if (session) {
            session.room = null
            session.player = null
        }
        this.clientId = -1
        this.index = -1
        this.isReady = false
        this.isWatcher = false
    }
}