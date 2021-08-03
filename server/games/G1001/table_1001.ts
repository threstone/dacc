import { DaccPlayer } from '../../dacc_player'
import { DaccTable } from '../../dacc_table'
export class Table1001 extends DaccTable {

    protected onUserJoinSuccess(player: DaccPlayer) {
        return true
    }

    protected allowJoin(): boolean {
        return this.players.length < 2
    }

}