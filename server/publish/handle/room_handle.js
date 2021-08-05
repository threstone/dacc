"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomHandle = void 0;
const common_proto_1 = require("../common_proto");
const global_var_1 = require("../global_var");
class RoomHandle {
    static C_CREATE_ROOM(user, msg) {
        let room = global_var_1.GlobalVar.roomMgr.createRoom(msg.gameId);
        let resMsg = new common_proto_1.RoomPto.S_CREATE_ROOM();
        resMsg.isSuccess = (room != undefined);
        if (room) {
            resMsg.roomId = room.roomId;
            room.describe = msg.describe;
        }
        user.sendMsg(resMsg);
    }
    static C_JOIN_ROOM(user, msg) {
        let room = global_var_1.GlobalVar.roomMgr.getRoomByRoomId(msg.roomId);
        if (!room) {
            return;
        }
        let resMsg = new common_proto_1.RoomPto.S_JOIN_ROOM();
        let player = room.onUserJoinRoom(user);
        resMsg.isSuccess = player != undefined;
        //如果加入失败
        if (!resMsg.isSuccess) {
            user.sendMsg(resMsg);
            return;
        }
        resMsg.selfIndex = player.index;
        resMsg.roomSeq = room.roomSeq;
        for (let index = 0; index < room.players.length; index++) {
            if (!room.players[index]) {
                continue;
            }
            const temp = room.players[index];
            let player = new common_proto_1.RoomPto.Player();
            player.index = index;
            player.isReady = temp.isReady;
            player.headIndex = temp.getSession().headIndex;
            player.userName = temp.getSession().userName;
            resMsg.players.push(player);
        }
        resMsg.roomId = msg.roomId;
        resMsg.gameId = room.gameId;
        user.sendMsg(resMsg);
    }
    static C_ROOM_LIST(user, msg) {
        let arr;
        if (msg.status == 0) {
            arr = global_var_1.GlobalVar.roomMgr.getRoomsByGameId(msg.gameId);
        }
        else {
            arr = global_var_1.GlobalVar.roomMgr.getRoomsByGameIdAndStartStatus(msg.gameId, msg.status == 1);
        }
        if (arr) {
            let resMsg = new common_proto_1.RoomPto.S_ROOM_LIST();
            for (let i = 0; i < arr.length; i++) {
                let temp = arr[i];
                let roomInfo = new common_proto_1.RoomPto.RoomInfo();
                roomInfo.gameId = temp.gameId;
                roomInfo.roomId = temp.roomId;
                roomInfo.describe = temp.describe;
                roomInfo.isStart = temp.isStart;
                roomInfo.maxPlayer = temp.getMaxPlayerNum();
                roomInfo.curPlayer = temp.getCurPlayerNum();
                resMsg.list.push(roomInfo);
            }
            user.sendMsg(resMsg);
        }
    }
    static C_READY(user, msg) {
        if (user.room && user.player) {
            user.room.onUserReadyStatusChange(user.player);
        }
    }
    static C_LEAVE_ROOM(user, msg) {
        if (user.room && user.player) {
            user.room.onUserRequestLeaveRoom(user.player);
        }
    }
}
exports.RoomHandle = RoomHandle;
