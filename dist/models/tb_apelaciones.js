"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_pilotos_1 = __importDefault(require("./tb_pilotos"));
const tb_reportes_comisarios_1 = __importDefault(require("./tb_reportes_comisarios"));
const tb_apelaciones = connection_1.default.define('tb_apelaciones', {
    PK_ID_APELACION: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_REPORTE: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_reportes_comisarios_1.default,
            key: "PK_ID_REPORTE"
        }
    },
    FK_ID_PILOT_APELACION: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_pilotos_1.default,
            key: "PK_ID_PILOTO"
        }
    },
    FK_ESTADO_APELACION: {
        type: sequelize_1.DataTypes.INTEGER
    },
    FECHA_APELACION: {
        type: sequelize_1.DataTypes.DATE
    },
    DESCRIPCION_APELACION: {
        type: sequelize_1.DataTypes.TEXT
    },
    LINKS_APELACION: {
        type: sequelize_1.DataTypes.TEXT
    },
    NOMBREDENUNCIANTE: {
        type: sequelize_1.DataTypes.STRING
    },
    NOMBREDENUNCIANDO: {
        type: sequelize_1.DataTypes.STRING
    },
    ID_DISCORD_DENUNCIANTE: {
        type: sequelize_1.DataTypes.STRING
    },
    ID_DISCORD_DENUNCIADO: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_apelaciones;
//# sourceMappingURL=tb_apelaciones.js.map