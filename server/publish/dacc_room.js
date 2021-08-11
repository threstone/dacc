"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaccRoom = void 0;
const log4js_1 = require("log4js");
const dacc_player_1 = require("./dacc_player");
const global_var_1 = require("./global_var");
const protobuf_encoder_1 = require("./protobuf_encoder");
const common_proto_1 = require("./common_proto");
let logger = log4js_1.getLogger();
/**
 * 游戏结束必须调用doGameOver
 */
class DaccRoom {
    constructor(gameId) {
        this.gameId = gameId;
        this.roomId = -1;
        this.isStart = false;
        this.players = [];
        this.watchers = [];
        for (let i = 0; i < this.getMaxPlayerNum(); i++) {
            this.players.push(null);
        }
    }
    get roomSeq() {
        return this._roomSeq;
    }
    setRoomSeq(seq) {
        this._roomSeq = seq;
    }
    /**
     * 当玩家请求重连
     */
    onUserRequestReconnect(user) {
        //找到player
        for (let index = 0; index < this.players.length; index++) {
            const player = this.players[index];
            if (player && player.id == user.userModel.id) {
                player.reconnect(user.clientId);
                user.room = this;
                user.player = player;
                this.onGameSceneInit(player);
                return player;
            }
        }
    }
    /**
     * 当玩家请求离开房间
     */
    onUserRequestLeaveRoom(player) {
        if (this.isStart && player.isWatcher == false) {
            if (this.allowLeaveRoom()) {
                this.doleaveRoom(player);
            }
            else {
                let tips = new common_proto_1.SystemPto.S_TIPS();
                tips.msg = '当前不允许退出房间';
                tips.hoverTime = 7000;
                player.sendMsg(tips);
            }
        }
        else { //游戏未开始或者玩家是观战者就直接让他退出
            this.doleaveRoom(player);
        }
    }
    /**
     * 检查游戏是否可以开启
     */
    checkStartGame() {
        let readNum = 0;
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i] && this.players[i].isReady) {
                readNum++;
            }
        }
        if (readNum >= this.getMinStartPlayerNum()) {
            this.doGameStart();
        }
    }
    /**
     * 游戏开始时的执行函数
     */
    doGameStart() {
        this.isStart = true;
        this._redisMarkIds = [];
        //redis中插入玩家在游戏中的数据
        for (let index = 0; index < this.players.length; index++) {
            const player = this.players[index];
            if (player && player.id != -1) {
                this._redisMarkIds.push(player.id);
                global_var_1.GlobalVar.redis.setData(`userInRoom-${player.id}`, this.roomId, 1800);
                global_var_1.GlobalVar.redis.setData(`userInGame-${player.id}`, this.gameId, 1800);
            }
        }
        this.startGame();
    }
    /**
     * 执行游戏结束,房间中的人和数据依然保留允许新开局
     */
    doGameOver() {
        this.isStart = false;
        let length = this.players.length;
        for (let index = 0; index < length; index++) {
            const player = this.players[index];
            if (player) {
                player.isReady = false;
                //改玩家已经断线了
                if (player.clientId == -1) {
                    this.doleaveRoom(player);
                }
            }
        }
        //redis中删除玩家在游戏中的数据
        for (let index = 0; index < this._redisMarkIds.length; index++) {
            const uid = this._redisMarkIds[index];
            global_var_1.GlobalVar.redis.delete(`userInRoom-${uid}`);
            global_var_1.GlobalVar.redis.delete(`userInGame-${uid}`);
        }
    }
    /**
     *  当玩家断线
     */
    onUserSocketClose(player) {
        //如果桌子没开启那么这个人直接出去
        if (!this.isStart || player.isWatcher) {
            this.doleaveRoom(player);
        }
        else {
            player.disconnect();
            this.onUserDisConnect(player);
        }
    }
    /**
     * 执行玩家离开房间
     */
    doleaveRoom(player) {
        if (!player.isWatcher) {
            for (let i = 0; i < this.players.length; i++) {
                if (this.players[i] == player) {
                    let msg = new common_proto_1.RoomPto.S_BROADCAST_LEAVE_ROOM();
                    msg.index = i;
                    //玩家退出房间需要广播给所有玩家
                    this.broadcast(msg, true);
                    this.players[i].destroy();
                    this.players[i] = null;
                    break;
                }
            }
            //如果人都跑光了就解散房间
            if (this.getCurPlayerNum() == 0) {
                this.destoryRoom();
            }
        }
        else { //观战者退出告诉自己就可以了
            for (let index = 0; index < this.watchers.length; index++) {
                const watcher = this.watchers[index];
                if (watcher == player) {
                    let msg = new common_proto_1.RoomPto.S_BROADCAST_LEAVE_ROOM();
                    msg.index = player.index;
                    player.sendMsg(msg);
                    this.watchers[index].destroy();
                    this.watchers[index] = null;
                }
            }
        }
    }
    /**
     * 玩家加入房间
     */
    onUserJoinRoom(user, isWatch) {
        //非观战者进入房间
        if (!isWatch) {
            if (!this.allowJoin()) {
                return;
            }
            let player = this.createNewPlayer(user);
            let index = this.players.indexOf(null);
            this.players[index] = player;
            player.index = index;
            let msg = new common_proto_1.RoomPto.S_BROADCAST_JOIN_ROOM();
            msg.player = new common_proto_1.RoomPto.Player();
            msg.player.headIndex = user.userModel.headIndex;
            msg.player.index = index;
            msg.player.isReady = false;
            msg.player.nick = user.userModel.nick;
            this.broadcast(msg, true, player);
            if (this.onUserJoinSuccess(player)) {
                user.room = this;
                user.player = player;
                return player;
            }
        }
        else { //观战者进入房间
            return this.onWatcherJoinInRoom(user);
        }
        return;
    }
    /**
     * 观战者进入房间 如果游戏已经开了需要给观战者发送场景恢复协议
     */
    onWatcherJoinInRoom(user) {
        let player = this.createNewPlayer(user);
        player.isWatcher = true;
        user.room = this;
        user.player = player;
        this.watchers.push(player);
        player.index = this.watchers.length - 1;
        if (this.isStart) {
            this.onGameSceneInit(player);
        }
        return player;
    }
    /**
     * 玩家准备状态改变
     */
    onUserReadyStatusChange(player) {
        if (this.isStart) {
            //游戏已经开始不存在准备状态改变
            return;
        }
        player.isReady = !player.isReady;
        let msg = new common_proto_1.RoomPto.S_PLAYER_READY_STATUS_CHANGE();
        msg.index = player.index;
        msg.isReady = player.isReady;
        this.broadcast(msg, true);
        if (player.isReady) {
            this.checkStartGame();
        }
    }
    /**
     * 方便子游戏重写，有可能子游戏需要写属于自己的player去继承daccPlayer
     */
    createNewPlayer(user) {
        return new dacc_player_1.DaccPlayer(user.clientId);
    }
    /**
     * 广播消息
     * @param msg  消息
     * @param excludePlayer 需要排除的玩家
     */
    broadcast(msg, includeWatcher, excludePlayer) {
        let buf = protobuf_encoder_1.ProtoBufEncoder.encode(msg);
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i] && excludePlayer != this.players[i]) {
                this.players[i].sendBuf(buf);
            }
        }
        if (includeWatcher) {
            for (let index = 0; index < this.watchers.length; index++) {
                const watcher = this.watchers[index];
                if (watcher) {
                    watcher.sendMsg(msg);
                }
            }
        }
    }
    /**
     * 销毁房间
     */
    destoryRoom(reason) {
        if (reason) {
            logger.error("房间异常关闭:", reason, '\nroomSeq', this._roomSeq);
        }
        for (let index = 0; index < this.players.length; index++) {
            if (this.players[index]) {
                this.players[index].destroy();
            }
        }
        //通知观战者离开
        for (let index = 0; index < this.watchers.length; index++) {
            const watcher = this.watchers[index];
            if (watcher) {
                let msg = new common_proto_1.RoomPto.S_BROADCAST_LEAVE_ROOM();
                msg.index = watcher.index;
                watcher.sendMsg(msg);
                watcher.destroy();
            }
        }
        this.players = null;
        this.watchers = null;
        global_var_1.GlobalVar.roomMgr.destoryRoom(this.roomId);
    }
    /**
     * 获取当前房间中的玩家,只有在房间哪怕掉线了也算
     * 注:在非游戏中状态下，掉线会自动掉出游戏
     */
    getCurPlayerNum() {
        let num = 0;
        for (let index = 0; index < this.players.length; index++) {
            if (this.players[index]) {
                num++;
            }
        }
        return num;
    }
    /**
     * 是否允许加入游戏
     * 如果游戏开始了，或者当前玩家人数已经到达最大人数了则不能加入
     */
    allowJoin() {
        if (!this.isStart && this.getCurPlayerNum() < this.getMaxPlayerNum()) {
            return true;
        }
        return false;
    }
}
exports.DaccRoom = DaccRoom;
