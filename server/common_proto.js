/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.HallPto = (function() {

    var HallPto = {};

    HallPto.LOGIN = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "CS_LOGIN"] = 1;
        return values;
    })();

    HallPto.C_Login = (function() {

        function C_Login(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_Login.prototype.cmd = 0;
        C_Login.prototype.scmd = 1;
        C_Login.prototype.userName = "";

        C_Login.create = function create(properties) {
            return new C_Login(properties);
        };

        C_Login.encode = function encode(m, w) {
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

        C_Login.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.HallPto.C_Login();
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

        C_Login.fromObject = function fromObject(d) {
            if (d instanceof $root.HallPto.C_Login)
                return d;
            var m = new $root.HallPto.C_Login();
            switch (d.cmd) {
            case "SYS_LOGIN":
            case 0:
                m.cmd = 0;
                break;
            }
            switch (d.scmd) {
            case "CS_LOGIN":
            case 1:
                m.scmd = 1;
                break;
            }
            if (d.userName != null) {
                m.userName = String(d.userName);
            }
            return m;
        };

        C_Login.toObject = function toObject(m, o) {
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
                d.scmd = o.enums === String ? $root.HallPto.LOGIN[m.scmd] : m.scmd;
            }
            if (m.userName != null && m.hasOwnProperty("userName")) {
                d.userName = m.userName;
            }
            return d;
        };

        C_Login.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C_Login;
    })();

    return HallPto;
})();

$root.CmdProto = (function() {

    var CmdProto = {};

    CmdProto.SYS_CMD = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SYS_LOGIN"] = 0;
        return values;
    })();

    return CmdProto;
})();

module.exports = $root;
