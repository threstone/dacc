"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaccUser = void 0;
const log4js_1 = require("log4js");
const global_var_1 = require("./global_var");
const logger = log4js_1.getLogger();
class DaccUser {
    constructor() {
        this.clientId = -1;
        this.isLogin = false;
        this.userName = "";
        this.headIndex = -1;
    }
    init(clientId) {
        this.clientId = clientId;
    }
    doLogin(data) {
        this.userName = data.userName;
        this.isLogin = true;
    }
    onClose() {
        if (this.room) {
            this.player.clientId = -1;
            this.room.onUserSocketClose(this.player);
            this.player = null;
            this.room = null;
        }
    }
    reset() {
        this.clientId = -1;
        this.isLogin = false;
        this.userName = "";
        this.headIndex = -1;
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
exports.DaccUser = DaccUser;
