interface ProtoClass {

    create(properties?);

    /**
     * 编码
     */
    encode(message, writer?);

    encodeDelimited(message, writer?);

    /**
     * 解码
     */
    decode(reader: (protobuf.Reader | Uint8Array), length?: number);

    decodeDelimited(reader: (protobuf.Reader | Uint8Array));

    verify(message: { [k: string]: any }): (string | null);

}