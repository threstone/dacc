/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.LoginPto = (function() {

    var LoginPto = {};

    LoginPto.C_LOGIN = (function() {

        function C_LOGIN(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_LOGIN.prototype.cmd = 0;
        C_LOGIN.prototype.scmd = 1;
        C_LOGIN.prototype.account = "";
        C_LOGIN.prototype.password = "";

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
            if (m.account != null && Object.hasOwnProperty.call(m, "account"))
                w.uint32(26).string(m.account);
            if (m.password != null && Object.hasOwnProperty.call(m, "password"))
                w.uint32(34).string(m.password);
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
                    m.account = r.string();
                    break;
                case 4:
                    m.password = r.string();
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
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.account != null) {
                m.account = String(d.account);
            }
            if (d.password != null) {
                m.password = String(d.password);
            }
            return m;
        };

        C_LOGIN.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 0;
                d.scmd = 1;
                d.account = "";
                d.password = "";
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.account != null && m.hasOwnProperty("account")) {
                d.account = m.account;
            }
            if (m.password != null && m.hasOwnProperty("password")) {
                d.password = m.password;
            }
            return d;
        };

        C_LOGIN.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C_LOGIN;
    })();

    LoginPto.S_LOGIN = (function() {

        function S_LOGIN(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_LOGIN.prototype.cmd = 0;
        S_LOGIN.prototype.scmd = 2;
        S_LOGIN.prototype.isSuccess = false;
        S_LOGIN.prototype.nick = "";
        S_LOGIN.prototype.headIndex = 0;
        S_LOGIN.prototype.roomId = 0;
        S_LOGIN.prototype.gameId = 0;

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
            if (m.nick != null && Object.hasOwnProperty.call(m, "nick"))
                w.uint32(34).string(m.nick);
            if (m.headIndex != null && Object.hasOwnProperty.call(m, "headIndex"))
                w.uint32(40).int32(m.headIndex);
            if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                w.uint32(48).int32(m.roomId);
            if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
                w.uint32(56).int32(m.gameId);
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
                    m.nick = r.string();
                    break;
                case 5:
                    m.headIndex = r.int32();
                    break;
                case 6:
                    m.roomId = r.int32();
                    break;
                case 7:
                    m.gameId = r.int32();
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
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.isSuccess != null) {
                m.isSuccess = Boolean(d.isSuccess);
            }
            if (d.nick != null) {
                m.nick = String(d.nick);
            }
            if (d.headIndex != null) {
                m.headIndex = d.headIndex | 0;
            }
            if (d.roomId != null) {
                m.roomId = d.roomId | 0;
            }
            if (d.gameId != null) {
                m.gameId = d.gameId | 0;
            }
            return m;
        };

        S_LOGIN.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 0;
                d.scmd = 2;
                d.isSuccess = false;
                d.nick = "";
                d.headIndex = 0;
                d.roomId = 0;
                d.gameId = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.isSuccess != null && m.hasOwnProperty("isSuccess")) {
                d.isSuccess = m.isSuccess;
            }
            if (m.nick != null && m.hasOwnProperty("nick")) {
                d.nick = m.nick;
            }
            if (m.headIndex != null && m.hasOwnProperty("headIndex")) {
                d.headIndex = m.headIndex;
            }
            if (m.roomId != null && m.hasOwnProperty("roomId")) {
                d.roomId = m.roomId;
            }
            if (m.gameId != null && m.hasOwnProperty("gameId")) {
                d.gameId = m.gameId;
            }
            return d;
        };

        S_LOGIN.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_LOGIN;
    })();

    LoginPto.C_REGISTER = (function() {

        function C_REGISTER(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_REGISTER.prototype.cmd = 0;
        C_REGISTER.prototype.scmd = 3;
        C_REGISTER.prototype.account = "";
        C_REGISTER.prototype.password = "";
        C_REGISTER.prototype.nick = "";

        C_REGISTER.create = function create(properties) {
            return new C_REGISTER(properties);
        };

        C_REGISTER.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.account != null && Object.hasOwnProperty.call(m, "account"))
                w.uint32(26).string(m.account);
            if (m.password != null && Object.hasOwnProperty.call(m, "password"))
                w.uint32(34).string(m.password);
            if (m.nick != null && Object.hasOwnProperty.call(m, "nick"))
                w.uint32(42).string(m.nick);
            return w;
        };

        C_REGISTER.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.LoginPto.C_REGISTER();
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
                    m.account = r.string();
                    break;
                case 4:
                    m.password = r.string();
                    break;
                case 5:
                    m.nick = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_REGISTER.fromObject = function fromObject(d) {
            if (d instanceof $root.LoginPto.C_REGISTER)
                return d;
            var m = new $root.LoginPto.C_REGISTER();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.account != null) {
                m.account = String(d.account);
            }
            if (d.password != null) {
                m.password = String(d.password);
            }
            if (d.nick != null) {
                m.nick = String(d.nick);
            }
            return m;
        };

        C_REGISTER.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 0;
                d.scmd = 3;
                d.account = "";
                d.password = "";
                d.nick = "";
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.account != null && m.hasOwnProperty("account")) {
                d.account = m.account;
            }
            if (m.password != null && m.hasOwnProperty("password")) {
                d.password = m.password;
            }
            if (m.nick != null && m.hasOwnProperty("nick")) {
                d.nick = m.nick;
            }
            return d;
        };

        C_REGISTER.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C_REGISTER;
    })();

    LoginPto.S_REGISTER = (function() {

        function S_REGISTER(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_REGISTER.prototype.cmd = 0;
        S_REGISTER.prototype.scmd = 4;
        S_REGISTER.prototype.code = 0;

        S_REGISTER.create = function create(properties) {
            return new S_REGISTER(properties);
        };

        S_REGISTER.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(24).int32(m.code);
            return w;
        };

        S_REGISTER.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.LoginPto.S_REGISTER();
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
                    m.code = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_REGISTER.fromObject = function fromObject(d) {
            if (d instanceof $root.LoginPto.S_REGISTER)
                return d;
            var m = new $root.LoginPto.S_REGISTER();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.code != null) {
                m.code = d.code | 0;
            }
            return m;
        };

        S_REGISTER.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 0;
                d.scmd = 4;
                d.code = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.code != null && m.hasOwnProperty("code")) {
                d.code = m.code;
            }
            return d;
        };

        S_REGISTER.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_REGISTER;
    })();

    return LoginPto;
})();

$root.HallPto = (function() {

    var HallPto = {};

    HallPto.GameInfo = (function() {

        function GameInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GameInfo.prototype.gameId = 0;
        GameInfo.prototype.gameName = "";

        GameInfo.create = function create(properties) {
            return new GameInfo(properties);
        };

        GameInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
                w.uint32(8).int32(m.gameId);
            if (m.gameName != null && Object.hasOwnProperty.call(m, "gameName"))
                w.uint32(18).string(m.gameName);
            return w;
        };

        GameInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.HallPto.GameInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.gameId = r.int32();
                    break;
                case 2:
                    m.gameName = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        GameInfo.fromObject = function fromObject(d) {
            if (d instanceof $root.HallPto.GameInfo)
                return d;
            var m = new $root.HallPto.GameInfo();
            if (d.gameId != null) {
                m.gameId = d.gameId | 0;
            }
            if (d.gameName != null) {
                m.gameName = String(d.gameName);
            }
            return m;
        };

        GameInfo.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.gameId = 0;
                d.gameName = "";
            }
            if (m.gameId != null && m.hasOwnProperty("gameId")) {
                d.gameId = m.gameId;
            }
            if (m.gameName != null && m.hasOwnProperty("gameName")) {
                d.gameName = m.gameName;
            }
            return d;
        };

        GameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameInfo;
    })();

    HallPto.C_SEND_CHAT_MSG = (function() {

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
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
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
                d.cmd = 1;
                d.scmd = 1;
                d.msg = "";
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
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

    HallPto.S_CHAT_MSG = (function() {

        function S_CHAT_MSG(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_CHAT_MSG.prototype.cmd = 1;
        S_CHAT_MSG.prototype.scmd = 2;
        S_CHAT_MSG.prototype.nick = "";
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
            if (m.nick != null && Object.hasOwnProperty.call(m, "nick"))
                w.uint32(26).string(m.nick);
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
                    m.nick = r.string();
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
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.nick != null) {
                m.nick = String(d.nick);
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
                d.cmd = 1;
                d.scmd = 2;
                d.nick = "";
                d.msg = "";
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.nick != null && m.hasOwnProperty("nick")) {
                d.nick = m.nick;
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

    HallPto.S_GAME_LIST = (function() {

        function S_GAME_LIST(p) {
            this.list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_GAME_LIST.prototype.cmd = 1;
        S_GAME_LIST.prototype.scmd = 3;
        S_GAME_LIST.prototype.list = $util.emptyArray;

        S_GAME_LIST.create = function create(properties) {
            return new S_GAME_LIST(properties);
        };

        S_GAME_LIST.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.list != null && m.list.length) {
                for (var i = 0; i < m.list.length; ++i)
                    $root.HallPto.GameInfo.encode(m.list[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        S_GAME_LIST.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.HallPto.S_GAME_LIST();
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
                    if (!(m.list && m.list.length))
                        m.list = [];
                    m.list.push($root.HallPto.GameInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_GAME_LIST.fromObject = function fromObject(d) {
            if (d instanceof $root.HallPto.S_GAME_LIST)
                return d;
            var m = new $root.HallPto.S_GAME_LIST();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.list) {
                if (!Array.isArray(d.list))
                    throw TypeError(".HallPto.S_GAME_LIST.list: array expected");
                m.list = [];
                for (var i = 0; i < d.list.length; ++i) {
                    if (typeof d.list[i] !== "object")
                        throw TypeError(".HallPto.S_GAME_LIST.list: object expected");
                    m.list[i] = $root.HallPto.GameInfo.fromObject(d.list[i]);
                }
            }
            return m;
        };

        S_GAME_LIST.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.list = [];
            }
            if (o.defaults) {
                d.cmd = 1;
                d.scmd = 3;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.list && m.list.length) {
                d.list = [];
                for (var j = 0; j < m.list.length; ++j) {
                    d.list[j] = $root.HallPto.GameInfo.toObject(m.list[j], o);
                }
            }
            return d;
        };

        S_GAME_LIST.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_GAME_LIST;
    })();

    HallPto.C_CHANGE_HEAD = (function() {

        function C_CHANGE_HEAD(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_CHANGE_HEAD.prototype.cmd = 1;
        C_CHANGE_HEAD.prototype.scmd = 4;
        C_CHANGE_HEAD.prototype.headIndex = 0;

        C_CHANGE_HEAD.create = function create(properties) {
            return new C_CHANGE_HEAD(properties);
        };

        C_CHANGE_HEAD.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.headIndex != null && Object.hasOwnProperty.call(m, "headIndex"))
                w.uint32(24).int32(m.headIndex);
            return w;
        };

        C_CHANGE_HEAD.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.HallPto.C_CHANGE_HEAD();
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
                    m.headIndex = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_CHANGE_HEAD.fromObject = function fromObject(d) {
            if (d instanceof $root.HallPto.C_CHANGE_HEAD)
                return d;
            var m = new $root.HallPto.C_CHANGE_HEAD();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.headIndex != null) {
                m.headIndex = d.headIndex | 0;
            }
            return m;
        };

        C_CHANGE_HEAD.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 1;
                d.scmd = 4;
                d.headIndex = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.headIndex != null && m.hasOwnProperty("headIndex")) {
                d.headIndex = m.headIndex;
            }
            return d;
        };

        C_CHANGE_HEAD.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C_CHANGE_HEAD;
    })();

    HallPto.C_ONLINE_LIST = (function() {

        function C_ONLINE_LIST(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_ONLINE_LIST.prototype.cmd = 1;
        C_ONLINE_LIST.prototype.scmd = 5;

        C_ONLINE_LIST.create = function create(properties) {
            return new C_ONLINE_LIST(properties);
        };

        C_ONLINE_LIST.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_ONLINE_LIST.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.HallPto.C_ONLINE_LIST();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_ONLINE_LIST.fromObject = function fromObject(d) {
            if (d instanceof $root.HallPto.C_ONLINE_LIST)
                return d;
            var m = new $root.HallPto.C_ONLINE_LIST();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            return m;
        };

        C_ONLINE_LIST.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 1;
                d.scmd = 5;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            return d;
        };

        C_ONLINE_LIST.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C_ONLINE_LIST;
    })();

    HallPto.S_ONLINE_LIST = (function() {

        function S_ONLINE_LIST(p) {
            this.nikeArr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_ONLINE_LIST.prototype.cmd = 1;
        S_ONLINE_LIST.prototype.scmd = 6;
        S_ONLINE_LIST.prototype.nikeArr = $util.emptyArray;

        S_ONLINE_LIST.create = function create(properties) {
            return new S_ONLINE_LIST(properties);
        };

        S_ONLINE_LIST.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.nikeArr != null && m.nikeArr.length) {
                for (var i = 0; i < m.nikeArr.length; ++i)
                    w.uint32(26).string(m.nikeArr[i]);
            }
            return w;
        };

        S_ONLINE_LIST.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.HallPto.S_ONLINE_LIST();
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
                    if (!(m.nikeArr && m.nikeArr.length))
                        m.nikeArr = [];
                    m.nikeArr.push(r.string());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_ONLINE_LIST.fromObject = function fromObject(d) {
            if (d instanceof $root.HallPto.S_ONLINE_LIST)
                return d;
            var m = new $root.HallPto.S_ONLINE_LIST();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.nikeArr) {
                if (!Array.isArray(d.nikeArr))
                    throw TypeError(".HallPto.S_ONLINE_LIST.nikeArr: array expected");
                m.nikeArr = [];
                for (var i = 0; i < d.nikeArr.length; ++i) {
                    m.nikeArr[i] = String(d.nikeArr[i]);
                }
            }
            return m;
        };

        S_ONLINE_LIST.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.nikeArr = [];
            }
            if (o.defaults) {
                d.cmd = 1;
                d.scmd = 6;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.nikeArr && m.nikeArr.length) {
                d.nikeArr = [];
                for (var j = 0; j < m.nikeArr.length; ++j) {
                    d.nikeArr[j] = m.nikeArr[j];
                }
            }
            return d;
        };

        S_ONLINE_LIST.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_ONLINE_LIST;
    })();

    return HallPto;
})();

$root.RoomPto = (function() {

    var RoomPto = {};

    RoomPto.Player = (function() {

        function Player(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Player.prototype.index = 0;
        Player.prototype.headIndex = 0;
        Player.prototype.nick = "";
        Player.prototype.isReady = false;

        Player.create = function create(properties) {
            return new Player(properties);
        };

        Player.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.index != null && Object.hasOwnProperty.call(m, "index"))
                w.uint32(8).int32(m.index);
            if (m.headIndex != null && Object.hasOwnProperty.call(m, "headIndex"))
                w.uint32(16).int32(m.headIndex);
            if (m.nick != null && Object.hasOwnProperty.call(m, "nick"))
                w.uint32(26).string(m.nick);
            if (m.isReady != null && Object.hasOwnProperty.call(m, "isReady"))
                w.uint32(32).bool(m.isReady);
            return w;
        };

        Player.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomPto.Player();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.index = r.int32();
                    break;
                case 2:
                    m.headIndex = r.int32();
                    break;
                case 3:
                    m.nick = r.string();
                    break;
                case 4:
                    m.isReady = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        Player.fromObject = function fromObject(d) {
            if (d instanceof $root.RoomPto.Player)
                return d;
            var m = new $root.RoomPto.Player();
            if (d.index != null) {
                m.index = d.index | 0;
            }
            if (d.headIndex != null) {
                m.headIndex = d.headIndex | 0;
            }
            if (d.nick != null) {
                m.nick = String(d.nick);
            }
            if (d.isReady != null) {
                m.isReady = Boolean(d.isReady);
            }
            return m;
        };

        Player.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.index = 0;
                d.headIndex = 0;
                d.nick = "";
                d.isReady = false;
            }
            if (m.index != null && m.hasOwnProperty("index")) {
                d.index = m.index;
            }
            if (m.headIndex != null && m.hasOwnProperty("headIndex")) {
                d.headIndex = m.headIndex;
            }
            if (m.nick != null && m.hasOwnProperty("nick")) {
                d.nick = m.nick;
            }
            if (m.isReady != null && m.hasOwnProperty("isReady")) {
                d.isReady = m.isReady;
            }
            return d;
        };

        Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Player;
    })();

    RoomPto.RoomInfo = (function() {

        function RoomInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        RoomInfo.prototype.gameId = 0;
        RoomInfo.prototype.isStart = false;
        RoomInfo.prototype.describe = "";
        RoomInfo.prototype.roomId = 0;
        RoomInfo.prototype.curPlayer = 0;
        RoomInfo.prototype.maxPlayer = 0;

        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        RoomInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
                w.uint32(8).int32(m.gameId);
            if (m.isStart != null && Object.hasOwnProperty.call(m, "isStart"))
                w.uint32(16).bool(m.isStart);
            if (m.describe != null && Object.hasOwnProperty.call(m, "describe"))
                w.uint32(26).string(m.describe);
            if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                w.uint32(32).int32(m.roomId);
            if (m.curPlayer != null && Object.hasOwnProperty.call(m, "curPlayer"))
                w.uint32(40).int32(m.curPlayer);
            if (m.maxPlayer != null && Object.hasOwnProperty.call(m, "maxPlayer"))
                w.uint32(48).int32(m.maxPlayer);
            return w;
        };

        RoomInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomPto.RoomInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.gameId = r.int32();
                    break;
                case 2:
                    m.isStart = r.bool();
                    break;
                case 3:
                    m.describe = r.string();
                    break;
                case 4:
                    m.roomId = r.int32();
                    break;
                case 5:
                    m.curPlayer = r.int32();
                    break;
                case 6:
                    m.maxPlayer = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        RoomInfo.fromObject = function fromObject(d) {
            if (d instanceof $root.RoomPto.RoomInfo)
                return d;
            var m = new $root.RoomPto.RoomInfo();
            if (d.gameId != null) {
                m.gameId = d.gameId | 0;
            }
            if (d.isStart != null) {
                m.isStart = Boolean(d.isStart);
            }
            if (d.describe != null) {
                m.describe = String(d.describe);
            }
            if (d.roomId != null) {
                m.roomId = d.roomId | 0;
            }
            if (d.curPlayer != null) {
                m.curPlayer = d.curPlayer | 0;
            }
            if (d.maxPlayer != null) {
                m.maxPlayer = d.maxPlayer | 0;
            }
            return m;
        };

        RoomInfo.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.gameId = 0;
                d.isStart = false;
                d.describe = "";
                d.roomId = 0;
                d.curPlayer = 0;
                d.maxPlayer = 0;
            }
            if (m.gameId != null && m.hasOwnProperty("gameId")) {
                d.gameId = m.gameId;
            }
            if (m.isStart != null && m.hasOwnProperty("isStart")) {
                d.isStart = m.isStart;
            }
            if (m.describe != null && m.hasOwnProperty("describe")) {
                d.describe = m.describe;
            }
            if (m.roomId != null && m.hasOwnProperty("roomId")) {
                d.roomId = m.roomId;
            }
            if (m.curPlayer != null && m.hasOwnProperty("curPlayer")) {
                d.curPlayer = m.curPlayer;
            }
            if (m.maxPlayer != null && m.hasOwnProperty("maxPlayer")) {
                d.maxPlayer = m.maxPlayer;
            }
            return d;
        };

        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomInfo;
    })();

    RoomPto.C_CREATE_ROOM = (function() {

        function C_CREATE_ROOM(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_CREATE_ROOM.prototype.cmd = 2;
        C_CREATE_ROOM.prototype.scmd = 1;
        C_CREATE_ROOM.prototype.gameId = 0;
        C_CREATE_ROOM.prototype.describe = "";

        C_CREATE_ROOM.create = function create(properties) {
            return new C_CREATE_ROOM(properties);
        };

        C_CREATE_ROOM.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
                w.uint32(24).int32(m.gameId);
            if (m.describe != null && Object.hasOwnProperty.call(m, "describe"))
                w.uint32(34).string(m.describe);
            return w;
        };

        C_CREATE_ROOM.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomPto.C_CREATE_ROOM();
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
                    m.gameId = r.int32();
                    break;
                case 4:
                    m.describe = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_CREATE_ROOM.fromObject = function fromObject(d) {
            if (d instanceof $root.RoomPto.C_CREATE_ROOM)
                return d;
            var m = new $root.RoomPto.C_CREATE_ROOM();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.gameId != null) {
                m.gameId = d.gameId | 0;
            }
            if (d.describe != null) {
                m.describe = String(d.describe);
            }
            return m;
        };

        C_CREATE_ROOM.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 2;
                d.scmd = 1;
                d.gameId = 0;
                d.describe = "";
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.gameId != null && m.hasOwnProperty("gameId")) {
                d.gameId = m.gameId;
            }
            if (m.describe != null && m.hasOwnProperty("describe")) {
                d.describe = m.describe;
            }
            return d;
        };

        C_CREATE_ROOM.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C_CREATE_ROOM;
    })();

    RoomPto.S_CREATE_ROOM = (function() {

        function S_CREATE_ROOM(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_CREATE_ROOM.prototype.cmd = 2;
        S_CREATE_ROOM.prototype.scmd = 2;
        S_CREATE_ROOM.prototype.isSuccess = false;
        S_CREATE_ROOM.prototype.roomId = 0;

        S_CREATE_ROOM.create = function create(properties) {
            return new S_CREATE_ROOM(properties);
        };

        S_CREATE_ROOM.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.isSuccess != null && Object.hasOwnProperty.call(m, "isSuccess"))
                w.uint32(24).bool(m.isSuccess);
            if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                w.uint32(32).int32(m.roomId);
            return w;
        };

        S_CREATE_ROOM.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomPto.S_CREATE_ROOM();
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
                    m.roomId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_CREATE_ROOM.fromObject = function fromObject(d) {
            if (d instanceof $root.RoomPto.S_CREATE_ROOM)
                return d;
            var m = new $root.RoomPto.S_CREATE_ROOM();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.isSuccess != null) {
                m.isSuccess = Boolean(d.isSuccess);
            }
            if (d.roomId != null) {
                m.roomId = d.roomId | 0;
            }
            return m;
        };

        S_CREATE_ROOM.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 2;
                d.scmd = 2;
                d.isSuccess = false;
                d.roomId = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.isSuccess != null && m.hasOwnProperty("isSuccess")) {
                d.isSuccess = m.isSuccess;
            }
            if (m.roomId != null && m.hasOwnProperty("roomId")) {
                d.roomId = m.roomId;
            }
            return d;
        };

        S_CREATE_ROOM.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_CREATE_ROOM;
    })();

    RoomPto.C_JOIN_ROOM = (function() {

        function C_JOIN_ROOM(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_JOIN_ROOM.prototype.cmd = 2;
        C_JOIN_ROOM.prototype.scmd = 3;
        C_JOIN_ROOM.prototype.roomId = 0;
        C_JOIN_ROOM.prototype.isWatch = false;

        C_JOIN_ROOM.create = function create(properties) {
            return new C_JOIN_ROOM(properties);
        };

        C_JOIN_ROOM.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                w.uint32(24).int32(m.roomId);
            if (m.isWatch != null && Object.hasOwnProperty.call(m, "isWatch"))
                w.uint32(32).bool(m.isWatch);
            return w;
        };

        C_JOIN_ROOM.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomPto.C_JOIN_ROOM();
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
                    m.roomId = r.int32();
                    break;
                case 4:
                    m.isWatch = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_JOIN_ROOM.fromObject = function fromObject(d) {
            if (d instanceof $root.RoomPto.C_JOIN_ROOM)
                return d;
            var m = new $root.RoomPto.C_JOIN_ROOM();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.roomId != null) {
                m.roomId = d.roomId | 0;
            }
            if (d.isWatch != null) {
                m.isWatch = Boolean(d.isWatch);
            }
            return m;
        };

        C_JOIN_ROOM.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 2;
                d.scmd = 3;
                d.roomId = 0;
                d.isWatch = false;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.roomId != null && m.hasOwnProperty("roomId")) {
                d.roomId = m.roomId;
            }
            if (m.isWatch != null && m.hasOwnProperty("isWatch")) {
                d.isWatch = m.isWatch;
            }
            return d;
        };

        C_JOIN_ROOM.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C_JOIN_ROOM;
    })();

    RoomPto.S_JOIN_ROOM = (function() {

        function S_JOIN_ROOM(p) {
            this.players = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_JOIN_ROOM.prototype.cmd = 2;
        S_JOIN_ROOM.prototype.scmd = 4;
        S_JOIN_ROOM.prototype.isSuccess = false;
        S_JOIN_ROOM.prototype.players = $util.emptyArray;
        S_JOIN_ROOM.prototype.gameId = 0;
        S_JOIN_ROOM.prototype.selfIndex = 0;
        S_JOIN_ROOM.prototype.roomSeq = "";
        S_JOIN_ROOM.prototype.isWatcher = false;

        S_JOIN_ROOM.create = function create(properties) {
            return new S_JOIN_ROOM(properties);
        };

        S_JOIN_ROOM.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.isSuccess != null && Object.hasOwnProperty.call(m, "isSuccess"))
                w.uint32(24).bool(m.isSuccess);
            if (m.players != null && m.players.length) {
                for (var i = 0; i < m.players.length; ++i)
                    $root.RoomPto.Player.encode(m.players[i], w.uint32(34).fork()).ldelim();
            }
            if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
                w.uint32(40).int32(m.gameId);
            if (m.selfIndex != null && Object.hasOwnProperty.call(m, "selfIndex"))
                w.uint32(48).int32(m.selfIndex);
            if (m.roomSeq != null && Object.hasOwnProperty.call(m, "roomSeq"))
                w.uint32(58).string(m.roomSeq);
            if (m.isWatcher != null && Object.hasOwnProperty.call(m, "isWatcher"))
                w.uint32(64).bool(m.isWatcher);
            return w;
        };

        S_JOIN_ROOM.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomPto.S_JOIN_ROOM();
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
                    if (!(m.players && m.players.length))
                        m.players = [];
                    m.players.push($root.RoomPto.Player.decode(r, r.uint32()));
                    break;
                case 5:
                    m.gameId = r.int32();
                    break;
                case 6:
                    m.selfIndex = r.int32();
                    break;
                case 7:
                    m.roomSeq = r.string();
                    break;
                case 8:
                    m.isWatcher = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_JOIN_ROOM.fromObject = function fromObject(d) {
            if (d instanceof $root.RoomPto.S_JOIN_ROOM)
                return d;
            var m = new $root.RoomPto.S_JOIN_ROOM();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.isSuccess != null) {
                m.isSuccess = Boolean(d.isSuccess);
            }
            if (d.players) {
                if (!Array.isArray(d.players))
                    throw TypeError(".RoomPto.S_JOIN_ROOM.players: array expected");
                m.players = [];
                for (var i = 0; i < d.players.length; ++i) {
                    if (typeof d.players[i] !== "object")
                        throw TypeError(".RoomPto.S_JOIN_ROOM.players: object expected");
                    m.players[i] = $root.RoomPto.Player.fromObject(d.players[i]);
                }
            }
            if (d.gameId != null) {
                m.gameId = d.gameId | 0;
            }
            if (d.selfIndex != null) {
                m.selfIndex = d.selfIndex | 0;
            }
            if (d.roomSeq != null) {
                m.roomSeq = String(d.roomSeq);
            }
            if (d.isWatcher != null) {
                m.isWatcher = Boolean(d.isWatcher);
            }
            return m;
        };

        S_JOIN_ROOM.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.players = [];
            }
            if (o.defaults) {
                d.cmd = 2;
                d.scmd = 4;
                d.isSuccess = false;
                d.gameId = 0;
                d.selfIndex = 0;
                d.roomSeq = "";
                d.isWatcher = false;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.isSuccess != null && m.hasOwnProperty("isSuccess")) {
                d.isSuccess = m.isSuccess;
            }
            if (m.players && m.players.length) {
                d.players = [];
                for (var j = 0; j < m.players.length; ++j) {
                    d.players[j] = $root.RoomPto.Player.toObject(m.players[j], o);
                }
            }
            if (m.gameId != null && m.hasOwnProperty("gameId")) {
                d.gameId = m.gameId;
            }
            if (m.selfIndex != null && m.hasOwnProperty("selfIndex")) {
                d.selfIndex = m.selfIndex;
            }
            if (m.roomSeq != null && m.hasOwnProperty("roomSeq")) {
                d.roomSeq = m.roomSeq;
            }
            if (m.isWatcher != null && m.hasOwnProperty("isWatcher")) {
                d.isWatcher = m.isWatcher;
            }
            return d;
        };

        S_JOIN_ROOM.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_JOIN_ROOM;
    })();

    RoomPto.C_ROOM_LIST = (function() {

        function C_ROOM_LIST(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_ROOM_LIST.prototype.cmd = 2;
        C_ROOM_LIST.prototype.scmd = 5;
        C_ROOM_LIST.prototype.gameId = 0;
        C_ROOM_LIST.prototype.status = 0;

        C_ROOM_LIST.create = function create(properties) {
            return new C_ROOM_LIST(properties);
        };

        C_ROOM_LIST.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
                w.uint32(24).int32(m.gameId);
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(32).int32(m.status);
            return w;
        };

        C_ROOM_LIST.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomPto.C_ROOM_LIST();
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
                    m.gameId = r.int32();
                    break;
                case 4:
                    m.status = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_ROOM_LIST.fromObject = function fromObject(d) {
            if (d instanceof $root.RoomPto.C_ROOM_LIST)
                return d;
            var m = new $root.RoomPto.C_ROOM_LIST();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.gameId != null) {
                m.gameId = d.gameId | 0;
            }
            if (d.status != null) {
                m.status = d.status | 0;
            }
            return m;
        };

        C_ROOM_LIST.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 2;
                d.scmd = 5;
                d.gameId = 0;
                d.status = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.gameId != null && m.hasOwnProperty("gameId")) {
                d.gameId = m.gameId;
            }
            if (m.status != null && m.hasOwnProperty("status")) {
                d.status = m.status;
            }
            return d;
        };

        C_ROOM_LIST.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C_ROOM_LIST;
    })();

    RoomPto.S_ROOM_LIST = (function() {

        function S_ROOM_LIST(p) {
            this.list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_ROOM_LIST.prototype.cmd = 2;
        S_ROOM_LIST.prototype.scmd = 6;
        S_ROOM_LIST.prototype.list = $util.emptyArray;

        S_ROOM_LIST.create = function create(properties) {
            return new S_ROOM_LIST(properties);
        };

        S_ROOM_LIST.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.list != null && m.list.length) {
                for (var i = 0; i < m.list.length; ++i)
                    $root.RoomPto.RoomInfo.encode(m.list[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        S_ROOM_LIST.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomPto.S_ROOM_LIST();
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
                    if (!(m.list && m.list.length))
                        m.list = [];
                    m.list.push($root.RoomPto.RoomInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_ROOM_LIST.fromObject = function fromObject(d) {
            if (d instanceof $root.RoomPto.S_ROOM_LIST)
                return d;
            var m = new $root.RoomPto.S_ROOM_LIST();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.list) {
                if (!Array.isArray(d.list))
                    throw TypeError(".RoomPto.S_ROOM_LIST.list: array expected");
                m.list = [];
                for (var i = 0; i < d.list.length; ++i) {
                    if (typeof d.list[i] !== "object")
                        throw TypeError(".RoomPto.S_ROOM_LIST.list: object expected");
                    m.list[i] = $root.RoomPto.RoomInfo.fromObject(d.list[i]);
                }
            }
            return m;
        };

        S_ROOM_LIST.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.list = [];
            }
            if (o.defaults) {
                d.cmd = 2;
                d.scmd = 6;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.list && m.list.length) {
                d.list = [];
                for (var j = 0; j < m.list.length; ++j) {
                    d.list[j] = $root.RoomPto.RoomInfo.toObject(m.list[j], o);
                }
            }
            return d;
        };

        S_ROOM_LIST.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_ROOM_LIST;
    })();

    RoomPto.S_BROADCAST_JOIN_ROOM = (function() {

        function S_BROADCAST_JOIN_ROOM(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_BROADCAST_JOIN_ROOM.prototype.cmd = 2;
        S_BROADCAST_JOIN_ROOM.prototype.scmd = 7;
        S_BROADCAST_JOIN_ROOM.prototype.player = null;

        S_BROADCAST_JOIN_ROOM.create = function create(properties) {
            return new S_BROADCAST_JOIN_ROOM(properties);
        };

        S_BROADCAST_JOIN_ROOM.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.player != null && Object.hasOwnProperty.call(m, "player"))
                $root.RoomPto.Player.encode(m.player, w.uint32(26).fork()).ldelim();
            return w;
        };

        S_BROADCAST_JOIN_ROOM.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomPto.S_BROADCAST_JOIN_ROOM();
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
                    m.player = $root.RoomPto.Player.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_BROADCAST_JOIN_ROOM.fromObject = function fromObject(d) {
            if (d instanceof $root.RoomPto.S_BROADCAST_JOIN_ROOM)
                return d;
            var m = new $root.RoomPto.S_BROADCAST_JOIN_ROOM();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.player != null) {
                if (typeof d.player !== "object")
                    throw TypeError(".RoomPto.S_BROADCAST_JOIN_ROOM.player: object expected");
                m.player = $root.RoomPto.Player.fromObject(d.player);
            }
            return m;
        };

        S_BROADCAST_JOIN_ROOM.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 2;
                d.scmd = 7;
                d.player = null;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.player != null && m.hasOwnProperty("player")) {
                d.player = $root.RoomPto.Player.toObject(m.player, o);
            }
            return d;
        };

        S_BROADCAST_JOIN_ROOM.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_BROADCAST_JOIN_ROOM;
    })();

    RoomPto.S_BROADCAST_LEAVE_ROOM = (function() {

        function S_BROADCAST_LEAVE_ROOM(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_BROADCAST_LEAVE_ROOM.prototype.cmd = 2;
        S_BROADCAST_LEAVE_ROOM.prototype.scmd = 8;
        S_BROADCAST_LEAVE_ROOM.prototype.index = 0;

        S_BROADCAST_LEAVE_ROOM.create = function create(properties) {
            return new S_BROADCAST_LEAVE_ROOM(properties);
        };

        S_BROADCAST_LEAVE_ROOM.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.index != null && Object.hasOwnProperty.call(m, "index"))
                w.uint32(24).int32(m.index);
            return w;
        };

        S_BROADCAST_LEAVE_ROOM.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomPto.S_BROADCAST_LEAVE_ROOM();
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
                    m.index = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_BROADCAST_LEAVE_ROOM.fromObject = function fromObject(d) {
            if (d instanceof $root.RoomPto.S_BROADCAST_LEAVE_ROOM)
                return d;
            var m = new $root.RoomPto.S_BROADCAST_LEAVE_ROOM();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.index != null) {
                m.index = d.index | 0;
            }
            return m;
        };

        S_BROADCAST_LEAVE_ROOM.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 2;
                d.scmd = 8;
                d.index = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.index != null && m.hasOwnProperty("index")) {
                d.index = m.index;
            }
            return d;
        };

        S_BROADCAST_LEAVE_ROOM.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_BROADCAST_LEAVE_ROOM;
    })();

    RoomPto.C_READY = (function() {

        function C_READY(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_READY.prototype.cmd = 2;
        C_READY.prototype.scmd = 9;

        C_READY.create = function create(properties) {
            return new C_READY(properties);
        };

        C_READY.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_READY.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomPto.C_READY();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_READY.fromObject = function fromObject(d) {
            if (d instanceof $root.RoomPto.C_READY)
                return d;
            var m = new $root.RoomPto.C_READY();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            return m;
        };

        C_READY.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 2;
                d.scmd = 9;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            return d;
        };

        C_READY.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C_READY;
    })();

    RoomPto.S_PLAYER_READY_STATUS_CHANGE = (function() {

        function S_PLAYER_READY_STATUS_CHANGE(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_PLAYER_READY_STATUS_CHANGE.prototype.cmd = 2;
        S_PLAYER_READY_STATUS_CHANGE.prototype.scmd = 10;
        S_PLAYER_READY_STATUS_CHANGE.prototype.index = 0;
        S_PLAYER_READY_STATUS_CHANGE.prototype.isReady = false;

        S_PLAYER_READY_STATUS_CHANGE.create = function create(properties) {
            return new S_PLAYER_READY_STATUS_CHANGE(properties);
        };

        S_PLAYER_READY_STATUS_CHANGE.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.index != null && Object.hasOwnProperty.call(m, "index"))
                w.uint32(24).int32(m.index);
            if (m.isReady != null && Object.hasOwnProperty.call(m, "isReady"))
                w.uint32(32).bool(m.isReady);
            return w;
        };

        S_PLAYER_READY_STATUS_CHANGE.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomPto.S_PLAYER_READY_STATUS_CHANGE();
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
                    m.index = r.int32();
                    break;
                case 4:
                    m.isReady = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_PLAYER_READY_STATUS_CHANGE.fromObject = function fromObject(d) {
            if (d instanceof $root.RoomPto.S_PLAYER_READY_STATUS_CHANGE)
                return d;
            var m = new $root.RoomPto.S_PLAYER_READY_STATUS_CHANGE();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.index != null) {
                m.index = d.index | 0;
            }
            if (d.isReady != null) {
                m.isReady = Boolean(d.isReady);
            }
            return m;
        };

        S_PLAYER_READY_STATUS_CHANGE.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 2;
                d.scmd = 10;
                d.index = 0;
                d.isReady = false;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.index != null && m.hasOwnProperty("index")) {
                d.index = m.index;
            }
            if (m.isReady != null && m.hasOwnProperty("isReady")) {
                d.isReady = m.isReady;
            }
            return d;
        };

        S_PLAYER_READY_STATUS_CHANGE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_PLAYER_READY_STATUS_CHANGE;
    })();

    RoomPto.C_LEAVE_ROOM = (function() {

        function C_LEAVE_ROOM(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_LEAVE_ROOM.prototype.cmd = 2;
        C_LEAVE_ROOM.prototype.scmd = 11;

        C_LEAVE_ROOM.create = function create(properties) {
            return new C_LEAVE_ROOM(properties);
        };

        C_LEAVE_ROOM.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_LEAVE_ROOM.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.RoomPto.C_LEAVE_ROOM();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_LEAVE_ROOM.fromObject = function fromObject(d) {
            if (d instanceof $root.RoomPto.C_LEAVE_ROOM)
                return d;
            var m = new $root.RoomPto.C_LEAVE_ROOM();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            return m;
        };

        C_LEAVE_ROOM.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 2;
                d.scmd = 11;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            return d;
        };

        C_LEAVE_ROOM.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C_LEAVE_ROOM;
    })();

    return RoomPto;
})();

$root.SystemPto = (function() {

    var SystemPto = {};

    SystemPto.S_TIPS = (function() {

        function S_TIPS(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_TIPS.prototype.cmd = 3;
        S_TIPS.prototype.scmd = 1;
        S_TIPS.prototype.msg = "";
        S_TIPS.prototype.hoverTime = 0;

        S_TIPS.create = function create(properties) {
            return new S_TIPS(properties);
        };

        S_TIPS.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.msg != null && Object.hasOwnProperty.call(m, "msg"))
                w.uint32(26).string(m.msg);
            if (m.hoverTime != null && Object.hasOwnProperty.call(m, "hoverTime"))
                w.uint32(32).int32(m.hoverTime);
            return w;
        };

        S_TIPS.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.SystemPto.S_TIPS();
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
                case 4:
                    m.hoverTime = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_TIPS.fromObject = function fromObject(d) {
            if (d instanceof $root.SystemPto.S_TIPS)
                return d;
            var m = new $root.SystemPto.S_TIPS();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.msg != null) {
                m.msg = String(d.msg);
            }
            if (d.hoverTime != null) {
                m.hoverTime = d.hoverTime | 0;
            }
            return m;
        };

        S_TIPS.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 3;
                d.scmd = 1;
                d.msg = "";
                d.hoverTime = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.msg != null && m.hasOwnProperty("msg")) {
                d.msg = m.msg;
            }
            if (m.hoverTime != null && m.hasOwnProperty("hoverTime")) {
                d.hoverTime = m.hoverTime;
            }
            return d;
        };

        S_TIPS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_TIPS;
    })();

    return SystemPto;
})();

module.exports = $root;
