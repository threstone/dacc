class SystemModel extends BaseModel {
    protected init() {
    }

    S_TIPS(msg: SystemPto.S_TIPS) {
        GlobalController.showTips(msg.msg, msg.hoverTime)
    }

}