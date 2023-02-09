const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_divisiones_pilotos', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idInscripcion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_inscripciones',
                key: 'id'
            }
        },
        idNombreDivision: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_divisiones',
                key: 'id'
            }
        },
        idCoche: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'tb_coches_sim',
                key: 'id'
            }
        },
        idEquipo: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'tb_equipos_sim',
                key: 'id'
            }
        },
        idCategoriaPiloto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_cat_piloto',
                key: 'id'
            }
        },
        idTipoPiloto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_tipo_piloto',
                key: 'id'
            }
        },
        puntosIniciales: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        sequelize,
        tableName: 'tb_divisiones_pilotos',
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
                name: "fk_tb_divisiones_tb_inscripciones1_idx",
                using: "BTREE",
                fields: [
                    { name: "idInscripcion" },
                ]
            },
            {
                name: "fk_tb_divisiones_tb_nombre_divisiones1_idx",
                using: "BTREE",
                fields: [
                    { name: "idNombreDivision" },
                ]
            },
            {
                name: "fk_tb_divisiones_tb_coches_sim2_idx",
                using: "BTREE",
                fields: [
                    { name: "idCoche" },
                ]
            },
            {
                name: "fk_tb_divisiones_tb_equipos_sim2_idx",
                using: "BTREE",
                fields: [
                    { name: "idEquipo" },
                ]
            },
            {
                name: "fk_tb_divisiones_tb_cat_piloto2_idx",
                using: "BTREE",
                fields: [
                    { name: "idCategoriaPiloto" },
                ]
            },
            {
                name: "fk_tb_divisiones_tb_tipo_piloto2_idx",
                using: "BTREE",
                fields: [
                    { name: "idTipoPiloto" },
                ]
            },
        ]
    });
};