const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_asignacion_comisario', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idDivision: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_divisiones',
                key: 'id'
            }
        },
        idRolPilotoComisario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_roles_pilotos',
                key: 'id'
            }
        },
        idEstadoRecepcion: {
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
        tableName: 'tb_asignacion_comisario',
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
                name: "fk_tb_asignacion_comisario_tb_divisiones1_idx",
                using: "BTREE",
                fields: [
                    { name: "idDivision" },
                ]
            },
            {
                name: "fk_tb_asignacion_comisario_tb_roles_pilotos1_idx",
                using: "BTREE",
                fields: [
                    { name: "idRolPilotoComisario" },
                ]
            },
            {
                name: "fk_tb_asignacion_comisario_tb_estado_general1_idx",
                using: "BTREE",
                fields: [
                    { name: "idEstadoRecepcion" },
                ]
            },
        ]
    });
};