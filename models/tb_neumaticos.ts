import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_neumaticos = db.define('tb_neumaticos', {
    PK_NEUM: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    NOMBRE_NEUM:{
        type: DataTypes.STRING(250)
    },
    IMG_NEUM:{
        type: DataTypes.STRING(250)
    },
    ID_F1_NEUM:{
        type: DataTypes.INTEGER
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});
export default tb_neumaticos;