"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_reportes_comisarios = connection_1.default.define('tb_reportes_comisarios', {
    PK_ID_REPORTE: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FECHA_REPORTE: {
        type: sequelize_1.DataTypes.DATE,
    },
    FK_ID_EVENTO: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    FK_DENUNCIANTE: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    FK_DENUNCIADO: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    NoVUELTA: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    DESCRIPCION: {
        type: sequelize_1.DataTypes.TEXT,
    },
    LINKS: {
        type: sequelize_1.DataTypes.TEXT,
    },
    LINKS2: {
        type: sequelize_1.DataTypes.TEXT,
    },
    LINK3: {
        type: sequelize_1.DataTypes.TEXT,
    },
    LINK4: {
        type: sequelize_1.DataTypes.TEXT,
    },
    LINK5: {
        type: sequelize_1.DataTypes.TEXT,
    },
    FK_TIPOINFRACCION: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    ID_COMISARIO1: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    CONCEPTOCOMISARIO1: {
        type: sequelize_1.DataTypes.TEXT,
    },
    ID_COMISARIO2: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    CONCEPTOCOMISARIO2: {
        type: sequelize_1.DataTypes.TEXT,
    },
    ID_COMISARIO_LIDER: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    CONCEPTO_FINAL: {
        type: sequelize_1.DataTypes.TEXT,
    },
    FK_REGLAMENTO: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    PUNTOS_PENALIZACION: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    SEGUNDOS_PENALIZACION: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    POS_PENALIZACION: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    FK_COMISARIO_APELACION: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    CONCEPTO_APELACION: {
        type: sequelize_1.DataTypes.TEXT,
    },
    FK_ESTADO_REPORTE: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    NOMBREDENUNCIANTE: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    NOMBREDENUNCIADO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    ID_DISCORD_DENUNCIANTE: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    ID_DISCORD_DENUNCIADO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    ID_NOTA: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    ID_REF_EXT: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    webhook_notificacion: {
        type: sequelize_1.DataTypes.STRING(255),
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_reportes_comisarios;
//# sourceMappingURL=tb_reportes_comisarios.js.map