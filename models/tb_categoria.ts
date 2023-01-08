import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_categoria = db.define('tb_categoria', {
    PK_ID_CATEGORIA: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    NOMBRE_CATEGORIA:{
        type: DataTypes.STRING(255)
    },
    URL_LOGO_CATEGORIA:{
        type: DataTypes.STRING(255)
    },

},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});
export default tb_categoria;