"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_formato_carreras = connection_1.default.define('tb_formato_carreras', {
    PK_FORMATO_CARRERA: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FORMATO: {
        type: sequelize_1.DataTypes.STRING(255)
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_formato_carreras;
//# sourceMappingURL=tb_formato_carreras.js.map