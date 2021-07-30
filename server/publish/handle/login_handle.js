"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginHandle = void 0;
const common_proto_1 = require("../common_proto");
class LoginHandle {
    static C_LOGIN(user, msg) {
        console.log(msg.userName, "请求登录");
        let replyMsg = new common_proto_1.LoginPto.S_LOGIN();
        replyMsg.isSuccess = true;
        replyMsg.userName = msg.userName;
        user.userName = msg.userName;
        user.sendMsg(replyMsg);
    }
}
exports.LoginHandle = LoginHandle;
