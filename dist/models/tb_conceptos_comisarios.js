"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_conceptos_comisarios = connection_1.default.define('tb_conceptos_comisarios', {
    PK_ID_CONCEPTO: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_REPORTE: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    FK_ID_COMISARIO: {
        type: sequelize_1.DataTypes.INTEGER
    },
    DISCORD_COMISARIO: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    CONCEPTO: {
        type: sequelize_1.DataTypes.STRING
    },
    ID_REF_EXT_CON: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_conceptos_comisarios;
//# sourceMappingURL=tb_conceptos_comisarios.js.map