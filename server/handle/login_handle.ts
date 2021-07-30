import { LoginPto } from "../common_proto"
import { DaccUser } from "../dacc_user"

export class LoginHandle {
    static C_LOGIN(user: DaccUser, msg: LoginPto.C_LOGIN) {
        console.log(msg.userName, "请求登录")
        let replyMsg = new LoginPto.S_LOGIN()
        replyMsg.isSuccess = true
        replyMsg.userName = msg.userName
        user.userName = msg.userName
        user.sendMsg(replyMsg)
    }
}