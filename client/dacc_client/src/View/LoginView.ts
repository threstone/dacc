class LoginView extends BaseView {
    loginCom: dacc.UI_Login
    protected init() {
        this.loginCom = dacc.UI_Login.createInstance()
        this.loginCom.m_login_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoginBtnClick, this)
        this.loginCom.m_reg_btn.m_describe.text = '注册'
        this.loginCom.m_reg_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegBtnClick, this)

        this.initRegCom()

        this.addEventListener('LoginResult', this.onLoginResult)
    }

    onLoginBtnClick() {
        let account = this.loginCom.m_account_input.text
        let password = this.loginCom.m_password_input.text
        if (account.length <= 0 || password.length <= 0) {
            GlobalController.showTips('请输入用户名或密码', 5000)
            return
        }
        //派发消息后不允许点击了
        this.emit('LoginBtnClick', { account, password })
        this.loginCom.touchable = false
    }

    onLoginResult(evt: EventData) {
        let result: LoginPto.S_LOGIN = evt.data
        if (result.isSuccess) {
            this.loginCom.visible = false
            GlobalController.showHall()
        } else {
            GlobalController.showTips('登录失败了,可能是密码错误,也可能是没有注册', 5000)
            this.loginCom.touchable = true
        }
    }

    onRegBtnClick() {
        this.loginCom.m_reg_com.visible = !this.loginCom.m_reg_com.visible
    }

    initRegCom() {
        let regCom = this.loginCom.m_reg_com
        regCom.m_exit.m_describe.text = '关闭'
        regCom.m_exit.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.loginCom.m_reg_com.visible = false
        }, this)

        regCom.m_reg_btn.m_describe.text = '注册'
        regCom.m_reg_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            if (regCom.m_account_input.text.length <= 0 || regCom.m_password_input.text.length <= 0 ||
                regCom.m_password_again_input.text.length <= 0 || regCom.m_nick_input.text.length <= 0) {
                GlobalController.showTips('每一个都要填写哦', 5000)
                return
            }
            if (regCom.m_password_input.text != regCom.m_password_again_input.text) {
                GlobalController.showTips('两次密码输入不一致', 5000)
                return
            }
            this.emit('RegisterBtnClick', {
                account: regCom.m_account_input.text,
                password: regCom.m_password_input.text,
                nick: regCom.m_nick_input.text,
            })
        }, this)

        this.addEventListener('RegisterResult', (evt: EventData) => {
            let code: number = evt.data
            switch (code) {
                case 0:
                    GlobalController.showTips('注册成功!', 5000)
                    regCom.visible = false
                    regCom.m_account_input.text = ''
                    regCom.m_password_input.text = ''
                    regCom.m_password_again_input.text = ''
                    regCom.m_nick_input.text = ''
                    break
                case 1:
                    GlobalController.showTips('注册失败,账号已存在!', 5000)
                    break
                default:
                    GlobalController.showTips(`注册失败!code:${code}`, 5000)
            }
        })
    }
}