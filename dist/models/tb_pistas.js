"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_pista_principal_1 = __importDefault(require("./tb_pista_principal"));
const tb_simulador_1 = __importDefault(require("./tb_simulador"));
const tb_pistas = connection_1.default.define('tb_pistas', {
    PK_ID_PISTA: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_SIMULADOR: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_simulador_1.default,
            key: "PK_SIMULADOR"
        }
    },
    FK_PISTA_PRINCIPAL: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_pista_principal_1.default,
            key: "PK_ID_PISTA"
        }
    },
    NOMBRE_PISTA: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    VARIANTE: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    LONGITUD: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    NO_DE_CURVAS: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    PNG_BANDERA: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    PNG_LOGO: {
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
    MP4_INTRO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    MP4_MAPA: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    MP4_ONBOARD: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    acc_id_track: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    f122_id_track: {
        type: sequelize_1.DataTypes.INTEGER,
    }
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_pistas;
//# sourceMappingURL=tb_pistas.js.map