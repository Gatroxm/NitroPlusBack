const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_penalizacion_sanciones', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idSancion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_tabla_sanciones',
                key: 'id'
            }
        },
        idGravedad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_gravedad_sancion',
                key: 'id'
            }
        },
        idTipoPenalizacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_tipo_penalizacion',
                key: 'id'
            }
        },
        valor: {
            type: DataTypes.DECIMAL(4, 2),
            allowNull: false,
            defaultValue: 0.00
        },
        idEstado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            references: {
                model: 'tb_estado_penalizaciones',
                key: 'id'
            }
        },
        afectacionElo: {
            type: DataTypes.DECIMAL(4, 2),
            allowNull: true,
            defaultValue: 0.00
        }
    }, {
        sequelize,
        tableName: 'tb_penalizacion_sanciones',
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
                name: "fk_tb_penalizacion_sanciones_tb_tabla_sanciones1_idx",
                using: "BTREE",
                fields: [
                    { name: "idSancion" },
                ]
            },
            {
                name: "fk_tb_penalizacion_sanciones_tb_tipo_penalizacion1_idx",
                using: "BTREE",
                fields: [
                    { name: "idTipoPenalizacion" },
                ]
            },
            {
                name: "fk_tb_penalizacion_sanciones_tb_gravedad_sancion1_idx",
                using: "BTREE",
                fields: [
                    { name: "idGravedad" },
                ]
            },
            {
                name: "fk_tb_penalizacion_sanciones_tb_estado_penalizaciones1_idx",
                using: "BTREE",
                fields: [
                    { name: "idEstado" },
                ]
            },
        ]
    });
};