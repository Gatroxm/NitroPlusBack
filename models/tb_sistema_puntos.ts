import { DataTypes } from "sequelize";
import db from "../db/connection";
import tb_calendario from "./tb_calendario";

const tb_sistema_puntos = db.define('tb_sistema_puntos', {
    PK_ID_SIS_PUNTOS: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    NOMBRE_SISTEMA: {
        type: DataTypes.STRING(255),
    },
    DESCRIPCION_SISTEMA: {
        type: DataTypes.STRING(255),
    },
    PUNTOS_MAX: {
        type: DataTypes.INTEGER,
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_sistema_puntos;