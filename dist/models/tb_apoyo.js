const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_apoyo', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idEstado: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        orden: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        esArticulo: {
            type: DataTypes.TINYINT,
            allowNull: true,
            defaultValue: 1
        },
        infoHTML: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        linkImg: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
    });
};