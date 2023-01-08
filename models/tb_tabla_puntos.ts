import {Sequelize,DataTypes,Model } from "sequelize";
import db from "../db/connection";
import tb_resultados from "./tb_resultados";

const tb_tabla_puntos = db.define('tb_tabla_puntos', {
    PK_ID_PUNTOS: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
   
    FK_SISTEMA_PUNTOS: {
        type: DataTypes.INTEGER
    },
    whatsapp: {
        type: DataTypes.STRING
    },
    ID_POSICION_FINAL: {
        type: DataTypes.STRING
    },
    PUNTOS: {
        type: DataTypes.INTEGER
    },
    NOMBRE_POSICION: {
        type: DataTypes.STRING
    },
    PUESTO_NUM: {
        type: DataTypes.INTEGER
    },
    ES_POSICION: {
        type: DataTypes.INTEGER
    },
    ES_VICTORIA: {
        type: DataTypes.INTEGER
    },
    ES_PODIO: {
        type: DataTypes.INTEGER
    },
    ES_DNF: {
        type: DataTypes.INTEGER
    },
    ES_DSQ: {
        type: DataTypes.INTEGER
    },
    ES_POLE: {
        type: DataTypes.INTEGER
    },
    ES_VUELTA_RAPIDA: {
        type: DataTypes.INTEGER
    },
    ES_PILOTO_DEL_DIA: {
        type: DataTypes.INTEGER
    },
    ES_TRANSMISION: {
        type: DataTypes.INTEGER
    },
    VALIDO_PARA_SA: {
        type: DataTypes.INTEGER
    },
    cod_posicion: {
        type: DataTypes.INTEGER
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});
tb_tabla_puntos.hasOne(tb_resultados)
export default tb_tabla_puntos;