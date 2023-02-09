const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_pilotos', {
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
        apellido: {
            type: DataTypes.STRING(90),
            allowNull: true
        },
        nombreCorto: {
            type: DataTypes.STRING(90),
            allowNull: false,
            unique: "nombre_corto_UNIQUE"
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
        fechaNacimiento: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        idNacionalidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_paises',
                key: 'id'
            }
        },
        instagram: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        ciudad: {
            type: DataTypes.STRING(90),
            allowNull: true
        },
        departamento: {
            type: DataTypes.STRING(90),
            allowNull: true
        },
        idPaisResidencia: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_paises',
                key: 'id'
            }
        },
        resena: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        correoElectronico: {
            type: DataTypes.STRING(255),
            allowNull: true,
            unique: "correo_electronico_UNIQUE"
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        whatsapp: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        update_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
        },
        idMando: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            references: {
                model: 'tb_tipo_mando',
                key: 'id'
            }
        },
        discordId: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        nombreDiscord: {
            type: DataTypes.STRING(90),
            allowNull: true
        },
        canal_twitch: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        canal_facebook: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        canal_youtube: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        aceptaCondiciones: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        timestamps: false,

        // If don't want createdAt
        createdAt: false,

        // If don't want updatedAt
        updatedAt: false,
    }, {
        sequelize,
        tableName: 'tb_pilotos',
        timestamps: true,
        indexes: [{
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            },
            {
                name: "nombre_corto_UNIQUE",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "nombreCorto" },
                ]
            },
            {
                name: "correo_electronico_UNIQUE",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "correoElectronico" },
                ]
            },
            {
                name: "fk_tb_pilotos_tb_paises_idx",
                using: "BTREE",
                fields: [
                    { name: "idPaisResidencia" },
                ]
            },
            {
                name: "fk_tb_pilotos_tb_tipo_mando1_idx",
                using: "BTREE",
                fields: [
                    { name: "idMando" },
                ]
            },
            {
                name: "fk_tb_pilotos_tb_estado_general1_idx",
                using: "BTREE",
                fields: [
                    { name: "idEstado" },
                ]
            },
            {
                name: "fk_tb_pilotos_tb_paises1_idx",
                using: "BTREE",
                fields: [
                    { name: "idNacionalidad" },
                ]
            },
        ]
    });
};