import { HallPto } from "../common_proto"
import { DaccUser } from "../dacc_user"

export class HallHandle {
    static C_SEND_CHAT_MSG(user: DaccUser, msg: HallPto.C_SEND_CHAT_MSG) {
        let broadcastMsg = new HallPto.S_CHAT_MSG()
        broadcastMsg.userName = user.userName
        broadcastMsg.msg = msg.msg
        user.broadcast(broadcastMsg)
    }
}