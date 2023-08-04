const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_ingreso_sanciones', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idReporte: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idPiloto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idSancion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idGravedad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fechaCreacion: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
        },
        fechaActualizacion: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'tb_ingreso_sanciones',
        timestamps: false,
    });
};