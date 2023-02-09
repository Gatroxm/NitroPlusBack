const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_eventos_preclasificatorio', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idInfoPreclasificatorio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_info_preclasificatorios',
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
        idCocheSim: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'tb_coches_sim',
                key: 'id'
            }
        },
        idPistaSim: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_pistas_sim',
                key: 'id'
            }
        },
        idEstado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_estado_preclasificatorios',
                key: 'id'
            }
        },
        descripcion: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        Instrucciones: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        infoMetodo: {
            type: DataTypes.STRING(45),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'tb_eventos_preclasificatorio',
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
                name: "fk_tb_preclasificatorio_tb_info_preclasificatorios1_idx",
                using: "BTREE",
                fields: [
                    { name: "idInfoPreclasificatorio" },
                ]
            },
            {
                name: "fk_tb_preclasificatorio_tb_simulador1_idx",
                using: "BTREE",
                fields: [
                    { name: "idSimulador" },
                ]
            },
            {
                name: "fk_tb_preclasificatorio_tb_coches_sim1_idx",
                using: "BTREE",
                fields: [
                    { name: "idCocheSim" },
                ]
            },
            {
                name: "fk_tb_preclasificatorio_tb_pistas_sim1_idx",
                using: "BTREE",
                fields: [
                    { name: "idPistaSim" },
                ]
            },
            {
                name: "fk_tb_eventos_preclasificatorio_tb_estado_preclasificatorio_idx",
                using: "BTREE",
                fields: [
                    { name: "idEstado" },
                ]
            },
        ]
    });
};