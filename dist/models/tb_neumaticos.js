"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_neumaticos = connection_1.default.define('tb_neumaticos', {
    PK_NEUM: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    NOMBRE_NEUM: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    IMG_NEUM: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    ID_F1_NEUM: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_neumaticos;
//# sourceMappingURL=tb_neumaticos.js.map