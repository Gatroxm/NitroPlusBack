"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_repeticiones = connection_1.default.define('tb_repeticiones', {
    PK_ID_REPETICION: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_CALENDARIO: {
        type: sequelize_1.DataTypes.INTEGER
    },
    FK_ID_PILOTO: {
        type: sequelize_1.DataTypes.INTEGER
    },
    LINK_VIDEO: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    OBSERVACIONES: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    FECHA_ENVIO_REP: {
        type: sequelize_1.DataTypes.DATE,
    },
    hora_inicio: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    minuto_inicio: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    segundo_inicio: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    videoID: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    videoType: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    isVideo: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_repeticiones;
//# sourceMappingURL=tb_repeticiones.js.map