"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_simulador = connection_1.default.define('tb_simulador', {
    PK_SIMULADOR: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    SIMULADOR: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    URL_LOGO_SIMULADOR: {
        type: sequelize_1.DataTypes.STRING(255),
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_simulador;
//# sourceMappingURL=tb_simulador.js.map