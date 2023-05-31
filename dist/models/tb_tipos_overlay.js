const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_tipos_overlay', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        esCam: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        idEstado: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        escenaObs: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        nombreOverlay: {
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
        tableName: 'tb_tipos_overlay'

    });
};