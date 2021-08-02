import { HallPto } from "../common_proto"
import { LoginPto } from "../common_proto"
import { DaccUser } from "../dacc_user"

export class LoginHandle {
    static C_LOGIN(user: DaccUser, msg: LoginPto.C_LOGIN) {
        let replyMsg = new LoginPto.S_LOGIN()
        replyMsg.isSuccess = true
        replyMsg.userName = msg.userName
        user.userName = msg.userName
        user.sendMsg(replyMsg)

        //下发游戏列表
        let gameList = new HallPto.S_GAME_LIST()
        let gameInfo = new HallPto.GameInfo()
        gameInfo.gameId = 1
        gameInfo.gameName = '石头剪刀布'
        gameList.list.push(gameInfo)
        user.sendMsg(gameList)
    }
}