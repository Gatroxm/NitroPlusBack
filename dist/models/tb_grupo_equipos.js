const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_grupo_equipos', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idNombre: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_nombre_grupo_equipos',
                key: 'id'
            }
        },
        idEquipoSim: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_equipos_sim',
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
        tableName: 'tb_grupo_equipos',
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
                name: "fk_tb_grupo_equipos_tb_nombre_grupo_equipos1_idx",
                using: "BTREE",
                fields: [
                    { name: "idNombre" },
                ]
            },
            {
                name: "fk_tb_grupo_equipos_tb_equipos_sim1_idx",
                using: "BTREE",
                fields: [
                    { name: "idEquipoSim" },
                ]
            },
            {
                name: "fk_tb_grupo_equipos_tb_estado_general1_idx",
                using: "BTREE",
                fields: [
                    { name: "idEstado" },
                ]
            },
        ]
    });
};