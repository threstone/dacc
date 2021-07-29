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

    protected emit(eventName: string, data: any) {
        GameDispatcher.getInstance().emit(eventName, data)
    }

    protected addEventListener(evemtName: string, func: Function, thisObj: any = this) {
        GameDispatcher.getInstance().addEventListener(evemtName, func, thisObj)
    }

}