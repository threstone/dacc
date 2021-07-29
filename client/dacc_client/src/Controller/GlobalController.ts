class GlobalController {
    static init() {
        fairygui.UIPackage.addPackage("hall");
        hall.hallBinder.bindAll()
        // let com = fairygui.UIPackage.createObject("hall", "Hall").asCom;
        // fairygui.GRoot.inst.addChild(com);
        HallView.init()
        fairygui.GRoot.inst.addChild(HallView.hallCom)
    }
}