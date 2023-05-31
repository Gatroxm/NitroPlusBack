const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_camaras_transmisiones', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idPerfil: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idPiloto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idCalendario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idEstado: {
            type: DataTypes.INTEGER,
        },
        posicion: {
            type: DataTypes.INTEGER,
        },
        linkCamara: {
            type: DataTypes.STRING(45),
        },
        notaAdicional: {
            type: DataTypes.STRING(45),
        },
    }, {

        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,

        // If don't want createdAt
        createdAt: false,

        // If don't want updatedAt
        updatedAt: false,

        // your other configuration here

    });
};