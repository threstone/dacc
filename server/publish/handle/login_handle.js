"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginHandle = void 0;
const common_proto_1 = require("../common_proto");
const common_proto_2 = require("../common_proto");
class LoginHandle {
    static C_LOGIN(user, msg) {
        let replyMsg = new common_proto_2.LoginPto.S_LOGIN();
        replyMsg.isSuccess = true;
        replyMsg.userName = msg.userName;
        user.doLogin(msg);
        user.sendMsg(replyMsg);
        //下发游戏列表
        let gameList = new common_proto_1.HallPto.S_GAME_LIST();
        let gameInfo = new common_proto_1.HallPto.GameInfo();
        gameInfo.gameId = 1001;
        gameInfo.gameName = '石头剪刀布';
        gameList.list.push(gameInfo);
        user.sendMsg(gameList);
    }
}
exports.LoginHandle = LoginHandle;
