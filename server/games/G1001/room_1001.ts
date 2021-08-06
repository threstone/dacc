import { DaccPlayer } from '../../dacc_player'
import { DaccRoom } from '../../dacc_room'
import { GamePto1001 } from './proto_1001'
enum SWORD_TYPE {
    shitou = 0,
    jiandao = 1,
    bu = 2
}
export class Room1001 extends DaccRoom {

    playerSword: number[]

    protected startGame() {
        this.playerSword = [-1, -1]
        //派发游戏开始协议
        let msg = new GamePto1001.S_GAME_START_1001()
        this.broadcast(msg)
        let startOutMsg = new GamePto1001.S_START_OUT_SWORD_1001()
        startOutMsg.isStartGame = true
        this.broadcast(startOutMsg)

    }

    protected getMinStartPlayerNum(): number {
        return 2
    }

    protected allowLeaveRoom(): boolean {
        return false
    }

    getMaxPlayerNum() {
        return 2
    }

    onUserDisConnect(player: DaccPlayer) {
        player.clientId = -1
        let curNum = this.getCurPlayerNum()
        let disConnectNum = 0
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i] && this.players[i].clientId == -1) {
                disConnectNum++
            }
        }
        //全掉了
        if (curNum == disConnectNum) {
            this.destoryRoom()
        }
    }

    protected onUserJoinSuccess(player: DaccPlayer) {
        return true
    }

    onUserSword(player: DaccPlayer, sword: number) {
        let msg = new GamePto1001.S_BROADCAST_SWORD_1001()
        msg.index = player.index
        msg.sword = -1
        //通知其他玩家此玩家出牌了
        this.broadcast(msg, player)
        //通知自己出了什么
        msg.sword = sword
        player.sendMsg(msg)
        this.playerSword[player.index] = sword
        for (let i = 0; i < this.playerSword.length; i++) {
            if (this.playerSword[i] == -1) {
                return
            }
        }
        //能走到这里说明所有人都出拳了
        this.onAllUserSword()
    }

    onAllUserSword() {
        //计算结果并且广播
        let resMsg = new GamePto1001.S_GAME_RESULT_1001()
        resMsg.swords.push(this.playerSword[0], this.playerSword[1])
        if (this.playerSword[0] == this.playerSword[1]) {
            resMsg.winIndex = -1
            this.broadcast(resMsg)
            //重新开始出拳
            this.playerSword = [-1, -1]
            let startOutMsg = new GamePto1001.S_START_OUT_SWORD_1001()
            startOutMsg.isStartGame = false
            this.broadcast(startOutMsg)
        } else {
            let isZeroWin = false
            switch (this.playerSword[0]) {
                case SWORD_TYPE.bu:
                    if (this.playerSword[1] == SWORD_TYPE.shitou) {
                        isZeroWin = true
                    }
                    break
                case SWORD_TYPE.shitou:
                    if (this.playerSword[1] == SWORD_TYPE.jiandao) {
                        isZeroWin = true
                    }
                    break
                case SWORD_TYPE.jiandao:
                    if (this.playerSword[1] == SWORD_TYPE.bu) {
                        isZeroWin = true
                    }
                    break
            }
            resMsg.winIndex = isZeroWin ? 0 : 1
            this.broadcast(resMsg)
            this.doEnd()
        }
    }

    doEnd() {
        this.isStart = false
        this.players[0].isReady = false
        this.players[1].isReady = false
    }

}