abstract class GameBaseModel extends BaseModel {
    private _saveArr = []
    private _isAlive = false
    protected gameId: number
    constructor(gameId: number) {
        super()
        this.gameId = gameId
    }

    /**
     * 重写addEventListener
     */
    protected addEventListener(evemtName: string, func: Function, thisObj: any = this) {
        this._saveArr.push([evemtName, func, thisObj])
    }

    /**
     * 重写removeEventListener
     */
    protected removeEventListener(evemtName: string, func: Function, thisObj: any = this) {
        for (let index = 0; index < this._saveArr.length; index++) {
            const element = this._saveArr[index];
            if (evemtName == element[0] && func == element[1] && thisObj == element[2]) {
                this._saveArr.splice(index, 1)
                break
            }
        }
    }

    /**
     * 关闭model事件监听
     */
    dead() {
        if (!this._isAlive) {
            return
        }
        for (let index = 0; index < this._saveArr.length; index++) {
            const element = this._saveArr[index];
            super.removeEventListener(element[0], element[1], element[2])
        }
    }

    /**
     * 激活model事件监听
     */
    alive() {
        if (this._isAlive) {
            return
        }
        for (let index = 0; index < this._saveArr.length; index++) {
            const element = this._saveArr[index];
            super.addEventListener(element[0], element[1], element[2])
        }
    }
}