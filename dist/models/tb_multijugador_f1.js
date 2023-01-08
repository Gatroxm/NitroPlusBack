"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_multijugador_f1 = connection_1.default.define('tb_multijugador_f1', {
    PK_ASIG_NUM: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_NUM_ASIGNADO: {
        type: sequelize_1.DataTypes.INTEGER
    },
    FK_PLATAFORMA: {
        type: sequelize_1.DataTypes.INTEGER
    },
    FK_ID_PILOTO: {
        type: sequelize_1.DataTypes.INTEGER
    },
    FK_ID_SIMULADOR: {
        type: sequelize_1.DataTypes.INTEGER
    },
    FK_ID_LIGA: {
        type: sequelize_1.DataTypes.INTEGER
    },
    NIVEL: {
        type: sequelize_1.DataTypes.INTEGER
    },
    NOMBRE_PLATAFORMA: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    NOMBRE_PILOTO: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    entry_id: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_multijugador_f1;
//# sourceMappingURL=tb_multijugador_f1.js.map