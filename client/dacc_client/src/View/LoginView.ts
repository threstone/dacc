class LoginView extends BaseView {
    loginCom: dacc.UI_Login
    protected init() {
        this.loginCom = dacc.UI_Login.createInstance()
        this.loginCom.m_login_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoginBtnClick, this)
        this.addEventListener('LoginResult', this.onLoginResult)
    }

    onLoginBtnClick() {
        let input = this.loginCom.m_input_text.text
        if (input.length <= 0) {
            GlobalController.showTips('请输入用户名', 5000)
            return
        }
        //派发消息后不允许点击了
        this.emit('LoginBtnClick', input)
        this.loginCom.touchable = false
    }

    onLoginResult(evt: EventData) {
        let result: LoginPto.S_LOGIN = evt.data
        if (result.isSuccess) {
            this.loginCom.visible = false
        } else {
            GlobalController.showTips('登录失败了', 5000)
        }
        this.loginCom.touchable = true
        GlobalController.showHall()
    }
}