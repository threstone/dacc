"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginHandle = void 0;
const common_proto_1 = require("../common_proto");
const common_proto_2 = require("../common_proto");
const global_var_1 = require("../global_var");
class LoginHandle {
    static async C_LOGIN(user, msg) {
        let replyMsg = new common_proto_2.LoginPto.S_LOGIN();
        let info = await global_var_1.GlobalVar.dbMgr.userDao.getUserInfo(msg.account, msg.password);
        if (!info) {
            replyMsg.isSuccess = false;
            user.sendMsg(replyMsg);
            return;
        }
        //说明有在线的，把在线的踢掉
        let clientId = parseInt(await global_var_1.GlobalVar.redis.getData(`userClientId-${info.id}`));
        if (!Number.isNaN(clientId)) {
            //提醒并且把原来的踢掉
            let tips = new common_proto_1.SystemPto.S_TIPS();
            tips.msg = '您的账号在别处登录了!';
            tips.hoverTime = 20000;
            // let session = GlobalVar.server.getDaccSession()
            global_var_1.GlobalVar.server.sendMsg(clientId, tips);
            global_var_1.GlobalVar.server.closeWs(clientId);
        }
        let isInRoom = parseInt(await global_var_1.GlobalVar.redis.getData(`userInRoom-${info.id}`));
        let isInGame = parseInt(await global_var_1.GlobalVar.redis.getData(`userInGame-${info.id}`));
        replyMsg.roomId = isInRoom ? isInRoom : -1;
        replyMsg.gameId = isInGame;
        replyMsg.isSuccess = true;
        replyMsg.nick = info.nick;
        replyMsg.headIndex = info.headIndex;
        user.doLogin(info);
        user.sendMsg(replyMsg);
        //记录uid=>clientId
        global_var_1.GlobalVar.redis.setData(`userClientId-${info.id}`, user.clientId, -1);
        //下发游戏列表
        let gameList = new common_proto_1.HallPto.S_GAME_LIST();
        let gameInfo = new common_proto_1.HallPto.GameInfo();
        gameInfo.gameId = 1001;
        gameInfo.gameName = '石头剪刀布';
        gameList.list.push(gameInfo);
        user.sendMsg(gameList);
    }
    static async C_REGISTER(user, msg) {
        let isExist = await global_var_1.GlobalVar.dbMgr.userDao.isExist(msg.account);
        let res = new common_proto_2.LoginPto.S_REGISTER();
        if (isExist) {
            res.code = 1;
            user.sendMsg(res);
            return;
        }
        let createRes = global_var_1.GlobalVar.dbMgr.userDao.createUser(msg.account, msg.password, msg.nick);
        if (createRes) {
            res.code = 0;
            user.sendMsg(res);
            return;
        }
        res.code = 2;
        user.sendMsg(res);
    }
}
exports.LoginHandle = LoginHandle;
