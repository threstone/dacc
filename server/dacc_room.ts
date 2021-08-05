import { getLogger } from "log4js"
import { DaccPlayer } from "./dacc_player"
import { DaccUser } from "./dacc_session"
import { GlobalVar } from "./global_var"
import { IGameMessage, ProtoBufEncoder } from "./protobuf_encoder"
import { HallPto, RoomPto, SystemPto } from "./common_proto"

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
    protected abstract getMinStartPlayerNum(): number
    protected abstract startGame(): void
    /**
     * 判断游戏中是否允许退出房间
     */
    protected abstract allowLeaveRoom(): boolean
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

    /**
     * 当玩家请求离开房间
     */
    onUserRequestLeaveRoom(player: DaccPlayer) {
        if (this.isStart) {
            if (this.allowLeaveRoom()) {
                this.doleaveRoom(player)
            } else {
                let tips = new SystemPto.S_TIPS()
                tips.msg = '当前不允许退出房间'
                tips.hoverTime = 7000
                player.sendMsg(tips)
            }
        } else {
            this.doleaveRoom(player)
        }
    }

    /**
     *  当玩家断线
     */
    onUserSocketClose(player: DaccPlayer) {
        //如果桌子没开启那么这个人直接出去
        if (!this.isStart) {
            this.doleaveRoom(player)
        } else {
            this.onUserDisConnect(player)
        }
    }
    /**
     * 执行玩家离开房间
     */
    private doleaveRoom(player: DaccPlayer) {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i] == player) {
                let msg = new RoomPto.S_BROADCAST_LEAVE_ROOM()
                msg.index = i
                this.broadcast(msg)
                this.players[i].destroy()
                this.players[i] = null
                break
            }
        }
        //如果人都跑光了就解散房间
        if (this.getCurPlayerNum() == 0) {
            this.destoryRoom()
        }
    }

    /**
     * 玩家加入房间
     */
    onUserJoinRoom(user: DaccUser) {
        if (this.allowJoin()) {
            let player = this.createNewPlayer(user)
            let index = this.players.indexOf(null)
            this.players[index] = player
            player.index = index
            user.room = this
            user.player = player
            let msg = new RoomPto.S_BROADCAST_JOIN_ROOM()
            msg.player = new RoomPto.Player()
            msg.player.headIndex = user.headIndex
            msg.player.index = index
            msg.player.isReady = false
            msg.player.userName = user.userName
            this.broadcast(msg, player)

            if (this.onUserJoinSuccess(player)) {
                return player
            }
        }
        return
    }

    /**
     * 玩家准备状态改变
     */
    onUserReadyStatusChange(player: DaccPlayer) {
        if (this.isStart) {
            //游戏已经开始不存在准备状态改变
            return
        }
        player.isReady = !player.isReady
        let msg = new RoomPto.S_PLAYER_READY_STATUS_CHANGE()
        msg.index = player.index
        msg.isReady = player.isReady
        this.broadcast(msg)
        if (player.isReady) {
            this.checkStartGame()
        }
    }

    checkStartGame() {
        let readNum = 0
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i] && this.players[i].isReady) {
                readNum++
            }
        }
        if (readNum >= this.getMinStartPlayerNum()) {
            this.isStart = true
            this.startGame()
        }
    }

    /**
     * 方便子游戏重写，有可能子游戏需要写属于自己的player去继承daccPlayer
     */
    protected createNewPlayer(user: DaccUser): DaccPlayer {
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
            if (this.players[index]) {
                this.players[index].destroy()
            }
        }
        this.players = null
        GlobalVar.roomMgr.destoryRoom(this.roomId)
    }

    getCurPlayerNum() {
        let num = 0
        for (let index = 0; index < this.players.length; index++) {
            if (this.players[index]) {
                num++
            }
        }
        return num
    }

    private allowJoin() {
        if (!this.isStart && this.getCurPlayerNum() < this.getMaxPlayerNum()) {
            return true
        }
        return false
    }
}