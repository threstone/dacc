"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room1001 = void 0;
const dacc_room_1 = require("../../dacc_room");
const proto_1001_1 = require("./proto_1001");
const common_proto_1 = require("../../common_proto");
var SWORD_TYPE;
(function (SWORD_TYPE) {
    SWORD_TYPE[SWORD_TYPE["shitou"] = 0] = "shitou";
    SWORD_TYPE[SWORD_TYPE["jiandao"] = 1] = "jiandao";
    SWORD_TYPE[SWORD_TYPE["bu"] = 2] = "bu";
})(SWORD_TYPE || (SWORD_TYPE = {}));
class Room1001 extends dacc_room_1.DaccRoom {
    constructor() {
        super(...arguments);
        this.leftWinTimes = 0;
        this.gameTimes = 0;
    }
    startGame() {
        this.playerSword = [-1, -1];
        //派发游戏开始协议
        let msg = new proto_1001_1.GamePto1001.S_GAME_START_1001();
        this.broadcast(msg, true);
        let startOutMsg = new proto_1001_1.GamePto1001.S_START_OUT_SWORD_1001();
        startOutMsg.isStartGame = true;
        this.broadcast(startOutMsg, false);
    }
    getMinStartPlayerNum() {
        return 2;
    }
    allowLeaveRoom() {
        return false;
    }
    getMaxPlayerNum() {
        return 2;
    }
    onGameSceneInit(player) {
        let msg = new proto_1001_1.GamePto1001.S_SCENE_INIT_1001();
        msg.leftWinTimes = this.leftWinTimes;
        msg.gameTimes = this.gameTimes;
        msg.gameId = this.gameId;
        msg.roomSeq = this.roomSeq;
        msg.selfIndex = player.isWatcher ? -1 : player.index;
        for (let index = 0; index < this.players.length; index++) {
            const tempPlayer = this.players[index];
            if (tempPlayer) {
                let playerInfo = new proto_1001_1.GamePto1001.Player_1001();
                playerInfo.index = index;
                playerInfo.headIndex = tempPlayer.headIndex;
                playerInfo.nick = tempPlayer.nick;
                playerInfo.isOutSword = this.playerSword[index] != -1;
                if (!player.isWatcher && player.index == index) {
                    playerInfo.outSword = this.playerSword[index];
                }
                msg.players.push(playerInfo);
            }
        }
        player.sendMsg(msg);
    }
    onUserDisConnect(player) {
        let curNum = this.getCurPlayerNum();
        let disConnectNum = 0;
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i] && this.players[i].clientId == -1) {
                disConnectNum++;
            }
        }
        //全掉了
        if (curNum == disConnectNum) {
            this.doGameOver();
        }
    }
    onUserJoinSuccess(player) {
        this.leftWinTimes = 0;
        this.gameTimes = 0;
        return true;
    }
    onUserSword(player, sword) {
        if (this.playerSword[player.index] != -1) {
            let msg = new common_proto_1.SystemPto.S_TIPS();
            msg.hoverTime = 3000;
            msg.msg = '已经出过了';
            player.sendMsg(msg);
            return;
        }
        let msg = new proto_1001_1.GamePto1001.S_BROADCAST_SWORD_1001();
        msg.index = player.index;
        msg.sword = -1;
        //通知其他玩家此玩家出牌了
        this.broadcast(msg, true, player);
        //通知自己出了什么
        msg.sword = sword;
        player.sendMsg(msg);
        this.playerSword[player.index] = sword;
        for (let i = 0; i < this.playerSword.length; i++) {
            if (this.playerSword[i] == -1) {
                return;
            }
        }
        //能走到这里说明所有人都出拳了
        this.onAllUserSword();
    }
    onAllUserSword() {
        //计算结果并且广播
        let resMsg = new proto_1001_1.GamePto1001.S_GAME_RESULT_1001();
        resMsg.swords.push(this.playerSword[0], this.playerSword[1]);
        if (this.playerSword[0] == this.playerSword[1]) {
            resMsg.winIndex = -1;
            this.broadcast(resMsg, true);
            //重新开始出拳
            this.playerSword = [-1, -1];
            let startOutMsg = new proto_1001_1.GamePto1001.S_START_OUT_SWORD_1001();
            startOutMsg.isStartGame = false;
            this.broadcast(startOutMsg, false);
        }
        else {
            let isZeroWin = false;
            switch (this.playerSword[0]) {
                case SWORD_TYPE.bu:
                    if (this.playerSword[1] == SWORD_TYPE.shitou) {
                        isZeroWin = true;
                    }
                    break;
                case SWORD_TYPE.shitou:
                    if (this.playerSword[1] == SWORD_TYPE.jiandao) {
                        isZeroWin = true;
                    }
                    break;
                case SWORD_TYPE.jiandao:
                    if (this.playerSword[1] == SWORD_TYPE.bu) {
                        isZeroWin = true;
                    }
                    break;
            }
            resMsg.winIndex = isZeroWin ? 0 : 1;
            //记录游戏结果
            this.leftWinTimes += (isZeroWin ? 1 : 0);
            this.gameTimes++;
            resMsg.leftWinTimes = this.leftWinTimes;
            resMsg.gameTimes = this.gameTimes;
            this.broadcast(resMsg, true);
            this.doGameOver();
        }
    }
}
exports.Room1001 = Room1001;
