"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_estado_reportes = connection_1.default.define('tb_estado_reportes', {
    PK_ESTADO_REPORTE: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    NOMBRE_ESTADO_REPORTES: {
        type: sequelize_1.DataTypes.STRING(250)
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_estado_reportes;
//# sourceMappingURL=tb_estado_reportes.js.map