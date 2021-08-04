class GameView extends BaseView {

    viewObj: {}

    protected init() {
        this.viewObj = {}
    }

    show(gameId: number, data: HallPto.S_JOIN_ROOM) {
        if (!this.viewObj[gameId]) {
            if (!window[`GameView${gameId}`]) {
                throw new Error(`gameId:${gameId},未找到游戏view!`)
            }
            this.viewObj[gameId] = new window[`GameView${gameId}`](gameId)
        }
        let gameView: GameBaseView = this.viewObj[gameId]
        gameView.show(data)
    }
}