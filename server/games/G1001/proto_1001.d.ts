import * as $protobuf from "protobufjs";
/** Namespace GamePto1001. */
export namespace GamePto1001 {

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
         * Creates a new S_GAME_START_1001 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_GAME_START_1001 instance
         */
        public static create(properties?: GamePto1001.IS_GAME_START_1001): GamePto1001.S_GAME_START_1001;

        /**
         * Encodes the specified S_GAME_START_1001 message. Does not implicitly {@link GamePto1001.S_GAME_START_1001.verify|verify} messages.
         * @param message S_GAME_START_1001 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto1001.IS_GAME_START_1001, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_GAME_START_1001 message, length delimited. Does not implicitly {@link GamePto1001.S_GAME_START_1001.verify|verify} messages.
         * @param message S_GAME_START_1001 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto1001.IS_GAME_START_1001, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GAME_START_1001 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GAME_START_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto1001.S_GAME_START_1001;

        /**
         * Decodes a S_GAME_START_1001 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_GAME_START_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto1001.S_GAME_START_1001;

        /**
         * Verifies a S_GAME_START_1001 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_GAME_START_1001 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_GAME_START_1001
         */
        public static fromObject(object: { [k: string]: any }): GamePto1001.S_GAME_START_1001;

        /**
         * Creates a plain object from a S_GAME_START_1001 message. Also converts values to other types if specified.
         * @param message S_GAME_START_1001
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto1001.S_GAME_START_1001, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_GAME_START_1001 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new C_REQUEST_SWORD_1001 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_REQUEST_SWORD_1001 instance
         */
        public static create(properties?: GamePto1001.IC_REQUEST_SWORD_1001): GamePto1001.C_REQUEST_SWORD_1001;

        /**
         * Encodes the specified C_REQUEST_SWORD_1001 message. Does not implicitly {@link GamePto1001.C_REQUEST_SWORD_1001.verify|verify} messages.
         * @param message C_REQUEST_SWORD_1001 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto1001.IC_REQUEST_SWORD_1001, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_REQUEST_SWORD_1001 message, length delimited. Does not implicitly {@link GamePto1001.C_REQUEST_SWORD_1001.verify|verify} messages.
         * @param message C_REQUEST_SWORD_1001 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto1001.IC_REQUEST_SWORD_1001, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_REQUEST_SWORD_1001 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_REQUEST_SWORD_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto1001.C_REQUEST_SWORD_1001;

        /**
         * Decodes a C_REQUEST_SWORD_1001 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_REQUEST_SWORD_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto1001.C_REQUEST_SWORD_1001;

        /**
         * Verifies a C_REQUEST_SWORD_1001 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_REQUEST_SWORD_1001 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_REQUEST_SWORD_1001
         */
        public static fromObject(object: { [k: string]: any }): GamePto1001.C_REQUEST_SWORD_1001;

        /**
         * Creates a plain object from a C_REQUEST_SWORD_1001 message. Also converts values to other types if specified.
         * @param message C_REQUEST_SWORD_1001
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto1001.C_REQUEST_SWORD_1001, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_REQUEST_SWORD_1001 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new S_BROADCAST_SWORD_1001 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_BROADCAST_SWORD_1001 instance
         */
        public static create(properties?: GamePto1001.IS_BROADCAST_SWORD_1001): GamePto1001.S_BROADCAST_SWORD_1001;

        /**
         * Encodes the specified S_BROADCAST_SWORD_1001 message. Does not implicitly {@link GamePto1001.S_BROADCAST_SWORD_1001.verify|verify} messages.
         * @param message S_BROADCAST_SWORD_1001 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto1001.IS_BROADCAST_SWORD_1001, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_BROADCAST_SWORD_1001 message, length delimited. Does not implicitly {@link GamePto1001.S_BROADCAST_SWORD_1001.verify|verify} messages.
         * @param message S_BROADCAST_SWORD_1001 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto1001.IS_BROADCAST_SWORD_1001, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BROADCAST_SWORD_1001 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_BROADCAST_SWORD_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto1001.S_BROADCAST_SWORD_1001;

        /**
         * Decodes a S_BROADCAST_SWORD_1001 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_BROADCAST_SWORD_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto1001.S_BROADCAST_SWORD_1001;

        /**
         * Verifies a S_BROADCAST_SWORD_1001 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_BROADCAST_SWORD_1001 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_BROADCAST_SWORD_1001
         */
        public static fromObject(object: { [k: string]: any }): GamePto1001.S_BROADCAST_SWORD_1001;

        /**
         * Creates a plain object from a S_BROADCAST_SWORD_1001 message. Also converts values to other types if specified.
         * @param message S_BROADCAST_SWORD_1001
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto1001.S_BROADCAST_SWORD_1001, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_BROADCAST_SWORD_1001 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new S_START_OUT_SWORD_1001 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_START_OUT_SWORD_1001 instance
         */
        public static create(properties?: GamePto1001.IS_START_OUT_SWORD_1001): GamePto1001.S_START_OUT_SWORD_1001;

        /**
         * Encodes the specified S_START_OUT_SWORD_1001 message. Does not implicitly {@link GamePto1001.S_START_OUT_SWORD_1001.verify|verify} messages.
         * @param message S_START_OUT_SWORD_1001 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto1001.IS_START_OUT_SWORD_1001, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_START_OUT_SWORD_1001 message, length delimited. Does not implicitly {@link GamePto1001.S_START_OUT_SWORD_1001.verify|verify} messages.
         * @param message S_START_OUT_SWORD_1001 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto1001.IS_START_OUT_SWORD_1001, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_START_OUT_SWORD_1001 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_START_OUT_SWORD_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto1001.S_START_OUT_SWORD_1001;

        /**
         * Decodes a S_START_OUT_SWORD_1001 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_START_OUT_SWORD_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto1001.S_START_OUT_SWORD_1001;

        /**
         * Verifies a S_START_OUT_SWORD_1001 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_START_OUT_SWORD_1001 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_START_OUT_SWORD_1001
         */
        public static fromObject(object: { [k: string]: any }): GamePto1001.S_START_OUT_SWORD_1001;

        /**
         * Creates a plain object from a S_START_OUT_SWORD_1001 message. Also converts values to other types if specified.
         * @param message S_START_OUT_SWORD_1001
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto1001.S_START_OUT_SWORD_1001, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_START_OUT_SWORD_1001 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
         * Creates a new S_GAME_RESULT_1001 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_GAME_RESULT_1001 instance
         */
        public static create(properties?: GamePto1001.IS_GAME_RESULT_1001): GamePto1001.S_GAME_RESULT_1001;

        /**
         * Encodes the specified S_GAME_RESULT_1001 message. Does not implicitly {@link GamePto1001.S_GAME_RESULT_1001.verify|verify} messages.
         * @param message S_GAME_RESULT_1001 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto1001.IS_GAME_RESULT_1001, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_GAME_RESULT_1001 message, length delimited. Does not implicitly {@link GamePto1001.S_GAME_RESULT_1001.verify|verify} messages.
         * @param message S_GAME_RESULT_1001 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto1001.IS_GAME_RESULT_1001, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GAME_RESULT_1001 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GAME_RESULT_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto1001.S_GAME_RESULT_1001;

        /**
         * Decodes a S_GAME_RESULT_1001 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_GAME_RESULT_1001
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto1001.S_GAME_RESULT_1001;

        /**
         * Verifies a S_GAME_RESULT_1001 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_GAME_RESULT_1001 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_GAME_RESULT_1001
         */
        public static fromObject(object: { [k: string]: any }): GamePto1001.S_GAME_RESULT_1001;

        /**
         * Creates a plain object from a S_GAME_RESULT_1001 message. Also converts values to other types if specified.
         * @param message S_GAME_RESULT_1001
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto1001.S_GAME_RESULT_1001, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_GAME_RESULT_1001 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
