"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_informe_incidentes = connection_1.default.define('tb_informe_incidentes', {
    PK_ID_INCIDENTE: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_CALENDARIO: {
        type: sequelize_1.DataTypes.INTEGER
    },
    FECHA_INFORME: {
        type: sequelize_1.DataTypes.DATE
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    Descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    Link: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    Estado: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_informe_incidentes;
//# sourceMappingURL=tb_informe_incidentes.js.map