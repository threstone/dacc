"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameHandle1001 = void 0;
class GameHandle1001 {
    static C_REQUEST_SWORD_1001(user, msg) {
        let room = user.room;
        room.onUserSword(user.player, msg.sword);
    }
}
exports.GameHandle1001 = GameHandle1001;
