const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_involucrados_sanciones', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idRolInvolucrado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_rol_involucrados',
                key: 'id'
            }
        },
        idPiloto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_pilotos',
                key: 'id'
            }
        },
        idReporte: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_reportes_comisarios',
                key: 'id'
            }
        },
        msIncidenteRep: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        esAutomatico: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        fechaCreacion: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'tb_involucrados_sanciones',
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
                name: "fk_tb_involucrados_tb_rol_involucrados1_idx",
                using: "BTREE",
                fields: [
                    { name: "idRolInvolucrado" },
                ]
            },
            {
                name: "fk_tb_involucrados_tb_reportes_comisarios1_idx",
                using: "BTREE",
                fields: [
                    { name: "idReporte" },
                ]
            },
            {
                name: "fk_tb_involucrados_sanciones_tb_pilotos1_idx",
                using: "BTREE",
                fields: [
                    { name: "idPiloto" },
                ]
            },
        ]
    });
};