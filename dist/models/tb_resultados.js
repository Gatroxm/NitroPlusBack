"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tb_calendario_1 = __importDefault(require("./tb_calendario"));
const tb_coches_1 = __importDefault(require("./tb_coches"));
const tb_divisiones_salas_1 = __importDefault(require("./tb_divisiones_salas"));
const tb_equipos_1 = __importDefault(require("./tb_equipos"));
const tb_neumaticos_1 = __importDefault(require("./tb_neumaticos"));
const tb_participantes_1 = __importDefault(require("./tb_participantes"));
const tb_pilotos_1 = __importDefault(require("./tb_pilotos"));
const tb_pistas_1 = __importDefault(require("./tb_pistas"));
const tb_pista_principal_1 = __importDefault(require("./tb_pista_principal"));
const tb_plataformas_1 = __importDefault(require("./tb_plataformas"));
const tb_reportes_comisarios_1 = __importDefault(require("./tb_reportes_comisarios"));
const tb_simulador_1 = __importDefault(require("./tb_simulador"));
const tb_tabla_puntos_1 = __importDefault(require("./tb_tabla_puntos"));
const tb_torneos_1 = __importDefault(require("./tb_torneos"));
const tb_resultados = connection_1.default.define('tb_resultados', {
    PK_ID_RESULTADOS: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_CALENDARIO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_calendario_1.default,
            key: "PK_ID_CALENDARIO"
        }
    },
    FK_PARTICIPANTE: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_participantes_1.default,
            key: "PK_PARTICIPANTE_TORNEO"
        }
    },
    FK_TORNEO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_torneos_1.default,
            key: "PK_TORNEO"
        }
    },
    FK_DIVISION: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_divisiones_salas_1.default,
            key: "PK_DIVISION_SALA"
        }
    },
    FK_ID_PILOTO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_pilotos_1.default,
            key: "PK_ID_PILOTO"
        }
    },
    FK_ID_PISTA: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_pistas_1.default,
            key: "PK_ID_PISTA"
        }
    },
    FK_ID_PISTA_PRINCIPAL: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_pista_principal_1.default,
            key: "PK_ID_PISTA"
        }
    },
    FK_ID_PLATAFORMA: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_plataformas_1.default,
            key: "PK_ID_PLATAFORMA"
        }
    },
    FK_ID_SIMULADOR: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_simulador_1.default,
            key: "PK_SIMULADOR"
        }
    },
    FK_ID_PUNTOS: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_tabla_puntos_1.default,
            key: "PK_ID_PUNTOS"
        }
    },
    FK_ID_PUNTOS_CAT: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_tabla_puntos_1.default,
            key: "PK_ID_PUNTOS"
        }
    },
    FK_ID_COCHE: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_coches_1.default,
            key: "PK_COCHE"
        }
    },
    FK_ID_EQUIPO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_equipos_1.default,
            key: "PK_EQUIPO"
        }
    },
    FK_NEUMATICO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_neumaticos_1.default,
            key: "PK_NEUM"
        }
    },
    ID_REPORTE: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: tb_reportes_comisarios_1.default,
            key: "PK_ID_REPORTE"
        }
    },
    ID_REG: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    FK_CAT_COCHE: {
        type: sequelize_1.DataTypes.INTEGER
    },
    TIEMPO_TOTAL: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    DIFERENCIA: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    PARADAS_BOXES: {
        type: sequelize_1.DataTypes.INTEGER
    },
    MEJOR_VUELTA: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    TIEMPO_QUALY: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    CONSISTENCIA: {
        type: sequelize_1.DataTypes.FLOAT
    },
    NUMVUELTAS: {
        type: sequelize_1.DataTypes.INTEGER
    },
    PEN_SEG: {
        type: sequelize_1.DataTypes.INTEGER
    },
    PEN_SEG_GAME: {
        type: sequelize_1.DataTypes.INTEGER
    },
    PEN_PUNTOS: {
        type: sequelize_1.DataTypes.INTEGER
    },
    PEN_POS_GAME: {
        type: sequelize_1.DataTypes.INTEGER
    },
    POS_SALIDA: {
        type: sequelize_1.DataTypes.INTEGER
    },
    OBSERVACIONES: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    MS_TOTAL_TIME: {
        type: sequelize_1.DataTypes.INTEGER
    },
    MS_GAP: {
        type: sequelize_1.DataTypes.INTEGER
    },
    MS_BEST_LAP: {
        type: sequelize_1.DataTypes.INTEGER
    },
    MS_LAP_QUALY: {
        type: sequelize_1.DataTypes.INTEGER
    },
    IS_VALID_FOR_AR: {
        type: sequelize_1.DataTypes.INTEGER
    },
    FK_SIM_VERSION: {
        type: sequelize_1.DataTypes.INTEGER
    },
    nom_pos_gen: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    nom_pos_cat: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    num_pos_gen: {
        type: sequelize_1.DataTypes.INTEGER
    },
    num_pos_cat: {
        type: sequelize_1.DataTypes.INTEGER
    },
    piloto_id_cat: {
        type: sequelize_1.DataTypes.INTEGER
    },
    post_nombre_piloto: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    post_discord: {
        type: sequelize_1.DataTypes.STRING(250)
    },
    post_instagram: {
        type: sequelize_1.DataTypes.STRING(250)
    },
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
exports.default = tb_resultados;
//# sourceMappingURL=tb_resultados.js.map