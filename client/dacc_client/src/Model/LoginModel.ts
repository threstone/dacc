class LoginModel extends BaseModel {
    init() {
        this.addEventListener('LoginBtnClick', this.onLoginBtnClick)
        MessageManager.addProtoModule(LoginPto, this)
    }

    onLoginBtnClick(evt) {
        let inputName: string = evt.data
        let msg = new LoginPto.C_LOGIN()
        msg.userName = inputName
        this.sendMsg(msg)
    }

    S_LOGIN(msg: LoginPto.S_LOGIN) {
        this.emit('LoginResult', msg.isSuccess)
    }
}