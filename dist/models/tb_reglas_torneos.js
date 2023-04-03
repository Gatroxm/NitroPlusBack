const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_reglas_torneos', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idTorneo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_resultados',
                key: 'id'
            }
        },
        reglastxt: {
            type: DataTypes.TEXT,
            allowNull: true
        },
    });
};