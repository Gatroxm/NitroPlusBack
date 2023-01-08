"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_coches_1 = __importDefault(require("./tb_coches"));
const tb_divisiones_salas_1 = __importDefault(require("./tb_divisiones_salas"));
const tb_equipos_1 = __importDefault(require("./tb_equipos"));
const tb_pilotos_1 = __importDefault(require("./tb_pilotos"));
const tb_pos_final_1 = __importDefault(require("./tb_pos_final"));
const tb_torneos_1 = __importDefault(require("./tb_torneos"));
const tb_datos_finales = connection_1.default.define('tb_datos_finales', {
    PK_ID_FINAL: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_TORNEO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    FK_DIVISION: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    FK_ID_PILOTO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    FK_COCHE: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    FK_EQUIPO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    FK_POSICION_FINAL: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    PUNTOS_FINALES: {
        type: sequelize_1.DataTypes.INTEGER
    },
    PUNTOS_POSIBLES: {
        type: sequelize_1.DataTypes.INTEGER
    },
    RENDIMIENTO: {
        type: sequelize_1.DataTypes.FLOAT
    },
    PARTICIPACIONES: {
        type: sequelize_1.DataTypes.INTEGER
    },
    VICTORIAS: {
        type: sequelize_1.DataTypes.INTEGER
    },
    PODIOS: {
        type: sequelize_1.DataTypes.INTEGER
    },
    DNF: {
        type: sequelize_1.DataTypes.INTEGER
    },
    POLES: {
        type: sequelize_1.DataTypes.INTEGER
    },
    V_RAPIDAS: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
tb_datos_finales.hasMany(tb_divisiones_salas_1.default, { foreignKey: "FK_DIVISION" });
tb_datos_finales.hasMany(tb_torneos_1.default, { foreignKey: "FK_TORNEO" });
tb_datos_finales.hasMany(tb_pilotos_1.default, { foreignKey: "FK_ID_PILOTO" });
tb_datos_finales.hasMany(tb_coches_1.default, { foreignKey: "FK_COCHE" });
tb_datos_finales.hasMany(tb_equipos_1.default, { foreignKey: "FK_EQUIPO" });
tb_datos_finales.hasMany(tb_pos_final_1.default, { foreignKey: "FK_POSICION_FINAL" });
exports.default = tb_datos_finales;
//# sourceMappingURL=tb_datos_finales.js.map