const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_marcas_coches', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        imgLogo: {
            type: DataTypes.STRING(255),
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
        tableName: 'tb_marcas_coches',
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
                name: "fk_tb_marcas_coches_tb_estado_general1_idx",
                using: "BTREE",
                fields: [
                    { name: "idEstado" },
                ]
            },
        ]
    });
};