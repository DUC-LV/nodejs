import { DataTypes } from "sequelize";
const sequelize = require('../../connect');

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    avatarUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    }
},{
    freezeTableName: true,
})

module.exports = User;