import { getLogger } from "log4js";
import { DaccRoom } from "./dacc_room";
import * as fs from "fs"
import * as path from "path"
export declare type GameRoomClasses = typeof DaccRoom
let logger = getLogger()
export class RoomMgr {
    private _roomMap: Map<number, DaccRoom>
    private _roomIndex = 1
    private _roomClassMap: Map<number, GameRoomClasses>
    constructor() {
        this._roomMap = new Map<number, DaccRoom>()
        this.initRoomClass()
    }

    initRoomClass() {
        this._roomClassMap = new Map<number, GameRoomClasses>()
        let basePath = path.join(__dirname, "./games")
        let files = fs.readdirSync(basePath)
        for (let i = 0; i < files.length; i++) {
            let foldName = files[i]
            if (foldName.startsWith("G")) {
                let gameId = parseInt(foldName.substr(1))
                if (Number.isNaN(gameId) || this._roomClassMap.has(gameId)) {
                    logger.error(`${foldName} 注册游戏出现错误`)
                    continue
                }
                let roomPath = path.join(basePath, `${foldName}/room_${gameId}`)
                let roomClass = require(roomPath)
                this._roomClassMap.set(gameId, roomClass[`Room${gameId}`])
                console.log(`gameId:${gameId}注册成功`)
            }
        }
    }

    createRoom(gameId: number) {
        let roomClass = this._roomClassMap.get(gameId)
        if (!roomClass) {
            logger.error(`请求创建未注册的游戏房间:${gameId}`)
            return
        }
        let room = (new (roomClass as any)(gameId)) as DaccRoom
        room.roomId = this._roomIndex++
        room.setRoomSeq(`${gameId}-${Date.now()}-${room.roomId}`)
        this._roomMap.set(room.roomId, room)
        return room
    }

    getRoomByRoomId(roomId: number) {
        return this._roomMap.get(roomId)
    }

    /**
     * 如果gameid==0 则获取所有房间
     */
    getRoomsByGameId(gameId: number) {
        let arr: DaccRoom[] = []
        this._roomMap.forEach((v, k) => {
            if (gameId == 0 || v.gameId == gameId) {
                arr.push(v)
            }
        })
        return arr
    }

    /**
    * 如果gameid==0 则获取所有房间
    */
    getRoomsByGameIdAndStartStatus(gameId: number, isStart: boolean) {
        let arr: DaccRoom[] = []
        this._roomMap.forEach((v, k) => {
            if ((gameId == 0 || v.gameId == gameId) && v.isStart == isStart) {
                arr.push(v)
            }
        })
        return arr
    }

    destoryRoom(roomId: number) {
        this._roomMap.delete(roomId)
    }

    // private logicIndex = 0

    // startLogic() {
    //     setInterval(this.logicRun.bind(this), 5)
    // }

    // //游戏桌局逻辑执行
    // private logicRun() {
    //     let now = Date.now()
    //     let length = this.tables.length
    //     let count = 0
    //     let i = this.logicIndex
    //     for (; i < length; i++) {
    //         let table = this.tables[i]
    //         if (table) {
    //             try {
    //                 table.onRun(now)
    //             } catch (e) {
    //                 let message = e.message
    //                 let stack = e.stack
    //                 logger.error("桌局执行发生错误:", `\nmessage:${message}\nstack:${stack}`)
    //                 table.destoryTable("桌局执行发生错误:" + e.error)
    //                 this.tables[i] = null
    //             }
    //         }
    //         count++
    //         if (count >= 30) {
    //             break
    //         }
    //     }
    //     this.logicIndex = i + 1
    //     if (this.logicIndex >= length - 1) {
    //         this.logicIndex = 0
    //     }
    // }
}