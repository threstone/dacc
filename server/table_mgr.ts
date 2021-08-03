import { getLogger } from "log4js";
import { DaccTable } from "./dacc_table";
import * as fs from "fs"
import * as path from "path"
export declare type GameTableClasses = typeof DaccTable
let logger = getLogger()
export class TableMgr {
    private _tableMap: Map<string, DaccTable>
    private _tableIndex = 1
    private _tableClassMap: Map<number, GameTableClasses>
    constructor() {
        this._tableMap = new Map<string, DaccTable>()
        this.initTableClass()
    }

    initTableClass() {
        this._tableClassMap = new Map<number, GameTableClasses>()
        let basePath = path.join(__dirname, "./games")
        let files = fs.readdirSync(basePath)
        for (let i = 0; i < files.length; i++) {
            let foldName = files[i]
            if (foldName.startsWith("G")) {
                let gameId = parseInt(foldName.substr(1))
                if (Number.isNaN(gameId) || this._tableClassMap.has(gameId)) {
                    logger.error(`${foldName} 注册游戏出现错误`)
                    continue
                }
                let tablePath = path.join(basePath, `${foldName}/table_${gameId}`)
                let tableClass = require(tablePath)
                this._tableClassMap.set(gameId, tableClass[`Table${gameId}`])
                console.log(`gameId:${gameId}注册成功`)
            }
        }
    }

    createTable(gameId: number) {
        let tableClass = this._tableClassMap.get(gameId)
        if (!tableClass) {
            logger.error(`请求创建未注册的游戏房间:${gameId}`)
            return
        }
        let table = (new (tableClass as any)(gameId)) as DaccTable
        table.setTableSeq(`${gameId}-${Date.now()}-${this._tableIndex++}`)
        this._tableMap.set(table.tableSeq, table)
        return table
    }

    getTableByTableSeq(seq: string) {
        return this._tableMap.get(seq)
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