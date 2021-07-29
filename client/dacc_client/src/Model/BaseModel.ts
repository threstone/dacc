abstract class BaseModel {
    constructor() {
        this.init()
    }

    protected abstract init()

    /**
        * 发送信息给服务器
        */
    protected sendMsg(msg: GameProtoClass): void {
        Socket.getInstance().sendProtoMsg(msg);
    }

    protected addEventListener(evemtName: string, func: Function, thisObj: any = this) {
        GameDispatcher.getInstance().addEventListener('LoginBtnClick', func, thisObj)
    }

}