const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_radio_transmisiones', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idSala: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        idMensaje: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        idPiloto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        personalizadoPiloto: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        personalizadoEquipo: {
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
        tableName: 'tb_radio_transmisiones'

    });
};