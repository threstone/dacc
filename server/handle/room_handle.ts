import { DaccUser } from "../dacc_session"
import { RoomPto } from "../common_proto"
import { GlobalVar } from "../global_var"
import { DaccRoom } from "../dacc_room"

export class RoomHandle {
    static C_CREATE_ROOM(user: DaccUser, msg: RoomPto.C_CREATE_ROOM) {
        let room = GlobalVar.roomMgr.createRoom(msg.gameId)
        let resMsg = new RoomPto.S_CREATE_ROOM()
        resMsg.isSuccess = (room != undefined)
        if (room) {
            resMsg.roomId = room.roomId
            room.describe = msg.describe
        }
        user.sendMsg(resMsg)
    }

    static C_JOIN_ROOM(user: DaccUser, msg: RoomPto.C_JOIN_ROOM) {
        let room = GlobalVar.roomMgr.getRoomByRoomId(msg.roomId)
        if (!room) {
            return
        }
        let resMsg = new RoomPto.S_JOIN_ROOM()
        let player = room.onUserJoinRoom(user, msg.isWatch)
        resMsg.isSuccess = player != undefined
        resMsg.isWatcher = player.isWatcher
        //如果加入失败
        if (!resMsg.isSuccess) {
            user.sendMsg(resMsg)
            return
        }
        resMsg.selfIndex = player.index
        resMsg.roomSeq = room.roomSeq
        for (let index = 0; index < room.players.length; index++) {
            if (!room.players[index]) {
                continue
            }
            const temp = room.players[index];
            let player = new RoomPto.Player()
            player.index = index
            player.isReady = temp.isReady
            player.headIndex = temp.getSession().headIndex
            player.nick = temp.getSession().nick
            resMsg.players.push(player)
        }
        resMsg.roomId = msg.roomId
        resMsg.gameId = room.gameId
        user.sendMsg(resMsg)
    }

    static C_ROOM_LIST(user: DaccUser, msg: RoomPto.C_ROOM_LIST) {
        let arr: DaccRoom[]
        if (msg.status == 0) {
            arr = GlobalVar.roomMgr.getRoomsByGameId(msg.gameId)
        } else {
            arr = GlobalVar.roomMgr.getRoomsByGameIdAndStartStatus(msg.gameId, msg.status == 1)
        }
        if (arr) {
            let resMsg = new RoomPto.S_ROOM_LIST()
            for (let i = 0; i < arr.length; i++) {
                let temp = arr[i]
                let roomInfo = new RoomPto.RoomInfo()
                roomInfo.gameId = temp.gameId
                roomInfo.roomId = temp.roomId
                roomInfo.describe = temp.describe
                roomInfo.isStart = temp.isStart
                roomInfo.maxPlayer = temp.getMaxPlayerNum()
                roomInfo.curPlayer = temp.getCurPlayerNum()
                resMsg.list.push(roomInfo)
            }
            user.sendMsg(resMsg)
        }
    }

    static C_READY(user: DaccUser, msg: RoomPto.C_READY) {
        if (user.room && user.player) {
            user.room.onUserReadyStatusChange(user.player)
        }
    }

    static C_LEAVE_ROOM(user: DaccUser, msg: RoomPto.C_READY) {
        if (user.room && user.player) {
            user.room.onUserRequestLeaveRoom(user.player)
        }
    }
}