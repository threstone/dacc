type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace GamePto1001. */
declare namespace GamePto1001 {

    /** Properties of a S_INIT_SCENE. */
    interface IS_INIT_SCENE {

        /** S_INIT_SCENE cmd */
        cmd?: (number|null);

        /** S_INIT_SCENE scmd */
        scmd?: (number|null);

        /** S_INIT_SCENE tableSeq */
        tableSeq?: (string|null);
    }

    /** Represents a S_INIT_SCENE. */
    class S_INIT_SCENE implements IS_INIT_SCENE {

        /**
         * Constructs a new S_INIT_SCENE.
         * @param [properties] Properties to set
         */
        constructor(properties?: GamePto1001.IS_INIT_SCENE);

        /** S_INIT_SCENE cmd. */
        public cmd: number;

        /** S_INIT_SCENE scmd. */
        public scmd: number;

        /** S_INIT_SCENE tableSeq. */
        public tableSeq: string;

        /**
         * Encodes the specified S_INIT_SCENE message. Does not implicitly {@link GamePto1001.S_INIT_SCENE.verify|verify} messages.
         * @param message S_INIT_SCENE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto1001.IS_INIT_SCENE, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_INIT_SCENE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_INIT_SCENE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GamePto1001.S_INIT_SCENE;
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
        constructor(properties?: HallPto.IPlayer);

        /** Player index. */
        public index: number;

        /** Player headIndex. */
        public headIndex: number;

        /** Player userName. */
        public userName: string;

        /** Player isReady. */
        public isReady: boolean;

        /**
         * Encodes the specified Player message. Does not implicitly {@link HallPto.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): HallPto.Player;
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
        constructor(properties?: HallPto.IRoomInfo);

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
         * Encodes the specified RoomInfo message. Does not implicitly {@link HallPto.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): HallPto.RoomInfo;
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
        constructor(properties?: HallPto.IC_CREATE_ROOM);

        /** C_CREATE_ROOM cmd. */
        public cmd: number;

        /** C_CREATE_ROOM scmd. */
        public scmd: number;

        /** C_CREATE_ROOM gameId. */
        public gameId: number;

        /** C_CREATE_ROOM describe. */
        public describe: string;

        /**
         * Encodes the specified C_CREATE_ROOM message. Does not implicitly {@link HallPto.C_CREATE_ROOM.verify|verify} messages.
         * @param message C_CREATE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IC_CREATE_ROOM, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_CREATE_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_CREATE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): HallPto.C_CREATE_ROOM;
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
        constructor(properties?: HallPto.IS_CREATE_ROOM);

        /** S_CREATE_ROOM cmd. */
        public cmd: number;

        /** S_CREATE_ROOM scmd. */
        public scmd: number;

        /** S_CREATE_ROOM isSuccess. */
        public isSuccess: boolean;

        /** S_CREATE_ROOM roomId. */
        public roomId: number;

        /**
         * Encodes the specified S_CREATE_ROOM message. Does not implicitly {@link HallPto.S_CREATE_ROOM.verify|verify} messages.
         * @param message S_CREATE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IS_CREATE_ROOM, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_CREATE_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_CREATE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): HallPto.S_CREATE_ROOM;
    }

    /** Properties of a C_JOIN_ROOM. */
    interface IC_JOIN_ROOM {

        /** C_JOIN_ROOM cmd */
        cmd?: (number|null);

        /** C_JOIN_ROOM scmd */
        scmd?: (number|null);

        /** C_JOIN_ROOM roomId */
        roomId?: (number|null);
    }

    /** Represents a C_JOIN_ROOM. */
    class C_JOIN_ROOM implements IC_JOIN_ROOM {

        /**
         * Constructs a new C_JOIN_ROOM.
         * @param [properties] Properties to set
         */
        constructor(properties?: HallPto.IC_JOIN_ROOM);

        /** C_JOIN_ROOM cmd. */
        public cmd: number;

        /** C_JOIN_ROOM scmd. */
        public scmd: number;

        /** C_JOIN_ROOM roomId. */
        public roomId: number;

        /**
         * Encodes the specified C_JOIN_ROOM message. Does not implicitly {@link HallPto.C_JOIN_ROOM.verify|verify} messages.
         * @param message C_JOIN_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IC_JOIN_ROOM, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_JOIN_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): HallPto.C_JOIN_ROOM;
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
        players?: (HallPto.IPlayer[]|null);

        /** S_JOIN_ROOM gameId */
        gameId?: (number|null);
    }

    /** Represents a S_JOIN_ROOM. */
    class S_JOIN_ROOM implements IS_JOIN_ROOM {

        /**
         * Constructs a new S_JOIN_ROOM.
         * @param [properties] Properties to set
         */
        constructor(properties?: HallPto.IS_JOIN_ROOM);

        /** S_JOIN_ROOM cmd. */
        public cmd: number;

        /** S_JOIN_ROOM scmd. */
        public scmd: number;

        /** S_JOIN_ROOM isSuccess. */
        public isSuccess: boolean;

        /** S_JOIN_ROOM roomId. */
        public roomId: number;

        /** S_JOIN_ROOM players. */
        public players: HallPto.IPlayer[];

        /** S_JOIN_ROOM gameId. */
        public gameId: number;

        /**
         * Encodes the specified S_JOIN_ROOM message. Does not implicitly {@link HallPto.S_JOIN_ROOM.verify|verify} messages.
         * @param message S_JOIN_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IS_JOIN_ROOM, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_JOIN_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): HallPto.S_JOIN_ROOM;
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
        constructor(properties?: HallPto.IC_ROOM_LIST);

        /** C_ROOM_LIST cmd. */
        public cmd: number;

        /** C_ROOM_LIST scmd. */
        public scmd: number;

        /** C_ROOM_LIST gameId. */
        public gameId: number;

        /** C_ROOM_LIST status. */
        public status: number;

        /**
         * Encodes the specified C_ROOM_LIST message. Does not implicitly {@link HallPto.C_ROOM_LIST.verify|verify} messages.
         * @param message C_ROOM_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IC_ROOM_LIST, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_ROOM_LIST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_ROOM_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): HallPto.C_ROOM_LIST;
    }

    /** Properties of a S_ROOM_LIST. */
    interface IS_ROOM_LIST {

        /** S_ROOM_LIST cmd */
        cmd?: (number|null);

        /** S_ROOM_LIST scmd */
        scmd?: (number|null);

        /** S_ROOM_LIST list */
        list?: (HallPto.IRoomInfo[]|null);
    }

    /** Represents a S_ROOM_LIST. */
    class S_ROOM_LIST implements IS_ROOM_LIST {

        /**
         * Constructs a new S_ROOM_LIST.
         * @param [properties] Properties to set
         */
        constructor(properties?: HallPto.IS_ROOM_LIST);

        /** S_ROOM_LIST cmd. */
        public cmd: number;

        /** S_ROOM_LIST scmd. */
        public scmd: number;

        /** S_ROOM_LIST list. */
        public list: HallPto.IRoomInfo[];

        /**
         * Encodes the specified S_ROOM_LIST message. Does not implicitly {@link HallPto.S_ROOM_LIST.verify|verify} messages.
         * @param message S_ROOM_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IS_ROOM_LIST, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_ROOM_LIST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ROOM_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): HallPto.S_ROOM_LIST;
    }

    /** Properties of a S_BROADCAST_JOIN_ROOM. */
    interface IS_BROADCAST_JOIN_ROOM {

        /** S_BROADCAST_JOIN_ROOM cmd */
        cmd?: (number|null);

        /** S_BROADCAST_JOIN_ROOM scmd */
        scmd?: (number|null);

        /** S_BROADCAST_JOIN_ROOM player */
        player?: (HallPto.IPlayer|null);
    }

    /** Represents a S_BROADCAST_JOIN_ROOM. */
    class S_BROADCAST_JOIN_ROOM implements IS_BROADCAST_JOIN_ROOM {

        /**
         * Constructs a new S_BROADCAST_JOIN_ROOM.
         * @param [properties] Properties to set
         */
        constructor(properties?: HallPto.IS_BROADCAST_JOIN_ROOM);

        /** S_BROADCAST_JOIN_ROOM cmd. */
        public cmd: number;

        /** S_BROADCAST_JOIN_ROOM scmd. */
        public scmd: number;

        /** S_BROADCAST_JOIN_ROOM player. */
        public player?: (HallPto.IPlayer|null);

        /**
         * Encodes the specified S_BROADCAST_JOIN_ROOM message. Does not implicitly {@link HallPto.S_BROADCAST_JOIN_ROOM.verify|verify} messages.
         * @param message S_BROADCAST_JOIN_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IS_BROADCAST_JOIN_ROOM, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_BROADCAST_JOIN_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_BROADCAST_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): HallPto.S_BROADCAST_JOIN_ROOM;
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
        constructor(properties?: HallPto.IS_BROADCAST_LEAVE_ROOM);

        /** S_BROADCAST_LEAVE_ROOM cmd. */
        public cmd: number;

        /** S_BROADCAST_LEAVE_ROOM scmd. */
        public scmd: number;

        /** S_BROADCAST_LEAVE_ROOM index. */
        public index: number;

        /**
         * Encodes the specified S_BROADCAST_LEAVE_ROOM message. Does not implicitly {@link HallPto.S_BROADCAST_LEAVE_ROOM.verify|verify} messages.
         * @param message S_BROADCAST_LEAVE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IS_BROADCAST_LEAVE_ROOM, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_BROADCAST_LEAVE_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_BROADCAST_LEAVE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): HallPto.S_BROADCAST_LEAVE_ROOM;
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
