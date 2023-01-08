"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_comunicados = connection_1.default.define('tb_comunicados', {
    PK_ID_COMUNICADO: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    ReporteNo: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Torneo: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    Incidente_reportado: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    discord_denunciante: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    discord_denunciado: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    Seccion: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    resolucion: {
        type: sequelize_1.DataTypes.STRING
    },
    infraccion: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    Titulo: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    Descrip_sancion: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    gravedad: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    pen_segundos: {
        type: sequelize_1.DataTypes.INTEGER
    },
    pen_posicion: {
        type: sequelize_1.DataTypes.INTEGER
    },
    pen_puntos: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Notas: {
        type: sequelize_1.DataTypes.STRING
    },
    pts_acumulados: {
        type: sequelize_1.DataTypes.INTEGER
    },
    webhook_comunicado: {
        type: sequelize_1.DataTypes.STRING(255)
    }
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_comunicados;
//# sourceMappingURL=tb_comunicados.js.map