import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript'

@Table({
    tableName: 'user',
    createdAt: false,
    updatedAt: false,
    indexes: [{
        name: 'findByHash',
        using: 'HASH',
        fields: ['account'],
    }, {
        unique: true,
        fields: ['account'],
    }],
})
export class TBL_UserModel extends Model {
    @Column({ type: DataType.INTEGER, field: 'id', primaryKey: true, autoIncrement: true })
    id: number

    @Column({ type: DataType.STRING(32), comment: '昵称', field: 'account', allowNull: false })
    account: string

    @Column({ type: DataType.STRING(32), comment: '昵称', field: 'nick', allowNull: false })
    nick: string

    @Column({ type: DataType.STRING(32), comment: '密码', field: 'password', allowNull: false })
    password: string

    @Column({ type: DataType.TINYINT, comment: '头像索引', field: 'head_index', defaultValue: -1 })
    headIndex: number
}