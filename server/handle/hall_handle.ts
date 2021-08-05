import { HallPto } from "../common_proto"
import { DaccRoom } from "../dacc_room"
import { DaccUser } from "../dacc_session"
import { GlobalVar } from "../global_var"

export class HallHandle {
    static C_SEND_CHAT_MSG(user: DaccUser, msg: HallPto.C_SEND_CHAT_MSG) {
        let broadcastMsg = new HallPto.S_CHAT_MSG()
        broadcastMsg.userName = user.userName
        broadcastMsg.msg = msg.msg
        user.broadcast(broadcastMsg)
    }

    static C_CHANGE_HEAD(user: DaccUser, msg: HallPto.C_CHANGE_HEAD) {
        user.headIndex = msg.headIndex
    }

    
}