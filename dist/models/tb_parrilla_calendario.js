const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_parrilla_calendario', {
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
                model: 'tb_divisiones_pilotos',
                key: 'id'
            }
        },
        idCalendario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_calendario',
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
        idCoche: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idEquipo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estaConfirmado: {
            type: DataTypes.TINYINT,
            allowNull: true,
            defaultValue: 0
        },
        fechaActualizacion: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'tb_parrilla_calendario',
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
                name: "fk_tb_confirmacion_asistencia_tb_divisiones1_idx",
                using: "BTREE",
                fields: [
                    { name: "idDivision" },
                ]
            },
            {
                name: "fk_tb_confirmacion_asistencia_tb_calendario1_idx",
                using: "BTREE",
                fields: [
                    { name: "idCalendario" },
                ]
            },
            {
                name: "fk_tb_confirmacion_asistencia_tb_cat_piloto1_idx",
                using: "BTREE",
                fields: [
                    { name: "idCategoriaPiloto" },
                ]
            },
            {
                name: "fk_tb_confirmacion_asistencia_tb_tipo_piloto1_idx",
                using: "BTREE",
                fields: [
                    { name: "idTipoPiloto" },
                ]
            },
        ]
    });
};