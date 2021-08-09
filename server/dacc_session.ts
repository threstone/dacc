import { getLogger } from "log4js"
import { LoginPto } from "./common_proto"
import { DaccPlayer } from "./dacc_player"
import { DaccRoom } from "./dacc_room"
import { GlobalVar } from "./global_var"
import { IGameMessage } from "./protobuf_encoder"
const logger = getLogger()
export class DaccUser {
    clientId: number = -1
    isLogin = false
    userName: string = ""
    headIndex: number = -1

    room: DaccRoom
    player: DaccPlayer

    init(clientId: number) {
        this.clientId = clientId
    }

    doLogin(data: LoginPto.C_LOGIN) {
        this.userName = data.userName
        this.isLogin = true
    }

    onClose() {
        if (this.room) {
            this.player._clientId = -1
            this.room.onUserSocketClose(this.player)
            this.player = null
            this.room = null
        }
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
        GlobalVar.server.sendMsg(this.clientId, msg)
    }

    sendBuf(buf: Buffer) {
        if (this.clientId == -1) {
            logger.error("error DaccUser clientId = -1")
            return
        }
        GlobalVar.server.sendBuf(this.clientId, buf)
    }

    broadcast(msg: IGameMessage) {
        GlobalVar.server.broadcast(msg)
    }
}