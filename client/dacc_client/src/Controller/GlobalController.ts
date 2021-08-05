class GlobalController {

    static globalView: GlobalView

    static loginController: LoginController
    static hallController: HallController
    static gameController: GameController
    static roomController: RoomController
    static systemController: SystemController

    static unknowHeadPicUrl: string

    static init(stage: egret.Stage) {
        fairygui.UIPackage.addPackage("dacc");
        dacc.daccBinder.bindAll()

        this.unknowHeadPicUrl = fairygui.UIPackage.createObject("dacc", "touxiang").resourceURL

        this.globalView = new GlobalView(stage)

        this.loginController = new LoginController()
        this.hallController = new HallController()
        this.gameController = new GameController()
        this.roomController = new RoomController()
        this.systemController = new SystemController()
    }

    static showHall() {
        this.hallController.showHall()
    }

    static showTips(msg: string, hoverTime: number) {
        this.globalView.showTips(msg, hoverTime)
    }

    static joinGameSuccess(data: RoomPto.S_JOIN_ROOM) {
        this.gameController.onJoinRoomSuccess(data)
    }

    static getUserInfo() {
        return this.hallController.getUserInfo()
    }

    static closeGame() {
        this.gameController.closeGame()
    }

}