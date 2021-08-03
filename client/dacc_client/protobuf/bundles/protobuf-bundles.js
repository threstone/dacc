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

    GamePto1001.S_INIT_SCENE = (function() {

        /**
         * Properties of a S_INIT_SCENE.
         * @memberof GamePto1001
         * @interface IS_INIT_SCENE
         * @property {number|null} [cmd] S_INIT_SCENE cmd
         * @property {number|null} [scmd] S_INIT_SCENE scmd
         * @property {string|null} [tableSeq] S_INIT_SCENE tableSeq
         */

        /**
         * Constructs a new S_INIT_SCENE.
         * @memberof GamePto1001
         * @classdesc Represents a S_INIT_SCENE.
         * @implements IS_INIT_SCENE
         * @constructor
         * @param {GamePto1001.IS_INIT_SCENE=} [properties] Properties to set
         */
        function S_INIT_SCENE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_INIT_SCENE cmd.
         * @member {number} cmd
         * @memberof GamePto1001.S_INIT_SCENE
         * @instance
         */
        S_INIT_SCENE.prototype.cmd = 1001;

        /**
         * S_INIT_SCENE scmd.
         * @member {number} scmd
         * @memberof GamePto1001.S_INIT_SCENE
         * @instance
         */
        S_INIT_SCENE.prototype.scmd = 1;

        /**
         * S_INIT_SCENE tableSeq.
         * @member {string} tableSeq
         * @memberof GamePto1001.S_INIT_SCENE
         * @instance
         */
        S_INIT_SCENE.prototype.tableSeq = "";

        /**
         * Creates a new S_INIT_SCENE instance using the specified properties.
         * @function create
         * @memberof GamePto1001.S_INIT_SCENE
         * @static
         * @param {GamePto1001.IS_INIT_SCENE=} [properties] Properties to set
         * @returns {GamePto1001.S_INIT_SCENE} S_INIT_SCENE instance
         */
        S_INIT_SCENE.create = function create(properties) {
            return new S_INIT_SCENE(properties);
        };

        /**
         * Encodes the specified S_INIT_SCENE message. Does not implicitly {@link GamePto1001.S_INIT_SCENE.verify|verify} messages.
         * @function encode
         * @memberof GamePto1001.S_INIT_SCENE
         * @static
         * @param {GamePto1001.IS_INIT_SCENE} message S_INIT_SCENE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_INIT_SCENE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.scmd != null && Object.hasOwnProperty.call(message, "scmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scmd);
            if (message.tableSeq != null && Object.hasOwnProperty.call(message, "tableSeq"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.tableSeq);
            return writer;
        };

        /**
         * Encodes the specified S_INIT_SCENE message, length delimited. Does not implicitly {@link GamePto1001.S_INIT_SCENE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GamePto1001.S_INIT_SCENE
         * @static
         * @param {GamePto1001.IS_INIT_SCENE} message S_INIT_SCENE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_INIT_SCENE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S_INIT_SCENE message from the specified reader or buffer.
         * @function decode
         * @memberof GamePto1001.S_INIT_SCENE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePto1001.S_INIT_SCENE} S_INIT_SCENE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_INIT_SCENE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePto1001.S_INIT_SCENE();
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
                    message.tableSeq = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S_INIT_SCENE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GamePto1001.S_INIT_SCENE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GamePto1001.S_INIT_SCENE} S_INIT_SCENE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_INIT_SCENE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S_INIT_SCENE message.
         * @function verify
         * @memberof GamePto1001.S_INIT_SCENE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S_INIT_SCENE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isInteger(message.cmd))
                    return "cmd: integer expected";
            if (message.scmd != null && message.hasOwnProperty("scmd"))
                if (!$util.isInteger(message.scmd))
                    return "scmd: integer expected";
            if (message.tableSeq != null && message.hasOwnProperty("tableSeq"))
                if (!$util.isString(message.tableSeq))
                    return "tableSeq: string expected";
            return null;
        };

        return S_INIT_SCENE;
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
         * Creates a new GameInfo instance using the specified properties.
         * @function create
         * @memberof HallPto.GameInfo
         * @static
         * @param {HallPto.IGameInfo=} [properties] Properties to set
         * @returns {HallPto.GameInfo} GameInfo instance
         */
        GameInfo.create = function create(properties) {
            return new GameInfo(properties);
        };

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
         * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link HallPto.GameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HallPto.GameInfo
         * @static
         * @param {HallPto.IGameInfo} message GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
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

        /**
         * Decodes a GameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HallPto.GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HallPto.GameInfo} GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameInfo message.
         * @function verify
         * @memberof HallPto.GameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (message.gameName != null && message.hasOwnProperty("gameName"))
                if (!$util.isString(message.gameName))
                    return "gameName: string expected";
            return null;
        };

        return GameInfo;
    })();

    HallPto.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof HallPto
         * @interface IPlayer
         * @property {number|null} [index] Player index
         * @property {number|null} [headIndex] Player headIndex
         * @property {string|null} [userName] Player userName
         * @property {boolean|null} [isReady] Player isReady
         */

        /**
         * Constructs a new Player.
         * @memberof HallPto
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {HallPto.IPlayer=} [properties] Properties to set
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
         * @memberof HallPto.Player
         * @instance
         */
        Player.prototype.index = 0;

        /**
         * Player headIndex.
         * @member {number} headIndex
         * @memberof HallPto.Player
         * @instance
         */
        Player.prototype.headIndex = 0;

        /**
         * Player userName.
         * @member {string} userName
         * @memberof HallPto.Player
         * @instance
         */
        Player.prototype.userName = "";

        /**
         * Player isReady.
         * @member {boolean} isReady
         * @memberof HallPto.Player
         * @instance
         */
        Player.prototype.isReady = false;

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof HallPto.Player
         * @static
         * @param {HallPto.IPlayer=} [properties] Properties to set
         * @returns {HallPto.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link HallPto.Player.verify|verify} messages.
         * @function encode
         * @memberof HallPto.Player
         * @static
         * @param {HallPto.IPlayer} message Player message or plain object to encode
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
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userName);
            if (message.isReady != null && Object.hasOwnProperty.call(message, "isReady"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isReady);
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link HallPto.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HallPto.Player
         * @static
         * @param {HallPto.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof HallPto.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.Player();
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
                    message.userName = reader.string();
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

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HallPto.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HallPto.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Player message.
         * @function verify
         * @memberof HallPto.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.headIndex != null && message.hasOwnProperty("headIndex"))
                if (!$util.isInteger(message.headIndex))
                    return "headIndex: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.isReady != null && message.hasOwnProperty("isReady"))
                if (typeof message.isReady !== "boolean")
                    return "isReady: boolean expected";
            return null;
        };

        return Player;
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
         * Creates a new C_SEND_CHAT_MSG instance using the specified properties.
         * @function create
         * @memberof HallPto.C_SEND_CHAT_MSG
         * @static
         * @param {HallPto.IC_SEND_CHAT_MSG=} [properties] Properties to set
         * @returns {HallPto.C_SEND_CHAT_MSG} C_SEND_CHAT_MSG instance
         */
        C_SEND_CHAT_MSG.create = function create(properties) {
            return new C_SEND_CHAT_MSG(properties);
        };

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
         * Encodes the specified C_SEND_CHAT_MSG message, length delimited. Does not implicitly {@link HallPto.C_SEND_CHAT_MSG.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HallPto.C_SEND_CHAT_MSG
         * @static
         * @param {HallPto.IC_SEND_CHAT_MSG} message C_SEND_CHAT_MSG message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_SEND_CHAT_MSG.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
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

        /**
         * Decodes a C_SEND_CHAT_MSG message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HallPto.C_SEND_CHAT_MSG
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HallPto.C_SEND_CHAT_MSG} C_SEND_CHAT_MSG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_SEND_CHAT_MSG.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C_SEND_CHAT_MSG message.
         * @function verify
         * @memberof HallPto.C_SEND_CHAT_MSG
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C_SEND_CHAT_MSG.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isInteger(message.cmd))
                    return "cmd: integer expected";
            if (message.scmd != null && message.hasOwnProperty("scmd"))
                if (!$util.isInteger(message.scmd))
                    return "scmd: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
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
         * @property {string|null} [userName] S_CHAT_MSG userName
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
         * S_CHAT_MSG userName.
         * @member {string} userName
         * @memberof HallPto.S_CHAT_MSG
         * @instance
         */
        S_CHAT_MSG.prototype.userName = "";

        /**
         * S_CHAT_MSG msg.
         * @member {string} msg
         * @memberof HallPto.S_CHAT_MSG
         * @instance
         */
        S_CHAT_MSG.prototype.msg = "";

        /**
         * Creates a new S_CHAT_MSG instance using the specified properties.
         * @function create
         * @memberof HallPto.S_CHAT_MSG
         * @static
         * @param {HallPto.IS_CHAT_MSG=} [properties] Properties to set
         * @returns {HallPto.S_CHAT_MSG} S_CHAT_MSG instance
         */
        S_CHAT_MSG.create = function create(properties) {
            return new S_CHAT_MSG(properties);
        };

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
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userName);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified S_CHAT_MSG message, length delimited. Does not implicitly {@link HallPto.S_CHAT_MSG.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HallPto.S_CHAT_MSG
         * @static
         * @param {HallPto.IS_CHAT_MSG} message S_CHAT_MSG message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_CHAT_MSG.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
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
                    message.userName = reader.string();
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

        /**
         * Decodes a S_CHAT_MSG message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HallPto.S_CHAT_MSG
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HallPto.S_CHAT_MSG} S_CHAT_MSG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_CHAT_MSG.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S_CHAT_MSG message.
         * @function verify
         * @memberof HallPto.S_CHAT_MSG
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S_CHAT_MSG.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isInteger(message.cmd))
                    return "cmd: integer expected";
            if (message.scmd != null && message.hasOwnProperty("scmd"))
                if (!$util.isInteger(message.scmd))
                    return "scmd: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
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
         * Creates a new S_GAME_LIST instance using the specified properties.
         * @function create
         * @memberof HallPto.S_GAME_LIST
         * @static
         * @param {HallPto.IS_GAME_LIST=} [properties] Properties to set
         * @returns {HallPto.S_GAME_LIST} S_GAME_LIST instance
         */
        S_GAME_LIST.create = function create(properties) {
            return new S_GAME_LIST(properties);
        };

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
         * Encodes the specified S_GAME_LIST message, length delimited. Does not implicitly {@link HallPto.S_GAME_LIST.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HallPto.S_GAME_LIST
         * @static
         * @param {HallPto.IS_GAME_LIST} message S_GAME_LIST message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_GAME_LIST.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
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

        /**
         * Decodes a S_GAME_LIST message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HallPto.S_GAME_LIST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HallPto.S_GAME_LIST} S_GAME_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_GAME_LIST.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S_GAME_LIST message.
         * @function verify
         * @memberof HallPto.S_GAME_LIST
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S_GAME_LIST.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isInteger(message.cmd))
                    return "cmd: integer expected";
            if (message.scmd != null && message.hasOwnProperty("scmd"))
                if (!$util.isInteger(message.scmd))
                    return "scmd: integer expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.HallPto.GameInfo.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
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
         * Creates a new C_CHANGE_HEAD instance using the specified properties.
         * @function create
         * @memberof HallPto.C_CHANGE_HEAD
         * @static
         * @param {HallPto.IC_CHANGE_HEAD=} [properties] Properties to set
         * @returns {HallPto.C_CHANGE_HEAD} C_CHANGE_HEAD instance
         */
        C_CHANGE_HEAD.create = function create(properties) {
            return new C_CHANGE_HEAD(properties);
        };

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
         * Encodes the specified C_CHANGE_HEAD message, length delimited. Does not implicitly {@link HallPto.C_CHANGE_HEAD.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HallPto.C_CHANGE_HEAD
         * @static
         * @param {HallPto.IC_CHANGE_HEAD} message C_CHANGE_HEAD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_CHANGE_HEAD.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
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

        /**
         * Decodes a C_CHANGE_HEAD message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HallPto.C_CHANGE_HEAD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HallPto.C_CHANGE_HEAD} C_CHANGE_HEAD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_CHANGE_HEAD.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C_CHANGE_HEAD message.
         * @function verify
         * @memberof HallPto.C_CHANGE_HEAD
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C_CHANGE_HEAD.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isInteger(message.cmd))
                    return "cmd: integer expected";
            if (message.scmd != null && message.hasOwnProperty("scmd"))
                if (!$util.isInteger(message.scmd))
                    return "scmd: integer expected";
            if (message.headIndex != null && message.hasOwnProperty("headIndex"))
                if (!$util.isInteger(message.headIndex))
                    return "headIndex: integer expected";
            return null;
        };

        return C_CHANGE_HEAD;
    })();

    HallPto.C_CREATE_ROOM = (function() {

        /**
         * Properties of a C_CREATE_ROOM.
         * @memberof HallPto
         * @interface IC_CREATE_ROOM
         * @property {number|null} [cmd] C_CREATE_ROOM cmd
         * @property {number|null} [scmd] C_CREATE_ROOM scmd
         * @property {number|null} [gameId] C_CREATE_ROOM gameId
         */

        /**
         * Constructs a new C_CREATE_ROOM.
         * @memberof HallPto
         * @classdesc Represents a C_CREATE_ROOM.
         * @implements IC_CREATE_ROOM
         * @constructor
         * @param {HallPto.IC_CREATE_ROOM=} [properties] Properties to set
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
         * @memberof HallPto.C_CREATE_ROOM
         * @instance
         */
        C_CREATE_ROOM.prototype.cmd = 1;

        /**
         * C_CREATE_ROOM scmd.
         * @member {number} scmd
         * @memberof HallPto.C_CREATE_ROOM
         * @instance
         */
        C_CREATE_ROOM.prototype.scmd = 5;

        /**
         * C_CREATE_ROOM gameId.
         * @member {number} gameId
         * @memberof HallPto.C_CREATE_ROOM
         * @instance
         */
        C_CREATE_ROOM.prototype.gameId = 0;

        /**
         * Creates a new C_CREATE_ROOM instance using the specified properties.
         * @function create
         * @memberof HallPto.C_CREATE_ROOM
         * @static
         * @param {HallPto.IC_CREATE_ROOM=} [properties] Properties to set
         * @returns {HallPto.C_CREATE_ROOM} C_CREATE_ROOM instance
         */
        C_CREATE_ROOM.create = function create(properties) {
            return new C_CREATE_ROOM(properties);
        };

        /**
         * Encodes the specified C_CREATE_ROOM message. Does not implicitly {@link HallPto.C_CREATE_ROOM.verify|verify} messages.
         * @function encode
         * @memberof HallPto.C_CREATE_ROOM
         * @static
         * @param {HallPto.IC_CREATE_ROOM} message C_CREATE_ROOM message or plain object to encode
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
            return writer;
        };

        /**
         * Encodes the specified C_CREATE_ROOM message, length delimited. Does not implicitly {@link HallPto.C_CREATE_ROOM.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HallPto.C_CREATE_ROOM
         * @static
         * @param {HallPto.IC_CREATE_ROOM} message C_CREATE_ROOM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_CREATE_ROOM.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C_CREATE_ROOM message from the specified reader or buffer.
         * @function decode
         * @memberof HallPto.C_CREATE_ROOM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.C_CREATE_ROOM} C_CREATE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_CREATE_ROOM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.C_CREATE_ROOM();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C_CREATE_ROOM message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HallPto.C_CREATE_ROOM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HallPto.C_CREATE_ROOM} C_CREATE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_CREATE_ROOM.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C_CREATE_ROOM message.
         * @function verify
         * @memberof HallPto.C_CREATE_ROOM
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C_CREATE_ROOM.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isInteger(message.cmd))
                    return "cmd: integer expected";
            if (message.scmd != null && message.hasOwnProperty("scmd"))
                if (!$util.isInteger(message.scmd))
                    return "scmd: integer expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            return null;
        };

        return C_CREATE_ROOM;
    })();

    HallPto.S_CREATE_ROOM = (function() {

        /**
         * Properties of a S_CREATE_ROOM.
         * @memberof HallPto
         * @interface IS_CREATE_ROOM
         * @property {number|null} [cmd] S_CREATE_ROOM cmd
         * @property {number|null} [scmd] S_CREATE_ROOM scmd
         * @property {boolean|null} [isSuccess] S_CREATE_ROOM isSuccess
         * @property {string|null} [tableSeq] S_CREATE_ROOM tableSeq
         */

        /**
         * Constructs a new S_CREATE_ROOM.
         * @memberof HallPto
         * @classdesc Represents a S_CREATE_ROOM.
         * @implements IS_CREATE_ROOM
         * @constructor
         * @param {HallPto.IS_CREATE_ROOM=} [properties] Properties to set
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
         * @memberof HallPto.S_CREATE_ROOM
         * @instance
         */
        S_CREATE_ROOM.prototype.cmd = 1;

        /**
         * S_CREATE_ROOM scmd.
         * @member {number} scmd
         * @memberof HallPto.S_CREATE_ROOM
         * @instance
         */
        S_CREATE_ROOM.prototype.scmd = 6;

        /**
         * S_CREATE_ROOM isSuccess.
         * @member {boolean} isSuccess
         * @memberof HallPto.S_CREATE_ROOM
         * @instance
         */
        S_CREATE_ROOM.prototype.isSuccess = false;

        /**
         * S_CREATE_ROOM tableSeq.
         * @member {string} tableSeq
         * @memberof HallPto.S_CREATE_ROOM
         * @instance
         */
        S_CREATE_ROOM.prototype.tableSeq = "";

        /**
         * Creates a new S_CREATE_ROOM instance using the specified properties.
         * @function create
         * @memberof HallPto.S_CREATE_ROOM
         * @static
         * @param {HallPto.IS_CREATE_ROOM=} [properties] Properties to set
         * @returns {HallPto.S_CREATE_ROOM} S_CREATE_ROOM instance
         */
        S_CREATE_ROOM.create = function create(properties) {
            return new S_CREATE_ROOM(properties);
        };

        /**
         * Encodes the specified S_CREATE_ROOM message. Does not implicitly {@link HallPto.S_CREATE_ROOM.verify|verify} messages.
         * @function encode
         * @memberof HallPto.S_CREATE_ROOM
         * @static
         * @param {HallPto.IS_CREATE_ROOM} message S_CREATE_ROOM message or plain object to encode
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
            if (message.tableSeq != null && Object.hasOwnProperty.call(message, "tableSeq"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.tableSeq);
            return writer;
        };

        /**
         * Encodes the specified S_CREATE_ROOM message, length delimited. Does not implicitly {@link HallPto.S_CREATE_ROOM.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HallPto.S_CREATE_ROOM
         * @static
         * @param {HallPto.IS_CREATE_ROOM} message S_CREATE_ROOM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_CREATE_ROOM.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S_CREATE_ROOM message from the specified reader or buffer.
         * @function decode
         * @memberof HallPto.S_CREATE_ROOM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.S_CREATE_ROOM} S_CREATE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_CREATE_ROOM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.S_CREATE_ROOM();
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
                    message.tableSeq = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S_CREATE_ROOM message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HallPto.S_CREATE_ROOM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HallPto.S_CREATE_ROOM} S_CREATE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_CREATE_ROOM.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S_CREATE_ROOM message.
         * @function verify
         * @memberof HallPto.S_CREATE_ROOM
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S_CREATE_ROOM.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isInteger(message.cmd))
                    return "cmd: integer expected";
            if (message.scmd != null && message.hasOwnProperty("scmd"))
                if (!$util.isInteger(message.scmd))
                    return "scmd: integer expected";
            if (message.isSuccess != null && message.hasOwnProperty("isSuccess"))
                if (typeof message.isSuccess !== "boolean")
                    return "isSuccess: boolean expected";
            if (message.tableSeq != null && message.hasOwnProperty("tableSeq"))
                if (!$util.isString(message.tableSeq))
                    return "tableSeq: string expected";
            return null;
        };

        return S_CREATE_ROOM;
    })();

    HallPto.C_JOIN_ROOM = (function() {

        /**
         * Properties of a C_JOIN_ROOM.
         * @memberof HallPto
         * @interface IC_JOIN_ROOM
         * @property {number|null} [cmd] C_JOIN_ROOM cmd
         * @property {number|null} [scmd] C_JOIN_ROOM scmd
         * @property {string|null} [tableSeq] C_JOIN_ROOM tableSeq
         */

        /**
         * Constructs a new C_JOIN_ROOM.
         * @memberof HallPto
         * @classdesc Represents a C_JOIN_ROOM.
         * @implements IC_JOIN_ROOM
         * @constructor
         * @param {HallPto.IC_JOIN_ROOM=} [properties] Properties to set
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
         * @memberof HallPto.C_JOIN_ROOM
         * @instance
         */
        C_JOIN_ROOM.prototype.cmd = 1;

        /**
         * C_JOIN_ROOM scmd.
         * @member {number} scmd
         * @memberof HallPto.C_JOIN_ROOM
         * @instance
         */
        C_JOIN_ROOM.prototype.scmd = 7;

        /**
         * C_JOIN_ROOM tableSeq.
         * @member {string} tableSeq
         * @memberof HallPto.C_JOIN_ROOM
         * @instance
         */
        C_JOIN_ROOM.prototype.tableSeq = "";

        /**
         * Creates a new C_JOIN_ROOM instance using the specified properties.
         * @function create
         * @memberof HallPto.C_JOIN_ROOM
         * @static
         * @param {HallPto.IC_JOIN_ROOM=} [properties] Properties to set
         * @returns {HallPto.C_JOIN_ROOM} C_JOIN_ROOM instance
         */
        C_JOIN_ROOM.create = function create(properties) {
            return new C_JOIN_ROOM(properties);
        };

        /**
         * Encodes the specified C_JOIN_ROOM message. Does not implicitly {@link HallPto.C_JOIN_ROOM.verify|verify} messages.
         * @function encode
         * @memberof HallPto.C_JOIN_ROOM
         * @static
         * @param {HallPto.IC_JOIN_ROOM} message C_JOIN_ROOM message or plain object to encode
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
            if (message.tableSeq != null && Object.hasOwnProperty.call(message, "tableSeq"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.tableSeq);
            return writer;
        };

        /**
         * Encodes the specified C_JOIN_ROOM message, length delimited. Does not implicitly {@link HallPto.C_JOIN_ROOM.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HallPto.C_JOIN_ROOM
         * @static
         * @param {HallPto.IC_JOIN_ROOM} message C_JOIN_ROOM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_JOIN_ROOM.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C_JOIN_ROOM message from the specified reader or buffer.
         * @function decode
         * @memberof HallPto.C_JOIN_ROOM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.C_JOIN_ROOM} C_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_JOIN_ROOM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.C_JOIN_ROOM();
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
                    message.tableSeq = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C_JOIN_ROOM message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HallPto.C_JOIN_ROOM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HallPto.C_JOIN_ROOM} C_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_JOIN_ROOM.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C_JOIN_ROOM message.
         * @function verify
         * @memberof HallPto.C_JOIN_ROOM
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C_JOIN_ROOM.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isInteger(message.cmd))
                    return "cmd: integer expected";
            if (message.scmd != null && message.hasOwnProperty("scmd"))
                if (!$util.isInteger(message.scmd))
                    return "scmd: integer expected";
            if (message.tableSeq != null && message.hasOwnProperty("tableSeq"))
                if (!$util.isString(message.tableSeq))
                    return "tableSeq: string expected";
            return null;
        };

        return C_JOIN_ROOM;
    })();

    HallPto.S_JOIN_ROOM = (function() {

        /**
         * Properties of a S_JOIN_ROOM.
         * @memberof HallPto
         * @interface IS_JOIN_ROOM
         * @property {number|null} [cmd] S_JOIN_ROOM cmd
         * @property {number|null} [scmd] S_JOIN_ROOM scmd
         * @property {boolean|null} [isSuccess] S_JOIN_ROOM isSuccess
         * @property {string|null} [tableSeq] S_JOIN_ROOM tableSeq
         * @property {Array.<HallPto.IPlayer>|null} [players] S_JOIN_ROOM players
         * @property {number|null} [gameId] S_JOIN_ROOM gameId
         */

        /**
         * Constructs a new S_JOIN_ROOM.
         * @memberof HallPto
         * @classdesc Represents a S_JOIN_ROOM.
         * @implements IS_JOIN_ROOM
         * @constructor
         * @param {HallPto.IS_JOIN_ROOM=} [properties] Properties to set
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
         * @memberof HallPto.S_JOIN_ROOM
         * @instance
         */
        S_JOIN_ROOM.prototype.cmd = 1;

        /**
         * S_JOIN_ROOM scmd.
         * @member {number} scmd
         * @memberof HallPto.S_JOIN_ROOM
         * @instance
         */
        S_JOIN_ROOM.prototype.scmd = 8;

        /**
         * S_JOIN_ROOM isSuccess.
         * @member {boolean} isSuccess
         * @memberof HallPto.S_JOIN_ROOM
         * @instance
         */
        S_JOIN_ROOM.prototype.isSuccess = false;

        /**
         * S_JOIN_ROOM tableSeq.
         * @member {string} tableSeq
         * @memberof HallPto.S_JOIN_ROOM
         * @instance
         */
        S_JOIN_ROOM.prototype.tableSeq = "";

        /**
         * S_JOIN_ROOM players.
         * @member {Array.<HallPto.IPlayer>} players
         * @memberof HallPto.S_JOIN_ROOM
         * @instance
         */
        S_JOIN_ROOM.prototype.players = $util.emptyArray;

        /**
         * S_JOIN_ROOM gameId.
         * @member {number} gameId
         * @memberof HallPto.S_JOIN_ROOM
         * @instance
         */
        S_JOIN_ROOM.prototype.gameId = 0;

        /**
         * Creates a new S_JOIN_ROOM instance using the specified properties.
         * @function create
         * @memberof HallPto.S_JOIN_ROOM
         * @static
         * @param {HallPto.IS_JOIN_ROOM=} [properties] Properties to set
         * @returns {HallPto.S_JOIN_ROOM} S_JOIN_ROOM instance
         */
        S_JOIN_ROOM.create = function create(properties) {
            return new S_JOIN_ROOM(properties);
        };

        /**
         * Encodes the specified S_JOIN_ROOM message. Does not implicitly {@link HallPto.S_JOIN_ROOM.verify|verify} messages.
         * @function encode
         * @memberof HallPto.S_JOIN_ROOM
         * @static
         * @param {HallPto.IS_JOIN_ROOM} message S_JOIN_ROOM message or plain object to encode
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
            if (message.tableSeq != null && Object.hasOwnProperty.call(message, "tableSeq"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.tableSeq);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.HallPto.Player.encode(message.players[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified S_JOIN_ROOM message, length delimited. Does not implicitly {@link HallPto.S_JOIN_ROOM.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HallPto.S_JOIN_ROOM
         * @static
         * @param {HallPto.IS_JOIN_ROOM} message S_JOIN_ROOM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_JOIN_ROOM.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S_JOIN_ROOM message from the specified reader or buffer.
         * @function decode
         * @memberof HallPto.S_JOIN_ROOM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.S_JOIN_ROOM} S_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_JOIN_ROOM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.S_JOIN_ROOM();
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
                    message.tableSeq = reader.string();
                    break;
                case 5:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.HallPto.Player.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.gameId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S_JOIN_ROOM message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HallPto.S_JOIN_ROOM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HallPto.S_JOIN_ROOM} S_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_JOIN_ROOM.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S_JOIN_ROOM message.
         * @function verify
         * @memberof HallPto.S_JOIN_ROOM
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S_JOIN_ROOM.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isInteger(message.cmd))
                    return "cmd: integer expected";
            if (message.scmd != null && message.hasOwnProperty("scmd"))
                if (!$util.isInteger(message.scmd))
                    return "scmd: integer expected";
            if (message.isSuccess != null && message.hasOwnProperty("isSuccess"))
                if (typeof message.isSuccess !== "boolean")
                    return "isSuccess: boolean expected";
            if (message.tableSeq != null && message.hasOwnProperty("tableSeq"))
                if (!$util.isString(message.tableSeq))
                    return "tableSeq: string expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.HallPto.Player.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            return null;
        };

        return S_JOIN_ROOM;
    })();

    HallPto.C_READY = (function() {

        /**
         * Properties of a C_READY.
         * @memberof HallPto
         * @interface IC_READY
         * @property {number|null} [cmd] C_READY cmd
         * @property {number|null} [scmd] C_READY scmd
         */

        /**
         * Constructs a new C_READY.
         * @memberof HallPto
         * @classdesc Represents a C_READY.
         * @implements IC_READY
         * @constructor
         * @param {HallPto.IC_READY=} [properties] Properties to set
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
         * @memberof HallPto.C_READY
         * @instance
         */
        C_READY.prototype.cmd = 1;

        /**
         * C_READY scmd.
         * @member {number} scmd
         * @memberof HallPto.C_READY
         * @instance
         */
        C_READY.prototype.scmd = 9;

        /**
         * Creates a new C_READY instance using the specified properties.
         * @function create
         * @memberof HallPto.C_READY
         * @static
         * @param {HallPto.IC_READY=} [properties] Properties to set
         * @returns {HallPto.C_READY} C_READY instance
         */
        C_READY.create = function create(properties) {
            return new C_READY(properties);
        };

        /**
         * Encodes the specified C_READY message. Does not implicitly {@link HallPto.C_READY.verify|verify} messages.
         * @function encode
         * @memberof HallPto.C_READY
         * @static
         * @param {HallPto.IC_READY} message C_READY message or plain object to encode
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
         * Encodes the specified C_READY message, length delimited. Does not implicitly {@link HallPto.C_READY.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HallPto.C_READY
         * @static
         * @param {HallPto.IC_READY} message C_READY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C_READY.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C_READY message from the specified reader or buffer.
         * @function decode
         * @memberof HallPto.C_READY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.C_READY} C_READY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_READY.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.C_READY();
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

        /**
         * Decodes a C_READY message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HallPto.C_READY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HallPto.C_READY} C_READY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_READY.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C_READY message.
         * @function verify
         * @memberof HallPto.C_READY
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C_READY.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isInteger(message.cmd))
                    return "cmd: integer expected";
            if (message.scmd != null && message.hasOwnProperty("scmd"))
                if (!$util.isInteger(message.scmd))
                    return "scmd: integer expected";
            return null;
        };

        return C_READY;
    })();

    HallPto.S_PLAYER_READY = (function() {

        /**
         * Properties of a S_PLAYER_READY.
         * @memberof HallPto
         * @interface IS_PLAYER_READY
         * @property {number|null} [cmd] S_PLAYER_READY cmd
         * @property {number|null} [scmd] S_PLAYER_READY scmd
         * @property {number|null} [index] S_PLAYER_READY index
         * @property {boolean|null} [isReady] S_PLAYER_READY isReady
         */

        /**
         * Constructs a new S_PLAYER_READY.
         * @memberof HallPto
         * @classdesc Represents a S_PLAYER_READY.
         * @implements IS_PLAYER_READY
         * @constructor
         * @param {HallPto.IS_PLAYER_READY=} [properties] Properties to set
         */
        function S_PLAYER_READY(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S_PLAYER_READY cmd.
         * @member {number} cmd
         * @memberof HallPto.S_PLAYER_READY
         * @instance
         */
        S_PLAYER_READY.prototype.cmd = 1;

        /**
         * S_PLAYER_READY scmd.
         * @member {number} scmd
         * @memberof HallPto.S_PLAYER_READY
         * @instance
         */
        S_PLAYER_READY.prototype.scmd = 9;

        /**
         * S_PLAYER_READY index.
         * @member {number} index
         * @memberof HallPto.S_PLAYER_READY
         * @instance
         */
        S_PLAYER_READY.prototype.index = 0;

        /**
         * S_PLAYER_READY isReady.
         * @member {boolean} isReady
         * @memberof HallPto.S_PLAYER_READY
         * @instance
         */
        S_PLAYER_READY.prototype.isReady = false;

        /**
         * Creates a new S_PLAYER_READY instance using the specified properties.
         * @function create
         * @memberof HallPto.S_PLAYER_READY
         * @static
         * @param {HallPto.IS_PLAYER_READY=} [properties] Properties to set
         * @returns {HallPto.S_PLAYER_READY} S_PLAYER_READY instance
         */
        S_PLAYER_READY.create = function create(properties) {
            return new S_PLAYER_READY(properties);
        };

        /**
         * Encodes the specified S_PLAYER_READY message. Does not implicitly {@link HallPto.S_PLAYER_READY.verify|verify} messages.
         * @function encode
         * @memberof HallPto.S_PLAYER_READY
         * @static
         * @param {HallPto.IS_PLAYER_READY} message S_PLAYER_READY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_PLAYER_READY.encode = function encode(message, writer) {
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
         * Encodes the specified S_PLAYER_READY message, length delimited. Does not implicitly {@link HallPto.S_PLAYER_READY.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HallPto.S_PLAYER_READY
         * @static
         * @param {HallPto.IS_PLAYER_READY} message S_PLAYER_READY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S_PLAYER_READY.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S_PLAYER_READY message from the specified reader or buffer.
         * @function decode
         * @memberof HallPto.S_PLAYER_READY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.S_PLAYER_READY} S_PLAYER_READY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_PLAYER_READY.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.S_PLAYER_READY();
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

        /**
         * Decodes a S_PLAYER_READY message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HallPto.S_PLAYER_READY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HallPto.S_PLAYER_READY} S_PLAYER_READY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_PLAYER_READY.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S_PLAYER_READY message.
         * @function verify
         * @memberof HallPto.S_PLAYER_READY
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S_PLAYER_READY.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isInteger(message.cmd))
                    return "cmd: integer expected";
            if (message.scmd != null && message.hasOwnProperty("scmd"))
                if (!$util.isInteger(message.scmd))
                    return "scmd: integer expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.isReady != null && message.hasOwnProperty("isReady"))
                if (typeof message.isReady !== "boolean")
                    return "isReady: boolean expected";
            return null;
        };

        return S_PLAYER_READY;
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
                if (!$util.isInteger(message.cmd))
                    return "cmd: integer expected";
            if (message.scmd != null && message.hasOwnProperty("scmd"))
                if (!$util.isInteger(message.scmd))
                    return "scmd: integer expected";
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
         * @property {number|null} [cmd] S_LOGIN cmd
         * @property {number|null} [scmd] S_LOGIN scmd
         * @property {boolean|null} [isSuccess] S_LOGIN isSuccess
         * @property {string|null} [userName] S_LOGIN userName
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
         * S_LOGIN userName.
         * @member {string} userName
         * @memberof LoginPto.S_LOGIN
         * @instance
         */
        S_LOGIN.prototype.userName = "";

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
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.userName);
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
                case 4:
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
                if (!$util.isInteger(message.cmd))
                    return "cmd: integer expected";
            if (message.scmd != null && message.hasOwnProperty("scmd"))
                if (!$util.isInteger(message.scmd))
                    return "scmd: integer expected";
            if (message.isSuccess != null && message.hasOwnProperty("isSuccess"))
                if (typeof message.isSuccess !== "boolean")
                    return "isSuccess: boolean expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            return null;
        };

        return S_LOGIN;
    })();

    return LoginPto;
})();