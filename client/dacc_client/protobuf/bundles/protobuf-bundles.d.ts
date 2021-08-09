type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace GamePto1001. */
declare namespace GamePto1001 {

    /** Properties of a S_GAME_START_1001. */
    interface IS_GAME_START_1001 {

        /** S_GAME_START_1001 cmd */
        cmd?: (number|null);

        /** S_GAME_START_1001 scmd */
        scmd?: (number|null);
    }

    /** Represents a S_GAME_START_1001. */
    class S_GAME_START_1001 implements IS_GAME_START_1001 {

        /**
         * Constructs a new S_GAME_START_1001.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto1001.IS_GAME_START_1001);

        /** S_GAME_START_1001 cmd. */
        public cmd: number;

        /** S_GAME_START_1001 scmd. */
        public scmd: number;

        /**
         * Encodes the specified S_GAME_START_1001 message. Does not implicitly {@link GamePto1001.S_GAME_START_1001.verify|verify} messages.
         * @param message S_GAME_START_1001 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto1001.IS_GAME_START_1001, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_GAME_START_1001 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GAME_START_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto1001.S_GAME_START_1001;
    }

    /** Properties of a C_REQUEST_SWORD_1001. */
    interface IC_REQUEST_SWORD_1001 {

        /** C_REQUEST_SWORD_1001 cmd */
        cmd?: (number|null);

        /** C_REQUEST_SWORD_1001 scmd */
        scmd?: (number|null);

        /** C_REQUEST_SWORD_1001 sword */
        sword?: (number|null);
    }

    /** Represents a C_REQUEST_SWORD_1001. */
    class C_REQUEST_SWORD_1001 implements IC_REQUEST_SWORD_1001 {

        /**
         * Constructs a new C_REQUEST_SWORD_1001.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto1001.IC_REQUEST_SWORD_1001);

        /** C_REQUEST_SWORD_1001 cmd. */
        public cmd: number;

        /** C_REQUEST_SWORD_1001 scmd. */
        public scmd: number;

        /** C_REQUEST_SWORD_1001 sword. */
        public sword: number;

        /**
         * Encodes the specified C_REQUEST_SWORD_1001 message. Does not implicitly {@link GamePto1001.C_REQUEST_SWORD_1001.verify|verify} messages.
         * @param message C_REQUEST_SWORD_1001 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto1001.IC_REQUEST_SWORD_1001, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_REQUEST_SWORD_1001 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_REQUEST_SWORD_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto1001.C_REQUEST_SWORD_1001;
    }

    /** Properties of a S_BROADCAST_SWORD_1001. */
    interface IS_BROADCAST_SWORD_1001 {

        /** S_BROADCAST_SWORD_1001 cmd */
        cmd?: (number|null);

        /** S_BROADCAST_SWORD_1001 scmd */
        scmd?: (number|null);

        /** S_BROADCAST_SWORD_1001 index */
        index?: (number|null);

        /** S_BROADCAST_SWORD_1001 sword */
        sword?: (number|null);
    }

    /** Represents a S_BROADCAST_SWORD_1001. */
    class S_BROADCAST_SWORD_1001 implements IS_BROADCAST_SWORD_1001 {

        /**
         * Constructs a new S_BROADCAST_SWORD_1001.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto1001.IS_BROADCAST_SWORD_1001);

        /** S_BROADCAST_SWORD_1001 cmd. */
        public cmd: number;

        /** S_BROADCAST_SWORD_1001 scmd. */
        public scmd: number;

        /** S_BROADCAST_SWORD_1001 index. */
        public index: number;

        /** S_BROADCAST_SWORD_1001 sword. */
        public sword: number;

        /**
         * Encodes the specified S_BROADCAST_SWORD_1001 message. Does not implicitly {@link GamePto1001.S_BROADCAST_SWORD_1001.verify|verify} messages.
         * @param message S_BROADCAST_SWORD_1001 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto1001.IS_BROADCAST_SWORD_1001, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_BROADCAST_SWORD_1001 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_BROADCAST_SWORD_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto1001.S_BROADCAST_SWORD_1001;
    }

    /** Properties of a S_START_OUT_SWORD_1001. */
    interface IS_START_OUT_SWORD_1001 {

        /** S_START_OUT_SWORD_1001 cmd */
        cmd?: (number|null);

        /** S_START_OUT_SWORD_1001 scmd */
        scmd?: (number|null);

        /** S_START_OUT_SWORD_1001 isStartGame */
        isStartGame?: (boolean|null);
    }

    /** Represents a S_START_OUT_SWORD_1001. */
    class S_START_OUT_SWORD_1001 implements IS_START_OUT_SWORD_1001 {

        /**
         * Constructs a new S_START_OUT_SWORD_1001.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto1001.IS_START_OUT_SWORD_1001);

        /** S_START_OUT_SWORD_1001 cmd. */
        public cmd: number;

        /** S_START_OUT_SWORD_1001 scmd. */
        public scmd: number;

        /** S_START_OUT_SWORD_1001 isStartGame. */
        public isStartGame: boolean;

        /**
         * Encodes the specified S_START_OUT_SWORD_1001 message. Does not implicitly {@link GamePto1001.S_START_OUT_SWORD_1001.verify|verify} messages.
         * @param message S_START_OUT_SWORD_1001 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto1001.IS_START_OUT_SWORD_1001, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_START_OUT_SWORD_1001 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_START_OUT_SWORD_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto1001.S_START_OUT_SWORD_1001;
    }

    /** Properties of a S_GAME_RESULT_1001. */
    interface IS_GAME_RESULT_1001 {

        /** S_GAME_RESULT_1001 cmd */
        cmd?: (number|null);

        /** S_GAME_RESULT_1001 scmd */
        scmd?: (number|null);

        /** S_GAME_RESULT_1001 winIndex */
        winIndex?: (number|null);

        /** S_GAME_RESULT_1001 swords */
        swords?: (number[]|null);
    }

    /** Represents a S_GAME_RESULT_1001. */
    class S_GAME_RESULT_1001 implements IS_GAME_RESULT_1001 {

        /**
         * Constructs a new S_GAME_RESULT_1001.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto1001.IS_GAME_RESULT_1001);

        /** S_GAME_RESULT_1001 cmd. */
        public cmd: number;

        /** S_GAME_RESULT_1001 scmd. */
        public scmd: number;

        /** S_GAME_RESULT_1001 winIndex. */
        public winIndex: number;

        /** S_GAME_RESULT_1001 swords. */
        public swords: number[];

        /**
         * Encodes the specified S_GAME_RESULT_1001 message. Does not implicitly {@link GamePto1001.S_GAME_RESULT_1001.verify|verify} messages.
         * @param message S_GAME_RESULT_1001 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto1001.IS_GAME_RESULT_1001, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_GAME_RESULT_1001 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GAME_RESULT_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto1001.S_GAME_RESULT_1001;
    }
}

/** Namespace HallPto. */
declare namespace HallPto {

    /** Properties of a GameInfo. */
    interface IGameInfo {

        /** GameInfo gameId */
        gameId?: (number|null);

        /** GameInfo gameName */
        gameName?: (string|null);
    }

    /** Represents a GameInfo. */
    class GameInfo implements IGameInfo {

        /**
         * Constructs a new GameInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: HallPto.IGameInfo);

        /** GameInfo gameId. */
        public gameId: number;

        /** GameInfo gameName. */
        public gameName: string;

        /**
         * Encodes the specified GameInfo message. Does not implicitly {@link HallPto.GameInfo.verify|verify} messages.
         * @param message GameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IGameInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): HallPto.GameInfo;
    }

    /** Properties of a C_SEND_CHAT_MSG. */
    interface IC_SEND_CHAT_MSG {

        /** C_SEND_CHAT_MSG cmd */
        cmd?: (number|null);

        /** C_SEND_CHAT_MSG scmd */
        scmd?: (number|null);

        /** C_SEND_CHAT_MSG msg */
        msg?: (string|null);
    }

    /** Represents a C_SEND_CHAT_MSG. */
    class C_SEND_CHAT_MSG implements IC_SEND_CHAT_MSG {

        /**
         * Constructs a new C_SEND_CHAT_MSG.
         * @param [properties] Properties to set
         */
        constructor(properties?: HallPto.IC_SEND_CHAT_MSG);

        /** C_SEND_CHAT_MSG cmd. */
        public cmd: number;

        /** C_SEND_CHAT_MSG scmd. */
        public scmd: number;

        /** C_SEND_CHAT_MSG msg. */
        public msg: string;

        /**
         * Encodes the specified C_SEND_CHAT_MSG message. Does not implicitly {@link HallPto.C_SEND_CHAT_MSG.verify|verify} messages.
         * @param message C_SEND_CHAT_MSG message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IC_SEND_CHAT_MSG, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_SEND_CHAT_MSG message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_SEND_CHAT_MSG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): HallPto.C_SEND_CHAT_MSG;
    }

    /** Properties of a S_CHAT_MSG. */
    interface IS_CHAT_MSG {

        /** S_CHAT_MSG cmd */
        cmd?: (number|null);

        /** S_CHAT_MSG scmd */
        scmd?: (number|null);

        /** S_CHAT_MSG userName */
        userName?: (string|null);

        /** S_CHAT_MSG msg */
        msg?: (string|null);
    }

    /** Represents a S_CHAT_MSG. */
    class S_CHAT_MSG implements IS_CHAT_MSG {

        /**
         * Constructs a new S_CHAT_MSG.
         * @param [properties] Properties to set
         */
        constructor(properties?: HallPto.IS_CHAT_MSG);

        /** S_CHAT_MSG cmd. */
        public cmd: number;

        /** S_CHAT_MSG scmd. */
        public scmd: number;

        /** S_CHAT_MSG userName. */
        public userName: string;

        /** S_CHAT_MSG msg. */
        public msg: string;

        /**
         * Encodes the specified S_CHAT_MSG message. Does not implicitly {@link HallPto.S_CHAT_MSG.verify|verify} messages.
         * @param message S_CHAT_MSG message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IS_CHAT_MSG, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_CHAT_MSG message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_CHAT_MSG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): HallPto.S_CHAT_MSG;
    }

    /** Properties of a S_GAME_LIST. */
    interface IS_GAME_LIST {

        /** S_GAME_LIST cmd */
        cmd?: (number|null);

        /** S_GAME_LIST scmd */
        scmd?: (number|null);

        /** S_GAME_LIST list */
        list?: (HallPto.IGameInfo[]|null);
    }

    /** Represents a S_GAME_LIST. */
    class S_GAME_LIST implements IS_GAME_LIST {

        /**
         * Constructs a new S_GAME_LIST.
         * @param [properties] Properties to set
         */
        constructor(properties?: HallPto.IS_GAME_LIST);

        /** S_GAME_LIST cmd. */
        public cmd: number;

        /** S_GAME_LIST scmd. */
        public scmd: number;

        /** S_GAME_LIST list. */
        public list: HallPto.IGameInfo[];

        /**
         * Encodes the specified S_GAME_LIST message. Does not implicitly {@link HallPto.S_GAME_LIST.verify|verify} messages.
         * @param message S_GAME_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IS_GAME_LIST, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_GAME_LIST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GAME_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): HallPto.S_GAME_LIST;
    }

    /** Properties of a C_CHANGE_HEAD. */
    interface IC_CHANGE_HEAD {

        /** C_CHANGE_HEAD cmd */
        cmd?: (number|null);

        /** C_CHANGE_HEAD scmd */
        scmd?: (number|null);

        /** C_CHANGE_HEAD headIndex */
        headIndex?: (number|null);
    }

    /** Represents a C_CHANGE_HEAD. */
    class C_CHANGE_HEAD implements IC_CHANGE_HEAD {

        /**
         * Constructs a new C_CHANGE_HEAD.
         * @param [properties] Properties to set
         */
        constructor(properties?: HallPto.IC_CHANGE_HEAD);

        /** C_CHANGE_HEAD cmd. */
        public cmd: number;

        /** C_CHANGE_HEAD scmd. */
        public scmd: number;

        /** C_CHANGE_HEAD headIndex. */
        public headIndex: number;

        /**
         * Encodes the specified C_CHANGE_HEAD message. Does not implicitly {@link HallPto.C_CHANGE_HEAD.verify|verify} messages.
         * @param message C_CHANGE_HEAD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IC_CHANGE_HEAD, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_CHANGE_HEAD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_CHANGE_HEAD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): HallPto.C_CHANGE_HEAD;
    }
}

/** Namespace LoginPto. */
declare namespace LoginPto {

    /** Properties of a C_LOGIN. */
    interface IC_LOGIN {

        /** C_LOGIN cmd */
        cmd?: (number|null);

        /** C_LOGIN scmd */
        scmd?: (number|null);

        /** C_LOGIN userName */
        userName?: (string|null);
    }

    /** Represents a C_LOGIN. */
    class C_LOGIN implements IC_LOGIN {

        /**
         * Constructs a new C_LOGIN.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginPto.IC_LOGIN);

        /** C_LOGIN cmd. */
        public cmd: number;

        /** C_LOGIN scmd. */
        public scmd: number;

        /** C_LOGIN userName. */
        public userName: string;

        /**
         * Encodes the specified C_LOGIN message. Does not implicitly {@link LoginPto.C_LOGIN.verify|verify} messages.
         * @param message C_LOGIN message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginPto.IC_LOGIN, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_LOGIN message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): LoginPto.C_LOGIN;
    }

    /** Properties of a S_LOGIN. */
    interface IS_LOGIN {

        /** S_LOGIN cmd */
        cmd?: (number|null);

        /** S_LOGIN scmd */
        scmd?: (number|null);

        /** S_LOGIN isSuccess */
        isSuccess?: (boolean|null);

        /** S_LOGIN userName */
        userName?: (string|null);
    }

    /** Represents a S_LOGIN. */
    class S_LOGIN implements IS_LOGIN {

        /**
         * Constructs a new S_LOGIN.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginPto.IS_LOGIN);

        /** S_LOGIN cmd. */
        public cmd: number;

        /** S_LOGIN scmd. */
        public scmd: number;

        /** S_LOGIN isSuccess. */
        public isSuccess: boolean;

        /** S_LOGIN userName. */
        public userName: string;

        /**
         * Encodes the specified S_LOGIN message. Does not implicitly {@link LoginPto.S_LOGIN.verify|verify} messages.
         * @param message S_LOGIN message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginPto.IS_LOGIN, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_LOGIN message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): LoginPto.S_LOGIN;
    }
}

/** Namespace RoomPto. */
declare namespace RoomPto {

    /** Properties of a Player. */
    interface IPlayer {

        /** Player index */
        index?: (number|null);

        /** Player headIndex */
        headIndex?: (number|null);

        /** Player userName */
        userName?: (string|null);

        /** Player isReady */
        isReady?: (boolean|null);
    }

    /** Represents a Player. */
    class Player implements IPlayer {

        /**
         * Constructs a new Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomPto.IPlayer);

        /** Player index. */
        public index: number;

        /** Player headIndex. */
        public headIndex: number;

        /** Player userName. */
        public userName: string;

        /** Player isReady. */
        public isReady: boolean;

        /**
         * Encodes the specified Player message. Does not implicitly {@link RoomPto.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RoomPto.Player;
    }

    /** Properties of a RoomInfo. */
    interface IRoomInfo {

        /** RoomInfo gameId */
        gameId?: (number|null);

        /** RoomInfo isStart */
        isStart?: (boolean|null);

        /** RoomInfo describe */
        describe?: (string|null);

        /** RoomInfo roomId */
        roomId?: (number|null);

        /** RoomInfo curPlayer */
        curPlayer?: (number|null);

        /** RoomInfo maxPlayer */
        maxPlayer?: (number|null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomPto.IRoomInfo);

        /** RoomInfo gameId. */
        public gameId: number;

        /** RoomInfo isStart. */
        public isStart: boolean;

        /** RoomInfo describe. */
        public describe: string;

        /** RoomInfo roomId. */
        public roomId: number;

        /** RoomInfo curPlayer. */
        public curPlayer: number;

        /** RoomInfo maxPlayer. */
        public maxPlayer: number;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link RoomPto.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RoomPto.RoomInfo;
    }

    /** Properties of a C_CREATE_ROOM. */
    interface IC_CREATE_ROOM {

        /** C_CREATE_ROOM cmd */
        cmd?: (number|null);

        /** C_CREATE_ROOM scmd */
        scmd?: (number|null);

        /** C_CREATE_ROOM gameId */
        gameId?: (number|null);

        /** C_CREATE_ROOM describe */
        describe?: (string|null);
    }

    /** Represents a C_CREATE_ROOM. */
    class C_CREATE_ROOM implements IC_CREATE_ROOM {

        /**
         * Constructs a new C_CREATE_ROOM.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomPto.IC_CREATE_ROOM);

        /** C_CREATE_ROOM cmd. */
        public cmd: number;

        /** C_CREATE_ROOM scmd. */
        public scmd: number;

        /** C_CREATE_ROOM gameId. */
        public gameId: number;

        /** C_CREATE_ROOM describe. */
        public describe: string;

        /**
         * Encodes the specified C_CREATE_ROOM message. Does not implicitly {@link RoomPto.C_CREATE_ROOM.verify|verify} messages.
         * @param message C_CREATE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IC_CREATE_ROOM, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_CREATE_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_CREATE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RoomPto.C_CREATE_ROOM;
    }

    /** Properties of a S_CREATE_ROOM. */
    interface IS_CREATE_ROOM {

        /** S_CREATE_ROOM cmd */
        cmd?: (number|null);

        /** S_CREATE_ROOM scmd */
        scmd?: (number|null);

        /** S_CREATE_ROOM isSuccess */
        isSuccess?: (boolean|null);

        /** S_CREATE_ROOM roomId */
        roomId?: (number|null);
    }

    /** Represents a S_CREATE_ROOM. */
    class S_CREATE_ROOM implements IS_CREATE_ROOM {

        /**
         * Constructs a new S_CREATE_ROOM.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomPto.IS_CREATE_ROOM);

        /** S_CREATE_ROOM cmd. */
        public cmd: number;

        /** S_CREATE_ROOM scmd. */
        public scmd: number;

        /** S_CREATE_ROOM isSuccess. */
        public isSuccess: boolean;

        /** S_CREATE_ROOM roomId. */
        public roomId: number;

        /**
         * Encodes the specified S_CREATE_ROOM message. Does not implicitly {@link RoomPto.S_CREATE_ROOM.verify|verify} messages.
         * @param message S_CREATE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IS_CREATE_ROOM, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_CREATE_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_CREATE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RoomPto.S_CREATE_ROOM;
    }

    /** Properties of a C_JOIN_ROOM. */
    interface IC_JOIN_ROOM {

        /** C_JOIN_ROOM cmd */
        cmd?: (number|null);

        /** C_JOIN_ROOM scmd */
        scmd?: (number|null);

        /** C_JOIN_ROOM roomId */
        roomId?: (number|null);

        /** C_JOIN_ROOM isWatch */
        isWatch?: (boolean|null);
    }

    /** Represents a C_JOIN_ROOM. */
    class C_JOIN_ROOM implements IC_JOIN_ROOM {

        /**
         * Constructs a new C_JOIN_ROOM.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomPto.IC_JOIN_ROOM);

        /** C_JOIN_ROOM cmd. */
        public cmd: number;

        /** C_JOIN_ROOM scmd. */
        public scmd: number;

        /** C_JOIN_ROOM roomId. */
        public roomId: number;

        /** C_JOIN_ROOM isWatch. */
        public isWatch: boolean;

        /**
         * Encodes the specified C_JOIN_ROOM message. Does not implicitly {@link RoomPto.C_JOIN_ROOM.verify|verify} messages.
         * @param message C_JOIN_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IC_JOIN_ROOM, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_JOIN_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RoomPto.C_JOIN_ROOM;
    }

    /** Properties of a S_JOIN_ROOM. */
    interface IS_JOIN_ROOM {

        /** S_JOIN_ROOM cmd */
        cmd?: (number|null);

        /** S_JOIN_ROOM scmd */
        scmd?: (number|null);

        /** S_JOIN_ROOM isSuccess */
        isSuccess?: (boolean|null);

        /** S_JOIN_ROOM roomId */
        roomId?: (number|null);

        /** S_JOIN_ROOM players */
        players?: (RoomPto.IPlayer[]|null);

        /** S_JOIN_ROOM gameId */
        gameId?: (number|null);

        /** S_JOIN_ROOM selfIndex */
        selfIndex?: (number|null);

        /** S_JOIN_ROOM roomSeq */
        roomSeq?: (string|null);

        /** S_JOIN_ROOM isWatcher */
        isWatcher?: (boolean|null);
    }

    /** Represents a S_JOIN_ROOM. */
    class S_JOIN_ROOM implements IS_JOIN_ROOM {

        /**
         * Constructs a new S_JOIN_ROOM.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomPto.IS_JOIN_ROOM);

        /** S_JOIN_ROOM cmd. */
        public cmd: number;

        /** S_JOIN_ROOM scmd. */
        public scmd: number;

        /** S_JOIN_ROOM isSuccess. */
        public isSuccess: boolean;

        /** S_JOIN_ROOM roomId. */
        public roomId: number;

        /** S_JOIN_ROOM players. */
        public players: RoomPto.IPlayer[];

        /** S_JOIN_ROOM gameId. */
        public gameId: number;

        /** S_JOIN_ROOM selfIndex. */
        public selfIndex: number;

        /** S_JOIN_ROOM roomSeq. */
        public roomSeq: string;

        /** S_JOIN_ROOM isWatcher. */
        public isWatcher: boolean;

        /**
         * Encodes the specified S_JOIN_ROOM message. Does not implicitly {@link RoomPto.S_JOIN_ROOM.verify|verify} messages.
         * @param message S_JOIN_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IS_JOIN_ROOM, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_JOIN_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RoomPto.S_JOIN_ROOM;
    }

    /** Properties of a C_ROOM_LIST. */
    interface IC_ROOM_LIST {

        /** C_ROOM_LIST cmd */
        cmd?: (number|null);

        /** C_ROOM_LIST scmd */
        scmd?: (number|null);

        /** C_ROOM_LIST gameId */
        gameId?: (number|null);

        /** C_ROOM_LIST status */
        status?: (number|null);
    }

    /** Represents a C_ROOM_LIST. */
    class C_ROOM_LIST implements IC_ROOM_LIST {

        /**
         * Constructs a new C_ROOM_LIST.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomPto.IC_ROOM_LIST);

        /** C_ROOM_LIST cmd. */
        public cmd: number;

        /** C_ROOM_LIST scmd. */
        public scmd: number;

        /** C_ROOM_LIST gameId. */
        public gameId: number;

        /** C_ROOM_LIST status. */
        public status: number;

        /**
         * Encodes the specified C_ROOM_LIST message. Does not implicitly {@link RoomPto.C_ROOM_LIST.verify|verify} messages.
         * @param message C_ROOM_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IC_ROOM_LIST, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_ROOM_LIST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_ROOM_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RoomPto.C_ROOM_LIST;
    }

    /** Properties of a S_ROOM_LIST. */
    interface IS_ROOM_LIST {

        /** S_ROOM_LIST cmd */
        cmd?: (number|null);

        /** S_ROOM_LIST scmd */
        scmd?: (number|null);

        /** S_ROOM_LIST list */
        list?: (RoomPto.IRoomInfo[]|null);
    }

    /** Represents a S_ROOM_LIST. */
    class S_ROOM_LIST implements IS_ROOM_LIST {

        /**
         * Constructs a new S_ROOM_LIST.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomPto.IS_ROOM_LIST);

        /** S_ROOM_LIST cmd. */
        public cmd: number;

        /** S_ROOM_LIST scmd. */
        public scmd: number;

        /** S_ROOM_LIST list. */
        public list: RoomPto.IRoomInfo[];

        /**
         * Encodes the specified S_ROOM_LIST message. Does not implicitly {@link RoomPto.S_ROOM_LIST.verify|verify} messages.
         * @param message S_ROOM_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IS_ROOM_LIST, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_ROOM_LIST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ROOM_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RoomPto.S_ROOM_LIST;
    }

    /** Properties of a S_BROADCAST_JOIN_ROOM. */
    interface IS_BROADCAST_JOIN_ROOM {

        /** S_BROADCAST_JOIN_ROOM cmd */
        cmd?: (number|null);

        /** S_BROADCAST_JOIN_ROOM scmd */
        scmd?: (number|null);

        /** S_BROADCAST_JOIN_ROOM player */
        player?: (RoomPto.IPlayer|null);
    }

    /** Represents a S_BROADCAST_JOIN_ROOM. */
    class S_BROADCAST_JOIN_ROOM implements IS_BROADCAST_JOIN_ROOM {

        /**
         * Constructs a new S_BROADCAST_JOIN_ROOM.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomPto.IS_BROADCAST_JOIN_ROOM);

        /** S_BROADCAST_JOIN_ROOM cmd. */
        public cmd: number;

        /** S_BROADCAST_JOIN_ROOM scmd. */
        public scmd: number;

        /** S_BROADCAST_JOIN_ROOM player. */
        public player?: (RoomPto.IPlayer|null);

        /**
         * Encodes the specified S_BROADCAST_JOIN_ROOM message. Does not implicitly {@link RoomPto.S_BROADCAST_JOIN_ROOM.verify|verify} messages.
         * @param message S_BROADCAST_JOIN_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IS_BROADCAST_JOIN_ROOM, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_BROADCAST_JOIN_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_BROADCAST_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RoomPto.S_BROADCAST_JOIN_ROOM;
    }

    /** Properties of a S_BROADCAST_LEAVE_ROOM. */
    interface IS_BROADCAST_LEAVE_ROOM {

        /** S_BROADCAST_LEAVE_ROOM cmd */
        cmd?: (number|null);

        /** S_BROADCAST_LEAVE_ROOM scmd */
        scmd?: (number|null);

        /** S_BROADCAST_LEAVE_ROOM index */
        index?: (number|null);
    }

    /** Represents a S_BROADCAST_LEAVE_ROOM. */
    class S_BROADCAST_LEAVE_ROOM implements IS_BROADCAST_LEAVE_ROOM {

        /**
         * Constructs a new S_BROADCAST_LEAVE_ROOM.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomPto.IS_BROADCAST_LEAVE_ROOM);

        /** S_BROADCAST_LEAVE_ROOM cmd. */
        public cmd: number;

        /** S_BROADCAST_LEAVE_ROOM scmd. */
        public scmd: number;

        /** S_BROADCAST_LEAVE_ROOM index. */
        public index: number;

        /**
         * Encodes the specified S_BROADCAST_LEAVE_ROOM message. Does not implicitly {@link RoomPto.S_BROADCAST_LEAVE_ROOM.verify|verify} messages.
         * @param message S_BROADCAST_LEAVE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IS_BROADCAST_LEAVE_ROOM, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_BROADCAST_LEAVE_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_BROADCAST_LEAVE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RoomPto.S_BROADCAST_LEAVE_ROOM;
    }

    /** Properties of a C_READY. */
    interface IC_READY {

        /** C_READY cmd */
        cmd?: (number|null);

        /** C_READY scmd */
        scmd?: (number|null);
    }

    /** Represents a C_READY. */
    class C_READY implements IC_READY {

        /**
         * Constructs a new C_READY.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomPto.IC_READY);

        /** C_READY cmd. */
        public cmd: number;

        /** C_READY scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_READY message. Does not implicitly {@link RoomPto.C_READY.verify|verify} messages.
         * @param message C_READY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IC_READY, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_READY message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_READY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RoomPto.C_READY;
    }

    /** Properties of a S_PLAYER_READY_STATUS_CHANGE. */
    interface IS_PLAYER_READY_STATUS_CHANGE {

        /** S_PLAYER_READY_STATUS_CHANGE cmd */
        cmd?: (number|null);

        /** S_PLAYER_READY_STATUS_CHANGE scmd */
        scmd?: (number|null);

        /** S_PLAYER_READY_STATUS_CHANGE index */
        index?: (number|null);

        /** S_PLAYER_READY_STATUS_CHANGE isReady */
        isReady?: (boolean|null);
    }

    /** Represents a S_PLAYER_READY_STATUS_CHANGE. */
    class S_PLAYER_READY_STATUS_CHANGE implements IS_PLAYER_READY_STATUS_CHANGE {

        /**
         * Constructs a new S_PLAYER_READY_STATUS_CHANGE.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomPto.IS_PLAYER_READY_STATUS_CHANGE);

        /** S_PLAYER_READY_STATUS_CHANGE cmd. */
        public cmd: number;

        /** S_PLAYER_READY_STATUS_CHANGE scmd. */
        public scmd: number;

        /** S_PLAYER_READY_STATUS_CHANGE index. */
        public index: number;

        /** S_PLAYER_READY_STATUS_CHANGE isReady. */
        public isReady: boolean;

        /**
         * Encodes the specified S_PLAYER_READY_STATUS_CHANGE message. Does not implicitly {@link RoomPto.S_PLAYER_READY_STATUS_CHANGE.verify|verify} messages.
         * @param message S_PLAYER_READY_STATUS_CHANGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IS_PLAYER_READY_STATUS_CHANGE, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_PLAYER_READY_STATUS_CHANGE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_PLAYER_READY_STATUS_CHANGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RoomPto.S_PLAYER_READY_STATUS_CHANGE;
    }

    /** Properties of a C_LEAVE_ROOM. */
    interface IC_LEAVE_ROOM {

        /** C_LEAVE_ROOM cmd */
        cmd?: (number|null);

        /** C_LEAVE_ROOM scmd */
        scmd?: (number|null);
    }

    /** Represents a C_LEAVE_ROOM. */
    class C_LEAVE_ROOM implements IC_LEAVE_ROOM {

        /**
         * Constructs a new C_LEAVE_ROOM.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomPto.IC_LEAVE_ROOM);

        /** C_LEAVE_ROOM cmd. */
        public cmd: number;

        /** C_LEAVE_ROOM scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_LEAVE_ROOM message. Does not implicitly {@link RoomPto.C_LEAVE_ROOM.verify|verify} messages.
         * @param message C_LEAVE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IC_LEAVE_ROOM, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_LEAVE_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_LEAVE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RoomPto.C_LEAVE_ROOM;
    }
}

/** Namespace SystemPto. */
declare namespace SystemPto {

    /** Properties of a S_TIPS. */
    interface IS_TIPS {

        /** S_TIPS cmd */
        cmd?: (number|null);

        /** S_TIPS scmd */
        scmd?: (number|null);

        /** S_TIPS msg */
        msg?: (string|null);

        /** S_TIPS hoverTime */
        hoverTime?: (number|null);
    }

    /** Represents a S_TIPS. */
    class S_TIPS implements IS_TIPS {

        /**
         * Constructs a new S_TIPS.
         * @param [properties] Properties to set
         */
        constructor(properties?: SystemPto.IS_TIPS);

        /** S_TIPS cmd. */
        public cmd: number;

        /** S_TIPS scmd. */
        public scmd: number;

        /** S_TIPS msg. */
        public msg: string;

        /** S_TIPS hoverTime. */
        public hoverTime: number;

        /**
         * Encodes the specified S_TIPS message. Does not implicitly {@link SystemPto.S_TIPS.verify|verify} messages.
         * @param message S_TIPS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SystemPto.IS_TIPS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_TIPS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_TIPS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): SystemPto.S_TIPS;
    }
}
