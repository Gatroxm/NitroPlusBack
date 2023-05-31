const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_salas_transmision', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idCalendario: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        idEstado: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        noOrden: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        linkChat: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        linkTransmision: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        linkLiveTiming1: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        linkLiveTiming2: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        linkBotonera: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        linkObsControl: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        linkCamaraCompartida: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        mensajeControl: {
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
        tableName: 'tb_salas_transmision'

    });
};