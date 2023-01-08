"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_divisiones_salas_1 = __importDefault(require("./tb_divisiones_salas"));
const tb_estado_carrera_1 = __importDefault(require("./tb_estado_carrera"));
const tb_formato_carreras_1 = __importDefault(require("./tb_formato_carreras"));
const tb_pistas_1 = __importDefault(require("./tb_pistas"));
const tb_sistema_puntos_1 = __importDefault(require("./tb_sistema_puntos"));
const tb_calendario = connection_1.default.define('tb_calendario', {
    PK_ID_CALENDARIO: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_PISTA: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_pistas_1.default,
            key: "PK_ID_PISTA"
        }
    },
    FK_DIVISION_SALA: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_divisiones_salas_1.default,
            key: "PK_DIVISION_SALA"
        }
    },
    FK_FORMATO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_formato_carreras_1.default,
            key: "PK_FORMATO_CARRERA"
        }
    },
    FK_SISTEMA_PUNTOS: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_sistema_puntos_1.default,
            key: "PK_ID_SIS_PUNTOS"
        }
    },
    FK_ESTADO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_estado_carrera_1.default,
            key: "PK_ESTADO"
        }
    },
    FECHA_No: {
        type: sequelize_1.DataTypes.STRING(4)
    },
    FECHA_ID: {
        type: sequelize_1.DataTypes.INTEGER
    },
    OBSERVACIONES: {
        type: sequelize_1.DataTypes.INTEGER
    },
    FECHA: {
        type: sequelize_1.DataTypes.DATE
    },
    HORA: {
        type: sequelize_1.DataTypes.TIME
    },
    HORA_VIRTUAL: {
        type: sequelize_1.DataTypes.TIME
    },
    NOMBRE_EVENTO: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    NOMBRE_CORTO: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    RECAP: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    URL_POSTER: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    TEMP_GRADOS_C: {
        type: sequelize_1.DataTypes.INTEGER
    },
    NUBOSIDAD: {
        type: sequelize_1.DataTypes.FLOAT
    },
    LLUVA: {
        type: sequelize_1.DataTypes.FLOAT
    },
    AC_RACE_ID_SESION: {
        type: sequelize_1.DataTypes.INTEGER
    },
    AC_QUALY_ID_SESION: {
        type: sequelize_1.DataTypes.INTEGER
    },
    PROM_ESP: {
        type: sequelize_1.DataTypes.FLOAT
    },
    VISTAS: {
        type: sequelize_1.DataTypes.INTEGER
    },
    E_MAX: {
        type: sequelize_1.DataTypes.INTEGER
    },
    codificacion_resultados: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_calendario;
//# sourceMappingURL=tb_calendario.js.map