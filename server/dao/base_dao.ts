import { Sequelize } from 'sequelize-typescript'

export class BaseDao {
    protected sequelize_: Sequelize;

    constructor(config: any) {
        this.sequelize_ = new Sequelize(config)
    }

    keepAlive() {
        this.sequelize_.query('select 1')
    }
}
