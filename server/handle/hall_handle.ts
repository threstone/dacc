import { HallPto } from "../common_proto"
import { DaccRoom } from "../dacc_room"
import { DaccSession } from "../dacc_session"
import { GlobalVar } from "../global_var"

export class HallHandle {
    static C_SEND_CHAT_MSG(user: DaccSession, msg: HallPto.C_SEND_CHAT_MSG) {
        let broadcastMsg = new HallPto.S_CHAT_MSG()
        broadcastMsg.nick = user.userModel.nick
        broadcastMsg.msg = msg.msg
        user.broadcast(broadcastMsg)
    }

    static C_CHANGE_HEAD(user: DaccSession, msg: HallPto.C_CHANGE_HEAD) {
        user.userModel.headIndex = msg.headIndex
        user.userModel.save()
    }


}