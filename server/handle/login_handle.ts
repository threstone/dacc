import { HallPto, SystemPto } from "../common_proto"
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

        //说明有在线的，把在线的踢掉
        let clientId = parseInt(await GlobalVar.redis.getData(`userClientId-${info.id}`))
        if (!Number.isNaN(clientId)) {
            //提醒并且把原来的踢掉
            let tips = new SystemPto.S_TIPS()
            tips.msg = '您的账号在别处登录了!'
            tips.hoverTime = 20000
            // let session = GlobalVar.server.getDaccSession()
            GlobalVar.server.sendMsg(clientId, tips)
            GlobalVar.server.closeWs(clientId)
        }

        let isInRoom = parseInt(await GlobalVar.redis.getData(`userInRoom-${info.id}`))
        let isInGame = parseInt(await GlobalVar.redis.getData(`userInGame-${info.id}`))

        replyMsg.roomId = isInRoom ? isInRoom : -1
        replyMsg.gameId = isInGame
        replyMsg.isSuccess = true
        replyMsg.nick = info.nick
        replyMsg.headIndex = info.headIndex
        user.doLogin(info)
        user.sendMsg(replyMsg)
        //记录uid=>clientId
        GlobalVar.redis.setData(`userClientId-${info.id}`, user.clientId, -1)

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