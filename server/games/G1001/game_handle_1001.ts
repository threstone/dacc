import { GamePto1001 } from "./proto_1001";
import { DaccUser } from "../../dacc_session";
import { Room1001 } from "./room_1001";
export class GameHandle1001 {
    static C_REQUEST_SWORD_1001(user: DaccUser, msg: GamePto1001.C_REQUEST_SWORD_1001) {
        let room = user.room as Room1001
        room.onUserSword(user.player, msg.sword)
    }
}