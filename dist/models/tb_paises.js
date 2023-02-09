const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_paises', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        continente_pais: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        idEstado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            references: {
                model: 'tb_estado_general',
                key: 'id'
            }
        },
        idLigaAdicional: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'tb_ligas',
                key: 'id'
            }
        },
        imgBandera: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'tb_paises',
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
                name: "fk_tb_paises_tb_estado_general1_idx",
                using: "BTREE",
                fields: [
                    { name: "idEstado" },
                ]
            },
            {
                name: "fk_tb_paises_tb_ligas1_idx",
                using: "BTREE",
                fields: [
                    { name: "idLigaAdicional" },
                ]
            },
        ]
    });
};