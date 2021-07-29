abstract class BaseView {
    constructor() {
        this.init()
    }

    protected abstract init()

    protected emit(eventName: string, data: any) {
        GameDispatcher.getInstance().emit(eventName, data)
    }

    protected addEventListener(evemtName: string, func: Function, thisObj: any = this) {
        GameDispatcher.getInstance().addEventListener(evemtName, func, thisObj)
    }
}