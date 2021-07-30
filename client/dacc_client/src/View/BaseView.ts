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

    protected removeEventListener(evemtName: string, func: Function, thisObj: any = this) {
        GameDispatcher.getInstance().removeEventListener(evemtName, func, thisObj)
    }
}