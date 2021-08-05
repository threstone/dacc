"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaccPlayer = void 0;
const log4js_1 = require("log4js");
const global_var_1 = require("./global_var");
let logger = log4js_1.getLogger();
class DaccPlayer {
    constructor(clientId) {
        this.isReady = false;
        this.isWatcher = false;
        this.clientId = clientId;
    }
    sendMsg(msg) {
        if (this.clientId == -1) {
            logger.error("error DaccPlayer clientId = -1");
            return;
        }
        global_var_1.GlobalVar.server.sendMsg(this.clientId, msg);
    }
    sendBuf(buf) {
        if (this.clientId == -1) {
            logger.error("error DaccPlayer clientId = -1");
            return;
        }
        global_var_1.GlobalVar.server.sendBuf(this.clientId, buf);
    }
    /**
     * 获取DaccSession
     */
    getSession() {
        return global_var_1.GlobalVar.server.getDaccSession(this.clientId);
    }
    destroy() {
        let session = this.getSession();
        if (session) {
            session.room = null;
            session.player = null;
        }
        this.clientId = -1;
        this.index = -1;
        this.isReady = false;
        this.isWatcher = false;
    }
}
exports.DaccPlayer = DaccPlayer;
