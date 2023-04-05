const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_calendario_clasificatorios', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idClasificatorio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idEstado: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fechaHoraCarrera: {
            type: DataTypes.DATE,
            allowNull: true
        },
        host: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        infoAdicional: {
            type: DataTypes.TEXT('medium'),
            allowNull: false
        }
    });
};