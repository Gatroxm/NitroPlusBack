const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_overlay_transmisiones', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idOverlay: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        idSala: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        esVisible: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idEstado: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        valor: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },

    }, {

        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,

        // If don't want createdAt
        createdAt: false,

        // If don't want updatedAt
        updatedAt: false,

        // your other configuration here
        tableName: 'tb_overlay_transmisiones'

    });
};