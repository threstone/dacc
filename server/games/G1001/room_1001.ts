import { DaccPlayer } from '../../dacc_player'
import { DaccRoom } from '../../dacc_room'
export class Room1001 extends DaccRoom {

    getMaxPlayerNum() {
        return 2
    }

    onUserDisConnect(player: DaccPlayer) {
    }

    protected onUserJoinSuccess(player: DaccPlayer) {
        return true
    }

}