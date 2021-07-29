import * as $protobuf from "protobufjs"
/** Namespace HallPto. */
export namespace HallPto {

    /** LOGIN enum. */
    enum LOGIN {
        CS_LOGIN = 1
    }

    /** Properties of a C_Login. */
    interface IC_Login {

        /** C_Login cmd */
        cmd?: (CmdProto.SYS_CMD|null);

        /** C_Login scmd */
        scmd?: (HallPto.LOGIN|null);

        /** C_Login userName */
        userName?: (string|null);
    }

    /** Represents a C_Login. */
    class C_Login implements IC_Login {

        /**
         * Constructs a new C_Login.
         * @param [properties] Properties to set
         */
        constructor(properties?: HallPto.IC_Login);

        /** C_Login cmd. */
        public cmd: CmdProto.SYS_CMD;

        /** C_Login scmd. */
        public scmd: HallPto.LOGIN;

        /** C_Login userName. */
        public userName: string;

        /**
         * Creates a new C_Login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_Login instance
         */
        public static create(properties?: HallPto.IC_Login): HallPto.C_Login;

        /**
         * Encodes the specified C_Login message. Does not implicitly {@link HallPto.C_Login.verify|verify} messages.
         * @param message C_Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: HallPto.IC_Login, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_Login message, length delimited. Does not implicitly {@link HallPto.C_Login.verify|verify} messages.
         * @param message C_Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: HallPto.IC_Login, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_Login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HallPto.C_Login;

        /**
         * Decodes a C_Login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HallPto.C_Login;

        /**
         * Verifies a C_Login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_Login message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_Login
         */
        public static fromObject(object: { [k: string]: any }): HallPto.C_Login;

        /**
         * Creates a plain object from a C_Login message. Also converts values to other types if specified.
         * @param message C_Login
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: HallPto.C_Login, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_Login to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace CmdProto. */
export namespace CmdProto {

    /** SYS_CMD enum. */
    enum SYS_CMD {
        SYS_LOGIN = 0
    }
}
