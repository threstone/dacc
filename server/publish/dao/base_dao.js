"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDao = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
class BaseDao {
    constructor(config) {
        this.sequelize_ = new sequelize_typescript_1.Sequelize(config);
    }
    keepAlive() {
        this.sequelize_.query('select 1');
    }
}
exports.BaseDao = BaseDao;
