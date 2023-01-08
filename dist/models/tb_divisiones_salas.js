"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_torneos_1 = __importDefault(require("./tb_torneos"));
const tb_divisiones_salas = connection_1.default.define('tb_divisiones_salas', {
    PK_DIVISION_SALA: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_TORNEO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_torneos_1.default,
            key: "PK_TORNEO"
        }
    },
    NOMBRE_DIVISION: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    ES_OFICIAL: {
        type: sequelize_1.DataTypes.INTEGER
    },
    FK_ID_COMISARIO_1: {
        type: sequelize_1.DataTypes.INTEGER
    },
    FK_ID_COMISARIO_2: {
        type: sequelize_1.DataTypes.INTEGER
    },
    FK_ID_COMISARIO_LIDER: {
        type: sequelize_1.DataTypes.INTEGER
    },
    URL_LOGO_DIVISION: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    HTML_LOGO_DIVISION: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    DIA_HORA_CARRERA: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    coche_predeterminado: {
        type: sequelize_1.DataTypes.INTEGER
    },
    equipo_predeterminado: {
        type: sequelize_1.DataTypes.INTEGER
    },
    categoria_predeterminado: {
        type: sequelize_1.DataTypes.INTEGER
    },
    tipo_predeterminado: {
        type: sequelize_1.DataTypes.INTEGER
    },
    webhook_reportes: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    webhook_veredictos: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    webhook_posters: {
        type: sequelize_1.DataTypes.STRING(250)
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_divisiones_salas;
//# sourceMappingURL=tb_divisiones_salas.js.map