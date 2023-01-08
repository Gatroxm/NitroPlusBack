import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_multimedia_torneos = db.define('tb_multimedia_torneos', {
    PK_ID_MULTIMEDIA: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_DIVISION:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_divisiones_salas
        allowNull:false
    },
    FONDO_PNG:{
        type: DataTypes.STRING(250)
    },
    PLANTILLA_PHP:{
        type: DataTypes.STRING(250)
    },
    MULT_ES_FECHA:{
        type: DataTypes.INTEGER
    },
    MULT_ES_ANUNCIO:{
        type: DataTypes.INTEGER
    },
    MULT_ES_POSICION:{
        type: DataTypes.INTEGER
    },
    posicion:{
        type: DataTypes.INTEGER
    },
    categoria:{
        type: DataTypes.INTEGER
    },
    es_discord:{
        type: DataTypes.INTEGER
    },
    id_rol_discord:{
        type: DataTypes.STRING(50)
    },
    es_instagram:{
        type: DataTypes.INTEGER
    },
    hastags:{
        type: DataTypes.STRING(250)
    },
    Nombre:{
        type: DataTypes.STRING(250)
    },
    sesion:{
        type: DataTypes.STRING(3)
    },
    inicio_formula:{
        type: DataTypes.TEXT
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_multimedia_torneos;