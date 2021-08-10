class GameController extends BaseController {
    loadedGameObj: {}
    protected init() {
        this.loadedGameObj = {}
        this.view = new GameView()
        this.model = new GameModel()
    }

    async onJoinRoomSuccess(data: RoomPto.S_JOIN_ROOM) {
        // let firstLoad = false
        // //不存在就加载
        // if (!this.loadedGameObj[data.gameId]) {
        //     let startTime = Date.now()
        //     console.log('开始加载游戏:');
        //     await RES.loadGroup(`game${data.gameId}`);
        //     fairygui.UIPackage.addPackage(`game${data.gameId}`);
        //     window[`game${data.gameId}`][`game${data.gameId}Binder`].bindAll()
        //     this.loadedGameObj[data.gameId] = true
        //     firstLoad = true
        //     console.log('加载游戏完成:', Date.now() - startTime);
        // }
        // let view = this.view as GameView
        // view.show(data.gameId, data)
        // let model = this.model as GameModel
        // model.alive(data.gameId)
        await this.loadGame(data.gameId)
        this.aliveModel(data.gameId)
        let view = this.view as GameView
        view.show(data.gameId, data)
    }

    /**
     * 当登录协议中发现是需要重连时,初始化对应游戏
     */
    async onReconnect(gameId: number) {
        await this.loadGame(gameId)
        this.aliveModel(gameId)
        let view = this.view as GameView
        //防止该游戏的view没有初始化,不然就接受不到model派发的消息了
        view.loadView(gameId)
    }

    async loadGame(gameId: number) {
        //不存在就加载
        if (!this.loadedGameObj[gameId]) {
            let startTime = Date.now()
            console.log('开始加载游戏:');
            await RES.loadGroup(`game${gameId}`);
            fairygui.UIPackage.addPackage(`game${gameId}`);
            window[`game${gameId}`][`game${gameId}Binder`].bindAll()
            this.loadedGameObj[gameId] = true
            console.log('加载游戏完成:', Date.now() - startTime);
        }
    }

    aliveModel(gameId: number) {


        let model = this.model as GameModel
        model.alive(gameId)
    }

    closeGame() {
        let view = this.view as GameView
        let model = this.model as GameModel
        view.close(model.curGameID)
        model.dead(model.curGameID)
    }
}