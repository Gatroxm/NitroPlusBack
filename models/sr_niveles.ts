import { DataTypes } from "sequelize";
import db from "../db/connection";
import tb_comisarios from "./tb_comisarios";

const sr_niveles = db.define('sr_niveles', {
    idNivel: {
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
export default sr_niveles;