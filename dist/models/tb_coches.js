"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_simulador_1 = __importDefault(require("./tb_simulador"));
const tb_coches = connection_1.default.define('tb_coches', {
    PK_COCHE: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_CAT_COCHE: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    FK_SIMULADOR: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_simulador_1.default,
            key: "PK_SIMULADOR"
        }
    },
    CAR_MODEL_ACC: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    NOMBRE_COCHE: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    CATEGORIA: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    FECHA_No: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    URL_LOGO_COCHE: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    DESCRIPCION_COCHE: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    CAR_MODEL_AC: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    CAR_MODEL_IRACING: {
        type: sequelize_1.DataTypes.INTEGER
    },
    CAR_MODEL_F1: {
        type: sequelize_1.DataTypes.INTEGER
    },
    HEXA_COCHE: {
        type: sequelize_1.DataTypes.STRING(10)
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_coches;
//# sourceMappingURL=tb_coches.js.map