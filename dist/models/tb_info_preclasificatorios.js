const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_info_preclasificatorios', {
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
        descripcion: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        fechaInicio: {
            type: DataTypes.DATE,
            allowNull: true
        },
        fechaFin: {
            type: DataTypes.DATE,
            allowNull: true
        },
        infoMetodo: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        imgLicencia: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        idEstado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_estado_preclasificatorios',
                key: 'id'
            }
        }
    }, {
        sequelize,
        tableName: 'tb_info_preclasificatorios',
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
                name: "fk_tb_info_preclasificatorios_tb_estado_preclasificatorios1_idx",
                using: "BTREE",
                fields: [
                    { name: "idEstado" },
                ]
            },
        ]
    });
};