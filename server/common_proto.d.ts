import * as $protobuf from "protobufjs";
/** Namespace LoginPto. */
export namespace LoginPto {

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
         * Creates a new C_LOGIN instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_LOGIN instance
         */
        public static create(properties?: LoginPto.IC_LOGIN): LoginPto.C_LOGIN;

        /**
         * Encodes the specified C_LOGIN message. Does not implicitly {@link LoginPto.C_LOGIN.verify|verify} messages.
         * @param message C_LOGIN message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginPto.IC_LOGIN, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_LOGIN message, length delimited. Does not implicitly {@link LoginPto.C_LOGIN.verify|verify} messages.
         * @param message C_LOGIN message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginPto.IC_LOGIN, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_LOGIN message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginPto.C_LOGIN;

        /**
         * Decodes a C_LOGIN message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginPto.C_LOGIN;

        /**
         * Verifies a C_LOGIN message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_LOGIN message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_LOGIN
         */
        public static fromObject(object: { [k: string]: any }): LoginPto.C_LOGIN;

        /**
         * Creates a plain object from a C_LOGIN message. Also converts values to other types if specified.
         * @param message C_LOGIN
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: LoginPto.C_LOGIN, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_LOGIN to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new S_LOGIN instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_LOGIN instance
         */
        public static create(properties?: LoginPto.IS_LOGIN): LoginPto.S_LOGIN;

        /**
         * Encodes the specified S_LOGIN message. Does not implicitly {@link LoginPto.S_LOGIN.verify|verify} messages.
         * @param message S_LOGIN message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginPto.IS_LOGIN, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_LOGIN message, length delimited. Does not implicitly {@link LoginPto.S_LOGIN.verify|verify} messages.
         * @param message S_LOGIN message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginPto.IS_LOGIN, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_LOGIN message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginPto.S_LOGIN;

        /**
         * Decodes a S_LOGIN message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginPto.S_LOGIN;

        /**
         * Verifies a S_LOGIN message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_LOGIN message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_LOGIN
         */
        public static fromObject(object: { [k: string]: any }): LoginPto.S_LOGIN;

        /**
         * Creates a plain object from a S_LOGIN message. Also converts values to other types if specified.
         * @param message S_LOGIN
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: LoginPto.S_LOGIN, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_LOGIN to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace HallPto. */
export namespace HallPto {

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
         * Creates a new GameInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameInfo instance
         */
        public static create(properties?: HallPto.IGameInfo): HallPto.GameInfo;

        /**
         * Encodes the specified GameInfo message. Does not implicitly {@link HallPto.GameInfo.verify|verify} messages.
         * @param message GameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link HallPto.GameInfo.verify|verify} messages.
         * @param message GameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HallPto.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HallPto.GameInfo;

        /**
         * Decodes a GameInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HallPto.GameInfo;

        /**
         * Verifies a GameInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameInfo
         */
        public static fromObject(object: { [k: string]: any }): HallPto.GameInfo;

        /**
         * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
         * @param message GameInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HallPto.GameInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: HallPto.IPlayer): HallPto.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link HallPto.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link HallPto.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HallPto.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HallPto.Player;

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HallPto.Player;

        /**
         * Verifies a Player message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Player
         */
        public static fromObject(object: { [k: string]: any }): HallPto.Player;

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @param message Player
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HallPto.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Player to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInfo instance
         */
        public static create(properties?: HallPto.IRoomInfo): HallPto.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link HallPto.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link HallPto.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HallPto.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HallPto.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HallPto.RoomInfo;

        /**
         * Verifies a RoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomInfo
         */
        public static fromObject(object: { [k: string]: any }): HallPto.RoomInfo;

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @param message RoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HallPto.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new C_SEND_CHAT_MSG instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_SEND_CHAT_MSG instance
         */
        public static create(properties?: HallPto.IC_SEND_CHAT_MSG): HallPto.C_SEND_CHAT_MSG;

        /**
         * Encodes the specified C_SEND_CHAT_MSG message. Does not implicitly {@link HallPto.C_SEND_CHAT_MSG.verify|verify} messages.
         * @param message C_SEND_CHAT_MSG message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IC_SEND_CHAT_MSG, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_SEND_CHAT_MSG message, length delimited. Does not implicitly {@link HallPto.C_SEND_CHAT_MSG.verify|verify} messages.
         * @param message C_SEND_CHAT_MSG message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HallPto.IC_SEND_CHAT_MSG, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_SEND_CHAT_MSG message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_SEND_CHAT_MSG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HallPto.C_SEND_CHAT_MSG;

        /**
         * Decodes a C_SEND_CHAT_MSG message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_SEND_CHAT_MSG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HallPto.C_SEND_CHAT_MSG;

        /**
         * Verifies a C_SEND_CHAT_MSG message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_SEND_CHAT_MSG message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_SEND_CHAT_MSG
         */
        public static fromObject(object: { [k: string]: any }): HallPto.C_SEND_CHAT_MSG;

        /**
         * Creates a plain object from a C_SEND_CHAT_MSG message. Also converts values to other types if specified.
         * @param message C_SEND_CHAT_MSG
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HallPto.C_SEND_CHAT_MSG, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_SEND_CHAT_MSG to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new S_CHAT_MSG instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_CHAT_MSG instance
         */
        public static create(properties?: HallPto.IS_CHAT_MSG): HallPto.S_CHAT_MSG;

        /**
         * Encodes the specified S_CHAT_MSG message. Does not implicitly {@link HallPto.S_CHAT_MSG.verify|verify} messages.
         * @param message S_CHAT_MSG message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IS_CHAT_MSG, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_CHAT_MSG message, length delimited. Does not implicitly {@link HallPto.S_CHAT_MSG.verify|verify} messages.
         * @param message S_CHAT_MSG message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HallPto.IS_CHAT_MSG, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_CHAT_MSG message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_CHAT_MSG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HallPto.S_CHAT_MSG;

        /**
         * Decodes a S_CHAT_MSG message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_CHAT_MSG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HallPto.S_CHAT_MSG;

        /**
         * Verifies a S_CHAT_MSG message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_CHAT_MSG message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_CHAT_MSG
         */
        public static fromObject(object: { [k: string]: any }): HallPto.S_CHAT_MSG;

        /**
         * Creates a plain object from a S_CHAT_MSG message. Also converts values to other types if specified.
         * @param message S_CHAT_MSG
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HallPto.S_CHAT_MSG, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_CHAT_MSG to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new S_GAME_LIST instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_GAME_LIST instance
         */
        public static create(properties?: HallPto.IS_GAME_LIST): HallPto.S_GAME_LIST;

        /**
         * Encodes the specified S_GAME_LIST message. Does not implicitly {@link HallPto.S_GAME_LIST.verify|verify} messages.
         * @param message S_GAME_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IS_GAME_LIST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_GAME_LIST message, length delimited. Does not implicitly {@link HallPto.S_GAME_LIST.verify|verify} messages.
         * @param message S_GAME_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HallPto.IS_GAME_LIST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GAME_LIST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GAME_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HallPto.S_GAME_LIST;

        /**
         * Decodes a S_GAME_LIST message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_GAME_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HallPto.S_GAME_LIST;

        /**
         * Verifies a S_GAME_LIST message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_GAME_LIST message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_GAME_LIST
         */
        public static fromObject(object: { [k: string]: any }): HallPto.S_GAME_LIST;

        /**
         * Creates a plain object from a S_GAME_LIST message. Also converts values to other types if specified.
         * @param message S_GAME_LIST
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HallPto.S_GAME_LIST, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_GAME_LIST to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new C_CHANGE_HEAD instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_CHANGE_HEAD instance
         */
        public static create(properties?: HallPto.IC_CHANGE_HEAD): HallPto.C_CHANGE_HEAD;

        /**
         * Encodes the specified C_CHANGE_HEAD message. Does not implicitly {@link HallPto.C_CHANGE_HEAD.verify|verify} messages.
         * @param message C_CHANGE_HEAD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IC_CHANGE_HEAD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_CHANGE_HEAD message, length delimited. Does not implicitly {@link HallPto.C_CHANGE_HEAD.verify|verify} messages.
         * @param message C_CHANGE_HEAD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HallPto.IC_CHANGE_HEAD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_CHANGE_HEAD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_CHANGE_HEAD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HallPto.C_CHANGE_HEAD;

        /**
         * Decodes a C_CHANGE_HEAD message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_CHANGE_HEAD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HallPto.C_CHANGE_HEAD;

        /**
         * Verifies a C_CHANGE_HEAD message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_CHANGE_HEAD message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_CHANGE_HEAD
         */
        public static fromObject(object: { [k: string]: any }): HallPto.C_CHANGE_HEAD;

        /**
         * Creates a plain object from a C_CHANGE_HEAD message. Also converts values to other types if specified.
         * @param message C_CHANGE_HEAD
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HallPto.C_CHANGE_HEAD, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_CHANGE_HEAD to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new C_CREATE_ROOM instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_CREATE_ROOM instance
         */
        public static create(properties?: HallPto.IC_CREATE_ROOM): HallPto.C_CREATE_ROOM;

        /**
         * Encodes the specified C_CREATE_ROOM message. Does not implicitly {@link HallPto.C_CREATE_ROOM.verify|verify} messages.
         * @param message C_CREATE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IC_CREATE_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_CREATE_ROOM message, length delimited. Does not implicitly {@link HallPto.C_CREATE_ROOM.verify|verify} messages.
         * @param message C_CREATE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HallPto.IC_CREATE_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_CREATE_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_CREATE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HallPto.C_CREATE_ROOM;

        /**
         * Decodes a C_CREATE_ROOM message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_CREATE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HallPto.C_CREATE_ROOM;

        /**
         * Verifies a C_CREATE_ROOM message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_CREATE_ROOM message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_CREATE_ROOM
         */
        public static fromObject(object: { [k: string]: any }): HallPto.C_CREATE_ROOM;

        /**
         * Creates a plain object from a C_CREATE_ROOM message. Also converts values to other types if specified.
         * @param message C_CREATE_ROOM
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HallPto.C_CREATE_ROOM, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_CREATE_ROOM to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new S_CREATE_ROOM instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_CREATE_ROOM instance
         */
        public static create(properties?: HallPto.IS_CREATE_ROOM): HallPto.S_CREATE_ROOM;

        /**
         * Encodes the specified S_CREATE_ROOM message. Does not implicitly {@link HallPto.S_CREATE_ROOM.verify|verify} messages.
         * @param message S_CREATE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IS_CREATE_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_CREATE_ROOM message, length delimited. Does not implicitly {@link HallPto.S_CREATE_ROOM.verify|verify} messages.
         * @param message S_CREATE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HallPto.IS_CREATE_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_CREATE_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_CREATE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HallPto.S_CREATE_ROOM;

        /**
         * Decodes a S_CREATE_ROOM message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_CREATE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HallPto.S_CREATE_ROOM;

        /**
         * Verifies a S_CREATE_ROOM message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_CREATE_ROOM message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_CREATE_ROOM
         */
        public static fromObject(object: { [k: string]: any }): HallPto.S_CREATE_ROOM;

        /**
         * Creates a plain object from a S_CREATE_ROOM message. Also converts values to other types if specified.
         * @param message S_CREATE_ROOM
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HallPto.S_CREATE_ROOM, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_CREATE_ROOM to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new C_JOIN_ROOM instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_JOIN_ROOM instance
         */
        public static create(properties?: HallPto.IC_JOIN_ROOM): HallPto.C_JOIN_ROOM;

        /**
         * Encodes the specified C_JOIN_ROOM message. Does not implicitly {@link HallPto.C_JOIN_ROOM.verify|verify} messages.
         * @param message C_JOIN_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IC_JOIN_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_JOIN_ROOM message, length delimited. Does not implicitly {@link HallPto.C_JOIN_ROOM.verify|verify} messages.
         * @param message C_JOIN_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HallPto.IC_JOIN_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_JOIN_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HallPto.C_JOIN_ROOM;

        /**
         * Decodes a C_JOIN_ROOM message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HallPto.C_JOIN_ROOM;

        /**
         * Verifies a C_JOIN_ROOM message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_JOIN_ROOM message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_JOIN_ROOM
         */
        public static fromObject(object: { [k: string]: any }): HallPto.C_JOIN_ROOM;

        /**
         * Creates a plain object from a C_JOIN_ROOM message. Also converts values to other types if specified.
         * @param message C_JOIN_ROOM
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HallPto.C_JOIN_ROOM, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_JOIN_ROOM to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new S_JOIN_ROOM instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_JOIN_ROOM instance
         */
        public static create(properties?: HallPto.IS_JOIN_ROOM): HallPto.S_JOIN_ROOM;

        /**
         * Encodes the specified S_JOIN_ROOM message. Does not implicitly {@link HallPto.S_JOIN_ROOM.verify|verify} messages.
         * @param message S_JOIN_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IS_JOIN_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_JOIN_ROOM message, length delimited. Does not implicitly {@link HallPto.S_JOIN_ROOM.verify|verify} messages.
         * @param message S_JOIN_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HallPto.IS_JOIN_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_JOIN_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HallPto.S_JOIN_ROOM;

        /**
         * Decodes a S_JOIN_ROOM message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HallPto.S_JOIN_ROOM;

        /**
         * Verifies a S_JOIN_ROOM message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_JOIN_ROOM message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_JOIN_ROOM
         */
        public static fromObject(object: { [k: string]: any }): HallPto.S_JOIN_ROOM;

        /**
         * Creates a plain object from a S_JOIN_ROOM message. Also converts values to other types if specified.
         * @param message S_JOIN_ROOM
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HallPto.S_JOIN_ROOM, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_JOIN_ROOM to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new C_ROOM_LIST instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_ROOM_LIST instance
         */
        public static create(properties?: HallPto.IC_ROOM_LIST): HallPto.C_ROOM_LIST;

        /**
         * Encodes the specified C_ROOM_LIST message. Does not implicitly {@link HallPto.C_ROOM_LIST.verify|verify} messages.
         * @param message C_ROOM_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IC_ROOM_LIST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_ROOM_LIST message, length delimited. Does not implicitly {@link HallPto.C_ROOM_LIST.verify|verify} messages.
         * @param message C_ROOM_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HallPto.IC_ROOM_LIST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_ROOM_LIST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_ROOM_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HallPto.C_ROOM_LIST;

        /**
         * Decodes a C_ROOM_LIST message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_ROOM_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HallPto.C_ROOM_LIST;

        /**
         * Verifies a C_ROOM_LIST message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_ROOM_LIST message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_ROOM_LIST
         */
        public static fromObject(object: { [k: string]: any }): HallPto.C_ROOM_LIST;

        /**
         * Creates a plain object from a C_ROOM_LIST message. Also converts values to other types if specified.
         * @param message C_ROOM_LIST
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HallPto.C_ROOM_LIST, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_ROOM_LIST to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new S_ROOM_LIST instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_ROOM_LIST instance
         */
        public static create(properties?: HallPto.IS_ROOM_LIST): HallPto.S_ROOM_LIST;

        /**
         * Encodes the specified S_ROOM_LIST message. Does not implicitly {@link HallPto.S_ROOM_LIST.verify|verify} messages.
         * @param message S_ROOM_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IS_ROOM_LIST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_ROOM_LIST message, length delimited. Does not implicitly {@link HallPto.S_ROOM_LIST.verify|verify} messages.
         * @param message S_ROOM_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HallPto.IS_ROOM_LIST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ROOM_LIST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ROOM_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HallPto.S_ROOM_LIST;

        /**
         * Decodes a S_ROOM_LIST message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_ROOM_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HallPto.S_ROOM_LIST;

        /**
         * Verifies a S_ROOM_LIST message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_ROOM_LIST message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_ROOM_LIST
         */
        public static fromObject(object: { [k: string]: any }): HallPto.S_ROOM_LIST;

        /**
         * Creates a plain object from a S_ROOM_LIST message. Also converts values to other types if specified.
         * @param message S_ROOM_LIST
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HallPto.S_ROOM_LIST, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_ROOM_LIST to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new S_BROADCAST_JOIN_ROOM instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_BROADCAST_JOIN_ROOM instance
         */
        public static create(properties?: HallPto.IS_BROADCAST_JOIN_ROOM): HallPto.S_BROADCAST_JOIN_ROOM;

        /**
         * Encodes the specified S_BROADCAST_JOIN_ROOM message. Does not implicitly {@link HallPto.S_BROADCAST_JOIN_ROOM.verify|verify} messages.
         * @param message S_BROADCAST_JOIN_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IS_BROADCAST_JOIN_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_BROADCAST_JOIN_ROOM message, length delimited. Does not implicitly {@link HallPto.S_BROADCAST_JOIN_ROOM.verify|verify} messages.
         * @param message S_BROADCAST_JOIN_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HallPto.IS_BROADCAST_JOIN_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BROADCAST_JOIN_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_BROADCAST_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HallPto.S_BROADCAST_JOIN_ROOM;

        /**
         * Decodes a S_BROADCAST_JOIN_ROOM message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_BROADCAST_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HallPto.S_BROADCAST_JOIN_ROOM;

        /**
         * Verifies a S_BROADCAST_JOIN_ROOM message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_BROADCAST_JOIN_ROOM message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_BROADCAST_JOIN_ROOM
         */
        public static fromObject(object: { [k: string]: any }): HallPto.S_BROADCAST_JOIN_ROOM;

        /**
         * Creates a plain object from a S_BROADCAST_JOIN_ROOM message. Also converts values to other types if specified.
         * @param message S_BROADCAST_JOIN_ROOM
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HallPto.S_BROADCAST_JOIN_ROOM, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_BROADCAST_JOIN_ROOM to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new S_BROADCAST_LEAVE_ROOM instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_BROADCAST_LEAVE_ROOM instance
         */
        public static create(properties?: HallPto.IS_BROADCAST_LEAVE_ROOM): HallPto.S_BROADCAST_LEAVE_ROOM;

        /**
         * Encodes the specified S_BROADCAST_LEAVE_ROOM message. Does not implicitly {@link HallPto.S_BROADCAST_LEAVE_ROOM.verify|verify} messages.
         * @param message S_BROADCAST_LEAVE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IS_BROADCAST_LEAVE_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_BROADCAST_LEAVE_ROOM message, length delimited. Does not implicitly {@link HallPto.S_BROADCAST_LEAVE_ROOM.verify|verify} messages.
         * @param message S_BROADCAST_LEAVE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HallPto.IS_BROADCAST_LEAVE_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BROADCAST_LEAVE_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_BROADCAST_LEAVE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HallPto.S_BROADCAST_LEAVE_ROOM;

        /**
         * Decodes a S_BROADCAST_LEAVE_ROOM message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_BROADCAST_LEAVE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HallPto.S_BROADCAST_LEAVE_ROOM;

        /**
         * Verifies a S_BROADCAST_LEAVE_ROOM message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_BROADCAST_LEAVE_ROOM message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_BROADCAST_LEAVE_ROOM
         */
        public static fromObject(object: { [k: string]: any }): HallPto.S_BROADCAST_LEAVE_ROOM;

        /**
         * Creates a plain object from a S_BROADCAST_LEAVE_ROOM message. Also converts values to other types if specified.
         * @param message S_BROADCAST_LEAVE_ROOM
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HallPto.S_BROADCAST_LEAVE_ROOM, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_BROADCAST_LEAVE_ROOM to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
