class GlobalController {

    private static _loginController: LoginController
    private static _hallController: HallController

    static init() {
        fairygui.UIPackage.addPackage("hall");
        dacc.daccBinder.bindAll()
        this._loginController = new LoginController()
        this._hallController = new HallController()
    }

    static showHall() {
        this._hallController.showHall()
    }
}