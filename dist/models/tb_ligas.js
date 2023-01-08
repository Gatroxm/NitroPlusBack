"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_ligas = connection_1.default.define('tb_ligas', {
    PK_ID_LIGA: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    NOMBRE_LIGA: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    URL_LOGO_LIGA: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    IMGLICENCIAF1: {
        type: sequelize_1.DataTypes.STRING(50)
    },
    PAGINAWEB: {
        type: sequelize_1.DataTypes.STRING(50)
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_ligas;
//# sourceMappingURL=tb_ligas.js.map