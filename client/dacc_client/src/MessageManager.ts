
class MessageManager {

    /**
     * proto类
     */
    private static _protoObj = {}

    /**
     * 收到信息的处理函数
     */
    private static _recMsgHandlerObj = {}

    public static addProtoModule(protoModule: any, handle: any) {
        for (let k in protoModule) {
            let key: any = k
            if (key.startsWith("C_") || key.startsWith("S_")) {
                const protoClass = protoModule[key]

                if (isNaN(protoClass.prototype.cmd) || isNaN(protoClass.prototype.scmd)) {
                    throw new Error("协议头cmd , scmd 值错误," + key)
                }

                let protoIndex = protoClass.prototype.cmd + "_" + protoClass.prototype.scmd
                MessageManager._protoObj[protoIndex] = protoClass

                //服务器的代码需要注册一下
                if (key.startsWith("S_")) {
                    if (handle && handle[key]) {
                        MessageManager._recMsgHandlerObj[protoIndex] = handle[key]
                    } else {
                        console.error("服务端协议:", `cmd:${protoClass.prototype.cmd}    scmd:${protoClass.prototype.scmd}`, "  ", key, "未找到处理函数")
                    }
                }

            }
        }
    }


    /**
     * 注册处理接收信息函数
     */
    public static regRcvMsgHandler(cmd: number, scmd: number, fun: Function): void {
        if (MessageManager._recMsgHandlerObj[cmd + "_" + scmd] != null) {
            throw new Error("该cmd,scmd下标处已注册过\r\ncmd:" + cmd + "\tscmd:" + scmd);
        }
        MessageManager._recMsgHandlerObj[cmd + "_" + scmd] = fun;
    }

    /**
     * 处理接收的信息
     */
    public static rcvMsgHandler(cmd: number, scmd: number, msg: egret.ByteArray): void {
        if (MessageManager._recMsgHandlerObj[cmd + "_" + scmd] == null) {
            console.log("该cmd,scmd下标处没有信息处理函数\r\ncmd:" + cmd + "\tscmd:" + scmd);
        }
        try {
            let data = MessageManager.getProtoCls(cmd, scmd).decode(msg.bytes);
            MessageManager._recMsgHandlerObj[cmd + "_" + scmd](data);
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * 获取proto类
     */
    public static getProtoCls(cmd: number, scmd: number): ProtoClass {
        if (MessageManager._protoObj[cmd + "_" + scmd] == null) {
            throw new Error("cmd,scmd下标处没有proto类\r\ncmd:" + cmd + "\tscmd:" + scmd);
        }
        return MessageManager._protoObj[cmd + "_" + scmd];
    }
}