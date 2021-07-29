class LoginView extends BaseView {
    loginCom: dacc.UI_Login
    init() {
        this.loginCom = dacc.UI_Login.createInstance()
        this.loginCom.m_login_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoginBtnClick, this)
        this.addEventListener('LoginResult', this.onLoginResult)
    }

    onLoginBtnClick() {
        let input = this.loginCom.m_input_text.text
        if (input.length <= 0) {
            this.loginCom.m_tips.text = "请输入用户名"
            return
        }

        //派发消息后不允许点击了
        this.emit('LoginBtnClick', input)
        this.loginCom.touchable = false
    }

    onLoginResult(evt) {
        let result: boolean = evt.data
        if (result) {
            this.loginCom.visible = false
        } else {
            this.loginCom.m_tips.text = "登录失败了"
        }
        this.loginCom.touchable = true
        GlobalController.showHall()
    }
}