class LoginModel extends BaseModel {

    protected init() {
        this.addEventListener('LoginBtnClick', this.onLoginBtnClick)
        this.addEventListener('RegisterBtnClick', this.onRegisterBtnClick)
    }

    onRegisterBtnClick(evt: EventData) {
        let account: string = evt.data.account
        let password: string = evt.data.password
        let nick: string = evt.data.nick
        let msg = new LoginPto.C_REGISTER()
        msg.account = account
        msg.password = password
        msg.nick = nick
        this.sendMsg(msg)
    }

    onLoginBtnClick(evt: EventData) {
        let account: string = evt.data.account
        let password: string = evt.data.password
        let msg = new LoginPto.C_LOGIN()
        msg.account = account
        msg.password = password
        this.sendMsg(msg)
    }

    S_LOGIN(msg: LoginPto.S_LOGIN) {
        this.emit('LoginResult', msg)
    }

    S_REGISTER(msg: LoginPto.S_REGISTER) {
        this.emit('RegisterResult', msg.code)
    }
}