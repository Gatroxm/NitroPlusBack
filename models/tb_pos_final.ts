import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_pos_final = db.define('tb_pos_final', {
    PK_ID_POS: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    NOMBRE_POS: {
        type: DataTypes.STRING(255),
    },
    URL_IMG_POS: {
        type: DataTypes.STRING(255),
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});


export default tb_pos_final;