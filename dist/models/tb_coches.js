const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_coches', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        idMarca: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_marcas_coches',
                key: 'id'
            }
        },
        idCategoria: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_cat_coches',
                key: 'id'
            }
        },
        year: {
            type: DataTypes.STRING(4),
            allowNull: true
        },
        descripcion: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        imgLogo: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        colorHexa: {
            type: DataTypes.STRING(6),
            allowNull: true
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
        tableName: 'tb_coches',
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
                name: "fk_tb_coches_tb_cat_coches1_idx",
                using: "BTREE",
                fields: [
                    { name: "idCategoria" },
                ]
            },
            {
                name: "fk_tb_coches_tb_marcas_coches1_idx",
                using: "BTREE",
                fields: [
                    { name: "idMarca" },
                ]
            },
            {
                name: "fk_tb_coches_tb_estado_general1_idx",
                using: "BTREE",
                fields: [
                    { name: "idEstado" },
                ]
            },
        ]
    });
};