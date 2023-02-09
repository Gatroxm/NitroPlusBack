const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_pilotos_id_sim', {
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
        idSimCodPlataforma: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_sim_plat_codplat',
                key: 'id'
            }
        },
        idSimPiloto: {
            type: DataTypes.STRING(90),
            allowNull: true
        },
        idEstado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            references: {
                model: 'tb_estado_general',
                key: 'id'
            }
        },
        fechaCreacion: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
        }
    }, {
        sequelize,
        tableName: 'tb_pilotos_id_sim',
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
                name: "idPiloto",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "idSimCodPlataforma" },
                    { name: "idSimPiloto" },
                ]
            },
            {
                name: "fk_tb_identificadores_pilotos_tb_pilotos1_idx",
                using: "BTREE",
                fields: [
                    { name: "idPiloto" },
                ]
            },
            {
                name: "fk_tb_identificadores_pilotos_tb_identificador_simulador1_idx",
                using: "BTREE",
                fields: [
                    { name: "idSimCodPlataforma" },
                ]
            },
            {
                name: "fk_tb_pilotos_id_sim_tb_estado_general1_idx",
                using: "BTREE",
                fields: [
                    { name: "idEstado" },
                ]
            },
        ]
    });
};