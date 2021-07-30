class GlobalController {

    static loginController: LoginController
    static hallController: HallController

    static init() {
        fairygui.UIPackage.addPackage("hall");
        dacc.daccBinder.bindAll()

        this.loginController = new LoginController()
        this.hallController = new HallController()
    }

    static showHall() {
        this.hallController.showHall()
    }
}