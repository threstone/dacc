var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.LoginPto = (function() {

    /**
     * Namespace LoginPto.
     * @exports LoginPto
     * @namespace
     */
    var LoginPto = {};

    /**
     * LOGIN enum.
     * @name LoginPto.LOGIN
     * @enum {number}
     * @property {number} CS_LOGIN=1 CS_LOGIN value
     * @property {number} SC_LOGIN=2 SC_LOGIN value
     */
    LoginPto.LOGIN = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "CS_LOGIN"] = 1;
        values[valuesById[2] = "SC_LOGIN"] = 2;
        return values;
    })();

    LoginPto.C_LOGIN = (function() {

        /**
         * Properties of a C_LOGIN.
         * @memberof LoginPto
         * @interface IC_LOGIN
         * @property {CmdProto.SYS_CMD|null} [cmd] C_LOGIN cmd
         * @property {LoginPto.LOGIN|null} [scmd] C_LOGIN scmd
         * @property {string|null} [userName] C_LOGIN userName
         */

        /**
         * Constructs a new C_LOGIN.
         * @memberof LoginPto
         * @classdesc Represents a C_LOGIN.
         * @implements IC_LOGIN
         * @constructor
         * @param {LoginPto.IC_LOGIN=} [properties] Properties to set
         */
        function C_LOGIN(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_LOGIN cmd.
         * @member {CmdProto.SYS_CMD} cmd
         * @memberof LoginPto.C_LOGIN
         * @instance
         */
        C_LOGIN.prototype.cmd = 0;

        /**
         * C_LOGIN scmd.
         * @member {LoginPto.LOGIN} scmd
         * @memberof LoginPto.C_LOGIN
         * @instance
         */
        C_LOGIN.prototype.scmd = 1;

        /**
         * C_LOGIN userName.
         * @member {string} userName
         * @memberof LoginPto.C_LOGIN
         * @instance
         */
        C_LOGIN.prototype.userName = "";

        /**
         * Creates a new C_LOGIN instance using the specified properties.
         * @function create
         * @memberof LoginPto.C_LOGIN
         * @static
         * @param {LoginPto.IC_LOGIN=} [properties] Properties to set
         * @returns {LoginPto.C_LOGIN} C_LOGIN instance
         */
        C_LOGIN.create = function create(properties) {
            return new C_LOGIN(properties);
        };

        /**
         * Encodes the specified C_LOGIN message. Does not implicitly {@link LoginPto.C_LOGIN.verify|verify} messages.
         * @function encode
         * @memberof LoginPto.C_LOGIN
         * @static
         * @param {LoginPto.IC_LOGIN} message C_LOGIN message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_LOGIN.encode = function encode(message, writer) {
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
         * Encodes the specified C_LOGIN message, length delimited. Does not implicitly {@link LoginPto.C_LOGIN.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginPto.C_LOGIN
         * @static
         * @param {LoginPto.IC_LOGIN} message C_LOGIN message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_LOGIN.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C_LOGIN message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPto.C_LOGIN
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPto.C_LOGIN} C_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_LOGIN.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPto.C_LOGIN();
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
         * Decodes a C_LOGIN message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginPto.C_LOGIN
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginPto.C_LOGIN} C_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_LOGIN.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C_LOGIN message.
         * @function verify
         * @memberof LoginPto.C_LOGIN
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C_LOGIN.verify = function verify(message) {
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
                case 2:
                    break;
                }
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            return null;
        };

        return C_LOGIN;
    })();

    LoginPto.S_LOGIN = (function() {

        /**
         * Properties of a S_LOGIN.
         * @memberof LoginPto
         * @interface IS_LOGIN
         * @property {CmdProto.SYS_CMD|null} [cmd] S_LOGIN cmd
         * @property {LoginPto.LOGIN|null} [scmd] S_LOGIN scmd
         * @property {boolean|null} [isSuccess] S_LOGIN isSuccess
         */

        /**
         * Constructs a new S_LOGIN.
         * @memberof LoginPto
         * @classdesc Represents a S_LOGIN.
         * @implements IS_LOGIN
         * @constructor
         * @param {LoginPto.IS_LOGIN=} [properties] Properties to set
         */
        function S_LOGIN(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_LOGIN cmd.
         * @member {CmdProto.SYS_CMD} cmd
         * @memberof LoginPto.S_LOGIN
         * @instance
         */
        S_LOGIN.prototype.cmd = 0;

        /**
         * S_LOGIN scmd.
         * @member {LoginPto.LOGIN} scmd
         * @memberof LoginPto.S_LOGIN
         * @instance
         */
        S_LOGIN.prototype.scmd = 2;

        /**
         * S_LOGIN isSuccess.
         * @member {boolean} isSuccess
         * @memberof LoginPto.S_LOGIN
         * @instance
         */
        S_LOGIN.prototype.isSuccess = false;

        /**
         * Creates a new S_LOGIN instance using the specified properties.
         * @function create
         * @memberof LoginPto.S_LOGIN
         * @static
         * @param {LoginPto.IS_LOGIN=} [properties] Properties to set
         * @returns {LoginPto.S_LOGIN} S_LOGIN instance
         */
        S_LOGIN.create = function create(properties) {
            return new S_LOGIN(properties);
        };

        /**
         * Encodes the specified S_LOGIN message. Does not implicitly {@link LoginPto.S_LOGIN.verify|verify} messages.
         * @function encode
         * @memberof LoginPto.S_LOGIN
         * @static
         * @param {LoginPto.IS_LOGIN} message S_LOGIN message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_LOGIN.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.isSuccess != null && Object.hasOwnProperty.call(message, "isSuccess"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isSuccess);
            return writer;
        };

        /**
         * Encodes the specified S_LOGIN message, length delimited. Does not implicitly {@link LoginPto.S_LOGIN.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginPto.S_LOGIN
         * @static
         * @param {LoginPto.IS_LOGIN} message S_LOGIN message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_LOGIN.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S_LOGIN message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPto.S_LOGIN
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPto.S_LOGIN} S_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_LOGIN.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPto.S_LOGIN();
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
                    message.isSuccess = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S_LOGIN message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginPto.S_LOGIN
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginPto.S_LOGIN} S_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_LOGIN.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S_LOGIN message.
         * @function verify
         * @memberof LoginPto.S_LOGIN
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S_LOGIN.verify = function verify(message) {
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
                case 2:
                    break;
                }
            if (message.isSuccess != null && message.hasOwnProperty("isSuccess"))
                if (typeof message.isSuccess !== "boolean")
                    return "isSuccess: boolean expected";
            return null;
        };

        return S_LOGIN;
    })();

    return LoginPto;
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