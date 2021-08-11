import { HallPto } from "../common_proto"
import { DaccSession } from "../dacc_session"
import { GlobalVar } from "../global_var"
import { ProtoBufEncoder } from "../protobuf_encoder"


export class HallHandle {
    private static _onlineListMsg = new HallPto.S_ONLINE_LIST()
    private static _onlineListBuf: Buffer

    static updateOnlineListMsg() {
        let sessionArr = GlobalVar.server.getAllSession()
        HallHandle._onlineListMsg.nikeArr = []
        for (let i = 0; i < sessionArr.length; i++) {
            let session = sessionArr[i]
            if (session && session.userModel && session.userModel.nick) {
                HallHandle._onlineListMsg.nikeArr.push(session.userModel.nick)
            }
        }
        HallHandle._onlineListBuf = ProtoBufEncoder.encode(HallHandle._onlineListMsg)
    }

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

    static C_ONLINE_LIST(user: DaccSession, msg: HallPto.C_ONLINE_LIST) {
        if (HallHandle._onlineListBuf) {
            user.sendBuf(HallHandle._onlineListBuf)
        }
    }

}

setInterval(HallHandle.updateOnlineListMsg, 3000)
