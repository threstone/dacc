class HallModel extends BaseModel {
    init() {
        this.addEventListener('LoginBtnClick', this.onLoginBtnClick)
        MessageManager.addProtoModule(HallPto, this)
    }

    onLoginBtnClick(evt) {
        let inputName: string = evt.data
        let msg = new HallPto.C_Login()
        msg.userName = inputName
        this.sendMsg(msg)
    }
}