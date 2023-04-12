const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_comunicados_leidos', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idPiloto: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        idComunicado: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        timestamps: false
    });
};