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
}

/** Namespace RoomPto. */
export namespace RoomPto {

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
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: RoomPto.IPlayer): RoomPto.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link RoomPto.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link RoomPto.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomPto.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomPto.Player;

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomPto.Player;

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
        public static fromObject(object: { [k: string]: any }): RoomPto.Player;

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @param message Player
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RoomPto.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
         * Creates a new RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInfo instance
         */
        public static create(properties?: RoomPto.IRoomInfo): RoomPto.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link RoomPto.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link RoomPto.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomPto.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomPto.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomPto.RoomInfo;

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
        public static fromObject(object: { [k: string]: any }): RoomPto.RoomInfo;

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @param message RoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RoomPto.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomInfo to JSON.
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
         * Creates a new C_CREATE_ROOM instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_CREATE_ROOM instance
         */
        public static create(properties?: RoomPto.IC_CREATE_ROOM): RoomPto.C_CREATE_ROOM;

        /**
         * Encodes the specified C_CREATE_ROOM message. Does not implicitly {@link RoomPto.C_CREATE_ROOM.verify|verify} messages.
         * @param message C_CREATE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IC_CREATE_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_CREATE_ROOM message, length delimited. Does not implicitly {@link RoomPto.C_CREATE_ROOM.verify|verify} messages.
         * @param message C_CREATE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomPto.IC_CREATE_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_CREATE_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_CREATE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomPto.C_CREATE_ROOM;

        /**
         * Decodes a C_CREATE_ROOM message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_CREATE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomPto.C_CREATE_ROOM;

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
        public static fromObject(object: { [k: string]: any }): RoomPto.C_CREATE_ROOM;

        /**
         * Creates a plain object from a C_CREATE_ROOM message. Also converts values to other types if specified.
         * @param message C_CREATE_ROOM
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RoomPto.C_CREATE_ROOM, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
         * Creates a new S_CREATE_ROOM instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_CREATE_ROOM instance
         */
        public static create(properties?: RoomPto.IS_CREATE_ROOM): RoomPto.S_CREATE_ROOM;

        /**
         * Encodes the specified S_CREATE_ROOM message. Does not implicitly {@link RoomPto.S_CREATE_ROOM.verify|verify} messages.
         * @param message S_CREATE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IS_CREATE_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_CREATE_ROOM message, length delimited. Does not implicitly {@link RoomPto.S_CREATE_ROOM.verify|verify} messages.
         * @param message S_CREATE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomPto.IS_CREATE_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_CREATE_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_CREATE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomPto.S_CREATE_ROOM;

        /**
         * Decodes a S_CREATE_ROOM message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_CREATE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomPto.S_CREATE_ROOM;

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
        public static fromObject(object: { [k: string]: any }): RoomPto.S_CREATE_ROOM;

        /**
         * Creates a plain object from a S_CREATE_ROOM message. Also converts values to other types if specified.
         * @param message S_CREATE_ROOM
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RoomPto.S_CREATE_ROOM, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
         * Creates a new C_JOIN_ROOM instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_JOIN_ROOM instance
         */
        public static create(properties?: RoomPto.IC_JOIN_ROOM): RoomPto.C_JOIN_ROOM;

        /**
         * Encodes the specified C_JOIN_ROOM message. Does not implicitly {@link RoomPto.C_JOIN_ROOM.verify|verify} messages.
         * @param message C_JOIN_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IC_JOIN_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_JOIN_ROOM message, length delimited. Does not implicitly {@link RoomPto.C_JOIN_ROOM.verify|verify} messages.
         * @param message C_JOIN_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomPto.IC_JOIN_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_JOIN_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomPto.C_JOIN_ROOM;

        /**
         * Decodes a C_JOIN_ROOM message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomPto.C_JOIN_ROOM;

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
        public static fromObject(object: { [k: string]: any }): RoomPto.C_JOIN_ROOM;

        /**
         * Creates a plain object from a C_JOIN_ROOM message. Also converts values to other types if specified.
         * @param message C_JOIN_ROOM
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RoomPto.C_JOIN_ROOM, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
         * Creates a new S_JOIN_ROOM instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_JOIN_ROOM instance
         */
        public static create(properties?: RoomPto.IS_JOIN_ROOM): RoomPto.S_JOIN_ROOM;

        /**
         * Encodes the specified S_JOIN_ROOM message. Does not implicitly {@link RoomPto.S_JOIN_ROOM.verify|verify} messages.
         * @param message S_JOIN_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IS_JOIN_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_JOIN_ROOM message, length delimited. Does not implicitly {@link RoomPto.S_JOIN_ROOM.verify|verify} messages.
         * @param message S_JOIN_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomPto.IS_JOIN_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_JOIN_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomPto.S_JOIN_ROOM;

        /**
         * Decodes a S_JOIN_ROOM message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomPto.S_JOIN_ROOM;

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
        public static fromObject(object: { [k: string]: any }): RoomPto.S_JOIN_ROOM;

        /**
         * Creates a plain object from a S_JOIN_ROOM message. Also converts values to other types if specified.
         * @param message S_JOIN_ROOM
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RoomPto.S_JOIN_ROOM, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
         * Creates a new C_ROOM_LIST instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_ROOM_LIST instance
         */
        public static create(properties?: RoomPto.IC_ROOM_LIST): RoomPto.C_ROOM_LIST;

        /**
         * Encodes the specified C_ROOM_LIST message. Does not implicitly {@link RoomPto.C_ROOM_LIST.verify|verify} messages.
         * @param message C_ROOM_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IC_ROOM_LIST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_ROOM_LIST message, length delimited. Does not implicitly {@link RoomPto.C_ROOM_LIST.verify|verify} messages.
         * @param message C_ROOM_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomPto.IC_ROOM_LIST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_ROOM_LIST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_ROOM_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomPto.C_ROOM_LIST;

        /**
         * Decodes a C_ROOM_LIST message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_ROOM_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomPto.C_ROOM_LIST;

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
        public static fromObject(object: { [k: string]: any }): RoomPto.C_ROOM_LIST;

        /**
         * Creates a plain object from a C_ROOM_LIST message. Also converts values to other types if specified.
         * @param message C_ROOM_LIST
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RoomPto.C_ROOM_LIST, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
         * Creates a new S_ROOM_LIST instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_ROOM_LIST instance
         */
        public static create(properties?: RoomPto.IS_ROOM_LIST): RoomPto.S_ROOM_LIST;

        /**
         * Encodes the specified S_ROOM_LIST message. Does not implicitly {@link RoomPto.S_ROOM_LIST.verify|verify} messages.
         * @param message S_ROOM_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IS_ROOM_LIST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_ROOM_LIST message, length delimited. Does not implicitly {@link RoomPto.S_ROOM_LIST.verify|verify} messages.
         * @param message S_ROOM_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomPto.IS_ROOM_LIST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ROOM_LIST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ROOM_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomPto.S_ROOM_LIST;

        /**
         * Decodes a S_ROOM_LIST message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_ROOM_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomPto.S_ROOM_LIST;

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
        public static fromObject(object: { [k: string]: any }): RoomPto.S_ROOM_LIST;

        /**
         * Creates a plain object from a S_ROOM_LIST message. Also converts values to other types if specified.
         * @param message S_ROOM_LIST
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RoomPto.S_ROOM_LIST, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
         * Creates a new S_BROADCAST_JOIN_ROOM instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_BROADCAST_JOIN_ROOM instance
         */
        public static create(properties?: RoomPto.IS_BROADCAST_JOIN_ROOM): RoomPto.S_BROADCAST_JOIN_ROOM;

        /**
         * Encodes the specified S_BROADCAST_JOIN_ROOM message. Does not implicitly {@link RoomPto.S_BROADCAST_JOIN_ROOM.verify|verify} messages.
         * @param message S_BROADCAST_JOIN_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IS_BROADCAST_JOIN_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_BROADCAST_JOIN_ROOM message, length delimited. Does not implicitly {@link RoomPto.S_BROADCAST_JOIN_ROOM.verify|verify} messages.
         * @param message S_BROADCAST_JOIN_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomPto.IS_BROADCAST_JOIN_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BROADCAST_JOIN_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_BROADCAST_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomPto.S_BROADCAST_JOIN_ROOM;

        /**
         * Decodes a S_BROADCAST_JOIN_ROOM message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_BROADCAST_JOIN_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomPto.S_BROADCAST_JOIN_ROOM;

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
        public static fromObject(object: { [k: string]: any }): RoomPto.S_BROADCAST_JOIN_ROOM;

        /**
         * Creates a plain object from a S_BROADCAST_JOIN_ROOM message. Also converts values to other types if specified.
         * @param message S_BROADCAST_JOIN_ROOM
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RoomPto.S_BROADCAST_JOIN_ROOM, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: RoomPto.IS_BROADCAST_LEAVE_ROOM);

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
        public static create(properties?: RoomPto.IS_BROADCAST_LEAVE_ROOM): RoomPto.S_BROADCAST_LEAVE_ROOM;

        /**
         * Encodes the specified S_BROADCAST_LEAVE_ROOM message. Does not implicitly {@link RoomPto.S_BROADCAST_LEAVE_ROOM.verify|verify} messages.
         * @param message S_BROADCAST_LEAVE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IS_BROADCAST_LEAVE_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_BROADCAST_LEAVE_ROOM message, length delimited. Does not implicitly {@link RoomPto.S_BROADCAST_LEAVE_ROOM.verify|verify} messages.
         * @param message S_BROADCAST_LEAVE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomPto.IS_BROADCAST_LEAVE_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BROADCAST_LEAVE_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_BROADCAST_LEAVE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomPto.S_BROADCAST_LEAVE_ROOM;

        /**
         * Decodes a S_BROADCAST_LEAVE_ROOM message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_BROADCAST_LEAVE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomPto.S_BROADCAST_LEAVE_ROOM;

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
        public static fromObject(object: { [k: string]: any }): RoomPto.S_BROADCAST_LEAVE_ROOM;

        /**
         * Creates a plain object from a S_BROADCAST_LEAVE_ROOM message. Also converts values to other types if specified.
         * @param message S_BROADCAST_LEAVE_ROOM
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RoomPto.S_BROADCAST_LEAVE_ROOM, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_BROADCAST_LEAVE_ROOM to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new C_READY instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_READY instance
         */
        public static create(properties?: RoomPto.IC_READY): RoomPto.C_READY;

        /**
         * Encodes the specified C_READY message. Does not implicitly {@link RoomPto.C_READY.verify|verify} messages.
         * @param message C_READY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IC_READY, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_READY message, length delimited. Does not implicitly {@link RoomPto.C_READY.verify|verify} messages.
         * @param message C_READY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomPto.IC_READY, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_READY message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_READY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomPto.C_READY;

        /**
         * Decodes a C_READY message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_READY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomPto.C_READY;

        /**
         * Verifies a C_READY message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_READY message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_READY
         */
        public static fromObject(object: { [k: string]: any }): RoomPto.C_READY;

        /**
         * Creates a plain object from a C_READY message. Also converts values to other types if specified.
         * @param message C_READY
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RoomPto.C_READY, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_READY to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new S_PLAYER_READY_STATUS_CHANGE instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_PLAYER_READY_STATUS_CHANGE instance
         */
        public static create(properties?: RoomPto.IS_PLAYER_READY_STATUS_CHANGE): RoomPto.S_PLAYER_READY_STATUS_CHANGE;

        /**
         * Encodes the specified S_PLAYER_READY_STATUS_CHANGE message. Does not implicitly {@link RoomPto.S_PLAYER_READY_STATUS_CHANGE.verify|verify} messages.
         * @param message S_PLAYER_READY_STATUS_CHANGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IS_PLAYER_READY_STATUS_CHANGE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_PLAYER_READY_STATUS_CHANGE message, length delimited. Does not implicitly {@link RoomPto.S_PLAYER_READY_STATUS_CHANGE.verify|verify} messages.
         * @param message S_PLAYER_READY_STATUS_CHANGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomPto.IS_PLAYER_READY_STATUS_CHANGE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_PLAYER_READY_STATUS_CHANGE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_PLAYER_READY_STATUS_CHANGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomPto.S_PLAYER_READY_STATUS_CHANGE;

        /**
         * Decodes a S_PLAYER_READY_STATUS_CHANGE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_PLAYER_READY_STATUS_CHANGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomPto.S_PLAYER_READY_STATUS_CHANGE;

        /**
         * Verifies a S_PLAYER_READY_STATUS_CHANGE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_PLAYER_READY_STATUS_CHANGE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_PLAYER_READY_STATUS_CHANGE
         */
        public static fromObject(object: { [k: string]: any }): RoomPto.S_PLAYER_READY_STATUS_CHANGE;

        /**
         * Creates a plain object from a S_PLAYER_READY_STATUS_CHANGE message. Also converts values to other types if specified.
         * @param message S_PLAYER_READY_STATUS_CHANGE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RoomPto.S_PLAYER_READY_STATUS_CHANGE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_PLAYER_READY_STATUS_CHANGE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new C_LEAVE_ROOM instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_LEAVE_ROOM instance
         */
        public static create(properties?: RoomPto.IC_LEAVE_ROOM): RoomPto.C_LEAVE_ROOM;

        /**
         * Encodes the specified C_LEAVE_ROOM message. Does not implicitly {@link RoomPto.C_LEAVE_ROOM.verify|verify} messages.
         * @param message C_LEAVE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomPto.IC_LEAVE_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_LEAVE_ROOM message, length delimited. Does not implicitly {@link RoomPto.C_LEAVE_ROOM.verify|verify} messages.
         * @param message C_LEAVE_ROOM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomPto.IC_LEAVE_ROOM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_LEAVE_ROOM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_LEAVE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomPto.C_LEAVE_ROOM;

        /**
         * Decodes a C_LEAVE_ROOM message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_LEAVE_ROOM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomPto.C_LEAVE_ROOM;

        /**
         * Verifies a C_LEAVE_ROOM message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_LEAVE_ROOM message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_LEAVE_ROOM
         */
        public static fromObject(object: { [k: string]: any }): RoomPto.C_LEAVE_ROOM;

        /**
         * Creates a plain object from a C_LEAVE_ROOM message. Also converts values to other types if specified.
         * @param message C_LEAVE_ROOM
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RoomPto.C_LEAVE_ROOM, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_LEAVE_ROOM to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace SystemPto. */
export namespace SystemPto {

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
         * Creates a new S_TIPS instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_TIPS instance
         */
        public static create(properties?: SystemPto.IS_TIPS): SystemPto.S_TIPS;

        /**
         * Encodes the specified S_TIPS message. Does not implicitly {@link SystemPto.S_TIPS.verify|verify} messages.
         * @param message S_TIPS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SystemPto.IS_TIPS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_TIPS message, length delimited. Does not implicitly {@link SystemPto.S_TIPS.verify|verify} messages.
         * @param message S_TIPS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SystemPto.IS_TIPS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_TIPS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_TIPS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SystemPto.S_TIPS;

        /**
         * Decodes a S_TIPS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_TIPS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SystemPto.S_TIPS;

        /**
         * Verifies a S_TIPS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_TIPS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_TIPS
         */
        public static fromObject(object: { [k: string]: any }): SystemPto.S_TIPS;

        /**
         * Creates a plain object from a S_TIPS message. Also converts values to other types if specified.
         * @param message S_TIPS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SystemPto.S_TIPS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_TIPS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
