"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaccPlayer = void 0;
const global_var_1 = require("./global_var");
class DaccPlayer {
    constructor(clientId) {
        this.isReady = false;
        this.isWatcher = false;
        this._clientId = clientId;
        let userModel = global_var_1.GlobalVar.server.getDaccSession(this._clientId).userModel;
        this._id = userModel.id || -1;
        this.nick = userModel.nick || '';
        this.headIndex = userModel.headIndex || -1;
    }
    get clientId() {
        return this._clientId;
    }
    get id() {
        return this._id;
    }
    reconnect(clientId) {
        this._clientId = clientId;
    }
    disconnect() {
        this._clientId = -1;
    }
    sendMsg(msg) {
        if (this._clientId == -1) {
            return;
        }
        global_var_1.GlobalVar.server.sendMsg(this._clientId, msg);
    }
    sendBuf(buf) {
        if (this._clientId == -1) {
            return;
        }
        global_var_1.GlobalVar.server.sendBuf(this._clientId, buf);
    }
    /**
     * 获取DaccSession
     */
    getSession() {
        return global_var_1.GlobalVar.server.getDaccSession(this._clientId);
    }
    destroy() {
        let session = this.getSession();
        if (session) {
            session.room = null;
            session.player = null;
        }
        this._clientId = -1;
        this._id = -1;
        this.index = -1;
        this.isReady = false;
        this.isWatcher = false;
    }
}
exports.DaccPlayer = DaccPlayer;
