import { BaseDao } from "./base_dao";
import { getLogger } from 'log4js'
import { TBL_UserModel } from "../model/tbl_user_model";

const logger = getLogger()
export class UserDao extends BaseDao {
    constructor(config: any) {
        super({
            dialect: 'mysql',
            username: config.user,
            password: config.password,
            host: config.host,
            port: config.port,
            logQueryParameters: true,
            timezone: config.timezone,
            database: 'dacc',
            logging: false,
        })

        logger.info('user数据库连接成功...')
        this.sequelize_.addModels([TBL_UserModel])
        this.sequelize_.sync()
    }

    async getUserInfo(account: string, password: string): Promise<TBL_UserModel> {
        return await TBL_UserModel.findOne({ where: { account: account, password: password } })
    }

    async isExist(account: string): Promise<boolean> {
        let res = await this.sequelize_.query({ query: 'select 1 from user where account = ?', values: [account] })
        return res[0].length == 1
    }

    async createUser(account: string, password: string, nick: string): Promise<boolean> {
        let data = new TBL_UserModel()
        data.account = account
        data.password = password
        data.nick = nick
        let res = await data.save()
        return data == res
    }

}