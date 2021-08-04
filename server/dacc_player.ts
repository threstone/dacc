import { getLogger } from "log4js"
import { GlobalVal } from "./global_val"
import { IGameMessage } from "./protobuf_encoder"
let logger = getLogger()
export class DaccPlayer {
    clientId: number
    isReady: boolean = false

    constructor(clientId: number) {
        this.clientId = clientId
    }

    sendMsg(msg: IGameMessage) {
        if (this.clientId == -1) {
            logger.error("error DaccPlayer clientId = -1")
            return
        }
        GlobalVal.server.sendMsg(this.clientId, msg)
    }

    sendBuf(buf: Buffer) {
        if (this.clientId == -1) {
            logger.error("error DaccPlayer clientId = -1")
            return
        }
        GlobalVal.server.sendBuf(this.clientId, buf)
    }


    /**
     * 获取DaccSession
     */
    getSession() {
        return GlobalVal.server.getDaccSession(this.clientId)
    }

    destroy() {
        this.clientId = -1
        this.isReady = false
    }
}