abstract class BaseView {
    constructor() {
        this.init()
    }

    protected abstract init()

    protected emit(eventName: string, data: any) {
        GameDispatcher.getInstance().emit(eventName, data)
    }
}