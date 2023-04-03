const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_tabla_posiciones', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idNombreDivision: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        nombreCorto: {
            type: DataTypes.STRING(90),
            allowNull: true
        },
        PuntosGen: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        Part: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        Vic: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        Pod: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        DNF: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        DSQ: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        Poles: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        VR: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        PD: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        imgPiloto: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        sanciones: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        idcatpiloto: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        nombrecat: {
            type: DataTypes.STRING(90),
            allowNull: false,

        },
        idtipopiloto: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        nombretipo: {
            type: DataTypes.STRING(90),
            allowNull: false,

        },
        idCodificacion: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        nombrecoche: {
            type: DataTypes.STRING(90),
            allowNull: false,

        },
        logocoche: {
            type: DataTypes.STRING(90),
            allowNull: false,

        },
        nombreequipo: {
            type: DataTypes.STRING(90),
            allowNull: false,

        },
        logoequipo: {
            type: DataTypes.STRING(90),
            allowNull: false,

        },
        PuntosFinales: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
    });
};