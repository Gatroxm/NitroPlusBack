import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_comunicados = db.define('tb_comunicados', {
    PK_ID_COMUNICADO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    ReporteNo:{
        type: DataTypes.INTEGER
    },
    Torneo:{
        type: DataTypes.STRING(255)
    },
    Incidente_reportado:{
        type: DataTypes.STRING(255)
    },
    discord_denunciante:{
        type: DataTypes.STRING(255)
    },
    discord_denunciado:{
        type: DataTypes.STRING(255)
    },
    Seccion:{
        type: DataTypes.STRING(255)
    },
    resolucion:{
        type: DataTypes.STRING
    },
    infraccion:{
        type: DataTypes.STRING(255)
    },
    Titulo:{
        type: DataTypes.STRING(255)
    },
    Descrip_sancion:{
        type: DataTypes.STRING(255)
    },
    gravedad:{
        type: DataTypes.STRING(255)
    },
    pen_segundos:{
        type: DataTypes.INTEGER
    },
    pen_posicion:{
        type: DataTypes.INTEGER
    },
    pen_puntos:{
        type: DataTypes.INTEGER
    },
    Notas:{
        type: DataTypes.STRING
    },
    pts_acumulados:{
        type: DataTypes.INTEGER
    },
    webhook_comunicado:{
        type: DataTypes.STRING(255)
    }
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_comunicados;