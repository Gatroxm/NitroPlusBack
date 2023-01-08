"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_resultados_1 = __importDefault(require("./tb_resultados"));
const tb_tabla_puntos = connection_1.default.define('tb_tabla_puntos', {
    PK_ID_PUNTOS: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    FK_SISTEMA_PUNTOS: {
        type: sequelize_1.DataTypes.INTEGER
    },
    whatsapp: {
        type: sequelize_1.DataTypes.STRING
    },
    ID_POSICION_FINAL: {
        type: sequelize_1.DataTypes.STRING
    },
    PUNTOS: {
        type: sequelize_1.DataTypes.INTEGER
    },
    NOMBRE_POSICION: {
        type: sequelize_1.DataTypes.STRING
    },
    PUESTO_NUM: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ES_POSICION: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ES_VICTORIA: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ES_PODIO: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ES_DNF: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ES_DSQ: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ES_POLE: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ES_VUELTA_RAPIDA: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ES_PILOTO_DEL_DIA: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ES_TRANSMISION: {
        type: sequelize_1.DataTypes.INTEGER
    },
    VALIDO_PARA_SA: {
        type: sequelize_1.DataTypes.INTEGER
    },
    cod_posicion: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
tb_tabla_puntos.hasOne(tb_resultados_1.default);
exports.default = tb_tabla_puntos;
//# sourceMappingURL=tb_tabla_puntos.js.map