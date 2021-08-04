class GameController extends BaseController {
    loadedGameObj: {}
    protected init() {
        this.loadedGameObj = {}
        this.view = new GameView()
        this.model = new GameModel()
    }



    async onJoinRoomSuccess(data: HallPto.S_JOIN_ROOM) {
        let firstLoad = false
        //不存在就加载
        if (!this.loadedGameObj[data.gameId]) {
            let startTime = Date.now()
            console.log('开始加载游戏:');
            await RES.loadGroup(`game${data.gameId}`);
            fairygui.UIPackage.addPackage(`game${data.gameId}`);
            window[`game${data.gameId}`][`game${data.gameId}Binder`].bindAll()
            this.loadedGameObj[data.gameId] = true
            firstLoad = true
            console.log('加载游戏完成:', Date.now() - startTime);
        }
        let view = this.view as GameView
        view.show(data.gameId, data)
        let model = this.model as GameModel
        model.alive(data.gameId)
    }
}