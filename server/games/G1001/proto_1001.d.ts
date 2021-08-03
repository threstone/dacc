import * as $protobuf from "protobufjs";
/** Namespace GamePto1001. */
export namespace GamePto1001 {

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
         * Creates a new S_INIT_SCENE instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_INIT_SCENE instance
         */
        public static create(properties?: GamePto1001.IS_INIT_SCENE): GamePto1001.S_INIT_SCENE;

        /**
         * Encodes the specified S_INIT_SCENE message. Does not implicitly {@link GamePto1001.S_INIT_SCENE.verify|verify} messages.
         * @param message S_INIT_SCENE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GamePto1001.IS_INIT_SCENE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_INIT_SCENE message, length delimited. Does not implicitly {@link GamePto1001.S_INIT_SCENE.verify|verify} messages.
         * @param message S_INIT_SCENE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GamePto1001.IS_INIT_SCENE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_INIT_SCENE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_INIT_SCENE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePto1001.S_INIT_SCENE;

        /**
         * Decodes a S_INIT_SCENE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_INIT_SCENE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePto1001.S_INIT_SCENE;

        /**
         * Verifies a S_INIT_SCENE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_INIT_SCENE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_INIT_SCENE
         */
        public static fromObject(object: { [k: string]: any }): GamePto1001.S_INIT_SCENE;

        /**
         * Creates a plain object from a S_INIT_SCENE message. Also converts values to other types if specified.
         * @param message S_INIT_SCENE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GamePto1001.S_INIT_SCENE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_INIT_SCENE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
