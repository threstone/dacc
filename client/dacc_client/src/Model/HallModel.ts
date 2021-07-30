class HallModel extends BaseModel {

    userName: string

    init() {
        this.addEventListener('SendChatMsg', this.onSendChatMsg, this)

        this.addEventListener('LoginResult', (evt) => {
            let data: LoginPto.S_LOGIN = evt.data
            if (data.isSuccess) {
                this.userName = data.userName
            }
        })
    }

    onSendChatMsg(evt) {
        let strMsg: string = evt.data
        console.log('想要发送的信息:', strMsg);
        let msg = new HallPto.C_SEND_CHAT_MSG()
        msg.msg = strMsg
        this.sendMsg(msg)
    }

    S_CHAT_MSG(msg: HallPto.S_CHAT_MSG) {
        this.emit('ServerChatMsg', msg)
    }

}