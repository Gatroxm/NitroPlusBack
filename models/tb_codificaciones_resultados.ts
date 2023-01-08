import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_codificaciones_resultados = db.define('tb_codificaciones_resultados', {
    id_tipo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    Descripcion:{
        type: DataTypes.STRING(255)
    }, 
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_codificaciones_resultados;