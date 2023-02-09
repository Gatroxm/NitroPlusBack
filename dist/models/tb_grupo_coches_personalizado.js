const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_grupo_coches_personalizado', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idNombreGrupo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_nombre_grupo_coches_personalizado',
                key: 'id'
            }
        },
        idCocheSim: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_coches_sim',
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
        tableName: 'tb_grupo_coches_personalizado',
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
                name: "fk_tb_grupo_coches_personalizado_tb_nombre_grupo_coches_per_idx",
                using: "BTREE",
                fields: [
                    { name: "idNombreGrupo" },
                ]
            },
            {
                name: "fk_tb_grupo_coches_personalizado_tb_coches_sim1_idx",
                using: "BTREE",
                fields: [
                    { name: "idCocheSim" },
                ]
            },
            {
                name: "fk_tb_grupo_coches_personalizado_tb_estado_general1_idx",
                using: "BTREE",
                fields: [
                    { name: "idEstado" },
                ]
            },
        ]
    });
};