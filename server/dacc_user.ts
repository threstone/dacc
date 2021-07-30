import { getLogger } from "log4js"
import { GlobalVal } from "./global_val"
import { IGameMessage, ProtoBufEncoder } from "./protobuf_encoder"
const logger = getLogger()
export class DaccUser {
    clientId: number = -1

    userName: string = ""
    init(clientId: number) {
        this.clientId = clientId
    }

    reset() {
        this.clientId = -1
        this.userName = ""
    }

    sendMsg(msg: IGameMessage) {
        if (this.clientId == -1) {
            logger.error("error DaccUser clientId = -1")
            return
        }
        GlobalVal.server.sendMsg(this.clientId, msg)
    }

    sendBuf(buf: Buffer) {
        if (this.clientId == -1) {
            logger.error("error DaccUser clientId = -1")
            return
        }
        GlobalVal.server.sendBuf(this.clientId, buf)
    }

    broadcast(msg: IGameMessage) {
        GlobalVal.server.broadcast(msg)
    }
}