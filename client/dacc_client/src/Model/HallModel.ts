class HallModel extends BaseModel {

    userData: LoginPto.S_LOGIN

    protected init() {
        this.addEventListener('SendChatMsg', this.onSendChatMsg)
        this.addEventListener('LoginResult', this.onLoginResult)
        this.addEventListener('ChangeHeadPic', this.onChangeHeadPic)
    }

    onChangeHeadPic(evt: EventData) {
        let index: number = evt.data
        let msg = new HallPto.C_CHANGE_HEAD()
        msg.headIndex = index
        this.sendMsg(msg)
    }

    async onLoginResult(evt: EventData) {
        let data: LoginPto.S_LOGIN = evt.data
        if (data.isSuccess) {
            this.userData = data
            //需要重连
            if (data.roomId != -1) {
                //激活游戏重连所需的model view
                await GlobalController.gameController.initGame(data.gameId)
                //请求重连
                let msg = new RoomPto.C_JOIN_ROOM()
                msg.isWatch = false
                msg.roomId = data.roomId
                this.sendMsg(msg)
            }

            //定时请求在线玩家
            this.requestOnlineList()
            setInterval(this.requestOnlineList.bind(this), 5000)
        }
    }

    requestOnlineList() {
        let onlineMsg = new HallPto.C_ONLINE_LIST()
        this.sendMsg(onlineMsg)
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

    S_ONLINE_LIST(msg: HallPto.S_ONLINE_LIST) {
        this.emit('OnlineListInfo', msg)
    }

}