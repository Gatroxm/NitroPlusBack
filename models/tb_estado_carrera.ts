import { DataTypes } from "sequelize";
import db from "../db/connection";
import tb_calendario from "./tb_calendario";

const tb_estado_carrera = db.define('tb_estado_carrera', {
    PK_ESTADO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    ESTADO_DESC:{
        type: DataTypes.STRING(250)
    },
    ES_VALIDA:{
        type: DataTypes.INTEGER
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});


export default tb_estado_carrera;