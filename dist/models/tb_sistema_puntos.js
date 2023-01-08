"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_sistema_puntos = connection_1.default.define('tb_sistema_puntos', {
    PK_ID_SIS_PUNTOS: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    NOMBRE_SISTEMA: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    DESCRIPCION_SISTEMA: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    PUNTOS_MAX: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_sistema_puntos;
//# sourceMappingURL=tb_sistema_puntos.js.map