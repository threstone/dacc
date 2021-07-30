"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaccUser = void 0;
const log4js_1 = require("log4js");
const global_val_1 = require("./global_val");
const logger = log4js_1.getLogger();
class DaccUser {
    constructor() {
        this.clientId = -1;
        this.userName = "";
    }
    init(clientId) {
        this.clientId = clientId;
    }
    reset() {
        this.clientId = -1;
        this.userName = "";
    }
    sendMsg(msg) {
        if (this.clientId == -1) {
            logger.error("error DaccUser clientId = -1");
            return;
        }
        global_val_1.GlobalVal.server.sendMsg(this.clientId, msg);
    }
    sendBuf(buf) {
        if (this.clientId == -1) {
            logger.error("error DaccUser clientId = -1");
            return;
        }
        global_val_1.GlobalVal.server.sendBuf(this.clientId, buf);
    }
    broadcast(msg) {
        global_val_1.GlobalVal.server.broadcast(msg);
    }
}
exports.DaccUser = DaccUser;
