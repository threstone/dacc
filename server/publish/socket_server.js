"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketServer = void 0;
const log4js_1 = require("log4js");
const WS = require("ws");
const protobuf_encoder_1 = require("./protobuf_encoder");
const dacc_session_1 = require("./dacc_session");
const common_proto_1 = require("./common_proto");
const logger = log4js_1.getLogger();
class SocketServer {
    constructor() {
        this._defaultListenPort = 9595;
        this._emptySessionPool = [];
        this._socketArr = [];
        this._sessionArr = [];
        for (let i = 0; i < 1024; i++) {
            let session = new dacc_session_1.DaccUser();
            this._emptySessionPool.push(session);
            this._socketArr.push(null);
            this._sessionArr.push(null);
        }
    }
    startWsServer(listenPort = this._defaultListenPort) {
        let wss = new WS.Server({ port: listenPort });
        logger.info("服务器启动，监听端口:", listenPort);
        wss.on("connection", (ws, req) => {
            let session = this.getEmptySession();
            let clientId = this.getEmptyClientId();
            session.init(clientId);
            this._socketArr[clientId] = ws;
            this._sessionArr[clientId] = session;
            ws.on("message", (msg) => {
                this.onMessage(session, msg);
            });
            ws.on("error", (err) => {
                console.error("client connection is error! ", err);
            });
            ws.on("close", () => {
                this.onClose(session);
            });
        });
    }
    getEmptyClientId() {
        const temp = this._socketArr.indexOf(null);
        if (temp == -1) {
            this._socketArr.push(null);
            this._sessionArr.push(null);
            return this._socketArr.length - 1;
        }
        return temp;
    }
    getEmptySession() {
        if (this._emptySessionPool.length == 0) {
            for (let i = 0; i < 64; i++) {
                let session = new dacc_session_1.DaccUser();
                this._emptySessionPool.push(session);
            }
        }
        return this._emptySessionPool.pop();
    }
    onMessage(session, buf) {
        if (buf.length < 8) {
            logger.error(`消息长度不足,未知消息!   buf:${buf}`);
            return;
        }
        let msg = protobuf_encoder_1.ProtoBufEncoder.decode(buf, 0);
        let fun = protobuf_encoder_1.ProtoBufEncoder.getHandleFunction(msg.cmd, msg.scmd);
        if (!fun) {
            logger.error(`未知的协议 cmd:${msg.cmd} scmd:${msg.scmd}`);
            return;
        }
        try {
            if (session.isLogin == false && (msg.cmd != common_proto_1.LoginPto.C_LOGIN.prototype.cmd || msg.scmd != common_proto_1.LoginPto.C_LOGIN.prototype.scmd)) {
                logger.error('未登录状态下禁止请求除登录以外的协议。');
                return;
            }
            fun(session, msg);
        }
        catch (error) {
            logger.error(`执行协议函数出错 cmd:${msg.cmd} scmd:${msg.scmd}`);
            logger.error(error);
        }
    }
    broadcast(msg) {
        let buf = protobuf_encoder_1.ProtoBufEncoder.encode(msg);
        for (let index = 0; index < this._socketArr.length; index++) {
            const ws = this._socketArr[index];
            if (ws) {
                ws.send(buf);
            }
        }
    }
    sendMsg(clientId, msg) {
        if (!this._socketArr[clientId]) {
            logger.error("error socket 不存在");
            return;
        }
        this._socketArr[clientId].send(protobuf_encoder_1.ProtoBufEncoder.encode(msg));
    }
    sendBuf(clientId, buf) {
        if (!this._socketArr[clientId]) {
            logger.error("error socket 不存在");
            return;
        }
        this._socketArr[clientId].send(buf);
    }
    onClose(session) {
        session.onClose();
        this._socketArr[session.clientId] = null;
        this._sessionArr[session.clientId] = null;
        session.reset();
        this._emptySessionPool.push(session);
    }
    getDaccSession(clientId) {
        return this._sessionArr[clientId];
    }
}
exports.SocketServer = SocketServer;
