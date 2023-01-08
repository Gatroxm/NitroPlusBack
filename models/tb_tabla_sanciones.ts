import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_tabla_sanciones = db.define('tb_tabla_sanciones', {
    PK_ID_SANCION: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    No_ARTICULO: {
        type: DataTypes.STRING(255),
    },
    SECCION: {
        type: DataTypes.STRING,
    },
    TITULO: {
        type: DataTypes.STRING(255),
    },
    DESCRIPCION: {
        type: DataTypes.STRING,
    },
    GRAVEDAD: {
        type: DataTypes.STRING(255),
    },
    SANCION_SEGUNDOS: {
        type: DataTypes.INTEGER,
    },
    SANCION_PUNTOS_PEN: {
        type: DataTypes.INTEGER,
    },
    SANCION_POSICIONES: {
        type: DataTypes.INTEGER,
    },
    FECHA_JURISPRUDENCIA: {
        type: DataTypes.DATE,
    },
    OBSERVACIONES: {
        type: DataTypes.STRING,
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_tabla_sanciones;