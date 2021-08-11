var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GamePto1001 = (function() {

    /**
     * Namespace GamePto1001.
     * @exports GamePto1001
     * @namespace
     */
    var GamePto1001 = {};

    GamePto1001.Player_1001 = (function() {

        /**
         * Properties of a Player_1001.
         * @memberof GamePto1001
         * @interface IPlayer_1001
         * @property {number|null} [index] Player_1001 index
         * @property {number|null} [headIndex] Player_1001 headIndex
         * @property {string|null} [nick] Player_1001 nick
         * @property {boolean|null} [isOutSword] Player_1001 isOutSword
         * @property {number|null} [outSword] Player_1001 outSword
         */

        /**
         * Constructs a new Player_1001.
         * @memberof GamePto1001
         * @classdesc Represents a Player_1001.
         * @implements IPlayer_1001
         * @constructor
         * @param {GamePto1001.IPlayer_1001=} [properties] Properties to set
         */
        function Player_1001(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player_1001 index.
         * @member {number} index
         * @memberof GamePto1001.Player_1001
         * @instance
         */
        Player_1001.prototype.index = 0;

        /**
         * Player_1001 headIndex.
         * @member {number} headIndex
         * @memberof GamePto1001.Player_1001
         * @instance
         */
        Player_1001.prototype.headIndex = 0;

        /**
         * Player_1001 nick.
         * @member {string} nick
         * @memberof GamePto1001.Player_1001
         * @instance
         */
        Player_1001.prototype.nick = "";

        /**
         * Player_1001 isOutSword.
         * @member {boolean} isOutSword
         * @memberof GamePto1001.Player_1001
         * @instance
         */
        Player_1001.prototype.isOutSword = false;

        /**
         * Player_1001 outSword.
         * @member {number} outSword
         * @memberof GamePto1001.Player_1001
         * @instance
         */
        Player_1001.prototype.outSword = 0;

        /**
         * Encodes the specified Player_1001 message. Does not implicitly {@link GamePto1001.Player_1001.verify|verify} messages.
         * @function encode
         * @memberof GamePto1001.Player_1001
         * @static
         * @param {GamePto1001.IPlayer_1001} message Player_1001 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player_1001.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
            if (message.headIndex != null && Object.hasOwnProperty.call(message, "headIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.headIndex);
            if (message.nick != null && Object.hasOwnProperty.call(message, "nick"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nick);
            if (message.isOutSword != null && Object.hasOwnProperty.call(message, "isOutSword"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isOutSword);
            if (message.outSword != null && Object.hasOwnProperty.call(message, "outSword"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.outSword);
            return writer;
        };

        /**
         * Decodes a Player_1001 message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto1001.Player_1001
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto1001.Player_1001} Player_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player_1001.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto1001.Player_1001();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.int32();
                    break;
                case 2:
                    message.headIndex = reader.int32();
                    break;
                case 3:
                    message.nick = reader.string();
                    break;
                case 4:
                    message.isOutSword = reader.bool();
                    break;
                case 5:
                    message.outSword = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Player_1001;
    })();

    GamePto1001.S_GAME_START_1001 = (function() {

        /**
         * Properties of a S_GAME_START_1001.
         * @memberof GamePto1001
         * @interface IS_GAME_START_1001
         * @property {number|null} [cmd] S_GAME_START_1001 cmd
         * @property {number|null} [scmd] S_GAME_START_1001 scmd
         */

        /**
         * Constructs a new S_GAME_START_1001.
         * @memberof GamePto1001
         * @classdesc Represents a S_GAME_START_1001.
         * @implements IS_GAME_START_1001
         * @constructor
         * @param {GamePto1001.IS_GAME_START_1001=} [properties] Properties to set
         */
        function S_GAME_START_1001(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_GAME_START_1001 cmd.
         * @member {number} cmd
         * @memberof GamePto1001.S_GAME_START_1001
         * @instance
         */
        S_GAME_START_1001.prototype.cmd = 1001;

        /**
         * S_GAME_START_1001 scmd.
         * @member {number} scmd
         * @memberof GamePto1001.S_GAME_START_1001
         * @instance
         */
        S_GAME_START_1001.prototype.scmd = 1;

        /**
         * Encodes the specified S_GAME_START_1001 message. Does not implicitly {@link GamePto1001.S_GAME_START_1001.verify|verify} messages.
         * @function encode
         * @memberof GamePto1001.S_GAME_START_1001
         * @static
         * @param {GamePto1001.IS_GAME_START_1001} message S_GAME_START_1001 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_GAME_START_1001.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            return writer;
        };

        /**
         * Decodes a S_GAME_START_1001 message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto1001.S_GAME_START_1001
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto1001.S_GAME_START_1001} S_GAME_START_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_GAME_START_1001.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto1001.S_GAME_START_1001();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_GAME_START_1001;
    })();

    GamePto1001.C_REQUEST_SWORD_1001 = (function() {

        /**
         * Properties of a C_REQUEST_SWORD_1001.
         * @memberof GamePto1001
         * @interface IC_REQUEST_SWORD_1001
         * @property {number|null} [cmd] C_REQUEST_SWORD_1001 cmd
         * @property {number|null} [scmd] C_REQUEST_SWORD_1001 scmd
         * @property {number|null} [sword] C_REQUEST_SWORD_1001 sword
         */

        /**
         * Constructs a new C_REQUEST_SWORD_1001.
         * @memberof GamePto1001
         * @classdesc Represents a C_REQUEST_SWORD_1001.
         * @implements IC_REQUEST_SWORD_1001
         * @constructor
         * @param {GamePto1001.IC_REQUEST_SWORD_1001=} [properties] Properties to set
         */
        function C_REQUEST_SWORD_1001(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_REQUEST_SWORD_1001 cmd.
         * @member {number} cmd
         * @memberof GamePto1001.C_REQUEST_SWORD_1001
         * @instance
         */
        C_REQUEST_SWORD_1001.prototype.cmd = 1001;

        /**
         * C_REQUEST_SWORD_1001 scmd.
         * @member {number} scmd
         * @memberof GamePto1001.C_REQUEST_SWORD_1001
         * @instance
         */
        C_REQUEST_SWORD_1001.prototype.scmd = 2;

        /**
         * C_REQUEST_SWORD_1001 sword.
         * @member {number} sword
         * @memberof GamePto1001.C_REQUEST_SWORD_1001
         * @instance
         */
        C_REQUEST_SWORD_1001.prototype.sword = 0;

        /**
         * Encodes the specified C_REQUEST_SWORD_1001 message. Does not implicitly {@link GamePto1001.C_REQUEST_SWORD_1001.verify|verify} messages.
         * @function encode
         * @memberof GamePto1001.C_REQUEST_SWORD_1001
         * @static
         * @param {GamePto1001.IC_REQUEST_SWORD_1001} message C_REQUEST_SWORD_1001 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_REQUEST_SWORD_1001.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.sword != null && Object.hasOwnProperty.call(message, "sword"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sword);
            return writer;
        };

        /**
         * Decodes a C_REQUEST_SWORD_1001 message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto1001.C_REQUEST_SWORD_1001
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto1001.C_REQUEST_SWORD_1001} C_REQUEST_SWORD_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_REQUEST_SWORD_1001.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto1001.C_REQUEST_SWORD_1001();
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
                    message.sword = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_REQUEST_SWORD_1001;
    })();

    GamePto1001.S_BROADCAST_SWORD_1001 = (function() {

        /**
         * Properties of a S_BROADCAST_SWORD_1001.
         * @memberof GamePto1001
         * @interface IS_BROADCAST_SWORD_1001
         * @property {number|null} [cmd] S_BROADCAST_SWORD_1001 cmd
         * @property {number|null} [scmd] S_BROADCAST_SWORD_1001 scmd
         * @property {number|null} [index] S_BROADCAST_SWORD_1001 index
         * @property {number|null} [sword] S_BROADCAST_SWORD_1001 sword
         */

        /**
         * Constructs a new S_BROADCAST_SWORD_1001.
         * @memberof GamePto1001
         * @classdesc Represents a S_BROADCAST_SWORD_1001.
         * @implements IS_BROADCAST_SWORD_1001
         * @constructor
         * @param {GamePto1001.IS_BROADCAST_SWORD_1001=} [properties] Properties to set
         */
        function S_BROADCAST_SWORD_1001(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_BROADCAST_SWORD_1001 cmd.
         * @member {number} cmd
         * @memberof GamePto1001.S_BROADCAST_SWORD_1001
         * @instance
         */
        S_BROADCAST_SWORD_1001.prototype.cmd = 1001;

        /**
         * S_BROADCAST_SWORD_1001 scmd.
         * @member {number} scmd
         * @memberof GamePto1001.S_BROADCAST_SWORD_1001
         * @instance
         */
        S_BROADCAST_SWORD_1001.prototype.scmd = 3;

        /**
         * S_BROADCAST_SWORD_1001 index.
         * @member {number} index
         * @memberof GamePto1001.S_BROADCAST_SWORD_1001
         * @instance
         */
        S_BROADCAST_SWORD_1001.prototype.index = 0;

        /**
         * S_BROADCAST_SWORD_1001 sword.
         * @member {number} sword
         * @memberof GamePto1001.S_BROADCAST_SWORD_1001
         * @instance
         */
        S_BROADCAST_SWORD_1001.prototype.sword = 0;

        /**
         * Encodes the specified S_BROADCAST_SWORD_1001 message. Does not implicitly {@link GamePto1001.S_BROADCAST_SWORD_1001.verify|verify} messages.
         * @function encode
         * @memberof GamePto1001.S_BROADCAST_SWORD_1001
         * @static
         * @param {GamePto1001.IS_BROADCAST_SWORD_1001} message S_BROADCAST_SWORD_1001 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_BROADCAST_SWORD_1001.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.index);
            if (message.sword != null && Object.hasOwnProperty.call(message, "sword"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sword);
            return writer;
        };

        /**
         * Decodes a S_BROADCAST_SWORD_1001 message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto1001.S_BROADCAST_SWORD_1001
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto1001.S_BROADCAST_SWORD_1001} S_BROADCAST_SWORD_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_BROADCAST_SWORD_1001.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto1001.S_BROADCAST_SWORD_1001();
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
                    message.index = reader.int32();
                    break;
                case 4:
                    message.sword = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_BROADCAST_SWORD_1001;
    })();

    GamePto1001.S_START_OUT_SWORD_1001 = (function() {

        /**
         * Properties of a S_START_OUT_SWORD_1001.
         * @memberof GamePto1001
         * @interface IS_START_OUT_SWORD_1001
         * @property {number|null} [cmd] S_START_OUT_SWORD_1001 cmd
         * @property {number|null} [scmd] S_START_OUT_SWORD_1001 scmd
         * @property {boolean|null} [isStartGame] S_START_OUT_SWORD_1001 isStartGame
         */

        /**
         * Constructs a new S_START_OUT_SWORD_1001.
         * @memberof GamePto1001
         * @classdesc Represents a S_START_OUT_SWORD_1001.
         * @implements IS_START_OUT_SWORD_1001
         * @constructor
         * @param {GamePto1001.IS_START_OUT_SWORD_1001=} [properties] Properties to set
         */
        function S_START_OUT_SWORD_1001(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_START_OUT_SWORD_1001 cmd.
         * @member {number} cmd
         * @memberof GamePto1001.S_START_OUT_SWORD_1001
         * @instance
         */
        S_START_OUT_SWORD_1001.prototype.cmd = 1001;

        /**
         * S_START_OUT_SWORD_1001 scmd.
         * @member {number} scmd
         * @memberof GamePto1001.S_START_OUT_SWORD_1001
         * @instance
         */
        S_START_OUT_SWORD_1001.prototype.scmd = 4;

        /**
         * S_START_OUT_SWORD_1001 isStartGame.
         * @member {boolean} isStartGame
         * @memberof GamePto1001.S_START_OUT_SWORD_1001
         * @instance
         */
        S_START_OUT_SWORD_1001.prototype.isStartGame = false;

        /**
         * Encodes the specified S_START_OUT_SWORD_1001 message. Does not implicitly {@link GamePto1001.S_START_OUT_SWORD_1001.verify|verify} messages.
         * @function encode
         * @memberof GamePto1001.S_START_OUT_SWORD_1001
         * @static
         * @param {GamePto1001.IS_START_OUT_SWORD_1001} message S_START_OUT_SWORD_1001 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_START_OUT_SWORD_1001.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.isStartGame != null && Object.hasOwnProperty.call(message, "isStartGame"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isStartGame);
            return writer;
        };

        /**
         * Decodes a S_START_OUT_SWORD_1001 message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto1001.S_START_OUT_SWORD_1001
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto1001.S_START_OUT_SWORD_1001} S_START_OUT_SWORD_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_START_OUT_SWORD_1001.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto1001.S_START_OUT_SWORD_1001();
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
                    message.isStartGame = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_START_OUT_SWORD_1001;
    })();

    GamePto1001.S_GAME_RESULT_1001 = (function() {

        /**
         * Properties of a S_GAME_RESULT_1001.
         * @memberof GamePto1001
         * @interface IS_GAME_RESULT_1001
         * @property {number|null} [cmd] S_GAME_RESULT_1001 cmd
         * @property {number|null} [scmd] S_GAME_RESULT_1001 scmd
         * @property {number|null} [winIndex] S_GAME_RESULT_1001 winIndex
         * @property {Array.<number>|null} [swords] S_GAME_RESULT_1001 swords
         * @property {number|null} [leftWinTimes] S_GAME_RESULT_1001 leftWinTimes
         * @property {number|null} [gameTimes] S_GAME_RESULT_1001 gameTimes
         */

        /**
         * Constructs a new S_GAME_RESULT_1001.
         * @memberof GamePto1001
         * @classdesc Represents a S_GAME_RESULT_1001.
         * @implements IS_GAME_RESULT_1001
         * @constructor
         * @param {GamePto1001.IS_GAME_RESULT_1001=} [properties] Properties to set
         */
        function S_GAME_RESULT_1001(properties) {
            this.swords = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_GAME_RESULT_1001 cmd.
         * @member {number} cmd
         * @memberof GamePto1001.S_GAME_RESULT_1001
         * @instance
         */
        S_GAME_RESULT_1001.prototype.cmd = 1001;

        /**
         * S_GAME_RESULT_1001 scmd.
         * @member {number} scmd
         * @memberof GamePto1001.S_GAME_RESULT_1001
         * @instance
         */
        S_GAME_RESULT_1001.prototype.scmd = 5;

        /**
         * S_GAME_RESULT_1001 winIndex.
         * @member {number} winIndex
         * @memberof GamePto1001.S_GAME_RESULT_1001
         * @instance
         */
        S_GAME_RESULT_1001.prototype.winIndex = 0;

        /**
         * S_GAME_RESULT_1001 swords.
         * @member {Array.<number>} swords
         * @memberof GamePto1001.S_GAME_RESULT_1001
         * @instance
         */
        S_GAME_RESULT_1001.prototype.swords = $util.emptyArray;

        /**
         * S_GAME_RESULT_1001 leftWinTimes.
         * @member {number} leftWinTimes
         * @memberof GamePto1001.S_GAME_RESULT_1001
         * @instance
         */
        S_GAME_RESULT_1001.prototype.leftWinTimes = 0;

        /**
         * S_GAME_RESULT_1001 gameTimes.
         * @member {number} gameTimes
         * @memberof GamePto1001.S_GAME_RESULT_1001
         * @instance
         */
        S_GAME_RESULT_1001.prototype.gameTimes = 0;

        /**
         * Encodes the specified S_GAME_RESULT_1001 message. Does not implicitly {@link GamePto1001.S_GAME_RESULT_1001.verify|verify} messages.
         * @function encode
         * @memberof GamePto1001.S_GAME_RESULT_1001
         * @static
         * @param {GamePto1001.IS_GAME_RESULT_1001} message S_GAME_RESULT_1001 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_GAME_RESULT_1001.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.winIndex != null && Object.hasOwnProperty.call(message, "winIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.winIndex);
            if (message.swords != null && message.swords.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.swords.length; ++i)
                    writer.int32(message.swords[i]);
                writer.ldelim();
            }
            if (message.leftWinTimes != null && Object.hasOwnProperty.call(message, "leftWinTimes"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.leftWinTimes);
            if (message.gameTimes != null && Object.hasOwnProperty.call(message, "gameTimes"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.gameTimes);
            return writer;
        };

        /**
         * Decodes a S_GAME_RESULT_1001 message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto1001.S_GAME_RESULT_1001
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto1001.S_GAME_RESULT_1001} S_GAME_RESULT_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_GAME_RESULT_1001.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto1001.S_GAME_RESULT_1001();
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
                    message.winIndex = reader.int32();
                    break;
                case 4:
                    if (!(message.swords && message.swords.length))
                        message.swords = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.swords.push(reader.int32());
                    } else
                        message.swords.push(reader.int32());
                    break;
                case 5:
                    message.leftWinTimes = reader.int32();
                    break;
                case 6:
                    message.gameTimes = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_GAME_RESULT_1001;
    })();

    GamePto1001.S_SCENE_INIT_1001 = (function() {

        /**
         * Properties of a S_SCENE_INIT_1001.
         * @memberof GamePto1001
         * @interface IS_SCENE_INIT_1001
         * @property {number|null} [cmd] S_SCENE_INIT_1001 cmd
         * @property {number|null} [scmd] S_SCENE_INIT_1001 scmd
         * @property {number|null} [gameId] S_SCENE_INIT_1001 gameId
         * @property {number|null} [selfIndex] S_SCENE_INIT_1001 selfIndex
         * @property {Array.<GamePto1001.IPlayer_1001>|null} [players] S_SCENE_INIT_1001 players
         * @property {string|null} [roomSeq] S_SCENE_INIT_1001 roomSeq
         * @property {number|null} [leftWinTimes] S_SCENE_INIT_1001 leftWinTimes
         * @property {number|null} [gameTimes] S_SCENE_INIT_1001 gameTimes
         */

        /**
         * Constructs a new S_SCENE_INIT_1001.
         * @memberof GamePto1001
         * @classdesc Represents a S_SCENE_INIT_1001.
         * @implements IS_SCENE_INIT_1001
         * @constructor
         * @param {GamePto1001.IS_SCENE_INIT_1001=} [properties] Properties to set
         */
        function S_SCENE_INIT_1001(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_SCENE_INIT_1001 cmd.
         * @member {number} cmd
         * @memberof GamePto1001.S_SCENE_INIT_1001
         * @instance
         */
        S_SCENE_INIT_1001.prototype.cmd = 1001;

        /**
         * S_SCENE_INIT_1001 scmd.
         * @member {number} scmd
         * @memberof GamePto1001.S_SCENE_INIT_1001
         * @instance
         */
        S_SCENE_INIT_1001.prototype.scmd = 6;

        /**
         * S_SCENE_INIT_1001 gameId.
         * @member {number} gameId
         * @memberof GamePto1001.S_SCENE_INIT_1001
         * @instance
         */
        S_SCENE_INIT_1001.prototype.gameId = 0;

        /**
         * S_SCENE_INIT_1001 selfIndex.
         * @member {number} selfIndex
         * @memberof GamePto1001.S_SCENE_INIT_1001
         * @instance
         */
        S_SCENE_INIT_1001.prototype.selfIndex = 0;

        /**
         * S_SCENE_INIT_1001 players.
         * @member {Array.<GamePto1001.IPlayer_1001>} players
         * @memberof GamePto1001.S_SCENE_INIT_1001
         * @instance
         */
        S_SCENE_INIT_1001.prototype.players = $util.emptyArray;

        /**
         * S_SCENE_INIT_1001 roomSeq.
         * @member {string} roomSeq
         * @memberof GamePto1001.S_SCENE_INIT_1001
         * @instance
         */
        S_SCENE_INIT_1001.prototype.roomSeq = "";

        /**
         * S_SCENE_INIT_1001 leftWinTimes.
         * @member {number} leftWinTimes
         * @memberof GamePto1001.S_SCENE_INIT_1001
         * @instance
         */
        S_SCENE_INIT_1001.prototype.leftWinTimes = 0;

        /**
         * S_SCENE_INIT_1001 gameTimes.
         * @member {number} gameTimes
         * @memberof GamePto1001.S_SCENE_INIT_1001
         * @instance
         */
        S_SCENE_INIT_1001.prototype.gameTimes = 0;

        /**
         * Encodes the specified S_SCENE_INIT_1001 message. Does not implicitly {@link GamePto1001.S_SCENE_INIT_1001.verify|verify} messages.
         * @function encode
         * @memberof GamePto1001.S_SCENE_INIT_1001
         * @static
         * @param {GamePto1001.IS_SCENE_INIT_1001} message S_SCENE_INIT_1001 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_SCENE_INIT_1001.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gameId);
            if (message.selfIndex != null && Object.hasOwnProperty.call(message, "selfIndex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.selfIndex);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.GamePto1001.Player_1001.encode(message.players[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.roomSeq != null && Object.hasOwnProperty.call(message, "roomSeq"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.roomSeq);
            if (message.leftWinTimes != null && Object.hasOwnProperty.call(message, "leftWinTimes"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.leftWinTimes);
            if (message.gameTimes != null && Object.hasOwnProperty.call(message, "gameTimes"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.gameTimes);
            return writer;
        };

        /**
         * Decodes a S_SCENE_INIT_1001 message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto1001.S_SCENE_INIT_1001
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto1001.S_SCENE_INIT_1001} S_SCENE_INIT_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_SCENE_INIT_1001.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto1001.S_SCENE_INIT_1001();
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
                    message.gameId = reader.int32();
                    break;
                case 4:
                    message.selfIndex = reader.int32();
                    break;
                case 5:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.GamePto1001.Player_1001.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.roomSeq = reader.string();
                    break;
                case 7:
                    message.leftWinTimes = reader.int32();
                    break;
                case 8:
                    message.gameTimes = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_SCENE_INIT_1001;
    })();

    return GamePto1001;
})();

$root.HallPto = (function() {

    /**
     * Namespace HallPto.
     * @exports HallPto
     * @namespace
     */
    var HallPto = {};

    HallPto.GameInfo = (function() {

        /**
         * Properties of a GameInfo.
         * @memberof HallPto
         * @interface IGameInfo
         * @property {number|null} [gameId] GameInfo gameId
         * @property {string|null} [gameName] GameInfo gameName
         */

        /**
         * Constructs a new GameInfo.
         * @memberof HallPto
         * @classdesc Represents a GameInfo.
         * @implements IGameInfo
         * @constructor
         * @param {HallPto.IGameInfo=} [properties] Properties to set
         */
        function GameInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameInfo gameId.
         * @member {number} gameId
         * @memberof HallPto.GameInfo
         * @instance
         */
        GameInfo.prototype.gameId = 0;

        /**
         * GameInfo gameName.
         * @member {string} gameName
         * @memberof HallPto.GameInfo
         * @instance
         */
        GameInfo.prototype.gameName = "";

        /**
         * Encodes the specified GameInfo message. Does not implicitly {@link HallPto.GameInfo.verify|verify} messages.
         * @function encode
         * @memberof HallPto.GameInfo
         * @static
         * @param {HallPto.IGameInfo} message GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameId);
            if (message.gameName != null && Object.hasOwnProperty.call(message, "gameName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameName);
            return writer;
        };

        /**
         * Decodes a GameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof HallPto.GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.GameInfo} GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.GameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameId = reader.int32();
                    break;
                case 2:
                    message.gameName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GameInfo;
    })();

    HallPto.C_SEND_CHAT_MSG = (function() {

        /**
         * Properties of a C_SEND_CHAT_MSG.
         * @memberof HallPto
         * @interface IC_SEND_CHAT_MSG
         * @property {number|null} [cmd] C_SEND_CHAT_MSG cmd
         * @property {number|null} [scmd] C_SEND_CHAT_MSG scmd
         * @property {string|null} [msg] C_SEND_CHAT_MSG msg
         */

        /**
         * Constructs a new C_SEND_CHAT_MSG.
         * @memberof HallPto
         * @classdesc Represents a C_SEND_CHAT_MSG.
         * @implements IC_SEND_CHAT_MSG
         * @constructor
         * @param {HallPto.IC_SEND_CHAT_MSG=} [properties] Properties to set
         */
        function C_SEND_CHAT_MSG(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_SEND_CHAT_MSG cmd.
         * @member {number} cmd
         * @memberof HallPto.C_SEND_CHAT_MSG
         * @instance
         */
        C_SEND_CHAT_MSG.prototype.cmd = 1;

        /**
         * C_SEND_CHAT_MSG scmd.
         * @member {number} scmd
         * @memberof HallPto.C_SEND_CHAT_MSG
         * @instance
         */
        C_SEND_CHAT_MSG.prototype.scmd = 1;

        /**
         * C_SEND_CHAT_MSG msg.
         * @member {string} msg
         * @memberof HallPto.C_SEND_CHAT_MSG
         * @instance
         */
        C_SEND_CHAT_MSG.prototype.msg = "";

        /**
         * Encodes the specified C_SEND_CHAT_MSG message. Does not implicitly {@link HallPto.C_SEND_CHAT_MSG.verify|verify} messages.
         * @function encode
         * @memberof HallPto.C_SEND_CHAT_MSG
         * @static
         * @param {HallPto.IC_SEND_CHAT_MSG} message C_SEND_CHAT_MSG message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_SEND_CHAT_MSG.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
            return writer;
        };

        /**
         * Decodes a C_SEND_CHAT_MSG message from the specified reader or buffer.
         * @function decode
         * @memberof HallPto.C_SEND_CHAT_MSG
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.C_SEND_CHAT_MSG} C_SEND_CHAT_MSG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_SEND_CHAT_MSG.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.C_SEND_CHAT_MSG();
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
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_SEND_CHAT_MSG;
    })();

    HallPto.S_CHAT_MSG = (function() {

        /**
         * Properties of a S_CHAT_MSG.
         * @memberof HallPto
         * @interface IS_CHAT_MSG
         * @property {number|null} [cmd] S_CHAT_MSG cmd
         * @property {number|null} [scmd] S_CHAT_MSG scmd
         * @property {string|null} [nick] S_CHAT_MSG nick
         * @property {string|null} [msg] S_CHAT_MSG msg
         */

        /**
         * Constructs a new S_CHAT_MSG.
         * @memberof HallPto
         * @classdesc Represents a S_CHAT_MSG.
         * @implements IS_CHAT_MSG
         * @constructor
         * @param {HallPto.IS_CHAT_MSG=} [properties] Properties to set
         */
        function S_CHAT_MSG(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_CHAT_MSG cmd.
         * @member {number} cmd
         * @memberof HallPto.S_CHAT_MSG
         * @instance
         */
        S_CHAT_MSG.prototype.cmd = 1;

        /**
         * S_CHAT_MSG scmd.
         * @member {number} scmd
         * @memberof HallPto.S_CHAT_MSG
         * @instance
         */
        S_CHAT_MSG.prototype.scmd = 2;

        /**
         * S_CHAT_MSG nick.
         * @member {string} nick
         * @memberof HallPto.S_CHAT_MSG
         * @instance
         */
        S_CHAT_MSG.prototype.nick = "";

        /**
         * S_CHAT_MSG msg.
         * @member {string} msg
         * @memberof HallPto.S_CHAT_MSG
         * @instance
         */
        S_CHAT_MSG.prototype.msg = "";

        /**
         * Encodes the specified S_CHAT_MSG message. Does not implicitly {@link HallPto.S_CHAT_MSG.verify|verify} messages.
         * @function encode
         * @memberof HallPto.S_CHAT_MSG
         * @static
         * @param {HallPto.IS_CHAT_MSG} message S_CHAT_MSG message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_CHAT_MSG.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.nick != null && Object.hasOwnProperty.call(message, "nick"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nick);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.msg);
            return writer;
        };

        /**
         * Decodes a S_CHAT_MSG message from the specified reader or buffer.
         * @function decode
         * @memberof HallPto.S_CHAT_MSG
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.S_CHAT_MSG} S_CHAT_MSG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_CHAT_MSG.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.S_CHAT_MSG();
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
                    message.nick = reader.string();
                    break;
                case 4:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_CHAT_MSG;
    })();

    HallPto.S_GAME_LIST = (function() {

        /**
         * Properties of a S_GAME_LIST.
         * @memberof HallPto
         * @interface IS_GAME_LIST
         * @property {number|null} [cmd] S_GAME_LIST cmd
         * @property {number|null} [scmd] S_GAME_LIST scmd
         * @property {Array.<HallPto.IGameInfo>|null} [list] S_GAME_LIST list
         */

        /**
         * Constructs a new S_GAME_LIST.
         * @memberof HallPto
         * @classdesc Represents a S_GAME_LIST.
         * @implements IS_GAME_LIST
         * @constructor
         * @param {HallPto.IS_GAME_LIST=} [properties] Properties to set
         */
        function S_GAME_LIST(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_GAME_LIST cmd.
         * @member {number} cmd
         * @memberof HallPto.S_GAME_LIST
         * @instance
         */
        S_GAME_LIST.prototype.cmd = 1;

        /**
         * S_GAME_LIST scmd.
         * @member {number} scmd
         * @memberof HallPto.S_GAME_LIST
         * @instance
         */
        S_GAME_LIST.prototype.scmd = 3;

        /**
         * S_GAME_LIST list.
         * @member {Array.<HallPto.IGameInfo>} list
         * @memberof HallPto.S_GAME_LIST
         * @instance
         */
        S_GAME_LIST.prototype.list = $util.emptyArray;

        /**
         * Encodes the specified S_GAME_LIST message. Does not implicitly {@link HallPto.S_GAME_LIST.verify|verify} messages.
         * @function encode
         * @memberof HallPto.S_GAME_LIST
         * @static
         * @param {HallPto.IS_GAME_LIST} message S_GAME_LIST message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_GAME_LIST.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.HallPto.GameInfo.encode(message.list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_GAME_LIST message from the specified reader or buffer.
         * @function decode
         * @memberof HallPto.S_GAME_LIST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.S_GAME_LIST} S_GAME_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_GAME_LIST.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.S_GAME_LIST();
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
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.HallPto.GameInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_GAME_LIST;
    })();

    HallPto.C_CHANGE_HEAD = (function() {

        /**
         * Properties of a C_CHANGE_HEAD.
         * @memberof HallPto
         * @interface IC_CHANGE_HEAD
         * @property {number|null} [cmd] C_CHANGE_HEAD cmd
         * @property {number|null} [scmd] C_CHANGE_HEAD scmd
         * @property {number|null} [headIndex] C_CHANGE_HEAD headIndex
         */

        /**
         * Constructs a new C_CHANGE_HEAD.
         * @memberof HallPto
         * @classdesc Represents a C_CHANGE_HEAD.
         * @implements IC_CHANGE_HEAD
         * @constructor
         * @param {HallPto.IC_CHANGE_HEAD=} [properties] Properties to set
         */
        function C_CHANGE_HEAD(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_CHANGE_HEAD cmd.
         * @member {number} cmd
         * @memberof HallPto.C_CHANGE_HEAD
         * @instance
         */
        C_CHANGE_HEAD.prototype.cmd = 1;

        /**
         * C_CHANGE_HEAD scmd.
         * @member {number} scmd
         * @memberof HallPto.C_CHANGE_HEAD
         * @instance
         */
        C_CHANGE_HEAD.prototype.scmd = 4;

        /**
         * C_CHANGE_HEAD headIndex.
         * @member {number} headIndex
         * @memberof HallPto.C_CHANGE_HEAD
         * @instance
         */
        C_CHANGE_HEAD.prototype.headIndex = 0;

        /**
         * Encodes the specified C_CHANGE_HEAD message. Does not implicitly {@link HallPto.C_CHANGE_HEAD.verify|verify} messages.
         * @function encode
         * @memberof HallPto.C_CHANGE_HEAD
         * @static
         * @param {HallPto.IC_CHANGE_HEAD} message C_CHANGE_HEAD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_CHANGE_HEAD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.headIndex != null && Object.hasOwnProperty.call(message, "headIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.headIndex);
            return writer;
        };

        /**
         * Decodes a C_CHANGE_HEAD message from the specified reader or buffer.
         * @function decode
         * @memberof HallPto.C_CHANGE_HEAD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.C_CHANGE_HEAD} C_CHANGE_HEAD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_CHANGE_HEAD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.C_CHANGE_HEAD();
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
                    message.headIndex = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_CHANGE_HEAD;
    })();

    HallPto.C_ONLINE_LIST = (function() {

        /**
         * Properties of a C_ONLINE_LIST.
         * @memberof HallPto
         * @interface IC_ONLINE_LIST
         * @property {number|null} [cmd] C_ONLINE_LIST cmd
         * @property {number|null} [scmd] C_ONLINE_LIST scmd
         */

        /**
         * Constructs a new C_ONLINE_LIST.
         * @memberof HallPto
         * @classdesc Represents a C_ONLINE_LIST.
         * @implements IC_ONLINE_LIST
         * @constructor
         * @param {HallPto.IC_ONLINE_LIST=} [properties] Properties to set
         */
        function C_ONLINE_LIST(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_ONLINE_LIST cmd.
         * @member {number} cmd
         * @memberof HallPto.C_ONLINE_LIST
         * @instance
         */
        C_ONLINE_LIST.prototype.cmd = 1;

        /**
         * C_ONLINE_LIST scmd.
         * @member {number} scmd
         * @memberof HallPto.C_ONLINE_LIST
         * @instance
         */
        C_ONLINE_LIST.prototype.scmd = 5;

        /**
         * Encodes the specified C_ONLINE_LIST message. Does not implicitly {@link HallPto.C_ONLINE_LIST.verify|verify} messages.
         * @function encode
         * @memberof HallPto.C_ONLINE_LIST
         * @static
         * @param {HallPto.IC_ONLINE_LIST} message C_ONLINE_LIST message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_ONLINE_LIST.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            return writer;
        };

        /**
         * Decodes a C_ONLINE_LIST message from the specified reader or buffer.
         * @function decode
         * @memberof HallPto.C_ONLINE_LIST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.C_ONLINE_LIST} C_ONLINE_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_ONLINE_LIST.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.C_ONLINE_LIST();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_ONLINE_LIST;
    })();

    HallPto.S_ONLINE_LIST = (function() {

        /**
         * Properties of a S_ONLINE_LIST.
         * @memberof HallPto
         * @interface IS_ONLINE_LIST
         * @property {number|null} [cmd] S_ONLINE_LIST cmd
         * @property {number|null} [scmd] S_ONLINE_LIST scmd
         * @property {Array.<string>|null} [nikeArr] S_ONLINE_LIST nikeArr
         */

        /**
         * Constructs a new S_ONLINE_LIST.
         * @memberof HallPto
         * @classdesc Represents a S_ONLINE_LIST.
         * @implements IS_ONLINE_LIST
         * @constructor
         * @param {HallPto.IS_ONLINE_LIST=} [properties] Properties to set
         */
        function S_ONLINE_LIST(properties) {
            this.nikeArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_ONLINE_LIST cmd.
         * @member {number} cmd
         * @memberof HallPto.S_ONLINE_LIST
         * @instance
         */
        S_ONLINE_LIST.prototype.cmd = 1;

        /**
         * S_ONLINE_LIST scmd.
         * @member {number} scmd
         * @memberof HallPto.S_ONLINE_LIST
         * @instance
         */
        S_ONLINE_LIST.prototype.scmd = 6;

        /**
         * S_ONLINE_LIST nikeArr.
         * @member {Array.<string>} nikeArr
         * @memberof HallPto.S_ONLINE_LIST
         * @instance
         */
        S_ONLINE_LIST.prototype.nikeArr = $util.emptyArray;

        /**
         * Encodes the specified S_ONLINE_LIST message. Does not implicitly {@link HallPto.S_ONLINE_LIST.verify|verify} messages.
         * @function encode
         * @memberof HallPto.S_ONLINE_LIST
         * @static
         * @param {HallPto.IS_ONLINE_LIST} message S_ONLINE_LIST message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_ONLINE_LIST.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.nikeArr != null && message.nikeArr.length)
                for (var i = 0; i < message.nikeArr.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.nikeArr[i]);
            return writer;
        };

        /**
         * Decodes a S_ONLINE_LIST message from the specified reader or buffer.
         * @function decode
         * @memberof HallPto.S_ONLINE_LIST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.S_ONLINE_LIST} S_ONLINE_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_ONLINE_LIST.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.S_ONLINE_LIST();
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
                    if (!(message.nikeArr && message.nikeArr.length))
                        message.nikeArr = [];
                    message.nikeArr.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_ONLINE_LIST;
    })();

    return HallPto;
})();

$root.LoginPto = (function() {

    /**
     * Namespace LoginPto.
     * @exports LoginPto
     * @namespace
     */
    var LoginPto = {};

    LoginPto.C_LOGIN = (function() {

        /**
         * Properties of a C_LOGIN.
         * @memberof LoginPto
         * @interface IC_LOGIN
         * @property {number|null} [cmd] C_LOGIN cmd
         * @property {number|null} [scmd] C_LOGIN scmd
         * @property {string|null} [account] C_LOGIN account
         * @property {string|null} [password] C_LOGIN password
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
         * @member {number} cmd
         * @memberof LoginPto.C_LOGIN
         * @instance
         */
        C_LOGIN.prototype.cmd = 0;

        /**
         * C_LOGIN scmd.
         * @member {number} scmd
         * @memberof LoginPto.C_LOGIN
         * @instance
         */
        C_LOGIN.prototype.scmd = 1;

        /**
         * C_LOGIN account.
         * @member {string} account
         * @memberof LoginPto.C_LOGIN
         * @instance
         */
        C_LOGIN.prototype.account = "";

        /**
         * C_LOGIN password.
         * @member {string} password
         * @memberof LoginPto.C_LOGIN
         * @instance
         */
        C_LOGIN.prototype.password = "";

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
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.account);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.password);
            return writer;
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
                    message.account = reader.string();
                    break;
                case 4:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_LOGIN;
    })();

    LoginPto.S_LOGIN = (function() {

        /**
         * Properties of a S_LOGIN.
         * @memberof LoginPto
         * @interface IS_LOGIN
         * @property {number|null} [cmd] S_LOGIN cmd
         * @property {number|null} [scmd] S_LOGIN scmd
         * @property {boolean|null} [isSuccess] S_LOGIN isSuccess
         * @property {string|null} [nick] S_LOGIN nick
         * @property {number|null} [headIndex] S_LOGIN headIndex
         * @property {number|null} [roomId] S_LOGIN roomId
         * @property {number|null} [gameId] S_LOGIN gameId
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
         * @member {number} cmd
         * @memberof LoginPto.S_LOGIN
         * @instance
         */
        S_LOGIN.prototype.cmd = 0;

        /**
         * S_LOGIN scmd.
         * @member {number} scmd
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
         * S_LOGIN nick.
         * @member {string} nick
         * @memberof LoginPto.S_LOGIN
         * @instance
         */
        S_LOGIN.prototype.nick = "";

        /**
         * S_LOGIN headIndex.
         * @member {number} headIndex
         * @memberof LoginPto.S_LOGIN
         * @instance
         */
        S_LOGIN.prototype.headIndex = 0;

        /**
         * S_LOGIN roomId.
         * @member {number} roomId
         * @memberof LoginPto.S_LOGIN
         * @instance
         */
        S_LOGIN.prototype.roomId = 0;

        /**
         * S_LOGIN gameId.
         * @member {number} gameId
         * @memberof LoginPto.S_LOGIN
         * @instance
         */
        S_LOGIN.prototype.gameId = 0;

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
            if (message.nick != null && Object.hasOwnProperty.call(message, "nick"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.nick);
            if (message.headIndex != null && Object.hasOwnProperty.call(message, "headIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.headIndex);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.roomId);
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.gameId);
            return writer;
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
                case 4:
                    message.nick = reader.string();
                    break;
                case 5:
                    message.headIndex = reader.int32();
                    break;
                case 6:
                    message.roomId = reader.int32();
                    break;
                case 7:
                    message.gameId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_LOGIN;
    })();

    LoginPto.C_REGISTER = (function() {

        /**
         * Properties of a C_REGISTER.
         * @memberof LoginPto
         * @interface IC_REGISTER
         * @property {number|null} [cmd] C_REGISTER cmd
         * @property {number|null} [scmd] C_REGISTER scmd
         * @property {string|null} [account] C_REGISTER account
         * @property {string|null} [password] C_REGISTER password
         * @property {string|null} [nick] C_REGISTER nick
         */

        /**
         * Constructs a new C_REGISTER.
         * @memberof LoginPto
         * @classdesc Represents a C_REGISTER.
         * @implements IC_REGISTER
         * @constructor
         * @param {LoginPto.IC_REGISTER=} [properties] Properties to set
         */
        function C_REGISTER(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_REGISTER cmd.
         * @member {number} cmd
         * @memberof LoginPto.C_REGISTER
         * @instance
         */
        C_REGISTER.prototype.cmd = 0;

        /**
         * C_REGISTER scmd.
         * @member {number} scmd
         * @memberof LoginPto.C_REGISTER
         * @instance
         */
        C_REGISTER.prototype.scmd = 3;

        /**
         * C_REGISTER account.
         * @member {string} account
         * @memberof LoginPto.C_REGISTER
         * @instance
         */
        C_REGISTER.prototype.account = "";

        /**
         * C_REGISTER password.
         * @member {string} password
         * @memberof LoginPto.C_REGISTER
         * @instance
         */
        C_REGISTER.prototype.password = "";

        /**
         * C_REGISTER nick.
         * @member {string} nick
         * @memberof LoginPto.C_REGISTER
         * @instance
         */
        C_REGISTER.prototype.nick = "";

        /**
         * Encodes the specified C_REGISTER message. Does not implicitly {@link LoginPto.C_REGISTER.verify|verify} messages.
         * @function encode
         * @memberof LoginPto.C_REGISTER
         * @static
         * @param {LoginPto.IC_REGISTER} message C_REGISTER message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_REGISTER.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.account);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.password);
            if (message.nick != null && Object.hasOwnProperty.call(message, "nick"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.nick);
            return writer;
        };

        /**
         * Decodes a C_REGISTER message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPto.C_REGISTER
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPto.C_REGISTER} C_REGISTER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_REGISTER.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPto.C_REGISTER();
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
                    message.account = reader.string();
                    break;
                case 4:
                    message.password = reader.string();
                    break;
                case 5:
                    message.nick = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_REGISTER;
    })();

    LoginPto.S_REGISTER = (function() {

        /**
         * Properties of a S_REGISTER.
         * @memberof LoginPto
         * @interface IS_REGISTER
         * @property {number|null} [cmd] S_REGISTER cmd
         * @property {number|null} [scmd] S_REGISTER scmd
         * @property {number|null} [code] S_REGISTER code
         */

        /**
         * Constructs a new S_REGISTER.
         * @memberof LoginPto
         * @classdesc Represents a S_REGISTER.
         * @implements IS_REGISTER
         * @constructor
         * @param {LoginPto.IS_REGISTER=} [properties] Properties to set
         */
        function S_REGISTER(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_REGISTER cmd.
         * @member {number} cmd
         * @memberof LoginPto.S_REGISTER
         * @instance
         */
        S_REGISTER.prototype.cmd = 0;

        /**
         * S_REGISTER scmd.
         * @member {number} scmd
         * @memberof LoginPto.S_REGISTER
         * @instance
         */
        S_REGISTER.prototype.scmd = 4;

        /**
         * S_REGISTER code.
         * @member {number} code
         * @memberof LoginPto.S_REGISTER
         * @instance
         */
        S_REGISTER.prototype.code = 0;

        /**
         * Encodes the specified S_REGISTER message. Does not implicitly {@link LoginPto.S_REGISTER.verify|verify} messages.
         * @function encode
         * @memberof LoginPto.S_REGISTER
         * @static
         * @param {LoginPto.IS_REGISTER} message S_REGISTER message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_REGISTER.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.code);
            return writer;
        };

        /**
         * Decodes a S_REGISTER message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPto.S_REGISTER
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPto.S_REGISTER} S_REGISTER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_REGISTER.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPto.S_REGISTER();
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
                    message.code = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_REGISTER;
    })();

    return LoginPto;
})();

$root.RoomPto = (function() {

    /**
     * Namespace RoomPto.
     * @exports RoomPto
     * @namespace
     */
    var RoomPto = {};

    RoomPto.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof RoomPto
         * @interface IPlayer
         * @property {number|null} [index] Player index
         * @property {number|null} [headIndex] Player headIndex
         * @property {string|null} [nick] Player nick
         * @property {boolean|null} [isReady] Player isReady
         */

        /**
         * Constructs a new Player.
         * @memberof RoomPto
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {RoomPto.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player index.
         * @member {number} index
         * @memberof RoomPto.Player
         * @instance
         */
        Player.prototype.index = 0;

        /**
         * Player headIndex.
         * @member {number} headIndex
         * @memberof RoomPto.Player
         * @instance
         */
        Player.prototype.headIndex = 0;

        /**
         * Player nick.
         * @member {string} nick
         * @memberof RoomPto.Player
         * @instance
         */
        Player.prototype.nick = "";

        /**
         * Player isReady.
         * @member {boolean} isReady
         * @memberof RoomPto.Player
         * @instance
         */
        Player.prototype.isReady = false;

        /**
         * Encodes the specified Player message. Does not implicitly {@link RoomPto.Player.verify|verify} messages.
         * @function encode
         * @memberof RoomPto.Player
         * @static
         * @param {RoomPto.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
            if (message.headIndex != null && Object.hasOwnProperty.call(message, "headIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.headIndex);
            if (message.nick != null && Object.hasOwnProperty.call(message, "nick"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nick);
            if (message.isReady != null && Object.hasOwnProperty.call(message, "isReady"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isReady);
            return writer;
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof RoomPto.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RoomPto.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomPto.Player();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.int32();
                    break;
                case 2:
                    message.headIndex = reader.int32();
                    break;
                case 3:
                    message.nick = reader.string();
                    break;
                case 4:
                    message.isReady = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Player;
    })();

    RoomPto.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof RoomPto
         * @interface IRoomInfo
         * @property {number|null} [gameId] RoomInfo gameId
         * @property {boolean|null} [isStart] RoomInfo isStart
         * @property {string|null} [describe] RoomInfo describe
         * @property {number|null} [roomId] RoomInfo roomId
         * @property {number|null} [curPlayer] RoomInfo curPlayer
         * @property {number|null} [maxPlayer] RoomInfo maxPlayer
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof RoomPto
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {RoomPto.IRoomInfo=} [properties] Properties to set
         */
        function RoomInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInfo gameId.
         * @member {number} gameId
         * @memberof RoomPto.RoomInfo
         * @instance
         */
        RoomInfo.prototype.gameId = 0;

        /**
         * RoomInfo isStart.
         * @member {boolean} isStart
         * @memberof RoomPto.RoomInfo
         * @instance
         */
        RoomInfo.prototype.isStart = false;

        /**
         * RoomInfo describe.
         * @member {string} describe
         * @memberof RoomPto.RoomInfo
         * @instance
         */
        RoomInfo.prototype.describe = "";

        /**
         * RoomInfo roomId.
         * @member {number} roomId
         * @memberof RoomPto.RoomInfo
         * @instance
         */
        RoomInfo.prototype.roomId = 0;

        /**
         * RoomInfo curPlayer.
         * @member {number} curPlayer
         * @memberof RoomPto.RoomInfo
         * @instance
         */
        RoomInfo.prototype.curPlayer = 0;

        /**
         * RoomInfo maxPlayer.
         * @member {number} maxPlayer
         * @memberof RoomPto.RoomInfo
         * @instance
         */
        RoomInfo.prototype.maxPlayer = 0;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link RoomPto.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof RoomPto.RoomInfo
         * @static
         * @param {RoomPto.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameId);
            if (message.isStart != null && Object.hasOwnProperty.call(message, "isStart"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isStart);
            if (message.describe != null && Object.hasOwnProperty.call(message, "describe"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.describe);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.roomId);
            if (message.curPlayer != null && Object.hasOwnProperty.call(message, "curPlayer"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.curPlayer);
            if (message.maxPlayer != null && Object.hasOwnProperty.call(message, "maxPlayer"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.maxPlayer);
            return writer;
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof RoomPto.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RoomPto.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomPto.RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameId = reader.int32();
                    break;
                case 2:
                    message.isStart = reader.bool();
                    break;
                case 3:
                    message.describe = reader.string();
                    break;
                case 4:
                    message.roomId = reader.int32();
                    break;
                case 5:
                    message.curPlayer = reader.int32();
                    break;
                case 6:
                    message.maxPlayer = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RoomInfo;
    })();

    RoomPto.C_CREATE_ROOM = (function() {

        /**
         * Properties of a C_CREATE_ROOM.
         * @memberof RoomPto
         * @interface IC_CREATE_ROOM
         * @property {number|null} [cmd] C_CREATE_ROOM cmd
         * @property {number|null} [scmd] C_CREATE_ROOM scmd
         * @property {number|null} [gameId] C_CREATE_ROOM gameId
         * @property {string|null} [describe] C_CREATE_ROOM describe
         */

        /**
         * Constructs a new C_CREATE_ROOM.
         * @memberof RoomPto
         * @classdesc Represents a C_CREATE_ROOM.
         * @implements IC_CREATE_ROOM
         * @constructor
         * @param {RoomPto.IC_CREATE_ROOM=} [properties] Properties to set
         */
        function C_CREATE_ROOM(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_CREATE_ROOM cmd.
         * @member {number} cmd
         * @memberof RoomPto.C_CREATE_ROOM
         * @instance
         */
        C_CREATE_ROOM.prototype.cmd = 2;

        /**
         * C_CREATE_ROOM scmd.
         * @member {number} scmd
         * @memberof RoomPto.C_CREATE_ROOM
         * @instance
         */
        C_CREATE_ROOM.prototype.scmd = 1;

        /**
         * C_CREATE_ROOM gameId.
         * @member {number} gameId
         * @memberof RoomPto.C_CREATE_ROOM
         * @instance
         */
        C_CREATE_ROOM.prototype.gameId = 0;

        /**
         * C_CREATE_ROOM describe.
         * @member {string} describe
         * @memberof RoomPto.C_CREATE_ROOM
         * @instance
         */
        C_CREATE_ROOM.prototype.describe = "";

        /**
         * Encodes the specified C_CREATE_ROOM message. Does not implicitly {@link RoomPto.C_CREATE_ROOM.verify|verify} messages.
         * @function encode
         * @memberof RoomPto.C_CREATE_ROOM
         * @static
         * @param {RoomPto.IC_CREATE_ROOM} message C_CREATE_ROOM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_CREATE_ROOM.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gameId);
            if (message.describe != null && Object.hasOwnProperty.call(message, "describe"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.describe);
            return writer;
        };

        /**
         * Decodes a C_CREATE_ROOM message from the specified reader or buffer.
         * @function decode
         * @memberof RoomPto.C_CREATE_ROOM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RoomPto.C_CREATE_ROOM} C_CREATE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_CREATE_ROOM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomPto.C_CREATE_ROOM();
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
                    message.gameId = reader.int32();
                    break;
                case 4:
                    message.describe = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_CREATE_ROOM;
    })();

    RoomPto.S_CREATE_ROOM = (function() {

        /**
         * Properties of a S_CREATE_ROOM.
         * @memberof RoomPto
         * @interface IS_CREATE_ROOM
         * @property {number|null} [cmd] S_CREATE_ROOM cmd
         * @property {number|null} [scmd] S_CREATE_ROOM scmd
         * @property {boolean|null} [isSuccess] S_CREATE_ROOM isSuccess
         * @property {number|null} [roomId] S_CREATE_ROOM roomId
         */

        /**
         * Constructs a new S_CREATE_ROOM.
         * @memberof RoomPto
         * @classdesc Represents a S_CREATE_ROOM.
         * @implements IS_CREATE_ROOM
         * @constructor
         * @param {RoomPto.IS_CREATE_ROOM=} [properties] Properties to set
         */
        function S_CREATE_ROOM(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_CREATE_ROOM cmd.
         * @member {number} cmd
         * @memberof RoomPto.S_CREATE_ROOM
         * @instance
         */
        S_CREATE_ROOM.prototype.cmd = 2;

        /**
         * S_CREATE_ROOM scmd.
         * @member {number} scmd
         * @memberof RoomPto.S_CREATE_ROOM
         * @instance
         */
        S_CREATE_ROOM.prototype.scmd = 2;

        /**
         * S_CREATE_ROOM isSuccess.
         * @member {boolean} isSuccess
         * @memberof RoomPto.S_CREATE_ROOM
         * @instance
         */
        S_CREATE_ROOM.prototype.isSuccess = false;

        /**
         * S_CREATE_ROOM roomId.
         * @member {number} roomId
         * @memberof RoomPto.S_CREATE_ROOM
         * @instance
         */
        S_CREATE_ROOM.prototype.roomId = 0;

        /**
         * Encodes the specified S_CREATE_ROOM message. Does not implicitly {@link RoomPto.S_CREATE_ROOM.verify|verify} messages.
         * @function encode
         * @memberof RoomPto.S_CREATE_ROOM
         * @static
         * @param {RoomPto.IS_CREATE_ROOM} message S_CREATE_ROOM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_CREATE_ROOM.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.isSuccess != null && Object.hasOwnProperty.call(message, "isSuccess"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isSuccess);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.roomId);
            return writer;
        };

        /**
         * Decodes a S_CREATE_ROOM message from the specified reader or buffer.
         * @function decode
         * @memberof RoomPto.S_CREATE_ROOM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RoomPto.S_CREATE_ROOM} S_CREATE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_CREATE_ROOM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomPto.S_CREATE_ROOM();
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
                case 4:
                    message.roomId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_CREATE_ROOM;
    })();

    RoomPto.C_JOIN_ROOM = (function() {

        /**
         * Properties of a C_JOIN_ROOM.
         * @memberof RoomPto
         * @interface IC_JOIN_ROOM
         * @property {number|null} [cmd] C_JOIN_ROOM cmd
         * @property {number|null} [scmd] C_JOIN_ROOM scmd
         * @property {number|null} [roomId] C_JOIN_ROOM roomId
         * @property {boolean|null} [isWatch] C_JOIN_ROOM isWatch
         */

        /**
         * Constructs a new C_JOIN_ROOM.
         * @memberof RoomPto
         * @classdesc Represents a C_JOIN_ROOM.
         * @implements IC_JOIN_ROOM
         * @constructor
         * @param {RoomPto.IC_JOIN_ROOM=} [properties] Properties to set
         */
        function C_JOIN_ROOM(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_JOIN_ROOM cmd.
         * @member {number} cmd
         * @memberof RoomPto.C_JOIN_ROOM
         * @instance
         */
        C_JOIN_ROOM.prototype.cmd = 2;

        /**
         * C_JOIN_ROOM scmd.
         * @member {number} scmd
         * @memberof RoomPto.C_JOIN_ROOM
         * @instance
         */
        C_JOIN_ROOM.prototype.scmd = 3;

        /**
         * C_JOIN_ROOM roomId.
         * @member {number} roomId
         * @memberof RoomPto.C_JOIN_ROOM
         * @instance
         */
        C_JOIN_ROOM.prototype.roomId = 0;

        /**
         * C_JOIN_ROOM isWatch.
         * @member {boolean} isWatch
         * @memberof RoomPto.C_JOIN_ROOM
         * @instance
         */
        C_JOIN_ROOM.prototype.isWatch = false;

        /**
         * Encodes the specified C_JOIN_ROOM message. Does not implicitly {@link RoomPto.C_JOIN_ROOM.verify|verify} messages.
         * @function encode
         * @memberof RoomPto.C_JOIN_ROOM
         * @static
         * @param {RoomPto.IC_JOIN_ROOM} message C_JOIN_ROOM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_JOIN_ROOM.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roomId);
            if (message.isWatch != null && Object.hasOwnProperty.call(message, "isWatch"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isWatch);
            return writer;
        };

        /**
         * Decodes a C_JOIN_ROOM message from the specified reader or buffer.
         * @function decode
         * @memberof RoomPto.C_JOIN_ROOM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RoomPto.C_JOIN_ROOM} C_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_JOIN_ROOM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomPto.C_JOIN_ROOM();
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
                    message.roomId = reader.int32();
                    break;
                case 4:
                    message.isWatch = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_JOIN_ROOM;
    })();

    RoomPto.S_JOIN_ROOM = (function() {

        /**
         * Properties of a S_JOIN_ROOM.
         * @memberof RoomPto
         * @interface IS_JOIN_ROOM
         * @property {number|null} [cmd] S_JOIN_ROOM cmd
         * @property {number|null} [scmd] S_JOIN_ROOM scmd
         * @property {boolean|null} [isSuccess] S_JOIN_ROOM isSuccess
         * @property {Array.<RoomPto.IPlayer>|null} [players] S_JOIN_ROOM players
         * @property {number|null} [gameId] S_JOIN_ROOM gameId
         * @property {number|null} [selfIndex] S_JOIN_ROOM selfIndex
         * @property {string|null} [roomSeq] S_JOIN_ROOM roomSeq
         * @property {boolean|null} [isWatcher] S_JOIN_ROOM isWatcher
         */

        /**
         * Constructs a new S_JOIN_ROOM.
         * @memberof RoomPto
         * @classdesc Represents a S_JOIN_ROOM.
         * @implements IS_JOIN_ROOM
         * @constructor
         * @param {RoomPto.IS_JOIN_ROOM=} [properties] Properties to set
         */
        function S_JOIN_ROOM(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_JOIN_ROOM cmd.
         * @member {number} cmd
         * @memberof RoomPto.S_JOIN_ROOM
         * @instance
         */
        S_JOIN_ROOM.prototype.cmd = 2;

        /**
         * S_JOIN_ROOM scmd.
         * @member {number} scmd
         * @memberof RoomPto.S_JOIN_ROOM
         * @instance
         */
        S_JOIN_ROOM.prototype.scmd = 4;

        /**
         * S_JOIN_ROOM isSuccess.
         * @member {boolean} isSuccess
         * @memberof RoomPto.S_JOIN_ROOM
         * @instance
         */
        S_JOIN_ROOM.prototype.isSuccess = false;

        /**
         * S_JOIN_ROOM players.
         * @member {Array.<RoomPto.IPlayer>} players
         * @memberof RoomPto.S_JOIN_ROOM
         * @instance
         */
        S_JOIN_ROOM.prototype.players = $util.emptyArray;

        /**
         * S_JOIN_ROOM gameId.
         * @member {number} gameId
         * @memberof RoomPto.S_JOIN_ROOM
         * @instance
         */
        S_JOIN_ROOM.prototype.gameId = 0;

        /**
         * S_JOIN_ROOM selfIndex.
         * @member {number} selfIndex
         * @memberof RoomPto.S_JOIN_ROOM
         * @instance
         */
        S_JOIN_ROOM.prototype.selfIndex = 0;

        /**
         * S_JOIN_ROOM roomSeq.
         * @member {string} roomSeq
         * @memberof RoomPto.S_JOIN_ROOM
         * @instance
         */
        S_JOIN_ROOM.prototype.roomSeq = "";

        /**
         * S_JOIN_ROOM isWatcher.
         * @member {boolean} isWatcher
         * @memberof RoomPto.S_JOIN_ROOM
         * @instance
         */
        S_JOIN_ROOM.prototype.isWatcher = false;

        /**
         * Encodes the specified S_JOIN_ROOM message. Does not implicitly {@link RoomPto.S_JOIN_ROOM.verify|verify} messages.
         * @function encode
         * @memberof RoomPto.S_JOIN_ROOM
         * @static
         * @param {RoomPto.IS_JOIN_ROOM} message S_JOIN_ROOM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_JOIN_ROOM.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.isSuccess != null && Object.hasOwnProperty.call(message, "isSuccess"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isSuccess);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.RoomPto.Player.encode(message.players[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.gameId);
            if (message.selfIndex != null && Object.hasOwnProperty.call(message, "selfIndex"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.selfIndex);
            if (message.roomSeq != null && Object.hasOwnProperty.call(message, "roomSeq"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.roomSeq);
            if (message.isWatcher != null && Object.hasOwnProperty.call(message, "isWatcher"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.isWatcher);
            return writer;
        };

        /**
         * Decodes a S_JOIN_ROOM message from the specified reader or buffer.
         * @function decode
         * @memberof RoomPto.S_JOIN_ROOM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RoomPto.S_JOIN_ROOM} S_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_JOIN_ROOM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomPto.S_JOIN_ROOM();
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
                case 4:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.RoomPto.Player.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.gameId = reader.int32();
                    break;
                case 6:
                    message.selfIndex = reader.int32();
                    break;
                case 7:
                    message.roomSeq = reader.string();
                    break;
                case 8:
                    message.isWatcher = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_JOIN_ROOM;
    })();

    RoomPto.C_ROOM_LIST = (function() {

        /**
         * Properties of a C_ROOM_LIST.
         * @memberof RoomPto
         * @interface IC_ROOM_LIST
         * @property {number|null} [cmd] C_ROOM_LIST cmd
         * @property {number|null} [scmd] C_ROOM_LIST scmd
         * @property {number|null} [gameId] C_ROOM_LIST gameId
         * @property {number|null} [status] C_ROOM_LIST status
         */

        /**
         * Constructs a new C_ROOM_LIST.
         * @memberof RoomPto
         * @classdesc Represents a C_ROOM_LIST.
         * @implements IC_ROOM_LIST
         * @constructor
         * @param {RoomPto.IC_ROOM_LIST=} [properties] Properties to set
         */
        function C_ROOM_LIST(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_ROOM_LIST cmd.
         * @member {number} cmd
         * @memberof RoomPto.C_ROOM_LIST
         * @instance
         */
        C_ROOM_LIST.prototype.cmd = 2;

        /**
         * C_ROOM_LIST scmd.
         * @member {number} scmd
         * @memberof RoomPto.C_ROOM_LIST
         * @instance
         */
        C_ROOM_LIST.prototype.scmd = 5;

        /**
         * C_ROOM_LIST gameId.
         * @member {number} gameId
         * @memberof RoomPto.C_ROOM_LIST
         * @instance
         */
        C_ROOM_LIST.prototype.gameId = 0;

        /**
         * C_ROOM_LIST status.
         * @member {number} status
         * @memberof RoomPto.C_ROOM_LIST
         * @instance
         */
        C_ROOM_LIST.prototype.status = 0;

        /**
         * Encodes the specified C_ROOM_LIST message. Does not implicitly {@link RoomPto.C_ROOM_LIST.verify|verify} messages.
         * @function encode
         * @memberof RoomPto.C_ROOM_LIST
         * @static
         * @param {RoomPto.IC_ROOM_LIST} message C_ROOM_LIST message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_ROOM_LIST.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gameId);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
            return writer;
        };

        /**
         * Decodes a C_ROOM_LIST message from the specified reader or buffer.
         * @function decode
         * @memberof RoomPto.C_ROOM_LIST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RoomPto.C_ROOM_LIST} C_ROOM_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_ROOM_LIST.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomPto.C_ROOM_LIST();
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
                    message.gameId = reader.int32();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_ROOM_LIST;
    })();

    RoomPto.S_ROOM_LIST = (function() {

        /**
         * Properties of a S_ROOM_LIST.
         * @memberof RoomPto
         * @interface IS_ROOM_LIST
         * @property {number|null} [cmd] S_ROOM_LIST cmd
         * @property {number|null} [scmd] S_ROOM_LIST scmd
         * @property {Array.<RoomPto.IRoomInfo>|null} [list] S_ROOM_LIST list
         */

        /**
         * Constructs a new S_ROOM_LIST.
         * @memberof RoomPto
         * @classdesc Represents a S_ROOM_LIST.
         * @implements IS_ROOM_LIST
         * @constructor
         * @param {RoomPto.IS_ROOM_LIST=} [properties] Properties to set
         */
        function S_ROOM_LIST(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_ROOM_LIST cmd.
         * @member {number} cmd
         * @memberof RoomPto.S_ROOM_LIST
         * @instance
         */
        S_ROOM_LIST.prototype.cmd = 2;

        /**
         * S_ROOM_LIST scmd.
         * @member {number} scmd
         * @memberof RoomPto.S_ROOM_LIST
         * @instance
         */
        S_ROOM_LIST.prototype.scmd = 6;

        /**
         * S_ROOM_LIST list.
         * @member {Array.<RoomPto.IRoomInfo>} list
         * @memberof RoomPto.S_ROOM_LIST
         * @instance
         */
        S_ROOM_LIST.prototype.list = $util.emptyArray;

        /**
         * Encodes the specified S_ROOM_LIST message. Does not implicitly {@link RoomPto.S_ROOM_LIST.verify|verify} messages.
         * @function encode
         * @memberof RoomPto.S_ROOM_LIST
         * @static
         * @param {RoomPto.IS_ROOM_LIST} message S_ROOM_LIST message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_ROOM_LIST.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.RoomPto.RoomInfo.encode(message.list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_ROOM_LIST message from the specified reader or buffer.
         * @function decode
         * @memberof RoomPto.S_ROOM_LIST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RoomPto.S_ROOM_LIST} S_ROOM_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_ROOM_LIST.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomPto.S_ROOM_LIST();
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
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.RoomPto.RoomInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_ROOM_LIST;
    })();

    RoomPto.S_BROADCAST_JOIN_ROOM = (function() {

        /**
         * Properties of a S_BROADCAST_JOIN_ROOM.
         * @memberof RoomPto
         * @interface IS_BROADCAST_JOIN_ROOM
         * @property {number|null} [cmd] S_BROADCAST_JOIN_ROOM cmd
         * @property {number|null} [scmd] S_BROADCAST_JOIN_ROOM scmd
         * @property {RoomPto.IPlayer|null} [player] S_BROADCAST_JOIN_ROOM player
         */

        /**
         * Constructs a new S_BROADCAST_JOIN_ROOM.
         * @memberof RoomPto
         * @classdesc Represents a S_BROADCAST_JOIN_ROOM.
         * @implements IS_BROADCAST_JOIN_ROOM
         * @constructor
         * @param {RoomPto.IS_BROADCAST_JOIN_ROOM=} [properties] Properties to set
         */
        function S_BROADCAST_JOIN_ROOM(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_BROADCAST_JOIN_ROOM cmd.
         * @member {number} cmd
         * @memberof RoomPto.S_BROADCAST_JOIN_ROOM
         * @instance
         */
        S_BROADCAST_JOIN_ROOM.prototype.cmd = 2;

        /**
         * S_BROADCAST_JOIN_ROOM scmd.
         * @member {number} scmd
         * @memberof RoomPto.S_BROADCAST_JOIN_ROOM
         * @instance
         */
        S_BROADCAST_JOIN_ROOM.prototype.scmd = 7;

        /**
         * S_BROADCAST_JOIN_ROOM player.
         * @member {RoomPto.IPlayer|null|undefined} player
         * @memberof RoomPto.S_BROADCAST_JOIN_ROOM
         * @instance
         */
        S_BROADCAST_JOIN_ROOM.prototype.player = null;

        /**
         * Encodes the specified S_BROADCAST_JOIN_ROOM message. Does not implicitly {@link RoomPto.S_BROADCAST_JOIN_ROOM.verify|verify} messages.
         * @function encode
         * @memberof RoomPto.S_BROADCAST_JOIN_ROOM
         * @static
         * @param {RoomPto.IS_BROADCAST_JOIN_ROOM} message S_BROADCAST_JOIN_ROOM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_BROADCAST_JOIN_ROOM.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                $root.RoomPto.Player.encode(message.player, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_BROADCAST_JOIN_ROOM message from the specified reader or buffer.
         * @function decode
         * @memberof RoomPto.S_BROADCAST_JOIN_ROOM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RoomPto.S_BROADCAST_JOIN_ROOM} S_BROADCAST_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_BROADCAST_JOIN_ROOM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomPto.S_BROADCAST_JOIN_ROOM();
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
                    message.player = $root.RoomPto.Player.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_BROADCAST_JOIN_ROOM;
    })();

    RoomPto.S_BROADCAST_LEAVE_ROOM = (function() {

        /**
         * Properties of a S_BROADCAST_LEAVE_ROOM.
         * @memberof RoomPto
         * @interface IS_BROADCAST_LEAVE_ROOM
         * @property {number|null} [cmd] S_BROADCAST_LEAVE_ROOM cmd
         * @property {number|null} [scmd] S_BROADCAST_LEAVE_ROOM scmd
         * @property {number|null} [index] S_BROADCAST_LEAVE_ROOM index
         */

        /**
         * Constructs a new S_BROADCAST_LEAVE_ROOM.
         * @memberof RoomPto
         * @classdesc Represents a S_BROADCAST_LEAVE_ROOM.
         * @implements IS_BROADCAST_LEAVE_ROOM
         * @constructor
         * @param {RoomPto.IS_BROADCAST_LEAVE_ROOM=} [properties] Properties to set
         */
        function S_BROADCAST_LEAVE_ROOM(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_BROADCAST_LEAVE_ROOM cmd.
         * @member {number} cmd
         * @memberof RoomPto.S_BROADCAST_LEAVE_ROOM
         * @instance
         */
        S_BROADCAST_LEAVE_ROOM.prototype.cmd = 2;

        /**
         * S_BROADCAST_LEAVE_ROOM scmd.
         * @member {number} scmd
         * @memberof RoomPto.S_BROADCAST_LEAVE_ROOM
         * @instance
         */
        S_BROADCAST_LEAVE_ROOM.prototype.scmd = 8;

        /**
         * S_BROADCAST_LEAVE_ROOM index.
         * @member {number} index
         * @memberof RoomPto.S_BROADCAST_LEAVE_ROOM
         * @instance
         */
        S_BROADCAST_LEAVE_ROOM.prototype.index = 0;

        /**
         * Encodes the specified S_BROADCAST_LEAVE_ROOM message. Does not implicitly {@link RoomPto.S_BROADCAST_LEAVE_ROOM.verify|verify} messages.
         * @function encode
         * @memberof RoomPto.S_BROADCAST_LEAVE_ROOM
         * @static
         * @param {RoomPto.IS_BROADCAST_LEAVE_ROOM} message S_BROADCAST_LEAVE_ROOM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_BROADCAST_LEAVE_ROOM.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.index);
            return writer;
        };

        /**
         * Decodes a S_BROADCAST_LEAVE_ROOM message from the specified reader or buffer.
         * @function decode
         * @memberof RoomPto.S_BROADCAST_LEAVE_ROOM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RoomPto.S_BROADCAST_LEAVE_ROOM} S_BROADCAST_LEAVE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_BROADCAST_LEAVE_ROOM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomPto.S_BROADCAST_LEAVE_ROOM();
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
                    message.index = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_BROADCAST_LEAVE_ROOM;
    })();

    RoomPto.C_READY = (function() {

        /**
         * Properties of a C_READY.
         * @memberof RoomPto
         * @interface IC_READY
         * @property {number|null} [cmd] C_READY cmd
         * @property {number|null} [scmd] C_READY scmd
         */

        /**
         * Constructs a new C_READY.
         * @memberof RoomPto
         * @classdesc Represents a C_READY.
         * @implements IC_READY
         * @constructor
         * @param {RoomPto.IC_READY=} [properties] Properties to set
         */
        function C_READY(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_READY cmd.
         * @member {number} cmd
         * @memberof RoomPto.C_READY
         * @instance
         */
        C_READY.prototype.cmd = 2;

        /**
         * C_READY scmd.
         * @member {number} scmd
         * @memberof RoomPto.C_READY
         * @instance
         */
        C_READY.prototype.scmd = 9;

        /**
         * Encodes the specified C_READY message. Does not implicitly {@link RoomPto.C_READY.verify|verify} messages.
         * @function encode
         * @memberof RoomPto.C_READY
         * @static
         * @param {RoomPto.IC_READY} message C_READY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_READY.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            return writer;
        };

        /**
         * Decodes a C_READY message from the specified reader or buffer.
         * @function decode
         * @memberof RoomPto.C_READY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RoomPto.C_READY} C_READY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_READY.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomPto.C_READY();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_READY;
    })();

    RoomPto.S_PLAYER_READY_STATUS_CHANGE = (function() {

        /**
         * Properties of a S_PLAYER_READY_STATUS_CHANGE.
         * @memberof RoomPto
         * @interface IS_PLAYER_READY_STATUS_CHANGE
         * @property {number|null} [cmd] S_PLAYER_READY_STATUS_CHANGE cmd
         * @property {number|null} [scmd] S_PLAYER_READY_STATUS_CHANGE scmd
         * @property {number|null} [index] S_PLAYER_READY_STATUS_CHANGE index
         * @property {boolean|null} [isReady] S_PLAYER_READY_STATUS_CHANGE isReady
         */

        /**
         * Constructs a new S_PLAYER_READY_STATUS_CHANGE.
         * @memberof RoomPto
         * @classdesc Represents a S_PLAYER_READY_STATUS_CHANGE.
         * @implements IS_PLAYER_READY_STATUS_CHANGE
         * @constructor
         * @param {RoomPto.IS_PLAYER_READY_STATUS_CHANGE=} [properties] Properties to set
         */
        function S_PLAYER_READY_STATUS_CHANGE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_PLAYER_READY_STATUS_CHANGE cmd.
         * @member {number} cmd
         * @memberof RoomPto.S_PLAYER_READY_STATUS_CHANGE
         * @instance
         */
        S_PLAYER_READY_STATUS_CHANGE.prototype.cmd = 2;

        /**
         * S_PLAYER_READY_STATUS_CHANGE scmd.
         * @member {number} scmd
         * @memberof RoomPto.S_PLAYER_READY_STATUS_CHANGE
         * @instance
         */
        S_PLAYER_READY_STATUS_CHANGE.prototype.scmd = 10;

        /**
         * S_PLAYER_READY_STATUS_CHANGE index.
         * @member {number} index
         * @memberof RoomPto.S_PLAYER_READY_STATUS_CHANGE
         * @instance
         */
        S_PLAYER_READY_STATUS_CHANGE.prototype.index = 0;

        /**
         * S_PLAYER_READY_STATUS_CHANGE isReady.
         * @member {boolean} isReady
         * @memberof RoomPto.S_PLAYER_READY_STATUS_CHANGE
         * @instance
         */
        S_PLAYER_READY_STATUS_CHANGE.prototype.isReady = false;

        /**
         * Encodes the specified S_PLAYER_READY_STATUS_CHANGE message. Does not implicitly {@link RoomPto.S_PLAYER_READY_STATUS_CHANGE.verify|verify} messages.
         * @function encode
         * @memberof RoomPto.S_PLAYER_READY_STATUS_CHANGE
         * @static
         * @param {RoomPto.IS_PLAYER_READY_STATUS_CHANGE} message S_PLAYER_READY_STATUS_CHANGE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_PLAYER_READY_STATUS_CHANGE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.index);
            if (message.isReady != null && Object.hasOwnProperty.call(message, "isReady"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isReady);
            return writer;
        };

        /**
         * Decodes a S_PLAYER_READY_STATUS_CHANGE message from the specified reader or buffer.
         * @function decode
         * @memberof RoomPto.S_PLAYER_READY_STATUS_CHANGE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RoomPto.S_PLAYER_READY_STATUS_CHANGE} S_PLAYER_READY_STATUS_CHANGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_PLAYER_READY_STATUS_CHANGE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomPto.S_PLAYER_READY_STATUS_CHANGE();
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
                    message.index = reader.int32();
                    break;
                case 4:
                    message.isReady = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_PLAYER_READY_STATUS_CHANGE;
    })();

    RoomPto.C_LEAVE_ROOM = (function() {

        /**
         * Properties of a C_LEAVE_ROOM.
         * @memberof RoomPto
         * @interface IC_LEAVE_ROOM
         * @property {number|null} [cmd] C_LEAVE_ROOM cmd
         * @property {number|null} [scmd] C_LEAVE_ROOM scmd
         */

        /**
         * Constructs a new C_LEAVE_ROOM.
         * @memberof RoomPto
         * @classdesc Represents a C_LEAVE_ROOM.
         * @implements IC_LEAVE_ROOM
         * @constructor
         * @param {RoomPto.IC_LEAVE_ROOM=} [properties] Properties to set
         */
        function C_LEAVE_ROOM(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C_LEAVE_ROOM cmd.
         * @member {number} cmd
         * @memberof RoomPto.C_LEAVE_ROOM
         * @instance
         */
        C_LEAVE_ROOM.prototype.cmd = 2;

        /**
         * C_LEAVE_ROOM scmd.
         * @member {number} scmd
         * @memberof RoomPto.C_LEAVE_ROOM
         * @instance
         */
        C_LEAVE_ROOM.prototype.scmd = 11;

        /**
         * Encodes the specified C_LEAVE_ROOM message. Does not implicitly {@link RoomPto.C_LEAVE_ROOM.verify|verify} messages.
         * @function encode
         * @memberof RoomPto.C_LEAVE_ROOM
         * @static
         * @param {RoomPto.IC_LEAVE_ROOM} message C_LEAVE_ROOM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_LEAVE_ROOM.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            return writer;
        };

        /**
         * Decodes a C_LEAVE_ROOM message from the specified reader or buffer.
         * @function decode
         * @memberof RoomPto.C_LEAVE_ROOM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RoomPto.C_LEAVE_ROOM} C_LEAVE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_LEAVE_ROOM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomPto.C_LEAVE_ROOM();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.scmd = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return C_LEAVE_ROOM;
    })();

    return RoomPto;
})();

$root.SystemPto = (function() {

    /**
     * Namespace SystemPto.
     * @exports SystemPto
     * @namespace
     */
    var SystemPto = {};

    SystemPto.S_TIPS = (function() {

        /**
         * Properties of a S_TIPS.
         * @memberof SystemPto
         * @interface IS_TIPS
         * @property {number|null} [cmd] S_TIPS cmd
         * @property {number|null} [scmd] S_TIPS scmd
         * @property {string|null} [msg] S_TIPS msg
         * @property {number|null} [hoverTime] S_TIPS hoverTime
         */

        /**
         * Constructs a new S_TIPS.
         * @memberof SystemPto
         * @classdesc Represents a S_TIPS.
         * @implements IS_TIPS
         * @constructor
         * @param {SystemPto.IS_TIPS=} [properties] Properties to set
         */
        function S_TIPS(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_TIPS cmd.
         * @member {number} cmd
         * @memberof SystemPto.S_TIPS
         * @instance
         */
        S_TIPS.prototype.cmd = 3;

        /**
         * S_TIPS scmd.
         * @member {number} scmd
         * @memberof SystemPto.S_TIPS
         * @instance
         */
        S_TIPS.prototype.scmd = 1;

        /**
         * S_TIPS msg.
         * @member {string} msg
         * @memberof SystemPto.S_TIPS
         * @instance
         */
        S_TIPS.prototype.msg = "";

        /**
         * S_TIPS hoverTime.
         * @member {number} hoverTime
         * @memberof SystemPto.S_TIPS
         * @instance
         */
        S_TIPS.prototype.hoverTime = 0;

        /**
         * Encodes the specified S_TIPS message. Does not implicitly {@link SystemPto.S_TIPS.verify|verify} messages.
         * @function encode
         * @memberof SystemPto.S_TIPS
         * @static
         * @param {SystemPto.IS_TIPS} message S_TIPS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_TIPS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
            if (message.hoverTime != null && Object.hasOwnProperty.call(message, "hoverTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.hoverTime);
            return writer;
        };

        /**
         * Decodes a S_TIPS message from the specified reader or buffer.
         * @function decode
         * @memberof SystemPto.S_TIPS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SystemPto.S_TIPS} S_TIPS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_TIPS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SystemPto.S_TIPS();
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
                    message.msg = reader.string();
                    break;
                case 4:
                    message.hoverTime = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return S_TIPS;
    })();

    return SystemPto;
})();