"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TBL_UserModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let TBL_UserModel = class TBL_UserModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, field: 'id', primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], TBL_UserModel.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(32), comment: '昵称', field: 'account', allowNull: false }),
    __metadata("design:type", String)
], TBL_UserModel.prototype, "account", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(32), comment: '昵称', field: 'nick', allowNull: false }),
    __metadata("design:type", String)
], TBL_UserModel.prototype, "nick", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(32), comment: '密码', field: 'password', allowNull: false }),
    __metadata("design:type", String)
], TBL_UserModel.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TINYINT, comment: '头像索引', field: 'head_index', defaultValue: -1 }),
    __metadata("design:type", Number)
], TBL_UserModel.prototype, "headIndex", void 0);
TBL_UserModel = __decorate([
    sequelize_typescript_1.Table({
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
], TBL_UserModel);
exports.TBL_UserModel = TBL_UserModel;
