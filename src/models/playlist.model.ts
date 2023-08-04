import { DataTypes } from "sequelize";
const sequelize = require('../../connect');

const Playlist = sequelize.define('Playlist', {
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    thumbnailM: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sortDescription: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    artistsNames: {
        type: DataTypes.STRING,
        allowNull: false,
        default: "Nhiều nghệ sĩ",
    }
}, {
    freezeTableName: true,
})

module.exports = Playlist;