"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_posters = connection_1.default.define('tb_posters', {
    FK_ID_CALENDARIO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    FK_ID_PILOTO: {
        type: sequelize_1.DataTypes.INTEGER
    },
    NOMBRE_POSICION: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    ES_POSICION: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    PUESTO_NUM: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    PUNTOS: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    FK_DIVISION: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    FK_TORNEO: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    NOMBRE_EQUIPO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    URL_LOGO_EQUIPO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    POS_GANADAS: {
        type: sequelize_1.DataTypes.BIGINT,
    },
    POS_SALIDA: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    MS_BEST_LAP: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    MS_LAP_QUALY: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    MS_TOTAL_TIME: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    MS_TIEMPO_ESPORT: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    PromLap: {
        type: sequelize_1.DataTypes.DECIMAL(14, 4),
    },
    MaxLap: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    Diferencia: {
        type: sequelize_1.DataTypes.BIGINT,
    },
    Consistencia: {
        type: sequelize_1.DataTypes.DECIMAL(19, 4),
    },
    MinS1: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    MinS2: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    MinS3: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    V_POTENCIAL: {
        type: sequelize_1.DataTypes.BIGINT,
    },
    Puntaje: {
        type: sequelize_1.DataTypes.DECIMAL(18, 4),
    },
    NOMBRE: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    APELLIDO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    NOMBRECORTO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    FECHA_No: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    FECHA_ID: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    NOMBRE_EVENTO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    NOMBRE_CORTO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    PNG_BANDERA: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    PNG_ONBOARD: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    PNG_PANORAMICO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    PNG_ONTRACK: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    PNG_LOGO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    MP4_INTRO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    MP4_MAPA: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    MP4_ONBOARD: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    NOMBRE_TORNEO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    URL_LOGO_TORNEO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    PLATAFORMA: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    URL_LOGO_PLATAFORMA: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    SIMULADOR: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    URL_LOGO_SIMULADOR: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    NOMBRE_COCHE: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    URL_LOGO_COCHE: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    HEXA_COCHE: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    rankbestlap: {
        type: sequelize_1.DataTypes.BIGINT,
    },
    rankqualy: {
        type: sequelize_1.DataTypes.BIGINT,
    },
    rankpuntaje: {
        type: sequelize_1.DataTypes.BIGINT,
    },
    rankpromlap: {
        type: sequelize_1.DataTypes.BIGINT,
    },
    rankconsistencia: {
        type: sequelize_1.DataTypes.BIGINT,
    },
    ranks1: {
        type: sequelize_1.DataTypes.BIGINT,
    },
    ranks2: {
        type: sequelize_1.DataTypes.BIGINT,
    },
    ranks3: {
        type: sequelize_1.DataTypes.BIGINT,
    },
    rankvueltapotencial: {
        type: sequelize_1.DataTypes.BIGINT,
    },
    TXT_BEST_LAP: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    TXT_LAP_QUALY: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    TXT_TOTAL_TIME: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    TXT_TIEMPO_ESPORT: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    TXT_PROMLAP: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    TXT_MAXLAP: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    TXT_DIFERENCIA: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    TXT_MINS1: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    TXT_MINS2: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    TXT_MINS3: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    TXT_V_POTENCIAL: {
        type: sequelize_1.DataTypes.STRING(255),
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_posters;
//# sourceMappingURL=tb_posters.js.map