/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GamePto1001 = (function() {

    var GamePto1001 = {};

    GamePto1001.S_INIT_SCENE = (function() {

        function S_INIT_SCENE(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_INIT_SCENE.prototype.cmd = 1001;
        S_INIT_SCENE.prototype.scmd = 1;
        S_INIT_SCENE.prototype.tableSeq = "";

        S_INIT_SCENE.create = function create(properties) {
            return new S_INIT_SCENE(properties);
        };

        S_INIT_SCENE.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.tableSeq != null && Object.hasOwnProperty.call(m, "tableSeq"))
                w.uint32(26).string(m.tableSeq);
            return w;
        };

        S_INIT_SCENE.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GamePto1001.S_INIT_SCENE();
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
                    m.tableSeq = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        S_INIT_SCENE.fromObject = function fromObject(d) {
            if (d instanceof $root.GamePto1001.S_INIT_SCENE)
                return d;
            var m = new $root.GamePto1001.S_INIT_SCENE();
            if (d.cmd != null) {
                m.cmd = d.cmd | 0;
            }
            if (d.scmd != null) {
                m.scmd = d.scmd | 0;
            }
            if (d.tableSeq != null) {
                m.tableSeq = String(d.tableSeq);
            }
            return m;
        };

        S_INIT_SCENE.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.cmd = 1001;
                d.scmd = 1;
                d.tableSeq = "";
            }
            if (m.cmd != null && m.hasOwnProperty("cmd")) {
                d.cmd = m.cmd;
            }
            if (m.scmd != null && m.hasOwnProperty("scmd")) {
                d.scmd = m.scmd;
            }
            if (m.tableSeq != null && m.hasOwnProperty("tableSeq")) {
                d.tableSeq = m.tableSeq;
            }
            return d;
        };

        S_INIT_SCENE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S_INIT_SCENE;
    })();

    return GamePto1001;
})();

module.exports = $root;
