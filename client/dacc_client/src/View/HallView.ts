class HallView extends BaseView {
    hallCom: dacc.UI_Hall

    private _isChatUnderView: boolean = true;
    //因为添加聊天信息到窗口的时候会自动滚动到底部，会触发滚动回调，所以添加一个参数判断这个滚动是否需要取消锁定底部
    private _isAddChange = false
    private _gameMap
    protected init() {
        this.hallCom = dacc.UI_Hall.createInstance()
        //初始化聊天窗口，todo 以后有时间再写图文混排
        this.initChatCom()
        //初始化底部按钮
        this.initUnderButton()
        this.initGameListCom()
        this.initCreateRoomCom()
        this.initRoomListCom()
        this.initUserBox()

        this.addEventListener('GameListInfo', this.initGameListMap)
    }

    /**
     * 初始化gameID=>gameName键值对
     */
    initGameListMap(evt: EventData) {
        this._gameMap = {}
        let data: HallPto.S_GAME_LIST = evt.data
        for (let i = 0; i < data.list.length; i++) {
            let gameInfo = data.list[i]
            this._gameMap[gameInfo.gameId] = gameInfo.gameName
        }
    }

    /**
     * 登录结果触发函数
     */
    onLoginResult(evt: EventData) {
        let data: LoginPto.S_LOGIN = evt.data
        this.hallCom.m_user_box.m_user_name.text = data.nick
        RES.getResByUrl(`./resource/head/tx_${data.headIndex}.png`, (data) => {
            if (!data) {
                return
            }
            this.hallCom.m_user_box.m_head_pic.texture = data
        })
    }

    /**
     * 大厅聊天时间触发函数
     */
    onServerChatMsg(evt: EventData) {
        let data: HallPto.S_CHAT_MSG = evt.data
        let list = this.hallCom.m_chat_com.m_list
        //todo 聊天窗口只允许存在的记录数,将来应该由玩家自己设置
        if (list.numChildren >= 30) {
            list.removeChildAt(0)
        }
        let textField = new fairygui.GTextField()
        textField.width = 390
        textField.fontSize = 14
        textField.color = 0xFFFFFF
        textField.text = `[B][color=#000000]${data.nick}[/color][/B] : ${data.msg}`
        textField.autoSize = 2
        textField.ubbEnabled = true
        list.addChild(textField)
        if (this._isChatUnderView) {
            list.scrollToView(list.numChildren - 1);
            this._isAddChange = true
        }
    }

    /**
     * 初始化用户信息组件相关
     */
    initUserBox() {
        this.addEventListener('LoginResult', this.onLoginResult)
        this.addEventListener('CloseAllHallCom', () => {
            this.hallCom.m_head_choose_com.visible = false
        })
        this.hallCom.m_user_box.m_head_pic.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            let isShow = !this.hallCom.m_head_choose_com.visible
            this.emit('CloseAllHallCom', null)
            this.hallCom.m_head_choose_com.visible = isShow
        }, this)

        let headChooseCom = this.hallCom.m_head_choose_com
        headChooseCom.m_close_btn.m_describe.fontSize = 18
        headChooseCom.m_close_btn.m_describe.text = "关闭窗口"
        headChooseCom.m_close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            let isShow = !this.hallCom.m_head_choose_com.visible
            this.emit('CloseAllHallCom', null)
            this.hallCom.m_head_choose_com.visible = isShow
        }, this)

        let list = headChooseCom.m_list
        RES.getResByUrl('./resource/head/head_info.json', (data) => {
            let headNum = data.headNum
            for (let i = 0; i < headNum; i++) {
                let index = i
                RES.getResByUrl(`./resource/head/tx_${index}.png`, (data) => {
                    if (!data) {
                        return
                    }
                    let loader = new fairygui.GLoader()
                    loader.autoSize = true
                    loader.texture = data
                    loader.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                        this.emit('ChangeHeadPic', index)
                        this.hallCom.m_user_box.m_head_pic.texture = loader.texture
                    }, this)
                    list.addChild(loader)
                })
            }
        })
    }

    /**
     * 初始化大厅游戏列表控件
     */
    initGameListCom() {
        let gameListCom = this.hallCom.m_game_list
        let listBtnClickFun = (gameId: number) => {
            this.emit('GameListBtnClick', gameId)
        }
        this.addEventListener('GameListInfo', (evt: EventData) => {
            //再次收到有可能是重连了，需要先清理原来的
            let childNum = gameListCom.m_list.numChildren
            for (let i = 0; i < childNum; i++) {
                let com = gameListCom.m_list.removeChildAt(0)
                com.removeEventListener(egret.TouchEvent.TOUCH_TAP, (com as any).saveFun, this)
            }

            let data: HallPto.S_GAME_LIST = evt.data
            for (let i = 0; i < data.list.length; i++) {
                let item = data.list[i]
                let com = dacc.UI_GameItem.createInstance()
                com.m_game_name.text = item.gameName
                let fun = listBtnClickFun.bind(this, item.gameId);
                (com as any).saveFun = fun
                com.addEventListener(egret.TouchEvent.TOUCH_TAP, fun, this)
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
            gameChoose.items = []
            gameChoose.values = []
            gameChoose.selectedIndex = -1
            gameChoose.m_title.text = '点此选择游戏'
            let data: HallPto.S_GAME_LIST = evt.data
            for (let i = 0; i < data.list.length; i++) {
                let item = data.list[i]
                gameChoose.items.push(item.gameName)
                gameChoose.values.push(item.gameId as any)
            }
        })
        createRoomCom.m_create.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            if (gameChoose.selectedIndex == -1) {
                GlobalController.showTips('请先选择创建的游戏', 5000)
                return
            }
            if (createRoomCom.m_describe_input.text.length > 25) {
                GlobalController.showTips('房间描述最多25字', 5000)
                return
            }
            let data = { gameId: gameChoose.values[gameChoose.selectedIndex], describe: createRoomCom.m_describe_input.text }
            this.emit('CreateRoomClick', data)
        }, this)
    }
    /**
     * 初始化大厅房间列表控件
     */
    initRoomListCom() {
        let roomListCom = this.hallCom.m_room_list
        let statusChoose = roomListCom.m_status_choose
        let gameChoose = roomListCom.m_game_choose

        statusChoose.m_title.text = "所有"
        statusChoose.items.push('所有')
        statusChoose.items.push('游戏中')
        statusChoose.items.push('未开启')
        statusChoose.addEventListener(fairygui.StateChangeEvent.CHANGED, () => {
            if (gameChoose.selectedIndex == -1) {
                return
            }
            let data = { gameId: gameChoose.values[gameChoose.selectedIndex], status: statusChoose.selectedIndex }
            this.emit('RoomListConditionChange', data)
        }, this);

        this.addEventListener('GameListInfo', (evt: EventData) => {
            gameChoose.items = []
            gameChoose.values = []
            gameChoose.selectedIndex = -1
            gameChoose.m_title.text = '点此选择游戏'
            let data: HallPto.S_GAME_LIST = evt.data
            gameChoose.items.push('所有游戏')
            gameChoose.values.push(0 as any)
            for (let i = 0; i < data.list.length; i++) {
                let item = data.list[i]
                gameChoose.items.push(item.gameName)
                gameChoose.values.push(item.gameId as any)
            }
        })
        gameChoose.addEventListener(fairygui.StateChangeEvent.CHANGED, () => {
            let data = { gameId: gameChoose.values[gameChoose.selectedIndex], status: statusChoose.selectedIndex }
            this.emit('RoomListConditionChange', data)
        }, this);

        roomListCom.m_refresh_btn.m_describe.text = '刷新房间'
        roomListCom.m_refresh_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            let data = { gameId: gameChoose.values[gameChoose.selectedIndex], status: statusChoose.selectedIndex }
            this.emit('RoomListConditionChange', data)
        }, this)

        this.addEventListener('GameListBtnClick', (evt: EventData) => {
            this.emit('CloseAllHallCom', null)
            roomListCom.visible = true
            let gameId: number = evt.data
            for (let i = 0; i < gameChoose.values.length; i++) {
                if (gameChoose.values[i] == gameId as any) {
                    gameChoose.selectedIndex = i;
                    break
                }
            }
            this.emit('RoomListGameChooseChange', gameChoose.values[gameChoose.selectedIndex])
        }, this)


        let itemClickFun = (data: { roomId: number, isWatch: boolean }) => {
            this.emit('JoinInRoomClick', data)
        }
        let list = roomListCom.m_list
        //初始化房间item池
        let roomItemPool: dacc.UI_RoomItem[] = []
        for (let i = 0; i < 20; i++) {
            let item = dacc.UI_RoomItem.createInstance()
            roomItemPool.push(item)
        }
        this.addEventListener('RoomListInfo', (evt: EventData) => {
            let childNum = list.numChildren
            for (let i = 0; i < childNum; i++) {
                let item = list.removeChildAt(0) as dacc.UI_RoomItem;
                item.m_join_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, (item as any).saveFun, this)
                roomItemPool.push(item)
            }
            let msg: RoomPto.S_ROOM_LIST = evt.data
            if (msg.list.length > roomItemPool.length) {
                let addLen = msg.list.length - roomItemPool.length
                for (let i = 0; i < addLen; i++) {
                    let item = dacc.UI_RoomItem.createInstance()
                    roomItemPool.push(item)
                }
            }

            for (let index = 0; index < msg.list.length; index++) {
                const temp = msg.list[index];
                let item = roomItemPool.pop()
                item.m_describe.text = temp.describe
                item.m_game_name.text = this._gameMap[temp.gameId] || '未知'
                item.m_game_status.text = temp.isStart ? '游戏中' : '未开启'
                let isWatch = temp.curPlayer == temp.maxPlayer || temp.isStart
                if (isWatch) {
                    item.m_join_btn.m_describe.text = `观战(${temp.curPlayer}/${temp.maxPlayer})`
                } else {
                    item.m_join_btn.m_describe.text = `加入(${temp.curPlayer}/${temp.maxPlayer})`
                }
                let fun = itemClickFun.bind(this, { roomId: temp.roomId, isWatch: isWatch });
                (item as any).saveFun = fun
                item.m_join_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, fun, this)
                list.addChild(item)
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

        this.addEventListener('CloseAllHallCom', () => {
            gameListCom.visible = false
            createRoomCom.visible = false
            roomListCom.visible = false
        })

        let gameBtn = this.hallCom.m_game_btn
        gameBtn.m_describe.text = '游戏列表'
        gameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            let isShow = !gameListCom.visible
            this.emit('CloseAllHallCom', null)
            gameListCom.visible = isShow
        }, this)

        let createRoomBtn = this.hallCom.m_create_room_btn
        createRoomBtn.m_describe.text = '创建房间'
        createRoomBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            let isShow = !createRoomCom.visible
            this.emit('CloseAllHallCom', null)
            createRoomCom.visible = isShow
        }, this)

        let roonBtn = this.hallCom.m_room_btn
        roonBtn.m_describe.text = '房间列表'
        roonBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            let isShow = !roomListCom.visible
            this.emit('CloseAllHallCom', null)
            roomListCom.visible = isShow
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