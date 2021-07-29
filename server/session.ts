import { getLogger } from "log4js"
import { IGameMessage, ProtoBufEncoder } from "./protobuf_encoder"
const logger = getLogger()
export class DaccSession {
    private _ws
    clientId: number = -1
    init(ws, clientId: number) {
        this._ws = ws
        this.clientId = clientId
    }

    reset() {
        this._ws = null
        this.clientId = -1
    }

    sendMsg(msg: IGameMessage) {
        if (!this._ws) {
            logger.error("连接已经断开了...")
            return
        }
        this._ws.send(ProtoBufEncoder.encode(msg))
    }

    sendBuf(buf: Buffer) {
        if (!this._ws) {
            logger.error("连接已经断开了...")
            return
        }
        this._ws.send(buf)
    }
}