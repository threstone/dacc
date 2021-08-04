import { getLogger } from "log4js"
import { DaccPlayer } from "./dacc_player"
import { DaccUser } from "./dacc_session"
import { GlobalVal } from "./global_val"
import { IGameMessage, ProtoBufEncoder } from "./protobuf_encoder"
import { HallPto } from "./common_proto"

let logger = getLogger()
export abstract class DaccRoom {
    gameId: number
    roomId: number
    isStart: boolean
    describe: string
    private _roomSeq: string
    players: DaccPlayer[]

    constructor(gameId: number) {
        this.gameId = gameId
        this.roomId = -1
        this.isStart = false
        this.players = []
        for (let i = 0; i < this.getMaxPlayerNum(); i++) {
            this.players.push(null)
        }
    }

    protected abstract onUserJoinSuccess(player: DaccPlayer): boolean
    public abstract getMaxPlayerNum(): number
    /**
     * 在游戏中玩家断线回调
     */
    abstract onUserDisConnect(player: DaccPlayer)

    get roomSeq() {
        return this._roomSeq
    }

    setRoomSeq(seq: string) {
        this._roomSeq = seq
    }

    onUserSocketClose(player: DaccPlayer) {
        //如果桌子没开启那么这个人直接出去
        if (!this.isStart) {
            this.onleaveRoom(player)
        } else {
            this.onUserDisConnect(player)
        }
    }

    onleaveRoom(player: DaccPlayer) {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i] == player) {
                let msg = new HallPto.S_BROADCAST_LEAVE_ROOM()
                msg.index = i
                this.broadcast(msg, player)
                this.players[i].destroy()
                this.players[i] = null
                break
            }
        }
        //如果人都跑光了就解散房间
        if (this.players.length == 0) {
            this.destoryRoom()
        }
    }

    onUserJoinRoom(user: DaccUser) {
        if (this.allowJoin()) {
            let player = this.createNewPlayer(user)
            let index = this.players.indexOf(null)
            this.players[index] = player
            user.room = this
            user.player = player
            let msg = new HallPto.S_BROADCAST_JOIN_ROOM()
            msg.player = new HallPto.Player()
            msg.player.headIndex = user.headIndex
            msg.player.index = index
            msg.player.isReady = false
            msg.player.userName = user.userName
            this.broadcast(msg, player)
            return this.onUserJoinSuccess(player)
        }
        return false
    }

    /**
     * 方便子游戏重写，有可能子游戏需要写属于自己的player去继承daccPlayer
     */
    createNewPlayer(user: DaccUser): DaccPlayer {
        return new DaccPlayer(user.clientId)
    }

    broadcast(msg: IGameMessage, excludePlayer?: DaccPlayer) {
        let buf = ProtoBufEncoder.encode(msg)
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i] && excludePlayer != this.players[i]) {
                this.players[i].sendBuf(buf)
            }
        }
    }

    destoryRoom(reason?: string) {
        if (reason) {
            logger.error("房间异常关闭:", reason, '\nroomSeq', this._roomSeq)
        }
        for (let index = 0; index < this.players.length; index++) {
            this.players[index].destroy()
        }
        this.players = null
        GlobalVal.roomMgr.destoryRoom(this.roomId)
    }

    getPlayerNum() {
        let num = 0
        for (let index = 0; index < this.players.length; index++) {
            if (this.players[index]) {
                num++
            }
        }
        return num
    }

    allowJoin() {
        if (!this.isStart && this.getPlayerNum() < this.getMaxPlayerNum()) {
            return true
        }
        return false
    }
}