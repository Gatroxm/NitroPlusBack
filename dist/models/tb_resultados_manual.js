const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_resultados_manual', {
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
        idPosicion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idCoche: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        numeroVueltas: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tiempoTotal: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        diferencia: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        mejorVuelta: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tiempoQualy: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        paradasBoxes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        posSalida: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Obsevaciones: {
            type: DataTypes.TEXT,
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
        tableName: 'tb_resultados_manual',
        timestamps: false,
    });
};