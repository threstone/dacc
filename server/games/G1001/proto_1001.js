/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GamePto1001 = (function() {

    var GamePto1001 = {};

    GamePto1001.Player_1001 = (function() {

        function Player_1001(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Player_1001.prototype.index = 0;
        Player_1001.prototype.headIndex = 0;
        Player_1001.prototype.nick = "";
        Player_1001.prototype.isOutSword = false;
        Player_1001.prototype.outSword = 0;

        Player_1001.create = function create(properties) {
            return new Player_1001(properties);
        };

        Player_1001.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.index != null && Object.hasOwnProperty.call(m, "index"))
                w.uint32(8).int32(m.index);
            if (m.headIndex != null && Object.hasOwnProperty.call(m, "headIndex"))
                w.uint32(16).int32(m.headIndex);
            if (m.nick != null && Object.hasOwnProperty.call(m, "nick"))
                w.uint32(26).string(m.nick);
            if (m.isOutSword != null && Object.hasOwnProperty.call(m, "isOutSword"))
                w.uint32(32).bool(m.isOutSword);
            if (m.outSword != null && Object.hasOwnProperty.call(m, "outSword"))
                w.uint32(40).int32(m.outSword);
            return w;
        };

        Player_1001.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto1001.Player_1001();
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
                    m.isOutSword = r.bool();
                    break;
                case 5:
                    m.outSword = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        Player_1001.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto1001.Player_1001)
                return d;
            var m = new $root.GamePto1001.Player_1001();
            if (d.index != null) {
                m.index = d.index | 0;
            }
            if (d.headIndex != null) {
                m.headIndex = d.headIndex | 0;
            }
            if (d.nick != null) {
                m.nick = String(d.nick);
            }
            if (d.isOutSword != null) {
                m.isOutSword = Boolean(d.isOutSword);
            }
            if (d.outSword != null) {
                m.outSword = d.outSword | 0;
            }
            return m;
        };

        Player_1001.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.index = 0;
                d.headIndex = 0;
                d.nick = "";
                d.isOutSword = false;
                d.outSword = 0;
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
            if (m.isOutSword != null && m.hasOwnProperty("isOutSword")) {
                d.isOutSword = m.isOutSword;
            }
            if (m.outSword != null && m.hasOwnProperty("outSword")) {
                d.outSword = m.outSword;
            }
            return d;
        };

        Player_1001.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Player_1001;
    })();

    GamePto1001.S_GAME_START_1001 = (function() {

        function S_GAME_START_1001(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_GAME_START_1001.prototype.cmd = 1001;
        S_GAME_START_1001.prototype.scmd = 1;

        S_GAME_START_1001.create = function create(properties) {
            return new S_GAME_START_1001(properties);
        };

        S_GAME_START_1001.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        S_GAME_START_1001.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto1001.S_GAME_START_1001();
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

        S_GAME_START_1001.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto1001.S_GAME_START_1001)
                return d;
            var m = new $root.GamePto1001.S_GAME_START_1001();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            return m;
        };

        S_GAME_START_1001.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 1001;
                d.scmd = 1;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            return d;
        };

        S_GAME_START_1001.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_GAME_START_1001;
    })();

    GamePto1001.C_REQUEST_SWORD_1001 = (function() {

        function C_REQUEST_SWORD_1001(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_REQUEST_SWORD_1001.prototype.cmd = 1001;
        C_REQUEST_SWORD_1001.prototype.scmd = 2;
        C_REQUEST_SWORD_1001.prototype.sword = 0;

        C_REQUEST_SWORD_1001.create = function create(properties) {
            return new C_REQUEST_SWORD_1001(properties);
        };

        C_REQUEST_SWORD_1001.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.sword != null && Object.hasOwnProperty.call(m, "sword"))
                w.uint32(24).int32(m.sword);
            return w;
        };

        C_REQUEST_SWORD_1001.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto1001.C_REQUEST_SWORD_1001();
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
                    m.sword = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        C_REQUEST_SWORD_1001.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto1001.C_REQUEST_SWORD_1001)
                return d;
            var m = new $root.GamePto1001.C_REQUEST_SWORD_1001();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.sword != null) {
                m.sword = d.sword | 0;
            }
            return m;
        };

        C_REQUEST_SWORD_1001.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 1001;
                d.scmd = 2;
                d.sword = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.sword != null && m.hasOwnProperty("sword")) {
                d.sword = m.sword;
            }
            return d;
        };

        C_REQUEST_SWORD_1001.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C_REQUEST_SWORD_1001;
    })();

    GamePto1001.S_BROADCAST_SWORD_1001 = (function() {

        function S_BROADCAST_SWORD_1001(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_BROADCAST_SWORD_1001.prototype.cmd = 1001;
        S_BROADCAST_SWORD_1001.prototype.scmd = 3;
        S_BROADCAST_SWORD_1001.prototype.index = 0;
        S_BROADCAST_SWORD_1001.prototype.sword = 0;

        S_BROADCAST_SWORD_1001.create = function create(properties) {
            return new S_BROADCAST_SWORD_1001(properties);
        };

        S_BROADCAST_SWORD_1001.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.index != null && Object.hasOwnProperty.call(m, "index"))
                w.uint32(24).int32(m.index);
            if (m.sword != null && Object.hasOwnProperty.call(m, "sword"))
                w.uint32(32).int32(m.sword);
            return w;
        };

        S_BROADCAST_SWORD_1001.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto1001.S_BROADCAST_SWORD_1001();
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
                    m.sword = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_BROADCAST_SWORD_1001.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto1001.S_BROADCAST_SWORD_1001)
                return d;
            var m = new $root.GamePto1001.S_BROADCAST_SWORD_1001();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.index != null) {
                m.index = d.index | 0;
            }
            if (d.sword != null) {
                m.sword = d.sword | 0;
            }
            return m;
        };

        S_BROADCAST_SWORD_1001.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 1001;
                d.scmd = 3;
                d.index = 0;
                d.sword = 0;
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
            if (m.sword != null && m.hasOwnProperty("sword")) {
                d.sword = m.sword;
            }
            return d;
        };

        S_BROADCAST_SWORD_1001.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_BROADCAST_SWORD_1001;
    })();

    GamePto1001.S_START_OUT_SWORD_1001 = (function() {

        function S_START_OUT_SWORD_1001(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_START_OUT_SWORD_1001.prototype.cmd = 1001;
        S_START_OUT_SWORD_1001.prototype.scmd = 4;
        S_START_OUT_SWORD_1001.prototype.isStartGame = false;

        S_START_OUT_SWORD_1001.create = function create(properties) {
            return new S_START_OUT_SWORD_1001(properties);
        };

        S_START_OUT_SWORD_1001.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.isStartGame != null && Object.hasOwnProperty.call(m, "isStartGame"))
                w.uint32(24).bool(m.isStartGame);
            return w;
        };

        S_START_OUT_SWORD_1001.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto1001.S_START_OUT_SWORD_1001();
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
                    m.isStartGame = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_START_OUT_SWORD_1001.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto1001.S_START_OUT_SWORD_1001)
                return d;
            var m = new $root.GamePto1001.S_START_OUT_SWORD_1001();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.isStartGame != null) {
                m.isStartGame = Boolean(d.isStartGame);
            }
            return m;
        };

        S_START_OUT_SWORD_1001.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 1001;
                d.scmd = 4;
                d.isStartGame = false;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.isStartGame != null && m.hasOwnProperty("isStartGame")) {
                d.isStartGame = m.isStartGame;
            }
            return d;
        };

        S_START_OUT_SWORD_1001.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_START_OUT_SWORD_1001;
    })();

    GamePto1001.S_GAME_RESULT_1001 = (function() {

        function S_GAME_RESULT_1001(p) {
            this.swords = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_GAME_RESULT_1001.prototype.cmd = 1001;
        S_GAME_RESULT_1001.prototype.scmd = 5;
        S_GAME_RESULT_1001.prototype.winIndex = 0;
        S_GAME_RESULT_1001.prototype.swords = $util.emptyArray;
        S_GAME_RESULT_1001.prototype.leftWinTimes = 0;
        S_GAME_RESULT_1001.prototype.gameTimes = 0;

        S_GAME_RESULT_1001.create = function create(properties) {
            return new S_GAME_RESULT_1001(properties);
        };

        S_GAME_RESULT_1001.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.winIndex != null && Object.hasOwnProperty.call(m, "winIndex"))
                w.uint32(24).int32(m.winIndex);
            if (m.swords != null && m.swords.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.swords.length; ++i)
                    w.int32(m.swords[i]);
                w.ldelim();
            }
            if (m.leftWinTimes != null && Object.hasOwnProperty.call(m, "leftWinTimes"))
                w.uint32(40).int32(m.leftWinTimes);
            if (m.gameTimes != null && Object.hasOwnProperty.call(m, "gameTimes"))
                w.uint32(48).int32(m.gameTimes);
            return w;
        };

        S_GAME_RESULT_1001.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto1001.S_GAME_RESULT_1001();
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
                    m.winIndex = r.int32();
                    break;
                case 4:
                    if (!(m.swords && m.swords.length))
                        m.swords = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.swords.push(r.int32());
                    } else
                        m.swords.push(r.int32());
                    break;
                case 5:
                    m.leftWinTimes = r.int32();
                    break;
                case 6:
                    m.gameTimes = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_GAME_RESULT_1001.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto1001.S_GAME_RESULT_1001)
                return d;
            var m = new $root.GamePto1001.S_GAME_RESULT_1001();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.winIndex != null) {
                m.winIndex = d.winIndex | 0;
            }
            if (d.swords) {
                if (!Array.isArray(d.swords))
                    throw TypeError(".GamePto1001.S_GAME_RESULT_1001.swords: array expected");
                m.swords = [];
                for (var i = 0; i < d.swords.length; ++i) {
                    m.swords[i] = d.swords[i] | 0;
                }
            }
            if (d.leftWinTimes != null) {
                m.leftWinTimes = d.leftWinTimes | 0;
            }
            if (d.gameTimes != null) {
                m.gameTimes = d.gameTimes | 0;
            }
            return m;
        };

        S_GAME_RESULT_1001.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.swords = [];
            }
            if (o.defaults) {
                d.cmd = 1001;
                d.scmd = 5;
                d.winIndex = 0;
                d.leftWinTimes = 0;
                d.gameTimes = 0;
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.winIndex != null && m.hasOwnProperty("winIndex")) {
                d.winIndex = m.winIndex;
            }
            if (m.swords && m.swords.length) {
                d.swords = [];
                for (var j = 0; j < m.swords.length; ++j) {
                    d.swords[j] = m.swords[j];
                }
            }
            if (m.leftWinTimes != null && m.hasOwnProperty("leftWinTimes")) {
                d.leftWinTimes = m.leftWinTimes;
            }
            if (m.gameTimes != null && m.hasOwnProperty("gameTimes")) {
                d.gameTimes = m.gameTimes;
            }
            return d;
        };

        S_GAME_RESULT_1001.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_GAME_RESULT_1001;
    })();

    GamePto1001.S_SCENE_INIT_1001 = (function() {

        function S_SCENE_INIT_1001(p) {
            this.players = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_SCENE_INIT_1001.prototype.cmd = 1001;
        S_SCENE_INIT_1001.prototype.scmd = 6;
        S_SCENE_INIT_1001.prototype.gameId = 0;
        S_SCENE_INIT_1001.prototype.selfIndex = 0;
        S_SCENE_INIT_1001.prototype.players = $util.emptyArray;
        S_SCENE_INIT_1001.prototype.roomSeq = "";
        S_SCENE_INIT_1001.prototype.leftWinTimes = 0;
        S_SCENE_INIT_1001.prototype.gameTimes = 0;

        S_SCENE_INIT_1001.create = function create(properties) {
            return new S_SCENE_INIT_1001(properties);
        };

        S_SCENE_INIT_1001.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
                w.uint32(24).int32(m.gameId);
            if (m.selfIndex != null && Object.hasOwnProperty.call(m, "selfIndex"))
                w.uint32(32).int32(m.selfIndex);
            if (m.players != null && m.players.length) {
                for (var i = 0; i < m.players.length; ++i)
                    $root.GamePto1001.Player_1001.encode(m.players[i], w.uint32(42).fork()).ldelim();
            }
            if (m.roomSeq != null && Object.hasOwnProperty.call(m, "roomSeq"))
                w.uint32(50).string(m.roomSeq);
            if (m.leftWinTimes != null && Object.hasOwnProperty.call(m, "leftWinTimes"))
                w.uint32(56).int32(m.leftWinTimes);
            if (m.gameTimes != null && Object.hasOwnProperty.call(m, "gameTimes"))
                w.uint32(64).int32(m.gameTimes);
            return w;
        };

        S_SCENE_INIT_1001.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto1001.S_SCENE_INIT_1001();
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
                    m.selfIndex = r.int32();
                    break;
                case 5:
                    if (!(m.players && m.players.length))
                        m.players = [];
                    m.players.push($root.GamePto1001.Player_1001.decode(r, r.uint32()));
                    break;
                case 6:
                    m.roomSeq = r.string();
                    break;
                case 7:
                    m.leftWinTimes = r.int32();
                    break;
                case 8:
                    m.gameTimes = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_SCENE_INIT_1001.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto1001.S_SCENE_INIT_1001)
                return d;
            var m = new $root.GamePto1001.S_SCENE_INIT_1001();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.gameId != null) {
                m.gameId = d.gameId | 0;
            }
            if (d.selfIndex != null) {
                m.selfIndex = d.selfIndex | 0;
            }
            if (d.players) {
                if (!Array.isArray(d.players))
                    throw TypeError(".GamePto1001.S_SCENE_INIT_1001.players: array expected");
                m.players = [];
                for (var i = 0; i < d.players.length; ++i) {
                    if (typeof d.players[i] !== "object")
                        throw TypeError(".GamePto1001.S_SCENE_INIT_1001.players: object expected");
                    m.players[i] = $root.GamePto1001.Player_1001.fromObject(d.players[i]);
                }
            }
            if (d.roomSeq != null) {
                m.roomSeq = String(d.roomSeq);
            }
            if (d.leftWinTimes != null) {
                m.leftWinTimes = d.leftWinTimes | 0;
            }
            if (d.gameTimes != null) {
                m.gameTimes = d.gameTimes | 0;
            }
            return m;
        };

        S_SCENE_INIT_1001.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.players = [];
            }
            if (o.defaults) {
                d.cmd = 1001;
                d.scmd = 6;
                d.gameId = 0;
                d.selfIndex = 0;
                d.roomSeq = "";
                d.leftWinTimes = 0;
                d.gameTimes = 0;
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
            if (m.selfIndex != null && m.hasOwnProperty("selfIndex")) {
                d.selfIndex = m.selfIndex;
            }
            if (m.players && m.players.length) {
                d.players = [];
                for (var j = 0; j < m.players.length; ++j) {
                    d.players[j] = $root.GamePto1001.Player_1001.toObject(m.players[j], o);
                }
            }
            if (m.roomSeq != null && m.hasOwnProperty("roomSeq")) {
                d.roomSeq = m.roomSeq;
            }
            if (m.leftWinTimes != null && m.hasOwnProperty("leftWinTimes")) {
                d.leftWinTimes = m.leftWinTimes;
            }
            if (m.gameTimes != null && m.hasOwnProperty("gameTimes")) {
                d.gameTimes = m.gameTimes;
            }
            return d;
        };

        S_SCENE_INIT_1001.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_SCENE_INIT_1001;
    })();

    return GamePto1001;
})();

module.exports = $root;
