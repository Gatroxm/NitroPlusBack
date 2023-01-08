import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_posters = db.define('tb_posters', {
    FK_ID_CALENDARIO: {
        type: DataTypes.INTEGER.UNSIGNED,//foranea de tb_calendario
        allowNull: false
    },
    FK_ID_PILOTO:{
        type: DataTypes.INTEGER
    },
    NOMBRE_POSICION: {
        type: DataTypes.STRING(255),
    },
    ES_POSICION: {
        type: DataTypes.INTEGER,
    },
    PUESTO_NUM: {
        type: DataTypes.INTEGER,
    },
    PUNTOS: {
        type: DataTypes.INTEGER,
    },
    FK_DIVISION: {
        type: DataTypes.INTEGER,
    },
    FK_TORNEO: {
        type: DataTypes.INTEGER,
    },
    NOMBRE_EQUIPO: {
        type: DataTypes.STRING(255),
    },
    URL_LOGO_EQUIPO: {
        type: DataTypes.STRING(255),
    },
    POS_GANADAS: {
        type: DataTypes.BIGINT,
    },
    POS_SALIDA: {
        type: DataTypes.INTEGER,
    },
    MS_BEST_LAP: {
        type: DataTypes.INTEGER,
    },
    MS_LAP_QUALY: {
        type: DataTypes.INTEGER,
    },
    MS_TOTAL_TIME: {
        type: DataTypes.INTEGER,
    },
    MS_TIEMPO_ESPORT: {
        type: DataTypes.INTEGER,
    },
    PromLap: {
        type: DataTypes.DECIMAL(14,4),
    },
    MaxLap: {
        type: DataTypes.INTEGER,
    },
    Diferencia: {
        type: DataTypes.BIGINT,
    },
    Consistencia: {
        type: DataTypes.DECIMAL(19,4),
    },
    MinS1: {
        type: DataTypes.INTEGER,
    },
    MinS2: {
        type: DataTypes.INTEGER,
    },
    MinS3: {
        type: DataTypes.INTEGER,
    },
    V_POTENCIAL: {
        type: DataTypes.BIGINT,
    },
    Puntaje: {
        type: DataTypes.DECIMAL(18,4),
    },
    NOMBRE: {
        type: DataTypes.STRING(255),
    },
    APELLIDO: {
        type: DataTypes.STRING(255),
    },
    NOMBRECORTO: {
        type: DataTypes.STRING(255),
    },
    FECHA_No: {
        type: DataTypes.STRING(255),
    },
    FECHA_ID: {
        type: DataTypes.INTEGER,
    },
    NOMBRE_EVENTO: {
        type: DataTypes.STRING(255),
    },
    NOMBRE_CORTO: {
        type: DataTypes.STRING(255),
    },
    PNG_BANDERA: {
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
    PNG_LOGO: {
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
    NOMBRE_TORNEO: {
        type: DataTypes.STRING(255),
    },
    URL_LOGO_TORNEO: {
        type: DataTypes.STRING(255),
    },
    PLATAFORMA: {
        type: DataTypes.STRING(255),
    },
    URL_LOGO_PLATAFORMA: {
        type: DataTypes.STRING(255),
    },
    SIMULADOR: {
        type: DataTypes.STRING(255),
    },
    URL_LOGO_SIMULADOR: {
        type: DataTypes.STRING(255),
    },
    NOMBRE_COCHE: {
        type: DataTypes.STRING(255),
    },
    URL_LOGO_COCHE: {
        type: DataTypes.STRING(255),
    },
    HEXA_COCHE: {
        type: DataTypes.STRING(255),
    },
    rankbestlap: {
        type: DataTypes.BIGINT,
    },
    rankqualy: {
        type: DataTypes.BIGINT,
    },
    rankpuntaje: {
        type: DataTypes.BIGINT,
    },
    rankpromlap: {
        type: DataTypes.BIGINT,
    },
    rankconsistencia: {
        type: DataTypes.BIGINT,
    },
    ranks1: {
        type: DataTypes.BIGINT,
    },
    ranks2: {
        type: DataTypes.BIGINT,
    },
    ranks3: {
        type: DataTypes.BIGINT,
    },
    rankvueltapotencial: {
        type: DataTypes.BIGINT,
    },
    TXT_BEST_LAP: {
        type: DataTypes.STRING(255),
    },
    TXT_LAP_QUALY: {
        type: DataTypes.STRING(255),
    },
    TXT_TOTAL_TIME: {
        type: DataTypes.STRING(255),
    },
    TXT_TIEMPO_ESPORT: {
        type: DataTypes.STRING(255),
    },
    TXT_PROMLAP: {
        type: DataTypes.STRING(255),
    },
    TXT_MAXLAP: {
        type: DataTypes.STRING(255),
    },
    TXT_DIFERENCIA: {
        type: DataTypes.STRING(255),
    },
    TXT_MINS1: {
        type: DataTypes.STRING(255),
    },
    TXT_MINS2: {
        type: DataTypes.STRING(255),
    },
    TXT_MINS3: {
        type: DataTypes.STRING(255),
    },
    TXT_V_POTENCIAL: {
        type: DataTypes.STRING(255),
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_posters;