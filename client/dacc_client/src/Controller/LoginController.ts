class LoginController extends BaseController {
    init() {
        let view = new LoginView()
        this.view = view
        fairygui.GRoot.inst.addChild(view.loginCom)

        let model = new LoginModel()
        this.model = model
    }
}