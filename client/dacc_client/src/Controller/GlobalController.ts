class GlobalController {

    static globalView: GlobalView

    static loginController: LoginController
    static hallController: HallController
    static gameController: GameController

    static init(stage: egret.Stage) {
        fairygui.UIPackage.addPackage("hall");
        dacc.daccBinder.bindAll()

        this.globalView = new GlobalView(stage)

        this.loginController = new LoginController()
        this.hallController = new HallController()
        this.gameController = new GameController()
    }

    static showHall() {
        this.hallController.showHall()
    }

    static showTips(msg: string, hoverTime: number) {
        this.globalView.showTips(msg, hoverTime)
    }

    static JoinGameSuccess(data: HallPto.S_JOIN_ROOM) {
        this.gameController.onJoinRoomSuccess(data)
    }
}