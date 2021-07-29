var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.HallPto = (function() {

    /**
     * Namespace HallPto.
     * @exports HallPto
     * @namespace
     */
    var HallPto = {};

    /**
     * LOGIN enum.
     * @name HallPto.LOGIN
     * @enum {number}
     * @property {number} CS_LOGIN=1 CS_LOGIN value
     */
    HallPto.LOGIN = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "CS_LOGIN"] = 1;
        return values;
    })();

    HallPto.C_Login = (function() {

        /**
         * Properties of a C_Login.
         * @memberof HallPto
         * @interface IC_Login
         * @property {CmdProto.SYS_CMD|null} [cmd] C_Login cmd
         * @property {HallPto.LOGIN|null} [scmd] C_Login scmd
         * @property {string|null} [userName] C_Login userName
         */

        /**
         * Constructs a new C_Login.
         * @memberof HallPto
         * @classdesc Represents a C_Login.
         * @implements IC_Login
         * @constructor
         * @param {HallPto.IC_Login=} [properties] Properties to set
         */
        function C_Login(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_Login cmd.
         * @member {CmdProto.SYS_CMD} cmd
         * @memberof HallPto.C_Login
         * @instance
         */
        C_Login.prototype.cmd = 0;

        /**
         * C_Login scmd.
         * @member {HallPto.LOGIN} scmd
         * @memberof HallPto.C_Login
         * @instance
         */
        C_Login.prototype.scmd = 1;

        /**
         * C_Login userName.
         * @member {string} userName
         * @memberof HallPto.C_Login
         * @instance
         */
        C_Login.prototype.userName = "";

        /**
         * Creates a new C_Login instance using the specified properties.
         * @function create
         * @memberof HallPto.C_Login
         * @static
         * @param {HallPto.IC_Login=} [properties] Properties to set
         * @returns {HallPto.C_Login} C_Login instance
         */
        C_Login.create = function create(properties) {
            return new C_Login(properties);
        };

        /**
         * Encodes the specified C_Login message. Does not implicitly {@link HallPto.C_Login.verify|verify} messages.
         * @function encode
         * @memberof HallPto.C_Login
         * @static
         * @param {HallPto.IC_Login} message C_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_Login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userName);
            return writer;
        };

        /**
         * Encodes the specified C_Login message, length delimited. Does not implicitly {@link HallPto.C_Login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HallPto.C_Login
         * @static
         * @param {HallPto.IC_Login} message C_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_Login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C_Login message from the specified reader or buffer.
         * @function decode
         * @memberof HallPto.C_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.C_Login} C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_Login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.C_Login();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                case 3:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C_Login message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HallPto.C_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HallPto.C_Login} C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_Login.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C_Login message.
         * @function verify
         * @memberof HallPto.C_Login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C_Login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                switch (message.cmd) {
                default:
                    return "cmd: enum value expected";
                case 0:
                    break;
                }
            if (message.scmd != null && message.hasOwnProperty("scmd"))
                switch (message.scmd) {
                default:
                    return "scmd: enum value expected";
                case 1:
                    break;
                }
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            return null;
        };

        return C_Login;
    })();

    return HallPto;
})();

$root.CmdProto = (function() {

    /**
     * Namespace CmdProto.
     * @exports CmdProto
     * @namespace
     */
    var CmdProto = {};

    /**
     * SYS_CMD enum.
     * @name CmdProto.SYS_CMD
     * @enum {number}
     * @property {number} SYS_LOGIN=0 SYS_LOGIN value
     */
    CmdProto.SYS_CMD = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SYS_LOGIN"] = 0;
        return values;
    })();

    return CmdProto;
})();