import { getLogger } from "log4js"
import { DaccPlayer } from "./dacc_player"
import { DaccRoom } from "./dacc_room"
import { GlobalVar } from "./global_var"
import { IGameMessage } from "./protobuf_encoder"
import { TBL_UserModel } from "./model/tbl_user_model"
const logger = getLogger()
export class DaccUser {
    clientId: number = -1
    isLogin = false

    userModel: TBL_UserModel

    room: DaccRoom
    player: DaccPlayer


    init(clientId: number) {
        this.clientId = clientId
    }

    doLogin(data: TBL_UserModel) {
        this.userModel = data
        this.isLogin = true
    }

    onClose() {
        if (this.room) {
            this.player.resetClientId()
            this.room.onUserSocketClose(this.player)
            this.player = null
            this.room = null
        }
    }

    reset() {
        this.clientId = -1
        this.isLogin = false
        this.userModel = null
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