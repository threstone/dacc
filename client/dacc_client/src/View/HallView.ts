class HallView {
    static hallCom: hall.UI_Hall
    static init() {
        this.hallCom = hall.UI_Hall.createInstance()
        this.hallCom.m_login.m_login_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoginBtnClick, this)
    }

    static onLoginBtnClick() {
        if (this.hallCom.m_login.m_input_text.text.length <= 0) {
            this.hallCom.m_login.m_tips.text = "请输入用户名"
            return
        }
    }
}