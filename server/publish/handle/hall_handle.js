"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HallHandle = void 0;
const common_proto_1 = require("../common_proto");
const global_var_1 = require("../global_var");
const protobuf_encoder_1 = require("../protobuf_encoder");
class HallHandle {
    static updateOnlineListMsg() {
        let sessionArr = global_var_1.GlobalVar.server.getAllSession();
        HallHandle._onlineListMsg.nikeArr = [];
        for (let i = 0; i < sessionArr.length; i++) {
            let session = sessionArr[i];
            if (session && session.userModel && session.userModel.nick) {
                HallHandle._onlineListMsg.nikeArr.push(session.userModel.nick);
            }
        }
        HallHandle._onlineListBuf = protobuf_encoder_1.ProtoBufEncoder.encode(HallHandle._onlineListMsg);
    }
    static C_SEND_CHAT_MSG(user, msg) {
        let broadcastMsg = new common_proto_1.HallPto.S_CHAT_MSG();
        broadcastMsg.nick = user.userModel.nick;
        broadcastMsg.msg = msg.msg;
        user.broadcast(broadcastMsg);
    }
    static C_CHANGE_HEAD(user, msg) {
        user.userModel.headIndex = msg.headIndex;
        user.userModel.save();
    }
    static C_ONLINE_LIST(user, msg) {
        if (HallHandle._onlineListBuf) {
            user.sendBuf(HallHandle._onlineListBuf);
        }
    }
}
exports.HallHandle = HallHandle;
HallHandle._onlineListMsg = new common_proto_1.HallPto.S_ONLINE_LIST();
setInterval(HallHandle.updateOnlineListMsg, 3000);
