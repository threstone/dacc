import { GlobalVar } from "./global_var"
import { IGameMessage } from "./protobuf_encoder"
export class DaccPlayer {
    private _clientId: number
    /**
     * 玩家的id
     */
    private _id: number
    nick: string
    headIndex: number
    /**
     * 在player中的索引
     */
    index: number
    isReady: boolean = false
    isWatcher: boolean = false

    constructor(clientId: number) {
        this._clientId = clientId
        let userModel = GlobalVar.server.getDaccSession(this._clientId).userModel
        this._id = userModel.id || -1
        this.nick = userModel.nick || ''
        this.headIndex = userModel.headIndex || -1
    }

    get clientId() {
        return this._clientId
    }

    get id() {
        return this._id
    }

    reconnect(clientId: number) {
        this._clientId = clientId
    }

    disconnect() {
        this._clientId = -1
    }

    sendMsg(msg: IGameMessage) {
        if (this._clientId == -1) {
            return
        }
        GlobalVar.server.sendMsg(this._clientId, msg)
    }

    sendBuf(buf: Buffer) {
        if (this._clientId == -1) {
            return
        }
        GlobalVar.server.sendBuf(this._clientId, buf)
    }

    /**
     * 获取DaccSession
     */
    getSession() {
        return GlobalVar.server.getDaccSession(this._clientId)
    }

    destroy() {
        let session = this.getSession()
        if (session) {
            session.room = null
            session.player = null
        }
        this._clientId = -1
        this._id = -1
        this.index = -1
        this.isReady = false
        this.isWatcher = false
    }
}