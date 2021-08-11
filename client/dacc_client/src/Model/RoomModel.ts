class RoomModel extends BaseModel {
    selfIndex: number
    protected init() {
        this.selfIndex = -1
        this.initCreateRoomEvent()
        this.initRoomListEvent()
        this.addEventListener('ReadyBtnClick', this.onReadyBtnClick)
        this.addEventListener('RequestExitRoom', this.onRequestExitRoom)
    }

    onReadyBtnClick(evt: EventData) {
        let msg = new RoomPto.C_READY()
        this.sendMsg(msg)
    }

    onRequestExitRoom(evt: EventData) {
        let msg = new RoomPto.C_LEAVE_ROOM()
        this.sendMsg(msg)
    }

    S_CREATE_ROOM(msg: RoomPto.S_CREATE_ROOM) {
        if (msg.isSuccess) {
            //请求进入房间
            let requestMsg = new RoomPto.C_JOIN_ROOM()
            requestMsg.roomId = msg.roomId
            requestMsg.isWatch = false
            this.sendMsg(requestMsg)
        } else {
            GlobalController.showTips("创建房间失败...", 5000)
        }
    }

    S_JOIN_ROOM(msg: RoomPto.S_JOIN_ROOM) {
        if (msg.isSuccess) {
            GlobalController.joinGameSuccess(msg)
            this.selfIndex = msg.selfIndex
        } else {
            GlobalController.showTips("加入房间失败...", 5000)
        }
    }

    S_BROADCAST_JOIN_ROOM(msg: RoomPto.S_BROADCAST_JOIN_ROOM) {
        this.emit('UserJoinInRoom', msg)
    }

    S_BROADCAST_LEAVE_ROOM(msg: RoomPto.S_BROADCAST_LEAVE_ROOM) {
        //自己退出
        if (this.selfIndex == msg.index) {
            GlobalController.closeGame()
        } else {
            this.emit('OtherUserLeaveRoom', msg)
        }
    }

    S_PLAYER_READY_STATUS_CHANGE(msg: RoomPto.S_PLAYER_READY_STATUS_CHANGE) {
        this.emit('UserReadyStatusChange', msg)
    }

    S_ROOM_LIST(msg: RoomPto.S_ROOM_LIST) {
        this.emit('RoomListInfo', msg)
    }

    initCreateRoomEvent() {
        this.addEventListener('CreateRoomClick', (evt: EventData) => {
            let gameId: number = evt.data.gameId
            let describe: string = evt.data.describe
            let msg = new RoomPto.C_CREATE_ROOM()
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
            let msg = new RoomPto.C_ROOM_LIST()
            msg.gameId = gameId
            msg.status = status == -1 ? 0 : status
            this.sendMsg(msg)
        })

        this.addEventListener('JoinInRoomClick', async (evt: EventData) => {
            let roomId: number = evt.data.roomId
            let isWatch: boolean = evt.data.isWatch
            let gameId: number = evt.data.gameId
            if (isWatch == true) {
                //有可能时中途进入房间观战，先激活对应子游戏
                await GlobalController.gameController.initGame(gameId)
            }
            //请求进入房间
            let requestMsg = new RoomPto.C_JOIN_ROOM()
            requestMsg.isWatch = isWatch
            requestMsg.roomId = roomId
            this.sendMsg(requestMsg)
        })
    }
}