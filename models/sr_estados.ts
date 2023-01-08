import { DataTypes } from "sequelize";
import db from "../db/connection";

const sr_estados = db.define('sr_estados', {
    idEstado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    Tipo:{
        type: DataTypes.TEXT
    }
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default sr_estados;