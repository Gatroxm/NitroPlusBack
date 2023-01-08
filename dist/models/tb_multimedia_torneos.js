"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_multimedia_torneos = connection_1.default.define('tb_multimedia_torneos', {
    PK_ID_MULTIMEDIA: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_DIVISION: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    FONDO_PNG: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    PLANTILLA_PHP: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    MULT_ES_FECHA: {
        type: sequelize_1.DataTypes.INTEGER
    },
    MULT_ES_ANUNCIO: {
        type: sequelize_1.DataTypes.INTEGER
    },
    MULT_ES_POSICION: {
        type: sequelize_1.DataTypes.INTEGER
    },
    posicion: {
        type: sequelize_1.DataTypes.INTEGER
    },
    categoria: {
        type: sequelize_1.DataTypes.INTEGER
    },
    es_discord: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_rol_discord: {
        type: sequelize_1.DataTypes.STRING(50)
    },
    es_instagram: {
        type: sequelize_1.DataTypes.INTEGER
    },
    hastags: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    sesion: {
        type: sequelize_1.DataTypes.STRING(3)
    },
    inicio_formula: {
        type: sequelize_1.DataTypes.TEXT
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_multimedia_torneos;
//# sourceMappingURL=tb_multimedia_torneos.js.map