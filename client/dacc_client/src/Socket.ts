const SERVER_DRESS = 'ws://192.168.0.36:9595';

interface GameProtoClass {
    cmd: CmdProto.SYS_CMD
    scmd: number
}
class Socket {

    private static socket: Socket;

    public static getInstance(): Socket {

        if (Socket.socket == null) {

            Socket.socket = new Socket();
            Socket.socket.webSocket.type = egret.WebSocket.TYPE_BINARY;

        }

        return Socket.socket;

    }

    private webSocket: egret.WebSocket;

    public constructor() {
        this.webSocket = new egret.WebSocket();
        this.webSocket.connectByUrl(SERVER_DRESS);
        console.log("开始连接服务器1:", SERVER_DRESS)
        this.webSocket.addEventListener(egret.ProgressEvent.CONNECT, this.onConnection, this);
        this.webSocket.addEventListener(egret.Event.CLOSE, this.onClose, this);
        this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onError, this);
    }

    private onConnection() {

        console.log("服务器连接成功");
        this.webSocket.removeEventListener(egret.ProgressEvent.CONNECT, this.onConnection, this);
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onRcvMsg, this);

    }

    /**
     * 发送信息给服务器
     */
    public sendMsg(byteArray: egret.ByteArray): void {

        if (this.webSocket.connected) {

            this.webSocket.writeBytes(byteArray);

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
        this.webSocket.readBytes(byteArray);

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