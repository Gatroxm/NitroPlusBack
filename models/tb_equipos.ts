import { DataTypes } from "sequelize";
import db from "../db/connection";
import tb_simulador from "./tb_simulador";

const tb_equipos = db.define('tb_equipos', {
    PK_EQUIPO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_SIMULADOR:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_simulador
        allowNull:false,
        references: {
            model: tb_simulador,
            key: "PK_SIMULADOR"
        }
    },
    NOMBRE_EQUIPO:{
        type: DataTypes.STRING(250)
    },
    NOMBRE_DIVISION:{
        type: DataTypes.STRING(250)
    },
    URL_LOGO_EQUIPO:{
        type: DataTypes.STRING(250)
    },
    DESCRIPCION_EQUIPO:{
        type: DataTypes.TEXT
    },
    HEXA_EQUIPO:{
        type: DataTypes.STRING(10)
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_equipos;