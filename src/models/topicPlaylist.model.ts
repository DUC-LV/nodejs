import { DataTypes } from "sequelize";
const sequelize = require('../../connect');

const TopicPlaylist = sequelize.define('TopicPlaylist', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    freezeTableName: true,
})

module.exports = TopicPlaylist;