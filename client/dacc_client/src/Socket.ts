interface GameProtoClass {
    cmd: number
    scmd: number
}
class Socket {

    private static _socket: Socket;
    private _webSocket: egret.WebSocket;

    public static getInstance(): Socket {

        if (Socket._socket == null) {

            Socket._socket = new Socket();
            Socket._socket._webSocket.type = egret.WebSocket.TYPE_BINARY;

        }

        return Socket._socket;

    }

    public constructor() {
        let serverConfig = RES.getRes('server_json')
        this._webSocket = new egret.WebSocket();
        this._webSocket.connectByUrl(serverConfig.address);
        console.log("开始连接服务器:", serverConfig.address)
        this._webSocket.addEventListener(egret.ProgressEvent.CONNECT, this.onConnection, this);
        this._webSocket.addEventListener(egret.Event.CLOSE, this.onClose, this);
        this._webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onError, this);
    }

    private onConnection() {

        console.log("服务器连接成功");
        this._webSocket.removeEventListener(egret.ProgressEvent.CONNECT, this.onConnection, this);
        this._webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onRcvMsg, this);

    }

    /**
     * 发送信息给服务器
     */
    public sendMsg(byteArray: egret.ByteArray): void {

        if (this._webSocket.connected) {

            this._webSocket.writeBytes(byteArray);

        } else {

            console.error("连接已经断开了")
            //throw "连接已经断开了";

        }

    }

    /**
     * 发送proto给服务器
    */
    public sendProtoMsg(msg: GameProtoClass): void {

        let msgAny: any = msg;

        let buffer = MessageManager.getProtoCls(msgAny.__proto__.cmd, msgAny.__proto__.scmd).encode(msg).finish();

        let byteArray = new egret.ByteArray(buffer);
        byteArray.endian = egret.Endian.LITTLE_ENDIAN;

        let sendByteArray = new egret.ByteArray();
        sendByteArray.writeByte(msgAny.__proto__.cmd);
        sendByteArray.writeByte(msgAny.__proto__.scmd);
        sendByteArray.writeBytes(byteArray);

        Socket.getInstance().sendMsg(sendByteArray);

    }

    private onRcvMsg() {
        let byteArray = new egret.ByteArray();
        this._webSocket.readBytes(byteArray);

        let sysId = byteArray.readUnsignedByte();
        let cmdId = byteArray.readUnsignedByte();
        let msg: egret.ByteArray = new egret.ByteArray();;
        byteArray.readBytes(msg);

        MessageManager.rcvMsgHandler(sysId, cmdId, msg);
    }

    private onClose() {
        console.error("主动输出:" + "连接断开");
    }

    private onError(err) {
        console.error("主动输出:" + err);
        console.error(err);
    }

}