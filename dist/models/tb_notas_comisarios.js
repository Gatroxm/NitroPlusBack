"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_notas_comisarios = connection_1.default.define('tb_notas_comisarios', {
    PK_ID_NOTA: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    Titulo_Nota: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    Nota: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_notas_comisarios;
//# sourceMappingURL=tb_notas_comisarios.js.map