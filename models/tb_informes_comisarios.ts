import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_informes_comisarios = db.define('tb_informes_comisarios', {
    PK_ID_INFORME: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    NOMBRE_INFORMANTE:{
        type: DataTypes.STRING(250)
    },
    INFORME:{
        type: DataTypes.STRING
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_informes_comisarios;