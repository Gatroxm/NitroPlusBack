import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_estado_reportes = db.define('tb_estado_reportes', {
    PK_ESTADO_REPORTE: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    NOMBRE_ESTADO_REPORTES:{
        type: DataTypes.STRING(250)
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});


export default tb_estado_reportes;