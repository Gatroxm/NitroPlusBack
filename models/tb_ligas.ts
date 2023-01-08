import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_ligas = db.define('tb_ligas', {
    PK_ID_LIGA: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    NOMBRE_LIGA:{
        type: DataTypes.STRING(250)
    },
    URL_LOGO_LIGA:{
        type: DataTypes.STRING(250)
    },
    IMGLICENCIAF1:{
        type: DataTypes.STRING(50)
    },
    PAGINAWEB:{
        type: DataTypes.STRING(50)
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_ligas;