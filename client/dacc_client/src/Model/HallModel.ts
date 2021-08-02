class HallModel extends BaseModel {

    userName: string

    init() {
        this.addEventListener('SendChatMsg', this.onSendChatMsg, this)

        this.addEventListener('LoginResult', (evt: EventData) => {
            let data: LoginPto.S_LOGIN = evt.data
            if (data.isSuccess) {
                this.userName = data.userName
            }
        })
    }

    onSendChatMsg(evt: EventData) {
        let strMsg: string = evt.data
        let msg = new HallPto.C_SEND_CHAT_MSG()
        msg.msg = strMsg
        this.sendMsg(msg)
    }

    S_CHAT_MSG(msg: HallPto.S_CHAT_MSG) {
        this.emit('ServerChatMsg', msg)
    }

    S_GAME_LIST(msg: HallPto.S_GAME_LIST) {
        this.emit('GameListInfo', msg)
    }

}