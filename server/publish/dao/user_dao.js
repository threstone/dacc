"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDao = void 0;
const base_dao_1 = require("./base_dao");
const log4js_1 = require("log4js");
const tbl_user_model_1 = require("../model/tbl_user_model");
const logger = log4js_1.getLogger();
class UserDao extends base_dao_1.BaseDao {
    constructor(config) {
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
        });
        logger.info('user数据库连接成功...');
        this.sequelize_.addModels([tbl_user_model_1.TBL_UserModel]);
        this.sequelize_.sync();
    }
    async getUserInfo(account, password) {
        return await tbl_user_model_1.TBL_UserModel.findOne({ where: { account: account, password: password } });
    }
    async isExist(account) {
        let res = await this.sequelize_.query({ query: 'select 1 from user where account = ?', values: [account] });
        return res[0].length == 1;
    }
    async createUser(account, password, nick) {
        let data = new tbl_user_model_1.TBL_UserModel();
        data.account = account;
        data.password = password;
        data.nick = nick;
        let res = await data.save();
        return data == res;
    }
}
exports.UserDao = UserDao;
