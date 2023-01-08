"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_tabla_sanciones = connection_1.default.define('tb_tabla_sanciones', {
    PK_ID_SANCION: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    No_ARTICULO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    SECCION: {
        type: sequelize_1.DataTypes.STRING,
    },
    TITULO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    DESCRIPCION: {
        type: sequelize_1.DataTypes.STRING,
    },
    GRAVEDAD: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    SANCION_SEGUNDOS: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    SANCION_PUNTOS_PEN: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    SANCION_POSICIONES: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    FECHA_JURISPRUDENCIA: {
        type: sequelize_1.DataTypes.DATE,
    },
    OBSERVACIONES: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_tabla_sanciones;
//# sourceMappingURL=tb_tabla_sanciones.js.map