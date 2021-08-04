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

        return Player;
    })();

    HallPto.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof HallPto
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
         * @memberof HallPto
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {HallPto.IRoomInfo=} [properties] Properties to set
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
         * @memberof HallPto.RoomInfo
         * @instance
         */
        RoomInfo.prototype.gameId = 0;

        /**
         * RoomInfo isStart.
         * @member {boolean} isStart
         * @memberof HallPto.RoomInfo
         * @instance
         */
        RoomInfo.prototype.isStart = false;

        /**
         * RoomInfo describe.
         * @member {string} describe
         * @memberof HallPto.RoomInfo
         * @instance
         */
        RoomInfo.prototype.describe = "";

        /**
         * RoomInfo roomId.
         * @member {number} roomId
         * @memberof HallPto.RoomInfo
         * @instance
         */
        RoomInfo.prototype.roomId = 0;

        /**
         * RoomInfo curPlayer.
         * @member {number} curPlayer
         * @memberof HallPto.RoomInfo
         * @instance
         */
        RoomInfo.prototype.curPlayer = 0;

        /**
         * RoomInfo maxPlayer.
         * @member {number} maxPlayer
         * @memberof HallPto.RoomInfo
         * @instance
         */
        RoomInfo.prototype.maxPlayer = 0;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link HallPto.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof HallPto.RoomInfo
         * @static
         * @param {HallPto.IRoomInfo} message RoomInfo message or plain object to encode
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
         * @memberof HallPto.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.RoomInfo();
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

    HallPto.C_CREATE_ROOM = (function() {

        /**
         * Properties of a C_CREATE_ROOM.
         * @memberof HallPto
         * @interface IC_CREATE_ROOM
         * @property {number|null} [cmd] C_CREATE_ROOM cmd
         * @property {number|null} [scmd] C_CREATE_ROOM scmd
         * @property {number|null} [gameId] C_CREATE_ROOM gameId
         * @property {string|null} [describe] C_CREATE_ROOM describe
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
         * C_CREATE_ROOM describe.
         * @member {string} describe
         * @memberof HallPto.C_CREATE_ROOM
         * @instance
         */
        C_CREATE_ROOM.prototype.describe = "";

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
            if (message.describe != null && Object.hasOwnProperty.call(message, "describe"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.describe);
            return writer;
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

    HallPto.S_CREATE_ROOM = (function() {

        /**
         * Properties of a S_CREATE_ROOM.
         * @memberof HallPto
         * @interface IS_CREATE_ROOM
         * @property {number|null} [cmd] S_CREATE_ROOM cmd
         * @property {number|null} [scmd] S_CREATE_ROOM scmd
         * @property {boolean|null} [isSuccess] S_CREATE_ROOM isSuccess
         * @property {number|null} [roomId] S_CREATE_ROOM roomId
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
         * S_CREATE_ROOM roomId.
         * @member {number} roomId
         * @memberof HallPto.S_CREATE_ROOM
         * @instance
         */
        S_CREATE_ROOM.prototype.roomId = 0;

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
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.roomId);
            return writer;
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

    HallPto.C_JOIN_ROOM = (function() {

        /**
         * Properties of a C_JOIN_ROOM.
         * @memberof HallPto
         * @interface IC_JOIN_ROOM
         * @property {number|null} [cmd] C_JOIN_ROOM cmd
         * @property {number|null} [scmd] C_JOIN_ROOM scmd
         * @property {number|null} [roomId] C_JOIN_ROOM roomId
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
         * C_JOIN_ROOM roomId.
         * @member {number} roomId
         * @memberof HallPto.C_JOIN_ROOM
         * @instance
         */
        C_JOIN_ROOM.prototype.roomId = 0;

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
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roomId);
            return writer;
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
                    message.roomId = reader.int32();
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

    HallPto.S_JOIN_ROOM = (function() {

        /**
         * Properties of a S_JOIN_ROOM.
         * @memberof HallPto
         * @interface IS_JOIN_ROOM
         * @property {number|null} [cmd] S_JOIN_ROOM cmd
         * @property {number|null} [scmd] S_JOIN_ROOM scmd
         * @property {boolean|null} [isSuccess] S_JOIN_ROOM isSuccess
         * @property {number|null} [roomId] S_JOIN_ROOM roomId
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
         * S_JOIN_ROOM roomId.
         * @member {number} roomId
         * @memberof HallPto.S_JOIN_ROOM
         * @instance
         */
        S_JOIN_ROOM.prototype.roomId = 0;

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
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.roomId);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.HallPto.Player.encode(message.players[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.gameId);
            return writer;
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
                    message.roomId = reader.int32();
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

        return S_JOIN_ROOM;
    })();

    HallPto.C_ROOM_LIST = (function() {

        /**
         * Properties of a C_ROOM_LIST.
         * @memberof HallPto
         * @interface IC_ROOM_LIST
         * @property {number|null} [cmd] C_ROOM_LIST cmd
         * @property {number|null} [scmd] C_ROOM_LIST scmd
         * @property {number|null} [gameId] C_ROOM_LIST gameId
         * @property {number|null} [status] C_ROOM_LIST status
         */

        /**
         * Constructs a new C_ROOM_LIST.
         * @memberof HallPto
         * @classdesc Represents a C_ROOM_LIST.
         * @implements IC_ROOM_LIST
         * @constructor
         * @param {HallPto.IC_ROOM_LIST=} [properties] Properties to set
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
         * @memberof HallPto.C_ROOM_LIST
         * @instance
         */
        C_ROOM_LIST.prototype.cmd = 1;

        /**
         * C_ROOM_LIST scmd.
         * @member {number} scmd
         * @memberof HallPto.C_ROOM_LIST
         * @instance
         */
        C_ROOM_LIST.prototype.scmd = 9;

        /**
         * C_ROOM_LIST gameId.
         * @member {number} gameId
         * @memberof HallPto.C_ROOM_LIST
         * @instance
         */
        C_ROOM_LIST.prototype.gameId = 0;

        /**
         * C_ROOM_LIST status.
         * @member {number} status
         * @memberof HallPto.C_ROOM_LIST
         * @instance
         */
        C_ROOM_LIST.prototype.status = 0;

        /**
         * Encodes the specified C_ROOM_LIST message. Does not implicitly {@link HallPto.C_ROOM_LIST.verify|verify} messages.
         * @function encode
         * @memberof HallPto.C_ROOM_LIST
         * @static
         * @param {HallPto.IC_ROOM_LIST} message C_ROOM_LIST message or plain object to encode
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
         * @memberof HallPto.C_ROOM_LIST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.C_ROOM_LIST} C_ROOM_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C_ROOM_LIST.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.C_ROOM_LIST();
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

    HallPto.S_ROOM_LIST = (function() {

        /**
         * Properties of a S_ROOM_LIST.
         * @memberof HallPto
         * @interface IS_ROOM_LIST
         * @property {number|null} [cmd] S_ROOM_LIST cmd
         * @property {number|null} [scmd] S_ROOM_LIST scmd
         * @property {Array.<HallPto.IRoomInfo>|null} [list] S_ROOM_LIST list
         */

        /**
         * Constructs a new S_ROOM_LIST.
         * @memberof HallPto
         * @classdesc Represents a S_ROOM_LIST.
         * @implements IS_ROOM_LIST
         * @constructor
         * @param {HallPto.IS_ROOM_LIST=} [properties] Properties to set
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
         * @memberof HallPto.S_ROOM_LIST
         * @instance
         */
        S_ROOM_LIST.prototype.cmd = 1;

        /**
         * S_ROOM_LIST scmd.
         * @member {number} scmd
         * @memberof HallPto.S_ROOM_LIST
         * @instance
         */
        S_ROOM_LIST.prototype.scmd = 10;

        /**
         * S_ROOM_LIST list.
         * @member {Array.<HallPto.IRoomInfo>} list
         * @memberof HallPto.S_ROOM_LIST
         * @instance
         */
        S_ROOM_LIST.prototype.list = $util.emptyArray;

        /**
         * Encodes the specified S_ROOM_LIST message. Does not implicitly {@link HallPto.S_ROOM_LIST.verify|verify} messages.
         * @function encode
         * @memberof HallPto.S_ROOM_LIST
         * @static
         * @param {HallPto.IS_ROOM_LIST} message S_ROOM_LIST message or plain object to encode
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
                    $root.HallPto.RoomInfo.encode(message.list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_ROOM_LIST message from the specified reader or buffer.
         * @function decode
         * @memberof HallPto.S_ROOM_LIST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.S_ROOM_LIST} S_ROOM_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_ROOM_LIST.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.S_ROOM_LIST();
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
                    message.list.push($root.HallPto.RoomInfo.decode(reader, reader.uint32()));
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

    HallPto.S_BROADCAST_JOIN_ROOM = (function() {

        /**
         * Properties of a S_BROADCAST_JOIN_ROOM.
         * @memberof HallPto
         * @interface IS_BROADCAST_JOIN_ROOM
         * @property {number|null} [cmd] S_BROADCAST_JOIN_ROOM cmd
         * @property {number|null} [scmd] S_BROADCAST_JOIN_ROOM scmd
         * @property {HallPto.IPlayer|null} [player] S_BROADCAST_JOIN_ROOM player
         */

        /**
         * Constructs a new S_BROADCAST_JOIN_ROOM.
         * @memberof HallPto
         * @classdesc Represents a S_BROADCAST_JOIN_ROOM.
         * @implements IS_BROADCAST_JOIN_ROOM
         * @constructor
         * @param {HallPto.IS_BROADCAST_JOIN_ROOM=} [properties] Properties to set
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
         * @memberof HallPto.S_BROADCAST_JOIN_ROOM
         * @instance
         */
        S_BROADCAST_JOIN_ROOM.prototype.cmd = 1;

        /**
         * S_BROADCAST_JOIN_ROOM scmd.
         * @member {number} scmd
         * @memberof HallPto.S_BROADCAST_JOIN_ROOM
         * @instance
         */
        S_BROADCAST_JOIN_ROOM.prototype.scmd = 11;

        /**
         * S_BROADCAST_JOIN_ROOM player.
         * @member {HallPto.IPlayer|null|undefined} player
         * @memberof HallPto.S_BROADCAST_JOIN_ROOM
         * @instance
         */
        S_BROADCAST_JOIN_ROOM.prototype.player = null;

        /**
         * Encodes the specified S_BROADCAST_JOIN_ROOM message. Does not implicitly {@link HallPto.S_BROADCAST_JOIN_ROOM.verify|verify} messages.
         * @function encode
         * @memberof HallPto.S_BROADCAST_JOIN_ROOM
         * @static
         * @param {HallPto.IS_BROADCAST_JOIN_ROOM} message S_BROADCAST_JOIN_ROOM message or plain object to encode
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
                $root.HallPto.Player.encode(message.player, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a S_BROADCAST_JOIN_ROOM message from the specified reader or buffer.
         * @function decode
         * @memberof HallPto.S_BROADCAST_JOIN_ROOM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.S_BROADCAST_JOIN_ROOM} S_BROADCAST_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_BROADCAST_JOIN_ROOM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.S_BROADCAST_JOIN_ROOM();
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
                    message.player = $root.HallPto.Player.decode(reader, reader.uint32());
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

    HallPto.S_BROADCAST_LEAVE_ROOM = (function() {

        /**
         * Properties of a S_BROADCAST_LEAVE_ROOM.
         * @memberof HallPto
         * @interface IS_BROADCAST_LEAVE_ROOM
         * @property {number|null} [cmd] S_BROADCAST_LEAVE_ROOM cmd
         * @property {number|null} [scmd] S_BROADCAST_LEAVE_ROOM scmd
         * @property {number|null} [index] S_BROADCAST_LEAVE_ROOM index
         */

        /**
         * Constructs a new S_BROADCAST_LEAVE_ROOM.
         * @memberof HallPto
         * @classdesc Represents a S_BROADCAST_LEAVE_ROOM.
         * @implements IS_BROADCAST_LEAVE_ROOM
         * @constructor
         * @param {HallPto.IS_BROADCAST_LEAVE_ROOM=} [properties] Properties to set
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
         * @memberof HallPto.S_BROADCAST_LEAVE_ROOM
         * @instance
         */
        S_BROADCAST_LEAVE_ROOM.prototype.cmd = 1;

        /**
         * S_BROADCAST_LEAVE_ROOM scmd.
         * @member {number} scmd
         * @memberof HallPto.S_BROADCAST_LEAVE_ROOM
         * @instance
         */
        S_BROADCAST_LEAVE_ROOM.prototype.scmd = 12;

        /**
         * S_BROADCAST_LEAVE_ROOM index.
         * @member {number} index
         * @memberof HallPto.S_BROADCAST_LEAVE_ROOM
         * @instance
         */
        S_BROADCAST_LEAVE_ROOM.prototype.index = 0;

        /**
         * Encodes the specified S_BROADCAST_LEAVE_ROOM message. Does not implicitly {@link HallPto.S_BROADCAST_LEAVE_ROOM.verify|verify} messages.
         * @function encode
         * @memberof HallPto.S_BROADCAST_LEAVE_ROOM
         * @static
         * @param {HallPto.IS_BROADCAST_LEAVE_ROOM} message S_BROADCAST_LEAVE_ROOM message or plain object to encode
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
         * @memberof HallPto.S_BROADCAST_LEAVE_ROOM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HallPto.S_BROADCAST_LEAVE_ROOM} S_BROADCAST_LEAVE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S_BROADCAST_LEAVE_ROOM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HallPto.S_BROADCAST_LEAVE_ROOM();
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

        return S_LOGIN;
    })();

    return LoginPto;
})();