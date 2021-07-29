class HallController extends BaseController {
    init() {
        let view = new HallView()
        this.view = view
        let model = new HallModel()
        this.model = model
    }

    showHall() {
        fairygui.GRoot.inst.addChild((this.view as HallView).hallCom)
    }
}