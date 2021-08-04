abstract class GameBaseView extends BaseView {
    protected gameId
    constructor(gameId: number) {
        super()
        this.gameId = gameId
        this.addEventListener(`UserJoinInRoom${gameId}`, (evt: EventData) => {
            this.onUserJoinInRoom(evt.data)
        })
        this.addEventListener(`UserLeaveRoom${gameId}`, (evt: EventData) => {
            this.onUserLeaveRoom(evt.data)
        })
    }

    abstract show(data: HallPto.S_JOIN_ROOM)
    abstract onUserJoinInRoom(data: HallPto.S_BROADCAST_JOIN_ROOM)
    abstract onUserLeaveRoom(data: HallPto.S_BROADCAST_LEAVE_ROOM)
}