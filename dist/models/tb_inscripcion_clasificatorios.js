const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_inscripcion_clasificatorios', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        host: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        idPiloto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idCalendarioClasificatorio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_info_clasificatorios',
                key: 'id'
            }
        },
        idSimPiloto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_pilotos_id_sim',
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
        tableName: 'tb_inscripcion_clasificatorios',
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
                    { name: "idClasificatorio" },
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