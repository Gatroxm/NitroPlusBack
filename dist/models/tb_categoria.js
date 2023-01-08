"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_categoria = connection_1.default.define('tb_categoria', {
    PK_ID_CATEGORIA: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    NOMBRE_CATEGORIA: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    URL_LOGO_CATEGORIA: {
        type: sequelize_1.DataTypes.STRING(255)
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_categoria;
//# sourceMappingURL=tb_categoria.js.map