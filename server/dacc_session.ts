import { getLogger } from "log4js"
import { LoginPto } from "./common_proto"
import { DaccPlayer } from "./dacc_player"
import { DaccTable } from "./dacc_table"
import { GlobalVal } from "./global_val"
import { IGameMessage } from "./protobuf_encoder"
const logger = getLogger()
export class DaccUser {
    clientId: number = -1
    isLogin = false
    userName: string = ""
    headIndex: number = -1

    table: DaccTable
    player: DaccPlayer

    init(clientId: number) {
        this.clientId = clientId
    }

    doLogin(data: LoginPto.C_LOGIN) {
        this.userName = data.userName
        this.isLogin = true
    }

    reset() {
        this.clientId = -1
        this.isLogin = false
        this.userName = ""
        this.headIndex = -1
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