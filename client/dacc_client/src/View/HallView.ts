class HallView extends BaseView {
    hallCom: hall.UI_Hall
    init() {
        this.hallCom = hall.UI_Hall.createInstance()
        this.hallCom.m_login.m_login_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoginBtnClick, this)
    }

    onLoginBtnClick() {
        let input = this.hallCom.m_login.m_input_text.text
        if (input.length <= 0) {
            this.hallCom.m_login.m_tips.text = "请输入用户名"
            return
        }

        //派发消息后不允许点击了
        this.emit('LoginBtnClick', input)
        this.hallCom.m_login.touchable = false
    }
}