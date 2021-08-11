class GameModel extends BaseModel {

    modelObj: {}
    curGameID: number

    protected init() {
        this.modelObj = {}
        this.curGameID = -1
        this.addEventListener('UserJoinInRoom', this.onUserJoinInRoom)
        this.addEventListener('OtherUserLeaveRoom', this.onOtherUserLeaveRoom)
        this.addEventListener('UserReadyStatusChange', this.onUserReadyStatusChange)
    }

    onUserJoinInRoom(evt: EventData) {
        this.emit(`UserJoinInRoom${this.curGameID}`, evt.data)
    }

    onOtherUserLeaveRoom(evt: EventData) {
        this.emit(`OtherUserLeaveRoom${this.curGameID}`, evt.data)
    }

    onUserReadyStatusChange(evt: EventData) {
        this.emit(`UserReadyStatusChange${this.curGameID}`, evt.data)
    }

    /**
     * 激活游戏监听事件
     */
    alive(gameId: number) {
        if (!this.modelObj[gameId]) {
            if (!window[`GameModel${gameId}`]) {
                console.error(`激活游戏监听失败! gameId:${gameId},未找到游戏model!`)
                return
            }
            this.modelObj[gameId] = new window[`GameModel${gameId}`](gameId)
        }

        if (this.curGameID != -1) {
            this.dead(this.curGameID)
        }

        let gameModel: GameBaseModel = this.modelObj[gameId]
        gameModel.alive()
        this.curGameID = gameId
    }

    /**
     * 关闭游戏事件监听
     */
    dead(gameId: number) {
        if (this.curGameID != gameId) {
            console.error(`关闭游戏事件监听出现错误! this.curGameID != gameId, curGameID:${this.curGameID}, gameId:${gameId}`)
            //都调用一下dead
            if (this.modelObj[this.curGameID]) {
                this.modelObj[this.curGameID].dead()
            }
        }
        let gameModel: GameBaseModel = this.modelObj[this.curGameID]
        if (gameModel) {
            gameModel.dead()
        }
        this.curGameID = -1
    }
}