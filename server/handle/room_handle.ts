import { DaccSession } from "../dacc_session"
import { RoomPto } from "../common_proto"
import { GlobalVar } from "../global_var"
import { DaccRoom } from "../dacc_room"

export class RoomHandle {
    static C_CREATE_ROOM(user: DaccSession, msg: RoomPto.C_CREATE_ROOM) {
        let room = GlobalVar.roomMgr.createRoom(msg.gameId)
        let resMsg = new RoomPto.S_CREATE_ROOM()
        resMsg.isSuccess = (room != undefined)
        if (room) {
            resMsg.roomId = room.roomId
            room.describe = msg.describe
        }
        user.sendMsg(resMsg)
    }

    static C_JOIN_ROOM(user: DaccSession, msg: RoomPto.C_JOIN_ROOM) {
        let room = GlobalVar.roomMgr.getRoomByRoomId(msg.roomId)
        if (!room) {
            return
        }
        //如果游戏已经开了，走场景恢复逻辑
        if (room.isStart) {
            //重连
            if (msg.isWatch == false) {
                room.onUserRequestReconnect(user)
            } else {//游戏开始后的观战，需要恢复场景
                room.onWatcherJoinInRoom(user)
            }
            return
        }

        let resMsg = new RoomPto.S_JOIN_ROOM()
        let player = room.onUserJoinRoom(user, msg.isWatch)
        resMsg.isSuccess = player != undefined
        //如果加入失败
        if (!resMsg.isSuccess) {
            user.sendMsg(resMsg)
            return
        }
        resMsg.isWatcher = player.isWatcher
        resMsg.selfIndex = player.index
        resMsg.roomSeq = room.roomSeq
        for (let index = 0; index < room.players.length; index++) {
            if (!room.players[index]) {
                continue
            }
            const tempPlayer = room.players[index];
            let player = new RoomPto.Player()
            player.index = index
            player.isReady = tempPlayer.isReady
            player.headIndex = tempPlayer.headIndex
            player.nick = tempPlayer.nick
            resMsg.players.push(player)
        }
        resMsg.gameId = room.gameId
        user.sendMsg(resMsg)
    }

    static C_ROOM_LIST(user: DaccSession, msg: RoomPto.C_ROOM_LIST) {
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

    static C_READY(user: DaccSession, msg: RoomPto.C_READY) {
        if (user.room && user.player) {
            user.room.onUserReadyStatusChange(user.player)
        }
    }

    static C_LEAVE_ROOM(user: DaccSession, msg: RoomPto.C_READY) {
        if (user.room && user.player) {
            user.room.onUserRequestLeaveRoom(user.player)
        }
    }
}