import { DataTypes } from "sequelize";
import db from "../db/connection";
import tb_datos_finales from "./tb_datos_finales";
import tb_history_laps from "./tb_history_laps";
import tb_participantes from "./tb_participantes";
import tb_pistas from "./tb_pistas";
import tb_resultados from "./tb_resultados";
import tb_simulador from "./tb_simulador";

const tb_coches = db.define('tb_coches', {
    PK_COCHE: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_CAT_COCHE: {
        type: DataTypes.INTEGER,
    },
    FK_SIMULADOR: {
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_simulador
        allowNull: false,
        references: {
            model: tb_simulador,
            key: "PK_SIMULADOR"
        }
    },
    CAR_MODEL_ACC: {
        type: DataTypes.INTEGER,
    },
    NOMBRE_COCHE:{
        type: DataTypes.STRING(255)
    },  
    CATEGORIA:{
        type: DataTypes.STRING(255)
    },  
    FECHA_No:{
        type: DataTypes.STRING(255)
    },  
    URL_LOGO_COCHE:{
        type: DataTypes.STRING(255)
    },  
    DESCRIPCION_COCHE:{
        type: DataTypes.STRING(255)
    },  
    CAR_MODEL_AC:{
        type: DataTypes.STRING(255)
    },  
    CAR_MODEL_IRACING:{
        type: DataTypes.INTEGER
    },  
    CAR_MODEL_F1:{
        type: DataTypes.INTEGER
    },  
    HEXA_COCHE:{
        type: DataTypes.STRING(10)
    },  
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_coches;