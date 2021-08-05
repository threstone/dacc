"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomMgr = void 0;
const log4js_1 = require("log4js");
const fs = require("fs");
const path = require("path");
const global_var_1 = require("./global_var");
const protobuf_encoder_1 = require("./protobuf_encoder");
let logger = log4js_1.getLogger();
class RoomMgr {
    constructor() {
        this._roomIndex = 1;
        this._roomMap = new Map();
        this.initGame();
    }
    /**
     * 初始化支持的游戏
     * 包括记录游戏room类、注册游戏handle
     */
    initGame() {
        this._roomClassMap = new Map();
        let basePath = path.join(__dirname, "./games");
        let files = fs.readdirSync(basePath);
        for (let i = 0; i < files.length; i++) {
            let foldName = files[i];
            if (foldName.startsWith("G")) {
                let gameId = parseInt(foldName.substr(1));
                //不支持该游戏的话就跳到下一个
                if (!global_var_1.GlobalVar.isSupportGame(gameId)) {
                    continue;
                }
                if (Number.isNaN(gameId) || this._roomClassMap.has(gameId)) {
                    logger.error(`${foldName} 注册游戏出现错误`);
                    continue;
                }
                //记录游戏room类
                let roomPath = path.join(basePath, `${foldName}/room_${gameId}`);
                let roomClass = require(roomPath);
                let room = roomClass[`Room${gameId}`];
                if (room) {
                    this._roomClassMap.set(gameId, room);
                    //注册游戏handle
                    let protoPath = path.join(basePath, `${foldName}/proto_${gameId}`);
                    let protoClass = require(protoPath);
                    let protoHandlePath = path.join(basePath, `${foldName}/game_handle_${gameId}`);
                    let protoHandleClass = require(protoHandlePath);
                    protobuf_encoder_1.ProtoBufEncoder.addProtoModule(protoClass[`GamePto${gameId}`], protoHandleClass[`GameHandle${gameId}`]);
                    console.log(`gameId:${gameId}注册成功`);
                }
                else {
                    logger.error('roomClass中获取导出的room失败!');
                    continue;
                }
            }
        }
    }
    createRoom(gameId) {
        let roomClass = this._roomClassMap.get(gameId);
        if (!roomClass) {
            logger.error(`请求创建未注册的游戏房间:${gameId}`);
            return;
        }
        let room = (new roomClass(gameId));
        room.roomId = this._roomIndex++;
        room.setRoomSeq(`${gameId}-${Date.now()}-${room.roomId}`);
        this._roomMap.set(room.roomId, room);
        return room;
    }
    getRoomByRoomId(roomId) {
        return this._roomMap.get(roomId);
    }
    /**
     * 如果gameid==0 则获取所有房间
     */
    getRoomsByGameId(gameId) {
        let arr = [];
        this._roomMap.forEach((v, k) => {
            if (gameId == 0 || v.gameId == gameId) {
                arr.push(v);
            }
        });
        return arr;
    }
    /**
    * 如果gameid==0 则获取所有房间
    */
    getRoomsByGameIdAndStartStatus(gameId, isStart) {
        let arr = [];
        this._roomMap.forEach((v, k) => {
            if ((gameId == 0 || v.gameId == gameId) && v.isStart == isStart) {
                arr.push(v);
            }
        });
        return arr;
    }
    destoryRoom(roomId) {
        this._roomMap.delete(roomId);
    }
}
exports.RoomMgr = RoomMgr;
