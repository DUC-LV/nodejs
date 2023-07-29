import { DataTypes } from "sequelize";
import sequelize from "../../connect";

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
        allowNull: false,
    },
    avatarUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    }
},{
    freezeTableName: true,
    modelName: 'User'
})

module.exports = User;