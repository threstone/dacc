import { HallPto } from "../common_proto"
import { LoginPto } from "../common_proto"
import { DaccSession } from "../dacc_session"
import { GlobalVar } from "../global_var"

export class LoginHandle {
    static async C_LOGIN(user: DaccSession, msg: LoginPto.C_LOGIN) {
        let replyMsg = new LoginPto.S_LOGIN()
        let info = await GlobalVar.dbMgr.userDao.getUserInfo(msg.account, msg.password)
        if (!info) {
            replyMsg.isSuccess = false
            user.sendMsg(replyMsg)
            return
        }

        let isInRoom = await GlobalVar.redis.getData(`userInRoom-${info.id}`)
        let isInGame = await GlobalVar.redis.getData(`userInGame-${info.id}`)
        replyMsg.roomId = isInRoom ? isInRoom : -1
        replyMsg.gameId = isInGame
        replyMsg.isSuccess = true
        replyMsg.nick = info.nick
        replyMsg.headIndex = info.headIndex
        user.doLogin(info)
        user.sendMsg(replyMsg)

        //下发游戏列表
        let gameList = new HallPto.S_GAME_LIST()
        let gameInfo = new HallPto.GameInfo()
        gameInfo.gameId = 1001
        gameInfo.gameName = '石头剪刀布'
        gameList.list.push(gameInfo)
        user.sendMsg(gameList)
    }

    static async C_REGISTER(user: DaccSession, msg: LoginPto.C_REGISTER) {
        let isExist = await GlobalVar.dbMgr.userDao.isExist(msg.account)
        let res = new LoginPto.S_REGISTER()
        if (isExist) {
            res.code = 1
            user.sendMsg(res)
            return
        }
        let createRes = GlobalVar.dbMgr.userDao.createUser(msg.account, msg.password, msg.nick)
        if (createRes) {
            res.code = 0
            user.sendMsg(res)
            return
        }

        res.code = 2
        user.sendMsg(res)
    }


}