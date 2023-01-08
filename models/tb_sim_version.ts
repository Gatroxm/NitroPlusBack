import { DataTypes } from "sequelize";
import db from "../db/connection";
import tb_plataformas from "./tb_plataformas";
import tb_simulador from "./tb_simulador";
import tb_tiempos_referencia from "./tb_tiempos_referencia";

const tb_sim_version = db.define('tb_sim_version', {
    PK_ID_VERSION: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_SIMULADOR: {
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_simulador
        allowNull: false,
        references: {
            model: tb_simulador,
            key: "PK_SIMULADOR"
        }
    },
    FK_PLATAFORMA: {
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_plataformas
        allowNull: false,
        references: {
            model: tb_plataformas,
            key: "PK_ID_PLATAFORMA"
        }
    },
    DESCRIPCION: {
        type: DataTypes.STRING(255),
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});
export default tb_sim_version;