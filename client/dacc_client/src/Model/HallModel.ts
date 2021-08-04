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
            requestMsg.roomId = msg.roomId
            this.sendMsg(requestMsg)
        } else {
            GlobalController.showTips("创建房间失败...", 5000)
        }
    }

    S_JOIN_ROOM(msg: HallPto.S_JOIN_ROOM) {
        if (msg.isSuccess) {
            GlobalController.joinGameSuccess(msg)
        } else {
            GlobalController.showTips("加入房间失败...", 5000)
        }
    }

    S_BROADCAST_JOIN_ROOM(msg: HallPto.S_BROADCAST_JOIN_ROOM) {
        this.emit('UserJoinInRoom', msg)
    }

    S_BROADCAST_LEAVE_ROOM(msg: HallPto.S_BROADCAST_LEAVE_ROOM) {
        this.emit('UserLeaveRoom', msg)
    }

    S_ROOM_LIST(msg: HallPto.S_ROOM_LIST) {
        this.emit('RoomListInfo', msg)
    }

    initCreateRoomEvent() {
        this.addEventListener('CreateRoomClick', (evt: EventData) => {
            let gameId: number = evt.data.gameId
            let describe: string = evt.data.describe
            let msg = new HallPto.C_CREATE_ROOM()
            msg.gameId = gameId
            msg.describe = describe
            this.sendMsg(msg)
        })
    }

    initRoomListEvent() {
        this.addEventListener('RoomListConditionChange', (evt: EventData) => {
            let gameId: number = evt.data.gameId
            if (gameId == undefined) {
                return
            }
            let status: number = evt.data.status
            let msg = new HallPto.C_ROOM_LIST()
            msg.gameId = gameId
            msg.status = status == -1 ? 0 : status
            this.sendMsg(msg)
        })

        this.addEventListener('JoinInRoomClick', (evt: EventData) => {
            let roomId: number = evt.data
            //请求进入房间
            let requestMsg = new HallPto.C_JOIN_ROOM()
            requestMsg.roomId = roomId
            this.sendMsg(requestMsg)
        })
    }
}