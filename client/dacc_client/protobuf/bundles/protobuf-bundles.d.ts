type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace HallPto. */
declare namespace HallPto {

    /** HALL enum. */
    enum HALL {
        CS_SEND_CHAT_MSG = 1,
        SC_CHAT_MSG = 2
    }

    /** Properties of a C_SEND_CHAT_MSG. */
    interface IC_SEND_CHAT_MSG {

        /** C_SEND_CHAT_MSG cmd */
        cmd?: (CmdProto.SYS_CMD|null);

        /** C_SEND_CHAT_MSG scmd */
        scmd?: (HallPto.HALL|null);

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
        public cmd: CmdProto.SYS_CMD;

        /** C_SEND_CHAT_MSG scmd. */
        public scmd: HallPto.HALL;

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
        public static encode(message: HallPto.IC_SEND_CHAT_MSG, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified C_SEND_CHAT_MSG message, length delimited. Does not implicitly {@link HallPto.C_SEND_CHAT_MSG.verify|verify} messages.
         * @param message C_SEND_CHAT_MSG message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HallPto.IC_SEND_CHAT_MSG, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_SEND_CHAT_MSG message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_SEND_CHAT_MSG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): HallPto.C_SEND_CHAT_MSG;

        /**
         * Decodes a C_SEND_CHAT_MSG message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_SEND_CHAT_MSG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): HallPto.C_SEND_CHAT_MSG;

        /**
         * Verifies a C_SEND_CHAT_MSG message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_CHAT_MSG. */
    interface IS_CHAT_MSG {

        /** S_CHAT_MSG cmd */
        cmd?: (CmdProto.SYS_CMD|null);

        /** S_CHAT_MSG scmd */
        scmd?: (HallPto.HALL|null);

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
        public cmd: CmdProto.SYS_CMD;

        /** S_CHAT_MSG scmd. */
        public scmd: HallPto.HALL;

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
        public static encode(message: HallPto.IS_CHAT_MSG, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified S_CHAT_MSG message, length delimited. Does not implicitly {@link HallPto.S_CHAT_MSG.verify|verify} messages.
         * @param message S_CHAT_MSG message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HallPto.IS_CHAT_MSG, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_CHAT_MSG message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_CHAT_MSG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): HallPto.S_CHAT_MSG;

        /**
         * Decodes a S_CHAT_MSG message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_CHAT_MSG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): HallPto.S_CHAT_MSG;

        /**
         * Verifies a S_CHAT_MSG message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace CmdProto. */
declare namespace CmdProto {

    /** SYS_CMD enum. */
    enum SYS_CMD {
        SYS_LOGIN = 0,
        SYS_HALL = 1
    }
}

/** Namespace LoginPto. */
declare namespace LoginPto {

    /** LOGIN enum. */
    enum LOGIN {
        CS_LOGIN = 1,
        SC_LOGIN = 2
    }

    /** Properties of a C_LOGIN. */
    interface IC_LOGIN {

        /** C_LOGIN cmd */
        cmd?: (CmdProto.SYS_CMD|null);

        /** C_LOGIN scmd */
        scmd?: (LoginPto.LOGIN|null);

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
        public cmd: CmdProto.SYS_CMD;

        /** C_LOGIN scmd. */
        public scmd: LoginPto.LOGIN;

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
        public static encode(message: LoginPto.IC_LOGIN, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified C_LOGIN message, length delimited. Does not implicitly {@link LoginPto.C_LOGIN.verify|verify} messages.
         * @param message C_LOGIN message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginPto.IC_LOGIN, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C_LOGIN message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): LoginPto.C_LOGIN;

        /**
         * Decodes a C_LOGIN message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): LoginPto.C_LOGIN;

        /**
         * Verifies a C_LOGIN message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_LOGIN. */
    interface IS_LOGIN {

        /** S_LOGIN cmd */
        cmd?: (CmdProto.SYS_CMD|null);

        /** S_LOGIN scmd */
        scmd?: (LoginPto.LOGIN|null);

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
        public cmd: CmdProto.SYS_CMD;

        /** S_LOGIN scmd. */
        public scmd: LoginPto.LOGIN;

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
        public static encode(message: LoginPto.IS_LOGIN, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified S_LOGIN message, length delimited. Does not implicitly {@link LoginPto.S_LOGIN.verify|verify} messages.
         * @param message S_LOGIN message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginPto.IS_LOGIN, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S_LOGIN message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): LoginPto.S_LOGIN;

        /**
         * Decodes a S_LOGIN message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): LoginPto.S_LOGIN;

        /**
         * Verifies a S_LOGIN message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
