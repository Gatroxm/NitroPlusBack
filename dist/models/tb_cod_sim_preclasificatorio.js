const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_cod_sim_preclasificatorio', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idPreclasificatorio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_info_preclasificatorios',
                key: 'id'
            }
        },
        idSimPlatCodPlat: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_sim_plat_codplat',
                key: 'id'
            }
        }
    }, {
        sequelize,
        tableName: 'tb_cod_sim_preclasificatorio',
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
                name: "fk_tb_cod_sim_preclasificatorio_tb_info_preclasificatorios1_idx",
                using: "BTREE",
                fields: [
                    { name: "idPreclasificatorio" },
                ]
            },
            {
                name: "fk_tb_cod_sim_preclasificatorio_tb_sim_plat_codplat1_idx",
                using: "BTREE",
                fields: [
                    { name: "idSimPlatCodPlat" },
                ]
            },
        ]
    });
};