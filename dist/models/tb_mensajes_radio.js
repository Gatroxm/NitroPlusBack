const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_mensajes_radio', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        mensajePiloto: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        mensajeEquipo: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        linkAudio: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    }, {

        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,

        // If don't want createdAt
        createdAt: false,

        // If don't want updatedAt
        updatedAt: false,

        // your other configuration here
        tableName: 'tb_mensajes_radio'

    });
};