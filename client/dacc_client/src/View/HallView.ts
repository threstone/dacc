class HallView extends BaseView {
    hallCom: dacc.UI_Hall
    init() {
        this.hallCom = dacc.UI_Hall.createInstance()

        // let lable = new fairygui.GLabel()
        // lable.text = "wofasdfskjh"
        // lable.titleFontSize = 10
        // lable.visible = true
        // lable.setXY(0, 0)
        // // this.hallCom.m_mini_chat.m_list.addChild(lable)
        // this.hallCom.addChild(lable)
        // let lable1 = new fairygui.GLabel()
        // lable1.text = "wofasdfskjh"
        // lable1.titleFontSize = 20
        // this.hallCom.m_mini_chat.m_list.addChild(lable1)

        let label = dacc.UI_ChatLabel.createInstance()
        label.m_title.text = "aasdjasdjalsdajssjsjsj"
        this.hallCom.m_mini_chat.m_list.addChild(label)
    }
}