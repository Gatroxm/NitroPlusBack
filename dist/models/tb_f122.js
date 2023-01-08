"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_f122 = connection_1.default.define('tb_f122', {
    id_inscripcion: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    id_piloto_inscrito: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_plataforma: {
        type: sequelize_1.DataTypes.INTEGER
    },
    equipos_favoritos: {
        type: sequelize_1.DataTypes.STRING(255)
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_f122;
//# sourceMappingURL=tb_f122.js.map