import { HallPto } from "../common_proto"
import { DaccSession } from "../session"

export class HallHandle {
    static C_LOGIN(session: DaccSession, msg: HallPto.C_LOGIN) {
        console.log(msg.userName, "请求登录")
        let replyMsg = new HallPto.S_LOGIN()
        replyMsg.isSuccess = true
        session.sendMsg(replyMsg)
    }
}