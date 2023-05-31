const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_guias', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idSimulador: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idEstado: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        noOrden: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        guiaHTML: {
            type: DataTypes.TEXT(),
            allowNull: false
        }
    });
};