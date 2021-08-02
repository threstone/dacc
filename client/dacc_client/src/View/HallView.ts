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
        //初始化底部按钮
        this.initUnderButton()
        this.initGameListCom()
        this.initCreateRoomCom()
        this.initRoomListCom()
    }

    /**
     * 登录结果触发函数
     */
    onLoginResult(evt: EventData) {
        let data: LoginPto.S_LOGIN = evt.data
        this.hallCom.m_user_name.text = data.userName
    }

    /**
     * 大厅聊天时间触发函数
     */
    onServerChatMsg(evt: EventData) {
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

    /**
     * 初始化大厅游戏列表控件
     */
    initGameListCom() {
        let gameListCom = this.hallCom.m_game_list
        this.addEventListener('GameListInfo', (evt: EventData) => {
            let data: HallPto.S_GAME_LIST = evt.data
            for (let i = 0; i < data.list.length; i++) {
                let item = data.list[i]
                let com = dacc.UI_GameItem.createInstance()
                com.m_game_name.text = item.gameName
                let gameId = item.gameId
                com.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                    console.log(`gameId`, gameId);
                }, this)
                gameListCom.m_list.addChild(com)
            }
        })
    }

    /**
     * 初始化大厅创建房间控件
     */
    initCreateRoomCom() {
        let createRoomCom = this.hallCom.m_create_room
        let gameChoose = createRoomCom.m_game_choose
        this.addEventListener('GameListInfo', (evt: EventData) => {
            let data: HallPto.S_GAME_LIST = evt.data
            for (let i = 0; i < data.list.length; i++) {
                let item = data.list[i]
                gameChoose.items.push(item.gameName)
                gameChoose.values.push(item.gameId + "")
            }
        })
    }
    /**
     * 初始化大厅房间列表控件
     */
    initRoomListCom() {
        let roomListCom = this.hallCom.m_room_list
        let statusChoose = roomListCom.m_status_choose
        statusChoose.m_title.text = "所有"
        statusChoose.items.push('所有')
        statusChoose.items.push('游戏中')
        statusChoose.items.push('未开启')
        statusChoose.addEventListener(fairygui.StateChangeEvent.CHANGED, () => {
            console.log(statusChoose.selectedIndex);
        }, this);

        let gameChoose = roomListCom.m_game_choose
        this.addEventListener('GameListInfo', (evt: EventData) => {
            let data: HallPto.S_GAME_LIST = evt.data
            for (let i = 0; i < data.list.length; i++) {
                let item = data.list[i]
                gameChoose.items.push(item.gameName)
                gameChoose.values.push(item.gameId + "")
            }
        })
    }

    /**
     * 初始化底部按钮
     */
    initUnderButton() {
        let gameListCom = this.hallCom.m_game_list
        let createRoomCom = this.hallCom.m_create_room
        let roomListCom = this.hallCom.m_room_list

        let gameBtn = this.hallCom.m_game_btn
        gameBtn.m_describe.text = '游戏列表'
        gameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            gameListCom.visible = true
            createRoomCom.visible = false
            roomListCom.visible = false
        }, this)

        let createRoomBtn = this.hallCom.m_create_room_btn
        createRoomBtn.m_describe.text = '创建房间'
        createRoomBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            gameListCom.visible = false
            createRoomCom.visible = true
            roomListCom.visible = false
        }, this)

        let roonBtn = this.hallCom.m_room_btn
        roonBtn.m_describe.text = '房间列表'
        roonBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            gameListCom.visible = false
            createRoomCom.visible = false
            roomListCom.visible = true
        }, this)
    }

    /**
     * 初始化聊天窗口
     */
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

        let keyInputFun = (evt: EventData) => {
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