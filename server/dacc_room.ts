import { getLogger } from "log4js"
import { DaccPlayer } from "./dacc_player"
import { DaccUser } from "./dacc_session"
import { GlobalVar } from "./global_var"
import { IGameMessage, ProtoBufEncoder } from "./protobuf_encoder"
import { RoomPto, SystemPto } from "./common_proto"

let logger = getLogger()
export abstract class DaccRoom {
    gameId: number
    roomId: number
    isStart: boolean
    describe: string
    private _roomSeq: string
    /**
     * 玩家数组
     * 不为null的位置说明有玩家
     * 数组length表示该游戏最大玩家数
     * 如果DaccPlayer中的属性clientId为-1则说明玩家掉线了,则会在新的一局中将掉线的玩家踢掉
     */
    players: DaccPlayer[]
    watchers: DaccPlayer[]

    get roomSeq() {
        return this._roomSeq
    }

    setRoomSeq(seq: string) {
        this._roomSeq = seq
    }

    constructor(gameId: number) {
        this.gameId = gameId
        this.roomId = -1
        this.isStart = false
        this.players = []
        this.watchers = []
        for (let i = 0; i < this.getMaxPlayerNum(); i++) {
            this.players.push(null)
        }
    }

    /**
     * 有玩家加入房间回调
     * @param player 
     */
    protected abstract onUserJoinSuccess(player: DaccPlayer): boolean
    /**
     * 获取房间最大允许多少人
     */
    public abstract getMaxPlayerNum(): number
    /**
     * 获取最小允许开始游戏的人数
     */
    protected abstract getMinStartPlayerNum(): number
    /**
     * 当游戏开始时的回调函数
     */
    protected abstract startGame(): void
    /**
     * 判断游戏中是否允许退出房间
     */
    protected abstract allowLeaveRoom(): boolean
    /**
     * 在游戏中玩家断线回调
     */
    abstract onUserDisConnect(player: DaccPlayer)

    /**
     * 当玩家请求离开房间
     */
    onUserRequestLeaveRoom(player: DaccPlayer) {
        if (this.isStart && player.isWatcher == false) {
            if (this.allowLeaveRoom()) {
                this.doleaveRoom(player)
            } else {
                let tips = new SystemPto.S_TIPS()
                tips.msg = '当前不允许退出房间'
                tips.hoverTime = 7000
                player.sendMsg(tips)
            }
        } else {//游戏未开始或者玩家是观战者就直接让他退出
            this.doleaveRoom(player)
        }
    }

    /**
     * 执行游戏结束,房间中的人和数据依然保留允许新开局
     */
    doGameOver() {
        this.isStart = false
        for (let index = 0; index < this.players.length; index++) {
            const player = this.players[index];
            if (player) {
                player.isReady = false
                //改玩家已经断线了
                if (player.clientId == -1) {
                    this.doleaveRoom(player)
                }
            }

        }
    }

    /**
     *  当玩家断线
     */
    onUserSocketClose(player: DaccPlayer) {
        //如果桌子没开启那么这个人直接出去
        if (!this.isStart || player.isWatcher) {
            this.doleaveRoom(player)
        } else {
            player.resetClientId()
            this.onUserDisConnect(player)
        }
    }
    /**
     * 执行玩家离开房间
     */
    private doleaveRoom(player: DaccPlayer) {
        if (!player.isWatcher) {
            for (let i = 0; i < this.players.length; i++) {
                if (this.players[i] == player) {
                    let msg = new RoomPto.S_BROADCAST_LEAVE_ROOM()
                    msg.index = i
                    //玩家退出房间需要广播给所有玩家
                    this.broadcast(msg, true)
                    this.players[i].destroy()
                    this.players[i] = null
                    break
                }
            }
            //如果人都跑光了就解散房间
            if (this.getCurPlayerNum() == 0) {
                this.destoryRoom()
            }
        } else {//观战者退出告诉自己就可以了
            for (let index = 0; index < this.watchers.length; index++) {
                const watcher = this.watchers[index];
                if (watcher == player) {
                    let msg = new RoomPto.S_BROADCAST_LEAVE_ROOM()
                    msg.index = player.index
                    player.sendMsg(msg)
                    this.watchers[index].destroy()
                    this.watchers[index] = null
                }
            }
        }
    }

    /**
     * 玩家加入房间
     */
    onUserJoinRoom(user: DaccUser, isWatch: boolean) {
        //非观战者进入房间
        if (!isWatch) {
            if (!this.allowJoin()) {
                return
            }
            let player = this.createNewPlayer(user)
            let index = this.players.indexOf(null)
            this.players[index] = player
            player.index = index
            let msg = new RoomPto.S_BROADCAST_JOIN_ROOM()
            msg.player = new RoomPto.Player()
            msg.player.headIndex = user.headIndex
            msg.player.index = index
            msg.player.isReady = false
            msg.player.nick = user.nick
            this.broadcast(msg, true, player)

            if (this.onUserJoinSuccess(player)) {
                user.room = this
                user.player = player
                return player
            }
        } else {//观战者进入房间
            let player = this.createNewPlayer(user)
            player.isWatcher = true
            user.room = this
            user.player = player
            this.watchers.push(player)
            player.index = this.watchers.length - 1
            return player
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
        this.broadcast(msg, true)
        if (player.isReady) {
            this.checkStartGame()
        }
    }

    /**
     * 检查游戏是否可以开启
     */
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


    /**
     * 广播消息
     * @param msg  消息
     * @param excludePlayer 需要排除的玩家
     */
    broadcast(msg: IGameMessage, includeWatcher: boolean, excludePlayer?: DaccPlayer) {
        let buf = ProtoBufEncoder.encode(msg)
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i] && excludePlayer != this.players[i]) {
                this.players[i].sendBuf(buf)
            }
        }
        if (includeWatcher) {
            for (let index = 0; index < this.watchers.length; index++) {
                const watcher = this.watchers[index];
                if (watcher) {
                    watcher.sendMsg(msg)
                }
            }
        }
    }

    /**
     * 销毁房间
     */
    destoryRoom(reason?: string) {
        if (reason) {
            logger.error("房间异常关闭:", reason, '\nroomSeq', this._roomSeq)
        }
        for (let index = 0; index < this.players.length; index++) {
            if (this.players[index]) {
                this.players[index].destroy()
            }
        }
        //通知观战者离开
        for (let index = 0; index < this.watchers.length; index++) {
            const watcher = this.watchers[index];
            if (watcher) {
                let msg = new RoomPto.S_BROADCAST_LEAVE_ROOM()
                msg.index = watcher.index
                watcher.sendMsg(msg)
                watcher.destroy()
            }
        }
        this.players = null
        this.watchers = null
        GlobalVar.roomMgr.destoryRoom(this.roomId)
    }

    /**
     * 获取当前房间中的玩家,只有在房间哪怕掉线了也算
     * 注:在非游戏中状态下，掉线会自动掉出游戏
     */
    getCurPlayerNum() {
        let num = 0
        for (let index = 0; index < this.players.length; index++) {
            if (this.players[index]) {
                num++
            }
        }
        return num
    }

    /**
     * 是否允许加入游戏
     * 如果游戏开始了，或者当前玩家人数已经到达最大人数了则不能加入
     */
    private allowJoin() {
        if (!this.isStart && this.getCurPlayerNum() < this.getMaxPlayerNum()) {
            return true
        }
        return false
    }
}