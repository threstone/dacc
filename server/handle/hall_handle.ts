import { HallPto } from "../common_proto"
import { DaccUser } from "../dacc_session"
import { GlobalVal } from "../global_val"

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

    static C_CREATE_ROOM(user: DaccUser, msg: HallPto.C_CREATE_ROOM) {
        let table = GlobalVal.tableMgr.createTable(msg.gameId)
        let resMsg = new HallPto.S_CREATE_ROOM()
        resMsg.isSuccess = !!table
        if (table) {
            resMsg.tableSeq = table.tableSeq
        }
        user.sendMsg(resMsg)
    }

    static C_JOIN_ROOM(user: DaccUser, msg: HallPto.C_JOIN_ROOM) {
        let table = GlobalVal.tableMgr.getTableByTableSeq(msg.tableSeq)
        let resMsg = new HallPto.S_JOIN_ROOM()
        resMsg.isSuccess = table.onUserJoinTable(user)
        //如果加入失败
        if (!resMsg.isSuccess) {
            user.sendMsg(resMsg)
            return
        }
        for (let index = 0; index < table.players.length; index++) {
            const temp = table.players[index];
            let player = new HallPto.Player()
            player.index = index
            player.isReady = temp.isReady
            player.headIndex = temp.getSession().headIndex
            resMsg.players.push(player)
        }
        resMsg.tableSeq = msg.tableSeq
        resMsg.gameId = table.gameId
        user.sendMsg(resMsg)
    }
}