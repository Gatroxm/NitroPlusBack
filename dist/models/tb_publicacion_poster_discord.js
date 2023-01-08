"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_publicacion_poster_discord = connection_1.default.define('tb_publicacion_poster_discord', {
    id_poster: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    texto_discord: {
        type: sequelize_1.DataTypes.TEXT,
    },
    link: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    id_referencia_poster: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    webhook_poster: {
        type: sequelize_1.DataTypes.STRING(255),
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_publicacion_poster_discord;
//# sourceMappingURL=tb_publicacion_poster_discord.js.map