abstract class BaseController {
    protected view: BaseView
    protected model: BaseModel
    constructor() {
        this.init()
    }

    protected abstract init()
}