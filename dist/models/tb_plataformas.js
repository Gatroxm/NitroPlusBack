"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_plataformas = connection_1.default.define('tb_plataformas', {
    PK_ID_PLATAFORMA: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    PLATAFORMA: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    URL_LOGO_PLATAFORMA: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    HEXA_PLATAFORMA: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    RUTA_LOGO_PLATAFORMA: {
        type: sequelize_1.DataTypes.STRING(255),
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_plataformas;
//# sourceMappingURL=tb_plataformas.js.map