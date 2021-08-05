class HallController extends BaseController {
    protected init() {
        this.view = new HallView()
        this.model = new HallModel()
    }

    showHall() {
        fairygui.GRoot.inst.addChild((this.view as HallView).hallCom)
    }

    getUserInfo() {
        return (this.model as HallModel).userData
    }
}