"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_transmisiones = connection_1.default.define('tb_transmisiones', {
    PK_ID_FORMATO: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_DIVISION: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    NOMBRE: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    PLANTILLA_PHP: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    Descarga: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_transmisiones;
//# sourceMappingURL=tb_transmisiones.js.map