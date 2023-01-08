import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_simulador = db.define('tb_simulador', {
    PK_SIMULADOR: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    SIMULADOR: {
        type: DataTypes.STRING(255),
    },
    URL_LOGO_SIMULADOR: {
        type: DataTypes.STRING(255),
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});


export default tb_simulador;