const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_pilotos_liga', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idPiloto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_pilotos',
                key: 'id'
            }
        },
        idLiga: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_ligas',
                key: 'id'
            }
        },
        idEstado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            references: {
                model: 'tb_estado_general',
                key: 'id'
            }
        }
    }, {
        sequelize,
        tableName: 'tb_pilotos_liga',
        timestamps: false,
        indexes: [{
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            },
            {
                name: "fk_tb_pilotos_liga_tb_pilotos1_idx",
                using: "BTREE",
                fields: [
                    { name: "idPiloto" },
                ]
            },
            {
                name: "fk_tb_pilotos_liga_tb_ligas1_idx",
                using: "BTREE",
                fields: [
                    { name: "idLiga" },
                ]
            },
            {
                name: "fk_tb_pilotos_liga_tb_estado_general1_idx",
                using: "BTREE",
                fields: [
                    { name: "idEstado" },
                ]
            },
        ]
    });
};