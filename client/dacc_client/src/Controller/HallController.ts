class HallController extends BaseController {
    init() {
        fairygui.UIPackage.addPackage("hall");
        hall.hallBinder.bindAll()

        let view = new HallView()
        this.view = view
        fairygui.GRoot.inst.addChild(view.hallCom)

        let model = new HallModel()
        this.model = model
    }
}