"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_categoria_1 = __importDefault(require("./tb_categoria"));
const tb_coches_1 = __importDefault(require("./tb_coches"));
const tb_divisiones_salas_1 = __importDefault(require("./tb_divisiones_salas"));
const tb_equipos_1 = __importDefault(require("./tb_equipos"));
const tb_pilotos_1 = __importDefault(require("./tb_pilotos"));
const tb_participantes = connection_1.default.define('tb_participantes', {
    PK_PARTICIPANTE_TORNEO: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_DIVISION_SALA: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
            model: tb_divisiones_salas_1.default,
            key: "PK_DIVISION_SALA"
        }
    },
    FK_ID_PILOTO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
            model: tb_pilotos_1.default,
            key: "PK_ID_PILOTO"
        }
    },
    FK_COCHE_PREDETERMINADO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
            model: tb_coches_1.default,
            key: "PK_COCHE"
        }
    },
    FK_EQUIPO_PREDETERMINADO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
            model: tb_equipos_1.default,
            key: "PK_EQUIPO"
        }
    },
    FK_CATEGORIA: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
            model: tb_categoria_1.default,
            key: "PK_ID_CATEGORIA"
        }
    },
    NUMERO_PARTICIPACION: {
        type: sequelize_1.DataTypes.INTEGER
    },
    FECHA_INICIO: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ES_TITULAR: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ESTADO_PART: {
        type: sequelize_1.DataTypes.INTEGER
    },
    OBSERV_PART: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    id_form: {
        type: sequelize_1.DataTypes.STRING(255)
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_participantes;
//# sourceMappingURL=tb_participantes.js.map