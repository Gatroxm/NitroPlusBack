"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_pilotos = connection_1.default.define('tb_pilotos', {
    PK_ID_PILOTO: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_LIGA: {
        type: sequelize_1.DataTypes.INTEGER
    },
    NOMBRE: {
        type: sequelize_1.DataTypes.STRING
    },
    APELLIDO: {
        type: sequelize_1.DataTypes.STRING
    },
    NOMBRECORTO: {
        type: sequelize_1.DataTypes.STRING
    },
    ACTIVO: {
        type: sequelize_1.DataTypes.INTEGER
    },
    FECHA_NACIMIENTO: {
        type: sequelize_1.DataTypes.DATE
    },
    COD_STEAM: {
        type: sequelize_1.DataTypes.STRING
    },
    ID_STEAM: {
        type: sequelize_1.DataTypes.STRING
    },
    INSTAGRAM: {
        type: sequelize_1.DataTypes.STRING
    },
    CIUDAD: {
        type: sequelize_1.DataTypes.STRING
    },
    DEPARTAMENTO: {
        type: sequelize_1.DataTypes.STRING
    },
    PAIS: {
        type: sequelize_1.DataTypes.STRING
    },
    RESENA: {
        type: sequelize_1.DataTypes.TEXT
    },
    URLSILUETA: {
        type: sequelize_1.DataTypes.STRING
    },
    URLRETRATO: {
        type: sequelize_1.DataTypes.STRING
    },
    URLPOSTER: {
        type: sequelize_1.DataTypes.STRING
    },
    XBOX_GAMERTAG: {
        type: sequelize_1.DataTypes.STRING
    },
    PSN_ID: {
        type: sequelize_1.DataTypes.STRING
    },
    ID_EA: {
        type: sequelize_1.DataTypes.STRING
    },
    IRACING_ID: {
        type: sequelize_1.DataTypes.INTEGER
    },
    DISCORD_ID: {
        type: sequelize_1.DataTypes.STRING
    },
    NOMBRE_DISCORD: {
        type: sequelize_1.DataTypes.STRING
    },
    ID_FORMINATOR: {
        type: sequelize_1.DataTypes.STRING
    },
    NIVEL_SUB: {
        type: sequelize_1.DataTypes.INTEGER
    },
    TIPO_MANDO: {
        type: sequelize_1.DataTypes.STRING
    },
    PLATAFORMA_FORM: {
        type: sequelize_1.DataTypes.STRING
    },
    ID_FORM: {
        type: sequelize_1.DataTypes.INTEGER
    },
    useremail: {
        type: sequelize_1.DataTypes.STRING
    },
    username: {
        type: sequelize_1.DataTypes.STRING
    },
    token: {
        type: sequelize_1.DataTypes.STRING
    },
    zona_horaria: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    whatsapp: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_pilotos;
//# sourceMappingURL=tb_pilotos.js.map