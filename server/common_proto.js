/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.LoginPto = (function () {

    var LoginPto = {};

    LoginPto.LOGIN = (function () {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "CS_LOGIN"] = 1;
        values[valuesById[2] = "SC_LOGIN"] = 2;
        return values;
    })();

    LoginPto.C_LOGIN = (function () {

        function C_LOGIN(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_LOGIN.prototype.cmd = 0;
        C_LOGIN.prototype.scmd = 1;
        C_LOGIN.prototype.userName = "";

        C_LOGIN.create = function create(properties) {
            return new C_LOGIN(properties);
        };

        C_LOGIN.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.userName != null && Object.hasOwnProperty.call(m, "userName"))
                w.uint32(26).string(m.userName);
            return w;
        };

        C_LOGIN.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.LoginPto.C_LOGIN();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        m.cmd = r.int32();
                        break;
                    case 2:
                        m.scmd = r.int32();
                        break;
                    case 3:
                        m.userName = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        C_LOGIN.fromObject = function fromObject(d) {
            if (d instanceof $root.LoginPto.C_LOGIN)
                return d;
            var m = new $root.LoginPto.C_LOGIN();
            switch (d.cmd) {
                case "SYS_LOGIN":
                case 0:
                    m.cmd = 0;
                    break;
                case "SYS_HALL":
                case 1:
                    m.cmd = 1;
                    break;
            }
            switch (d.scmd) {
                case "CS_LOGIN":
                case 1:
                    m.scmd = 1;
                    break;
                case "SC_LOGIN":
                case 2:
                    m.scmd = 2;
                    break;
            }
            if (d.userName != null) {
                m.userName = String(d.userName);
            }
            return m;
        };

        C_LOGIN.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = o.enums === String ? "SYS_LOGIN" : 0;
                d.scmd = o.enums === String ? "CS_LOGIN" : 1;
                d.userName = "";
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = o.enums === String ? $root.CmdProto.SYS_CMD[m.cmd] : m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = o.enums === String ? $root.LoginPto.LOGIN[m.scmd] : m.scmd;
            }
            if (m.userName != null && m.hasOwnProperty("userName")) {
                d.userName = m.userName;
            }
            return d;
        };

        C_LOGIN.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C_LOGIN;
    })();

    LoginPto.S_LOGIN = (function () {

        function S_LOGIN(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_LOGIN.prototype.cmd = 0;
        S_LOGIN.prototype.scmd = 2;
        S_LOGIN.prototype.isSuccess = false;
        S_LOGIN.prototype.userName = "";

        S_LOGIN.create = function create(properties) {
            return new S_LOGIN(properties);
        };

        S_LOGIN.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.isSuccess != null && Object.hasOwnProperty.call(m, "isSuccess"))
                w.uint32(24).bool(m.isSuccess);
            if (m.userName != null && Object.hasOwnProperty.call(m, "userName"))
                w.uint32(34).string(m.userName);
            return w;
        };

        S_LOGIN.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.LoginPto.S_LOGIN();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        m.cmd = r.int32();
                        break;
                    case 2:
                        m.scmd = r.int32();
                        break;
                    case 3:
                        m.isSuccess = r.bool();
                        break;
                    case 4:
                        m.userName = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        S_LOGIN.fromObject = function fromObject(d) {
            if (d instanceof $root.LoginPto.S_LOGIN)
                return d;
            var m = new $root.LoginPto.S_LOGIN();
            switch (d.cmd) {
                case "SYS_LOGIN":
                case 0:
                    m.cmd = 0;
                    break;
                case "SYS_HALL":
                case 1:
                    m.cmd = 1;
                    break;
            }
            switch (d.scmd) {
                case "CS_LOGIN":
                case 1:
                    m.scmd = 1;
                    break;
                case "SC_LOGIN":
                case 2:
                    m.scmd = 2;
                    break;
            }
            if (d.isSuccess != null) {
                m.isSuccess = Boolean(d.isSuccess);
            }
            if (d.userName != null) {
                m.userName = String(d.userName);
            }
            return m;
        };

        S_LOGIN.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = o.enums === String ? "SYS_LOGIN" : 0;
                d.scmd = o.enums === String ? "SC_LOGIN" : 2;
                d.isSuccess = false;
                d.userName = "";
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = o.enums === String ? $root.CmdProto.SYS_CMD[m.cmd] : m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = o.enums === String ? $root.LoginPto.LOGIN[m.scmd] : m.scmd;
            }
            if (m.isSuccess != null && m.hasOwnProperty("isSuccess")) {
                d.isSuccess = m.isSuccess;
            }
            if (m.userName != null && m.hasOwnProperty("userName")) {
                d.userName = m.userName;
            }
            return d;
        };

        S_LOGIN.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_LOGIN;
    })();

    return LoginPto;
})();

$root.CmdProto = (function () {

    var CmdProto = {};

    CmdProto.SYS_CMD = (function () {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SYS_LOGIN"] = 0;
        values[valuesById[1] = "SYS_HALL"] = 1;
        return values;
    })();

    return CmdProto;
})();

$root.HallPto = (function () {

    var HallPto = {};

    HallPto.HALL = (function () {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "CS_SEND_CHAT_MSG"] = 1;
        values[valuesById[2] = "SC_CHAT_MSG"] = 2;
        return values;
    })();

    HallPto.C_SEND_CHAT_MSG = (function () {

        function C_SEND_CHAT_MSG(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_SEND_CHAT_MSG.prototype.cmd = 1;
        C_SEND_CHAT_MSG.prototype.scmd = 1;
        C_SEND_CHAT_MSG.prototype.msg = "";

        C_SEND_CHAT_MSG.create = function create(properties) {
            return new C_SEND_CHAT_MSG(properties);
        };

        C_SEND_CHAT_MSG.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.msg != null && Object.hasOwnProperty.call(m, "msg"))
                w.uint32(26).string(m.msg);
            return w;
        };

        C_SEND_CHAT_MSG.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.HallPto.C_SEND_CHAT_MSG();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        m.cmd = r.int32();
                        break;
                    case 2:
                        m.scmd = r.int32();
                        break;
                    case 3:
                        m.msg = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        C_SEND_CHAT_MSG.fromObject = function fromObject(d) {
            if (d instanceof $root.HallPto.C_SEND_CHAT_MSG)
                return d;
            var m = new $root.HallPto.C_SEND_CHAT_MSG();
            switch (d.cmd) {
                case "SYS_LOGIN":
                case 0:
                    m.cmd = 0;
                    break;
                case "SYS_HALL":
                case 1:
                    m.cmd = 1;
                    break;
            }
            switch (d.scmd) {
                case "CS_SEND_CHAT_MSG":
                case 1:
                    m.scmd = 1;
                    break;
                case "SC_CHAT_MSG":
                case 2:
                    m.scmd = 2;
                    break;
            }
            if (d.msg != null) {
                m.msg = String(d.msg);
            }
            return m;
        };

        C_SEND_CHAT_MSG.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = o.enums === String ? "SYS_HALL" : 1;
                d.scmd = o.enums === String ? "CS_SEND_CHAT_MSG" : 1;
                d.msg = "";
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = o.enums === String ? $root.CmdProto.SYS_CMD[m.cmd] : m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = o.enums === String ? $root.HallPto.HALL[m.scmd] : m.scmd;
            }
            if (m.msg != null && m.hasOwnProperty("msg")) {
                d.msg = m.msg;
            }
            return d;
        };

        C_SEND_CHAT_MSG.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C_SEND_CHAT_MSG;
    })();

    HallPto.S_CHAT_MSG = (function () {

        function S_CHAT_MSG(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_CHAT_MSG.prototype.cmd = 1;
        S_CHAT_MSG.prototype.scmd = 2;
        S_CHAT_MSG.prototype.userName = "";
        S_CHAT_MSG.prototype.msg = "";

        S_CHAT_MSG.create = function create(properties) {
            return new S_CHAT_MSG(properties);
        };

        S_CHAT_MSG.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.userName != null && Object.hasOwnProperty.call(m, "userName"))
                w.uint32(26).string(m.userName);
            if (m.msg != null && Object.hasOwnProperty.call(m, "msg"))
                w.uint32(34).string(m.msg);
            return w;
        };

        S_CHAT_MSG.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.HallPto.S_CHAT_MSG();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        m.cmd = r.int32();
                        break;
                    case 2:
                        m.scmd = r.int32();
                        break;
                    case 3:
                        m.userName = r.string();
                        break;
                    case 4:
                        m.msg = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        S_CHAT_MSG.fromObject = function fromObject(d) {
            if (d instanceof $root.HallPto.S_CHAT_MSG)
                return d;
            var m = new $root.HallPto.S_CHAT_MSG();
            switch (d.cmd) {
                case "SYS_LOGIN":
                case 0:
                    m.cmd = 0;
                    break;
                case "SYS_HALL":
                case 1:
                    m.cmd = 1;
                    break;
            }
            switch (d.scmd) {
                case "CS_SEND_CHAT_MSG":
                case 1:
                    m.scmd = 1;
                    break;
                case "SC_CHAT_MSG":
                case 2:
                    m.scmd = 2;
                    break;
            }
            if (d.userName != null) {
                m.userName = String(d.userName);
            }
            if (d.msg != null) {
                m.msg = String(d.msg);
            }
            return m;
        };

        S_CHAT_MSG.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = o.enums === String ? "SYS_HALL" : 1;
                d.scmd = o.enums === String ? "SC_CHAT_MSG" : 2;
                d.userName = "";
                d.msg = "";
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = o.enums === String ? $root.CmdProto.SYS_CMD[m.cmd] : m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = o.enums === String ? $root.HallPto.HALL[m.scmd] : m.scmd;
            }
            if (m.userName != null && m.hasOwnProperty("userName")) {
                d.userName = m.userName;
            }
            if (m.msg != null && m.hasOwnProperty("msg")) {
                d.msg = m.msg;
            }
            return d;
        };

        S_CHAT_MSG.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_CHAT_MSG;
    })();

    return HallPto;
})();

module.exports = $root;
