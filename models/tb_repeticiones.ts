import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_repeticiones = db.define('tb_repeticiones', {
    PK_ID_REPETICION: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_CALENDARIO:{
        type: DataTypes.INTEGER
    },
    FK_ID_PILOTO:{
        type: DataTypes.INTEGER
    },
    LINK_VIDEO: {
        type: DataTypes.STRING(100),
    },
    OBSERVACIONES: {
        type: DataTypes.STRING(255),
    },
    FECHA_ENVIO_REP: {
        type: DataTypes.DATE,
    },
    hora_inicio: {
        type: DataTypes.INTEGER,
    },
    minuto_inicio: {
        type: DataTypes.INTEGER,
    },
    segundo_inicio: {
        type: DataTypes.INTEGER,
    },
    videoID: {
        type: DataTypes.STRING(255),
    },
    videoType: {
        type: DataTypes.STRING(255),
    },
    isVideo: {
        type: DataTypes.INTEGER,
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_repeticiones;