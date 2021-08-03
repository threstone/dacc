import { getLogger } from "log4js"
import { DaccPlayer } from "./dacc_player"
import { DaccUser } from "./dacc_session"

let logger = getLogger()
export abstract class DaccTable {
    gameId: number
    private _tableSeq: string
    players: DaccPlayer[] = []

    constructor(gameId: number) {
        this.gameId = gameId
    }

    protected abstract allowJoin(): boolean;
    protected abstract onUserJoinSuccess(player: DaccPlayer): boolean

    get tableSeq() {
        return this._tableSeq
    }

    setTableSeq(seq: string) {
        this._tableSeq = seq
    }

    onUserJoinTable(user: DaccUser) {
        if (this.allowJoin()) {
            let player = this.createNewPlayer(user)
            this.players.push(player)
            user.table = this
            user.player = player
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

    destoryTable(reason?: string) {
        if (reason) {
            logger.error("桌子异常关闭:", reason, '\ntableSeq', this._tableSeq)
        }
        for (let index = 0; index < this.players.length; index++) {
            this.players[index].destroy()
        }
        this.players = null
    }
}