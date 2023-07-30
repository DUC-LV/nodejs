"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connect_1 = __importDefault(require("../../connect"));
const User = connect_1.default.define('User', {
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    avatarUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
}, {
    freezeTableName: true,
    modelName: 'User'
});
exports.default = User;
