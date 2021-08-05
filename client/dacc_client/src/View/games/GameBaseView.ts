abstract class GameBaseView extends BaseView {
    protected gameId
    constructor(gameId: number) {
        super()
        this.gameId = gameId
        this.addEventListener(`UserJoinInRoom${gameId}`, (evt: EventData) => {
            this.onUserJoinInRoom(evt.data)
        })
        this.addEventListener(`OtherUserLeaveRoom${gameId}`, (evt: EventData) => {
            this.onOtherUserLeaveRoom(evt.data)
        })
        this.addEventListener(`UserReadyStatusChange${gameId}`, (evt: EventData) => {
            this.onUserReadyStatusChange(evt.data)
        })
    }

    abstract show(data: RoomPto.S_JOIN_ROOM)
    abstract close();
    abstract onUserJoinInRoom(data: RoomPto.S_BROADCAST_JOIN_ROOM)
    abstract onOtherUserLeaveRoom(data: RoomPto.S_BROADCAST_LEAVE_ROOM)
    abstract onUserReadyStatusChange(data: RoomPto.S_PLAYER_READY_STATUS_CHANGE)
}