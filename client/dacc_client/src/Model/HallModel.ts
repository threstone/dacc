class HallModel extends BaseModel {

    userData: LoginPto.S_LOGIN

    protected init() {
        this.addEventListener('SendChatMsg', this.onSendChatMsg)
        this.addEventListener('LoginResult', this.onLoginResult)
        this.addEventListener('ChangeHeadPic', this.onChangeHeadPic)
        this.initCreateRoomEvent()
        this.initRoomListEvent()
    }

    onChangeHeadPic(evt: EventData) {
        let index: number = evt.data
        let msg = new HallPto.C_CHANGE_HEAD()
        msg.headIndex = index
        this.sendMsg(msg)
    }

    onLoginResult(evt: EventData) {
        let data: LoginPto.S_LOGIN = evt.data
        if (data.isSuccess) {
            this.userData = data
        }
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

    S_CREATE_ROOM(msg: HallPto.S_CREATE_ROOM) {
        if (msg.isSuccess) {
            //请求进入房间
            let requestMsg = new HallPto.C_JOIN_ROOM()
            requestMsg.tableSeq = msg.tableSeq
            this.sendMsg(requestMsg)
        } else {
            GlobalController.showTips("创建房间失败...", 5000)
        }
    }

    S_JOIN_ROOM(msg: HallPto.S_JOIN_ROOM) {
        if (msg.isSuccess) {
            GlobalController.JoinGameSuccess(msg)
        } else {
            GlobalController.showTips("加入房间失败...", 5000)
        }
    }

    initCreateRoomEvent() {
        this.addEventListener('CreateRoomClick', (evt: EventData) => {
            let gameId = evt.data as number
            let msg = new HallPto.C_CREATE_ROOM()
            msg.gameId = gameId
            this.sendMsg(msg)
        })
    }

    initRoomListEvent() {
        this.addEventListener('RoomListGameChooseChange', (evt: EventData) => {
            let gameId = evt.data as number

        })
    }
}