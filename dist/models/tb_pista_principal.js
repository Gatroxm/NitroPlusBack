"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_pista_principal = connection_1.default.define('tb_pista_principal', {
    PK_ID_PISTA: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    NOMBRE: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    PAIS: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    URL_BANDERA: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    URL_LOGO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    DESCRIPCION: {
        type: sequelize_1.DataTypes.STRING(255),
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_pista_principal;
//# sourceMappingURL=tb_pista_principal.js.map