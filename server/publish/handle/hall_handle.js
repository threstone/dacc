"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HallHandle = void 0;
const common_proto_1 = require("../common_proto");
class HallHandle {
    static C_SEND_CHAT_MSG(user, msg) {
        let broadcastMsg = new common_proto_1.HallPto.S_CHAT_MSG();
        broadcastMsg.userName = user.userName;
        broadcastMsg.msg = msg.msg;
        user.broadcast(broadcastMsg);
    }
}
exports.HallHandle = HallHandle;
