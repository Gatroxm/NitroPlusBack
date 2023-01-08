"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_cat_coches_1 = __importDefault(require("./tb_cat_coches"));
const tb_pistas_1 = __importDefault(require("./tb_pistas"));
const tb_sim_version_1 = __importDefault(require("./tb_sim_version"));
const tb_tiempos_referencia = connection_1.default.define('tb_tiempos_referencia', {
    PK_TIEMPO_REF: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_SIM_VERSION: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_sim_version_1.default,
            key: "PK_ID_VERSION"
        }
    },
    FK_PISTA: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_pistas_1.default,
            key: "PK_ID_PISTA"
        }
    },
    FK_CAT_COCHE: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_cat_coches_1.default,
            key: "PK_ID_CAT_COCHE"
        }
    },
    NOMBRE_PILOTO: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    MS_TIEMPO_ESPORT: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_tiempos_referencia;
//# sourceMappingURL=tb_tiempos_referencia.js.map