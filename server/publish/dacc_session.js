"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaccSession = void 0;
const log4js_1 = require("log4js");
const global_var_1 = require("./global_var");
const logger = log4js_1.getLogger();
class DaccSession {
    constructor() {
        this.clientId = -1;
        this.isLogin = false;
    }
    init(clientId) {
        this.clientId = clientId;
    }
    doLogin(data) {
        this.userModel = data;
        this.isLogin = true;
    }
    onClose() {
        if (this.room) {
            this.player.disconnect();
            this.room.onUserSocketClose(this.player);
            this.player = null;
            this.room = null;
        }
    }
    reset() {
        this.clientId = -1;
        this.isLogin = false;
        this.userModel = null;
    }
    sendMsg(msg) {
        if (this.clientId == -1) {
            logger.error("error DaccUser clientId = -1");
            return;
        }
        global_var_1.GlobalVar.server.sendMsg(this.clientId, msg);
    }
    sendBuf(buf) {
        if (this.clientId == -1) {
            logger.error("error DaccUser clientId = -1");
            return;
        }
        global_var_1.GlobalVar.server.sendBuf(this.clientId, buf);
    }
    broadcast(msg) {
        global_var_1.GlobalVar.server.broadcast(msg);
    }
}
exports.DaccSession = DaccSession;
