class HallView extends BaseView {
    hallCom: dacc.UI_Hall

    private _isChatUnderView: boolean = true;
    //因为添加聊天信息到窗口的时候会自动滚动到底部，会触发滚动回调，所以添加一个参数判断这个滚动是否需要取消锁定底部
    private _isAddChange = false

    init() {
        this.hallCom = dacc.UI_Hall.createInstance()
        this.addEventListener('LoginResult', this.onLoginResult)
        //初始化聊天窗口，以后有时间再写图文混排
        this.initChatCom()
    }

    onLoginResult(evt) {
        let data: LoginPto.S_LOGIN = evt.data
        this.hallCom.m_user_name.text = data.userName
    }

    onServerChatMsg(evt) {
        let data: HallPto.S_CHAT_MSG = evt.data
        let list = this.hallCom.m_chat_com.m_list
        let textField = new fairygui.GTextField()
        textField.width = 390
        textField.fontSize = 14
        textField.color = 0xFFFFFF
        textField.text = `[B][color=#000000]${data.userName}[/color][/B] : ${data.msg}`
        textField.autoSize = 2
        textField.ubbEnabled = true
        list.addChild(textField)
        if (this._isChatUnderView) {
            list.scrollToView(list.numChildren - 1);
            this._isAddChange = true
        }
    }

    initChatCom() {
        this.addEventListener('ServerChatMsg', this.onServerChatMsg)
        let chatCom = this.hallCom.m_chat_com
        chatCom.m_send.m_describe.text = "发送"

        let list = chatCom.m_list
        list.scrollPane
        let suodingdibu = chatCom.m_suodingdibu
        suodingdibu.m_describe.text = "解除锁定"
        suodingdibu.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            if (this._isChatUnderView == false) {
                this._isChatUnderView = true;
                suodingdibu.m_describe.text = "解除锁定";
                if (list.numChildren != 0) {
                    list.scrollToView(list.numChildren - 1);
                    this._isAddChange = true
                }
            } else {
                suodingdibu.m_describe.text = "锁定底部";
                this._isChatUnderView = false;
            }
        }, this);

        let bg = chatCom.m_bg
        let bgHeigh = bg.height;
        let listHeight = list.height;
        let tuodong = chatCom.m_tuodong
        tuodong.m_describe.text = "拉长按钮"
        let tuodongY = tuodong.y;
        let drag = chatCom.m_dragForSize
        drag.draggable = true;
        drag.addEventListener(fairygui.DragEvent.DRAG_MOVING, (evt: fairygui.DragEvent) => {
            let dif = tuodongY - drag.y;
            if (dif > 0 && dif <= 200) {
                tuodong.y = drag.y;
                bg.height = bgHeigh + dif;
                list.height = listHeight + dif;
            }

        }, this);
        drag.addEventListener(fairygui.DragEvent.DRAG_END, (evt: fairygui.DragEvent) => {
            drag.y = tuodong.y;
            drag.x = tuodong.x;
        }, this);

        list.scrollPane.addEventListener(fairygui.ScrollPane.SCROLL, (evt) => {
            if (this._isAddChange) {
                this._isAddChange = false
                return
            }
            suodingdibu.m_describe.text = "锁定底部";
            this._isChatUnderView = false;
        }, this);

        let sendMsg = () => {
            if (chatCom.m_inputText.text == "") {
                return
            }
            this.emit('SendChatMsg', chatCom.m_inputText.text)
            chatCom.m_inputText.text = ""
            //自己发信息肯定要滚动到最下面看到自己的信息
            if (list.numChildren != 0) {
                list.scrollToView(list.numChildren - 1);
                this._isChatUnderView = true;
                suodingdibu.m_describe.text = "解除锁定";
                if (list.numChildren != 0) {
                    list.scrollToView(list.numChildren - 1);
                    this._isAddChange = true
                }
            }
        }

        chatCom.m_send.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            sendMsg()
        }, this)

        let keyInputFun = (evt) => {
            let keyInput: string = evt.data
            if (keyInput == 'Enter') {
                sendMsg()
            }
        }
        (chatCom.m_inputText.displayObject as egret.TextField).multiline = false
        chatCom.m_inputText.addEventListener(egret.Event.FOCUS_IN, () => {
            this.addEventListener('KeyInput', keyInputFun)
        }, this)

        chatCom.m_inputText.addEventListener(egret.Event.FOCUS_OUT, () => {
            this.removeEventListener('KeyInput', keyInputFun)
        }, this)
    }
}