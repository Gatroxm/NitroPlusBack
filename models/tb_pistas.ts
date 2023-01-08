import { DataTypes } from "sequelize";
import db from "../db/connection";
import tb_calendario from "./tb_calendario";
import tb_pista_principal from "./tb_pista_principal";
import tb_resultados from "./tb_resultados";
import tb_simulador from "./tb_simulador";
import tb_tiempos_referencia from "./tb_tiempos_referencia";

const tb_pistas = db.define('tb_pistas', {
    PK_ID_PISTA: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_SIMULADOR:{
        type: DataTypes.INTEGER.UNSIGNED, //forane a de tb_simulador
        allowNull: false,
        references: {
            model: tb_simulador,
            key: "PK_SIMULADOR"
        }
    },
    FK_PISTA_PRINCIPAL:{
        type: DataTypes.INTEGER.UNSIGNED, //forane a de tb_pista_principal
        allowNull: false,
        references: {
            model: tb_pista_principal,
            key: "PK_ID_PISTA"
        }
    },
    NOMBRE_PISTA: {
        type: DataTypes.STRING(255),
    },
    VARIANTE: {
        type: DataTypes.STRING(255),
    },
    LONGITUD: {
        type: DataTypes.STRING(255),
    },
    NO_DE_CURVAS: {
        type: DataTypes.STRING(255),
    },
    PNG_BANDERA: {
        type: DataTypes.STRING(255),
    },
    PNG_LOGO: {
        type: DataTypes.STRING(255),
    },
    PNG_ONBOARD: {
        type: DataTypes.STRING(255),
    },
    PNG_PANORAMICO: {
        type: DataTypes.STRING(255),
    },
    PNG_ONTRACK: {
        type: DataTypes.STRING(255),
    },
    MP4_INTRO: {
        type: DataTypes.STRING(255),
    },
    MP4_MAPA: {
        type: DataTypes.STRING(255),
    },
    MP4_ONBOARD: {
        type: DataTypes.STRING(255),
    },
    acc_id_track: {
        type: DataTypes.STRING(255),
    },
    f122_id_track: {
        type: DataTypes.INTEGER,
    }
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});


export default tb_pistas;