import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_formato_carreras = db.define('tb_formato_carreras', {
    PK_FORMATO_CARRERA: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FORMATO:{
        type: DataTypes.STRING(255)
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_formato_carreras;