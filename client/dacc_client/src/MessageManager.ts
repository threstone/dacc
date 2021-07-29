
class MessageManager {

    /**
     * proto类
     */
    private static protoObj = new Array<ProtoClass>();

    /**
     * 收到信息的处理函数
     */
    private static recMsgHandlerArr = new Array<Function>();

    public static addProtoModule(protoModule: any, handle: any) {
        for (let k in protoModule) {
            let key: any = k
            if (key.startsWith("C_") || key.startsWith("S_")) {
                const protoClass = protoModule[key]

                if (isNaN(protoClass.prototype.cmd) || isNaN(protoClass.prototype.scmd)) {
                    throw new Error("协议头cmd , scmd 值错误," + key)
                }


                if (protoClass.prototype.cmd < 0 || protoClass.prototype.cmd > 255) {
                    throw new Error("协议头cmd ,范围错误," + key + "," + protoClass.prototype.cmd)
                }

                if (protoClass.prototype.scmd < 0 || protoClass.prototype.scmd > 255) {
                    throw new Error("协议头cmdid ,范围错误," + key + "," + protoClass.prototype.scmd)
                }

                let protoIndex: number = (protoClass.prototype.cmd - 1) * 255 + protoClass.prototype.scmd
                MessageManager.recMsgHandlerArr[protoIndex] = protoClass

                //服务器的代码需要注册一下
                if (key.startsWith("S_")) {
                    console.log("添加协议:", protoClass.name, protoClass.prototype.cmd, protoClass.prototype.scmd)
                    if (handle && handle[protoClass.name]) {
                        this.recMsgHandlerArr[protoIndex] = handle[protoClass.name]
                    } else {
                        console.error("服务端协议:", protoIndex, "  ", protoClass.name, "未找到处理函数")
                    }
                }

            }
        }
    }


    /**
     * 注册处理接收信息函数
     */
    public static regRcvMsgHandler(sisId: number, cmdId: number, fun: Function): void {

        if (MessageManager.recMsgHandlerArr[(sisId - 1) * 255 + cmdId] != null) {

            throw new Error("该sisid,cmdid下标处已注册过\r\nsisid:" + sisId + "\tcmdid:" + cmdId);

        }

        MessageManager.recMsgHandlerArr[(sisId - 1) * 255 + cmdId] = fun;

    }

    /**
     * 处理接收的信息
     */
    public static rcvMsgHandler(sisId: number, cmdId: number, msg: egret.ByteArray): void {

        if (MessageManager.recMsgHandlerArr[(sisId - 1) * 255 + cmdId] == null) {

            console.log("该sisid,cmdid下标处没有信息处理函数\r\nsisid:" + sisId + "\tcmdid:" + cmdId);

            // throw new Error("该sisid,cmdid下标处没有信息处理函数\r\nsisid:" + sisId + "\tcmdid:" + cmdId);

        }

        try {

            let data = MessageManager.getProtoCls(sisId, cmdId).decode(msg.bytes);
            MessageManager.recMsgHandlerArr[(sisId - 1) * 255 + cmdId](data);

        } catch (error) {

            console.log(error);

        }

    }

    /**
     * 获取proto类
     */
    public static getProtoCls(sisId: number, cmdId: number): ProtoClass {

        if (MessageManager.protoObj[(sisId - 1) * 255 + cmdId] == null) {

            throw new Error("该sisid,cmdid下标处没有proto类\r\nsisid:" + sisId + "\tcmdid:" + cmdId);

        }

        return MessageManager.protoObj[(sisId - 1) * 255 + cmdId];

    }

    /**
     * 根据下标放入proto类
     */
    public static setProtoCls(index: number, pClass: ProtoClass): void {

        if (MessageManager.protoObj[index] != null) {

            let sisid = Math.floor(index / 255) + 1;
            let cmdid = index % 255;
            throw new Error("该index下标处已有proto类\sisid:" + sisid + "||cmdid:" + cmdid);

        }

        MessageManager.protoObj[index] = pClass;

    }



}