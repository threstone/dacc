"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalVal = void 0;
const socket_server_1 = require("./socket_server");
const log4js_1 = require("log4js");
const loggerConfig = require("./config/log4js.json");
const protobuf_encoder_1 = require("./protobuf_encoder");
const common_proto_1 = require("./common_proto");
const login_handle_1 = require("./handle/login_handle");
const hall_handle_1 = require("./handle/hall_handle");
const common_proto_2 = require("./common_proto");
class GlobalVal {
    static get server() {
        return this._server;
    }
    static init() {
        log4js_1.configure(loggerConfig);
        this.initHandle();
        this._server = new socket_server_1.SocketServer();
        this.server.startWsServer();
    }
    static initHandle() {
        protobuf_encoder_1.ProtoBufEncoder.init();
        protobuf_encoder_1.ProtoBufEncoder.addProtoModule(common_proto_1.LoginPto, login_handle_1.LoginHandle);
        protobuf_encoder_1.ProtoBufEncoder.addProtoModule(common_proto_2.HallPto, hall_handle_1.HallHandle);
    }
}
exports.GlobalVal = GlobalVal;
