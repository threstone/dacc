enum SWORD_TYPE_1001 {
    shitou = 0,
    jiandao = 1,
    bu = 2
}
class GameView1001 extends GameBaseView {

    view: game1001.UI_Game1001

    buUrl: string
    jiandaoUrl: string
    shitouUrl: string
    nextHideHand = false

    protected init() {
        this.view = game1001.UI_Game1001.createInstance()
        let player0 = this.view.m_player0 as dacc.UI_UserBox
        player0.m_user_name.color = 0xCC9900
        let player1 = this.view.m_player1 as dacc.UI_UserBox
        player1.m_user_name.color = 0xCC9900
        this.view.m_ready_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.emit('ReadyBtnClick', null)
        }, this)

        this.buUrl = fairygui.UIPackage.createObject("game1001", "bu").resourceURL
        this.jiandaoUrl = fairygui.UIPackage.createObject("game1001", "jiandao").resourceURL
        this.shitouUrl = fairygui.UIPackage.createObject("game1001", "shitou").resourceURL


        let shitouBtn = this.view.m_shitou_btn as dacc.UI_BtnClick
        shitouBtn.m_describe.text = '石头'
        shitouBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSwordBtnClick.bind(this, SWORD_TYPE_1001.shitou), this)
        let jiandaoBtn = this.view.m_jiandao_btn as dacc.UI_BtnClick
        jiandaoBtn.m_describe.text = '剪刀'
        jiandaoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSwordBtnClick.bind(this, SWORD_TYPE_1001.jiandao), this)
        let buBtn = this.view.m_bu_btn as dacc.UI_BtnClick
        buBtn.m_describe.text = '布'
        buBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSwordBtnClick.bind(this, SWORD_TYPE_1001.bu), this)

        let exitBtn = this.view.m_exit as dacc.UI_BtnLong
        exitBtn.m_describe.text = '退出房间'
        exitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.emit('RequestExitRoom', this.gameId)
        }, this)

        this.addEventListener('GameStart1001', this.onGameStart)
        this.addEventListener('StartOutSword1001', this.onStartOutSword)
        this.addEventListener('BroadcastSword1001', this.onUserOutSword)
        this.addEventListener('GameResult1001', this.onGameResult)
    }

    /**
     * 当服务器广播游戏结果
     */
    private onGameResult(evt: EventData) {
        let data: GamePto1001.S_GAME_RESULT_1001 = evt.data
        if (!this.isWatcher) {
            if (data.winIndex == -1) {
                GlobalController.showTips('平局了...', 5000)
                this.nextHideHand = true
            } else {
                if (data.winIndex == this.selfIndex) {
                    GlobalController.showTips('你赢了!', 5000)
                } else {
                    GlobalController.showTips('你输了...', 5000)
                }
                let readyBtn = this.view.m_ready_btn as dacc.UI_BtnClick
                readyBtn.visible = true
                readyBtn.m_describe.text = '准备'
            }
        } else {
            this.nextHideHand = true
        }
        this.changeLoader(this.view.m_sword0, true, data.swords[0])
        this.view.m_sword0.visible = true
        this.view.m_out_tips0.visible = false
        this.changeLoader(this.view.m_sword1, false, data.swords[1])
        this.view.m_sword1.visible = true
        this.view.m_out_tips1.visible = false
    }

    /**
     * 通知玩家开始出拳
     */
    private onStartOutSword(evt: EventData) {

        let data: GamePto1001.S_START_OUT_SWORD_1001 = evt.data
        this.changeChooseBtnVisible(true)
        this.view.m_out_tips0.visible = false
        this.view.m_out_tips1.visible = false
        if (data.isStartGame) {
            this.view.m_sword0.visible = false
            this.view.m_sword1.visible = false
        }
    }

    /**
     * 
     */
    private onGameStart(evt: EventData) {
        this.view.m_ready_btn.visible = false
        this.view.m_read_text0.visible = false
        this.view.m_read_text1.visible = false
    }

    /**
     * 当玩家出拳
     */
    private onUserOutSword(evt: EventData) {
        console.log("aaa", this.nextHideHand);

        if (this.nextHideHand) {
            this.nextHideHand = false
            this.view.m_sword0.visible = false
            this.view.m_sword1.visible = false
        }
        let data: GamePto1001.S_BROADCAST_SWORD_1001 = evt.data
        let tips: fairygui.GTextField = this.view[`m_out_tips${data.index}`]
        let loader: fairygui.GLoader = this.view[`m_sword${data.index}`]
        if (data.sword == -1) {
            tips.visible = true
            loader.visible = false
        } else {
            this.changeLoader(loader, data.index == 0, data.sword)
            loader.visible = true
            tips.visible = false
            this.changeChooseBtnVisible(false)
        }
    }

    /**
     * 出拳按钮点击事件
     */
    private onSwordBtnClick(type: SWORD_TYPE_1001) {
        if (this.nextHideHand) {
            this.nextHideHand = false
            this.view.m_sword0.visible = false
            this.view.m_sword1.visible = false
        }
        this.emit('SwordBtnClick1001', type)
    }

    private changeChooseBtnVisible(visible: boolean) {
        this.view.m_shitou_btn.visible = visible
        this.view.m_jiandao_btn.visible = visible
        this.view.m_bu_btn.visible = visible
    }

    show(data: RoomPto.S_JOIN_ROOM) {
        this.view.m_isWatch.visible = this.isWatcher
        console.log(this.view.m_isWatch.visible);

        //先隐藏准备按钮
        let btn = this.view.m_ready_btn as dacc.UI_BtnClick
        btn.visible = false
        this.view.m_room_seq.text = data.roomSeq
        fairygui.GRoot.inst.addChild(this.view)
        for (let index = 0; index < data.players.length; index++) {
            const info = data.players[index];
            let player = this.view['m_player' + index] as dacc.UI_UserBox
            player.visible = true
            player.m_user_name.text = info.userName
            this.view['m_read_text' + info.index].visible = info.isReady
            if (info.headIndex != -1) {
                RES.getResByUrl(`./resource/head/tx_${info.headIndex}.png`, (data) => {
                    if (!data) {
                        return
                    }
                    player.m_head_pic.texture = data
                })
            }
            //说明自己在房间里头玩
            if (!this.isWatcher && data.selfIndex == info.index) {
                btn.visible = true
                btn.m_describe.text = info.isReady ? '取消准备' : '准备'
                this.selfIndex = data.selfIndex
            }
        }
    }

    close() {
        this.changeChooseBtnVisible(false)
        this.view.m_sword0.visible = false
        this.view.m_sword1.visible = false
        this.view.m_out_tips0.visible = false
        this.view.m_out_tips1.visible = false
        this.view.m_read_text0.visible = false
        this.view.m_read_text1.visible = false
        this.view.m_player0.visible = false
        this.view.m_player1.visible = false
        fairygui.GRoot.inst.removeChild(this.view)
    }

    onUserJoinInRoom(data: RoomPto.S_BROADCAST_JOIN_ROOM) {
        let info = data.player
        let player = this.view['m_player' + info.index] as dacc.UI_UserBox
        player.visible = true
        player.m_user_name.text = info.userName
        this.view['m_read_text' + info.index].visible = info.isReady
        if (info.headIndex != -1) {
            RES.getResByUrl(`./resource/head/tx_${info.headIndex}.png`, (data) => {
                if (!data) {
                    return
                }
                player.m_head_pic.texture = data
            })
        }
    }

    onOtherUserLeaveRoom(data: RoomPto.S_BROADCAST_LEAVE_ROOM) {
        let player = this.view['m_player' + data.index] as dacc.UI_UserBox
        player.visible = false
        this.view['m_read_text' + data.index].visible = false
        player.m_head_pic.url = GlobalController.unknowHeadPicUrl
    }

    onUserReadyStatusChange(data: RoomPto.S_PLAYER_READY_STATUS_CHANGE) {
        this.view['m_read_text' + data.index].visible = data.isReady
        if (data.index == this.selfIndex) {
            let btn = this.view.m_ready_btn as dacc.UI_BtnClick
            btn.m_describe.text = data.isReady ? '取消准备' : '准备'
        }
    }

    private changeLoader(loader: fairygui.GLoader, isLeft: boolean, type: SWORD_TYPE_1001) {
        loader.skewX = 0
        loader.skewY = 0
        switch (type) {
            case SWORD_TYPE_1001.shitou:
                //石头左正常    石头右
                loader.url = this.shitouUrl
                if (!isLeft) {
                    loader.skewY = 180
                }
                break
            case SWORD_TYPE_1001.jiandao:
                loader.url = this.jiandaoUrl
                if (isLeft) {
                    loader.skewX = 90
                    loader.skewY = 270
                } else {
                    loader.skewX = 270
                    loader.skewY = 270
                }
                break
            case SWORD_TYPE_1001.bu:
                loader.url = this.buUrl
                if (isLeft) {
                    loader.skewX = 90
                    loader.skewY = 270
                } else {
                    loader.skewX = 270
                    loader.skewY = 90
                }
                break
        }
    }

}