import { HallPto } from "../common_proto"
import { DaccRoom } from "../dacc_room"
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
        let room = GlobalVal.roomMgr.createRoom(msg.gameId)
        let resMsg = new HallPto.S_CREATE_ROOM()
        resMsg.isSuccess = (room != undefined)
        if (room) {
            resMsg.roomId = room.roomId
            room.describe = msg.describe
        }
        user.sendMsg(resMsg)
    }

    static C_JOIN_ROOM(user: DaccUser, msg: HallPto.C_JOIN_ROOM) {
        let room = GlobalVal.roomMgr.getRoomByRoomId(msg.roomId)
        let resMsg = new HallPto.S_JOIN_ROOM()
        resMsg.isSuccess = room.onUserJoinRoom(user)
        //如果加入失败
        if (!resMsg.isSuccess) {
            user.sendMsg(resMsg)
            return
        }
        for (let index = 0; index < room.players.length; index++) {
            if (!room.players[index]) {
                continue
            }
            const temp = room.players[index];
            let player = new HallPto.Player()
            player.index = index
            player.isReady = temp.isReady
            player.headIndex = temp.getSession().headIndex
            player.userName = temp.getSession().userName
            resMsg.players.push(player)
        }
        resMsg.roomId = msg.roomId
        resMsg.gameId = room.gameId
        user.sendMsg(resMsg)
    }

    static C_ROOM_LIST(user: DaccUser, msg: HallPto.C_ROOM_LIST) {
        let arr: DaccRoom[]
        if (msg.status == 0) {
            arr = GlobalVal.roomMgr.getRoomsByGameId(msg.gameId)
        } else {
            arr = GlobalVal.roomMgr.getRoomsByGameIdAndStartStatus(msg.gameId, msg.status == 1)
        }
        if (arr) {
            let resMsg = new HallPto.S_ROOM_LIST()
            for (let i = 0; i < arr.length; i++) {
                let temp = arr[i]
                let roomInfo = new HallPto.RoomInfo()
                roomInfo.gameId = temp.gameId
                roomInfo.roomId = temp.roomId
                roomInfo.describe = temp.describe
                roomInfo.isStart = temp.isStart
                roomInfo.maxPlayer = temp.getMaxPlayerNum()
                roomInfo.curPlayer = temp.players.length
                resMsg.list.push(roomInfo)
            }
            user.sendMsg(resMsg)
        }
    }
}