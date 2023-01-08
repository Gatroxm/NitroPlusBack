import { DataTypes } from "sequelize";
import db from "../db/connection";
import tb_calendario from "./tb_calendario";
import tb_coches from "./tb_coches";
import tb_divisiones_salas from "./tb_divisiones_salas";
import tb_equipos from "./tb_equipos";
import tb_neumaticos from "./tb_neumaticos";
import tb_participantes from "./tb_participantes";
import tb_pilotos from "./tb_pilotos";
import tb_pistas from "./tb_pistas";
import tb_pista_principal from "./tb_pista_principal";
import tb_plataformas from "./tb_plataformas";
import tb_reportes_comisarios from "./tb_reportes_comisarios";
import tb_simulador from "./tb_simulador";
import tb_tabla_puntos from "./tb_tabla_puntos";
import tb_torneos from "./tb_torneos";

const tb_resultados = db.define('tb_resultados', {
    PK_ID_RESULTADOS: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
   
    FK_ID_CALENDARIO: {
        type: DataTypes.INTEGER.UNSIGNED, //foranea de tb_calendario
        allowNull: false,
        references: {
            model: tb_calendario,
            key: "PK_ID_CALENDARIO"
        } 
    },
    FK_PARTICIPANTE: {
        type: DataTypes.INTEGER.UNSIGNED, //foranea de tb_participantes
        allowNull: false,
        references: {
            model: tb_participantes,
            key: "PK_PARTICIPANTE_TORNEO"
        } 
    },
    FK_TORNEO: {
        type: DataTypes.INTEGER.UNSIGNED, //foranea de tb_torneos
        allowNull: false,
        references: {
            model: tb_torneos,
            key: "PK_TORNEO"
        } 
    },
    FK_DIVISION: {
        type: DataTypes.INTEGER.UNSIGNED, //foranea de tb_divisiones_salas
        allowNull: false,
        references: {
            model: tb_divisiones_salas,
            key: "PK_DIVISION_SALA"
        } 
    },
    FK_ID_PILOTO: {
        type: DataTypes.INTEGER.UNSIGNED, //foranea de tb_pilotos
        allowNull: false,
        references: {
            model: tb_pilotos,
            key: "PK_ID_PILOTO"
        } 
    },
    FK_ID_PISTA: {
        type: DataTypes.INTEGER.UNSIGNED, //foranea de tb_pistas
        allowNull: false,
        references: {
            model: tb_pistas,
            key: "PK_ID_PISTA"
        } 
    },
    FK_ID_PISTA_PRINCIPAL: {
        type: DataTypes.INTEGER.UNSIGNED, //foranea de tb_pista_principal
        allowNull: false,
        references: {
            model: tb_pista_principal,
            key: "PK_ID_PISTA"
        } 
    },
    FK_ID_PLATAFORMA: {
        type: DataTypes.INTEGER.UNSIGNED, //foranea de tb_plataformas
        allowNull: false,
        references: {
            model: tb_plataformas,
            key: "PK_ID_PLATAFORMA"
        } 
    },
    FK_ID_SIMULADOR: {
        type: DataTypes.INTEGER.UNSIGNED, //foranea de tb_simulador
        allowNull: false,
        references: {
            model: tb_simulador,
            key: "PK_SIMULADOR"
        } 
    },
    FK_ID_PUNTOS: {
        type: DataTypes.INTEGER.UNSIGNED, //foranea de tb_tabla_puntos
        allowNull: false,
        references: {
            model: tb_tabla_puntos,
            key: "PK_ID_PUNTOS"
        } 
    },
    FK_ID_PUNTOS_CAT: {
        type: DataTypes.INTEGER.UNSIGNED, //foranea de tb_tabla_puntos
        allowNull: false,
        references: {
            model: tb_tabla_puntos,
            key: "PK_ID_PUNTOS"
        } 
    },
    FK_ID_COCHE: {
        type: DataTypes.INTEGER.UNSIGNED, //foranea de tb_coches
        allowNull: false,
        references: {
            model: tb_coches,
            key: "PK_COCHE"
        } 
    },
    FK_ID_EQUIPO: {
        type: DataTypes.INTEGER.UNSIGNED, //foranea de tb_equipos
        allowNull: false,
        references: {
            model: tb_equipos,
            key: "PK_EQUIPO"
        } 
    },
    FK_NEUMATICO: {
        type: DataTypes.INTEGER.UNSIGNED, //foranea de tb_neumaticos
        allowNull: false,
        references: {
            model: tb_neumaticos,
            key: "PK_NEUM"
        } 
    },
    ID_REPORTE: {
        type: DataTypes.INTEGER.UNSIGNED, //foranea de tb_reportes_comisarios
        allowNull: false,
        references: {
            model: tb_reportes_comisarios,
            key: "PK_ID_REPORTE"
        } 
    },
    ID_REG: {
        type: DataTypes.STRING(250)
    },
    FK_CAT_COCHE: {
        type: DataTypes.INTEGER
    },
    TIEMPO_TOTAL: {
        type: DataTypes.STRING(250)
    },
    DIFERENCIA: {
        type: DataTypes.STRING(250)
    },
    PARADAS_BOXES: {
        type: DataTypes.INTEGER
    },
    MEJOR_VUELTA: {
        type: DataTypes.STRING(250)
    },
    TIEMPO_QUALY: {
        type: DataTypes.STRING(250)
    },
    CONSISTENCIA: {
        type: DataTypes.FLOAT
    },
    NUMVUELTAS: {
        type: DataTypes.INTEGER
    },
    PEN_SEG: {
        type: DataTypes.INTEGER
    },
    PEN_SEG_GAME: {
        type: DataTypes.INTEGER
    },
    PEN_PUNTOS: {
        type: DataTypes.INTEGER
    },
    PEN_POS_GAME: {
        type: DataTypes.INTEGER
    },
    POS_SALIDA: {
        type: DataTypes.INTEGER
    },
    OBSERVACIONES: {
        type: DataTypes.STRING(250)
    },
    MS_TOTAL_TIME: {
        type: DataTypes.INTEGER
    },
    MS_GAP: {
        type: DataTypes.INTEGER
    },
    MS_BEST_LAP: {
        type: DataTypes.INTEGER
    },
    MS_LAP_QUALY: {
        type: DataTypes.INTEGER
    },
    IS_VALID_FOR_AR: {
        type: DataTypes.INTEGER
    },
    FK_SIM_VERSION: {
        type: DataTypes.INTEGER
    },
    nom_pos_gen: {
        type: DataTypes.STRING(250)
    },
    nom_pos_cat: {
        type: DataTypes.STRING(250)
    },
    num_pos_gen: {
        type: DataTypes.INTEGER
    },
    num_pos_cat: {
        type: DataTypes.INTEGER
    },
    piloto_id_cat: {
        type: DataTypes.INTEGER
    },
    post_nombre_piloto: {
        type: DataTypes.STRING(250)
    },
    post_discord: {
        type: DataTypes.STRING(250)
    },
    post_instagram: {
        type: DataTypes.STRING(250)
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_resultados;