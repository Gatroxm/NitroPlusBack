import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import tb_datos_finales from "./tb_datos_finales";
import tb_divisiones_salas from "./tb_divisiones_salas";
import tb_plataformas from "./tb_plataformas";
import tb_resultados from "./tb_resultados";
import tb_simulador from "./tb_simulador";

const tb_torneos = db.define('tb_torneos', {
    PK_TORNEO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_PLATAFORMA:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_plataformas
        allowNull: false,
        references: {
            model: tb_plataformas,
            key: "PK_ID_PLATAFORMA"
        }
    },
    FK_SIMULADOR:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_simulador
        allowNull: false,
        references: {
            model: tb_simulador,
            key: "PK_SIMULADOR"
        }
    },
    NOMBRE_TORNEO: {
        type: DataTypes.STRING(255),
    },
    DESCRIPCION_TORNEO: {
        type: DataTypes.STRING(255),
    },
    ESTADO: {
        type: DataTypes.STRING(255),
    },
    LINK_TORNEO: {
        type: DataTypes.STRING(255),
    },
    FK_ID_LIGA: {
        type: DataTypes.INTEGER,
    },
    URL_LOGO_TORNEO: {
        type: DataTypes.STRING(255),
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});


export default tb_torneos;