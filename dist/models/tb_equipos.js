const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_equipos', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(90),
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
        descripcion: {
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
        tableName: 'tb_equipos',
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
                name: "fk_tb_equipos_tb_estado_general1_idx",
                using: "BTREE",
                fields: [
                    { name: "idEstado" },
                ]
            },
        ]
    });
};