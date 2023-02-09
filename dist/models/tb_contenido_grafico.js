const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_contenido_grafico', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idDivision: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_divisiones',
                key: 'id'
            }
        },
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        plantillaPHP: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        fondoPNG: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        idRolDiscord: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        esInstagram: {
            type: DataTypes.TINYINT,
            allowNull: true,
            defaultValue: 0
        },
        hashtags: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        posicion: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        categoria: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        transmisionTwitch: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        transmisionFacebook: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        transmisionYoutbe: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        }
    }, {
        sequelize,
        tableName: 'tb_contenido_grafico',
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
                name: "fk_tb_contenido_grafico_tb_divisiones1_idx",
                using: "BTREE",
                fields: [
                    { name: "idDivision" },
                ]
            },
        ]
    });
};