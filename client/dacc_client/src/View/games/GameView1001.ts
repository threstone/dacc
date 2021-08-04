class GameView1001 extends GameBaseView {

    view: game1001.UI_Game1001

    protected init() {
        this.view = game1001.UI_Game1001.createInstance()
        let player0 = this.view.m_player0 as dacc.UI_UserBox
        player0.m_user_name.color = 0xCC9900
        let player1 = this.view.m_player1 as dacc.UI_UserBox
        player1.m_user_name.color = 0xCC9900
    }

    show(data: HallPto.S_JOIN_ROOM) {
        fairygui.GRoot.inst.addChild(this.view)
        for (let index = 0; index < data.players.length; index++) {
            const info = data.players[index];
            let player = this.view['m_player' + index] as dacc.UI_UserBox
            player.visible = true
            player.m_user_name.text = info.userName
            this.view.m_read_text1.visible = info.isReady
            if (info.headIndex != -1) {
                RES.getResByUrl(`./resource/head/tx_${info.headIndex}.png`, (data) => {
                    if (!data) {
                        return
                    }
                    player.m_head_pic.texture = data
                })
            }
        }
    }

    onUserJoinInRoom(data: HallPto.S_BROADCAST_JOIN_ROOM) {
        let info = data.players
        let player = this.view['m_player' + info.index] as dacc.UI_UserBox
        player.visible = true
        player.m_user_name.text = info.userName
        this.view.m_read_text1.visible = info.isReady
        if (info.headIndex != -1) {
            RES.getResByUrl(`./resource/head/tx_${info.headIndex}.png`, (data) => {
                if (!data) {
                    return
                }
                player.m_head_pic.texture = data
            })
        }
    }

    onUserLeaveRoom(data: HallPto.S_BROADCAST_LEAVE_ROOM) {
        let player = this.view['m_player' + data.index] as dacc.UI_UserBox
        player.visible = false
        this.view.m_read_text1.visible = false
        player.m_head_pic.url = 'ui://sly852qpb78j2l'
    }

}