import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_informe_incidentes = db.define('tb_informe_incidentes', {
    PK_ID_INCIDENTE: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_CALENDARIO:{
        type: DataTypes.INTEGER
    },
    FECHA_INFORME:{
        type: DataTypes.DATE
    },
    Nombre:{
        type: DataTypes.STRING(250)
    },
    Descripcion:{
        type: DataTypes.STRING
    },
    Link:{
        type: DataTypes.STRING(255)
    },
    Estado:{
        type: DataTypes.INTEGER
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_informe_incidentes;