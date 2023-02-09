const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_inscripcion_preclasificatorio', {
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
        idSimIdPiloto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_pilotos_id_sim',
                key: 'id'
            }
        }
    }, {
        sequelize,
        tableName: 'tb_inscripcion_preclasificatorio',
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
                name: "fk_tb_inscripcion_preclasificatorio_tb_info_preclasificator_idx",
                using: "BTREE",
                fields: [
                    { name: "idPreclasificatorio" },
                ]
            },
            {
                name: "fk_tb_inscripcion_preclasificatorio_tb_pilotos_id_sim1_idx",
                using: "BTREE",
                fields: [
                    { name: "idSimIdPiloto" },
                ]
            },
        ]
    });
};