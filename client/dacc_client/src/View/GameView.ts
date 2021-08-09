class GameView extends BaseView {

    viewObj: {}

    protected init() {
        this.viewObj = {}

    }

    show(gameId: number, data: RoomPto.S_JOIN_ROOM) {
        if (!this.viewObj[gameId]) {
            if (!window[`GameView${gameId}`]) {
                throw new Error(`gameId:${gameId},未找到游戏view!`)
            }
            this.viewObj[gameId] = new window[`GameView${gameId}`](gameId)
        }
        let gameView: GameBaseView = this.viewObj[gameId]
        gameView.isWatcher = data.isWatcher
        gameView.selfIndex = data.selfIndex
        gameView.show(data)
    }

    close(gameId: number) {
        if (!this.viewObj[gameId]) {
            console.error(`关闭view失败,viewObj中不存在此view,gameId:${gameId}`)
            return
        }
        let gameView: GameBaseView = this.viewObj[gameId]
        gameView.close()
    }
}