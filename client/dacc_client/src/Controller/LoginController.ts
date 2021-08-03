class LoginController extends BaseController {
    protected init() {
        let view = new LoginView()
        this.view = view
        fairygui.GRoot.inst.addChild(view.loginCom)

        this.model = new LoginModel()
    }
}