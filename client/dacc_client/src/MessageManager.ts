
class MessageManager {

    /**
     * proto类
     */
    private static _protoObj = new Array<ProtoClass>();

    /**
     * 收到信息的处理函数
     */
    private static _recMsgHandlerArr = new Array<Function>();

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
                    throw new Error("协议头scmd ,范围错误," + key + "," + protoClass.prototype.scmd)
                }

                let protoIndex: number = protoClass.prototype.cmd * 255 + protoClass.prototype.scmd
                MessageManager._protoObj[protoIndex] = protoClass

                //服务器的代码需要注册一下
                if (key.startsWith("S_")) {
                    console.log("添加协议:", protoClass.name, protoClass.prototype.cmd, protoClass.prototype.scmd)
                    if (handle && handle[protoClass.name]) {
                        this._recMsgHandlerArr[protoIndex] = handle[protoClass.name]
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
    public static regRcvMsgHandler(cmd: number, scmd: number, fun: Function): void {

        if (MessageManager._recMsgHandlerArr[cmd * 255 + scmd] != null) {

            throw new Error("该cmd,scmd下标处已注册过\r\ncmd:" + cmd + "\tscmd:" + scmd);

        }

        MessageManager._recMsgHandlerArr[cmd * 255 + scmd] = fun;

    }

    /**
     * 处理接收的信息
     */
    public static rcvMsgHandler(cmd: number, scmd: number, msg: egret.ByteArray): void {

        if (MessageManager._recMsgHandlerArr[cmd * 255 + scmd] == null) {

            console.log("该cmd,scmd下标处没有信息处理函数\r\ncmd:" + cmd + "\tscmd:" + scmd);

            // throw new Error("该cmd,scmd下标处没有信息处理函数\r\nsisid:" + sisId + "\tscmd:" + scmd);

        }

        try {

            let data = MessageManager.getProtoCls(cmd, scmd).decode(msg.bytes);
            MessageManager._recMsgHandlerArr[cmd * 255 + scmd](data);

        } catch (error) {

            console.log(error);

        }

    }

    /**
     * 获取proto类
     */
    public static getProtoCls(cmd: number, scmd: number): ProtoClass {

        if (MessageManager._protoObj[cmd * 255 + scmd] == null) {

            throw new Error("cmd,scmd下标处没有proto类\r\ncmd:" + cmd + "\tscmd:" + scmd);

        }

        return MessageManager._protoObj[cmd * 255 + scmd];

    }

    /**
     * 根据下标放入proto类
     */
    public static setProtoCls(index: number, pClass: ProtoClass): void {

        if (MessageManager._protoObj[index] != null) {

            let cmd = Math.floor(index / 255);
            let scmd = index % 255;
            throw new Error("该index下标处已有proto类\cmd:" + cmd + "||scmd:" + scmd);

        }

        MessageManager._protoObj[index] = pClass;

    }



}