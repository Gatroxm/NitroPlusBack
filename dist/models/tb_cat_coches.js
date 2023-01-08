"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_simulador_1 = __importDefault(require("./tb_simulador"));
const tb_cat_coches = connection_1.default.define('tb_cat_coches', {
    PK_ID_CAT_COCHE: {
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
    DESCRIPCION: {
        type: sequelize_1.DataTypes.STRING(255)
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_cat_coches;
//# sourceMappingURL=tb_cat_coches.js.map