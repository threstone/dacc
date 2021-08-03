//用来控制一些全局显示对象的   如全局悬浮提示
class GlobalView extends BaseView {
    private _stage: egret.Stage
    private _tipsPool: Array<fairygui.GTextField>
    constructor(stage: egret.Stage) {
        super()
        this._stage = stage
    }

    protected init() {
        this._tipsPool = []
        for (let index = 0; index < 10; index++) {
            this._tipsPool.push(this.createTipsField())
        }
    }

    showTips(msg: string, hoverTime: number) {
        let tips = this.getTipsField()
        tips.text = msg
        tips.x = (this._stage.stageWidth - tips.width) / 2
        tips.y = 115
        this._stage.addChild(tips.displayObject)
        egret.Tween.get(tips).to({ y: -tips.height }, hoverTime).call(() => {
            this._stage.removeChild(tips.displayObject)
            this._tipsPool.push(tips)
        })
    }

    private createTipsField() {
        let tips = new fairygui.GTextField()
        tips.fontSize = 26
        tips.color = 0xFF0000
        tips.bold = true
        return tips
    }

    private getTipsField() {
        if (this._tipsPool.length == 0) {
            this._tipsPool.push(this.createTipsField())
        }
        return this._tipsPool.pop()
    }
}