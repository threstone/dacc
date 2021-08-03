class GameController extends BaseController {
    loadedGameObj: {}
    protected init() {
        this.loadedGameObj = {}
        this.view = new GameView()
        this.model = new GameModel()
    }



    async onJoinRoomSuccess(data: HallPto.S_JOIN_ROOM) {
        //不存在就加载
        if (!this.loadedGameObj[data.gameId]) {
            await RES.loadGroup(`game${data.gameId}`);
            window[`game${data.gameId}`][`game${data.gameId}Binder`].bindAll()
            this.loadedGameObj[data.gameId] = true
        }

        let view = this.view as GameView
        view.show(data.gameId)
        let model = this.model as GameModel
        model.alive(data.gameId)
    }
}