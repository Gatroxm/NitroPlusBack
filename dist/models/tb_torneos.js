"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_plataformas_1 = __importDefault(require("./tb_plataformas"));
const tb_simulador_1 = __importDefault(require("./tb_simulador"));
const tb_torneos = connection_1.default.define('tb_torneos', {
    PK_TORNEO: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_PLATAFORMA: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_plataformas_1.default,
            key: "PK_ID_PLATAFORMA"
        }
    },
    FK_SIMULADOR: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_simulador_1.default,
            key: "PK_SIMULADOR"
        }
    },
    NOMBRE_TORNEO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    DESCRIPCION_TORNEO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    ESTADO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    LINK_TORNEO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    FK_ID_LIGA: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    URL_LOGO_TORNEO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_torneos;
//# sourceMappingURL=tb_torneos.js.map