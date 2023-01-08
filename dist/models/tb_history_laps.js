"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_history_laps = connection_1.default.define('tb_history_laps', {
    ID_HISTORY: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_CALENDARIO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    FK_ID_PILOTO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    FK_NEUMATICO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    FK_COCHE: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    No_VUELTA: {
        type: sequelize_1.DataTypes.INTEGER
    },
    MS_TIEMPO_VUELTA: {
        type: sequelize_1.DataTypes.INTEGER
    },
    MS_SECTOR1: {
        type: sequelize_1.DataTypes.INTEGER
    },
    MS_SECTOR2: {
        type: sequelize_1.DataTypes.INTEGER
    },
    MS_SECTOR3: {
        type: sequelize_1.DataTypes.INTEGER
    },
    MS_SECTOR1_2: {
        type: sequelize_1.DataTypes.INTEGER
    },
    STINT: {
        type: sequelize_1.DataTypes.INTEGER
    },
    LAPS_STINT: {
        type: sequelize_1.DataTypes.INTEGER
    },
    BOXES: {
        type: sequelize_1.DataTypes.STRING(1)
    },
    IS_VALID: {
        type: sequelize_1.DataTypes.INTEGER
    },
    SESION: {
        type: sequelize_1.DataTypes.STRING(50)
    },
    POS_EVENTO: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
// tb_history_laps.hasMany(tb_calendario)
// tb_history_laps.hasMany(tb_pilotos, {foreignKey: "FK_ID_PILOTO"})
// tb_history_laps.hasMany(tb_neumaticos, {foreignKey: "FK_NEUMATICO"})
// tb_history_laps.hasMany(tb_coches, {foreignKey: "FK_COCHE"})
exports.default = tb_history_laps;
//# sourceMappingURL=tb_history_laps.js.map