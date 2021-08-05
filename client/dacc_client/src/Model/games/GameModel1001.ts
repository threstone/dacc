class GameModel1001 extends GameBaseModel {

    protected init() {
        this.addEventListener('SwordBtnClick1001', this.onSwordBtnClick)
    }

    onSwordBtnClick(evt: EventData) {
        let msg = new GamePto1001.C_REQUEST_SWORD_1001()
        msg.sword = evt.data
        this.sendMsg(msg)
    }

    S_GAME_START_1001(msg: GamePto1001.S_GAME_START_1001) {
        this.emit('GameStart1001', msg)
    }

    S_BROADCAST_SWORD_1001(msg: GamePto1001.S_BROADCAST_SWORD_1001) {
        this.emit('BroadcastSword1001', msg)
    }

    S_START_OUT_SWORD_1001(msg: GamePto1001.S_START_OUT_SWORD_1001) {
        this.emit('StartOutSword1001', msg)
    }

    S_GAME_RESULT_1001(msg: GamePto1001.S_GAME_RESULT_1001) {
        this.emit('GameResult1001', msg)
    }

}