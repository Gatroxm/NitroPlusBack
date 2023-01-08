import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_notas_comisarios = db.define('tb_notas_comisarios', {
    PK_ID_NOTA: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    Titulo_Nota:{
        type: DataTypes.STRING(250)
    },
    Nota:{
        type: DataTypes.STRING
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_notas_comisarios;