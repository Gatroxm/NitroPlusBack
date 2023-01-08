"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const sr_niveles = connection_1.default.define('sr_niveles', {
    idNivel: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    Tipo: {
        type: sequelize_1.DataTypes.TEXT
    }
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = sr_niveles;
//# sourceMappingURL=sr_niveles.js.map