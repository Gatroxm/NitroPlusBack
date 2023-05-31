const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_digitadores', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idPiloto: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        idDivision: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        idEstado: {
            type: DataTypes.INTEGER,
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

    });
};