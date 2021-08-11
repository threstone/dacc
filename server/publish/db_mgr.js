"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBManager = void 0;
const user_dao_1 = require("./dao/user_dao");
class DBManager {
    get userDao() {
        return this._userDao;
    }
    init(mysqlConfig) {
        this._userDao = new user_dao_1.UserDao(mysqlConfig);
        // 每隔5分钟select 1保持连接活性
        setInterval(this.keepAlive.bind(this), 60 * 1000 * 5);
    }
    keepAlive() {
        this._userDao.keepAlive();
    }
}
exports.DBManager = DBManager;
