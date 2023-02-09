const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_equipos_sim', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idEquipo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_equipos',
                key: 'id'
            }
        },
        idSimulador: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_simulador',
                key: 'id'
            }
        },
        idEquipoSim: {
            type: DataTypes.STRING(90),
            allowNull: true
        },
        esPersonalizado: {
            type: DataTypes.TINYINT,
            allowNull: true,
            defaultValue: 0
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
        tableName: 'tb_equipos_sim',
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
                name: "fk_tb_equipos_sim_tb_equipos1_idx",
                using: "BTREE",
                fields: [
                    { name: "idEquipo" },
                ]
            },
            {
                name: "fk_tb_equipos_sim_tb_simulador1_idx",
                using: "BTREE",
                fields: [
                    { name: "idSimulador" },
                ]
            },
            {
                name: "fk_tb_equipos_sim_tb_estado_general1_idx",
                using: "BTREE",
                fields: [
                    { name: "idEstado" },
                ]
            },
        ]
    });
};