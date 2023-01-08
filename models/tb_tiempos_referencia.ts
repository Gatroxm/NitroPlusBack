import { DataTypes } from "sequelize";
import db from "../db/connection";
import tb_cat_coches from "./tb_cat_coches";
import tb_pistas from "./tb_pistas";
import tb_sim_version from "./tb_sim_version";

const tb_tiempos_referencia = db.define('tb_tiempos_referencia', {
    PK_TIEMPO_REF: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_SIM_VERSION:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_sim_version
        allowNull: false,
        references: {
            model: tb_sim_version,
            key: "PK_ID_VERSION"
        }
    },
    FK_PISTA:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_pistas
        allowNull: false,
        references: {
            model: tb_pistas,
            key: "PK_ID_PISTA"
        }
    },
    FK_CAT_COCHE:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_cat_coches
        allowNull: false,
        references: {
            model: tb_cat_coches,
            key: "PK_ID_CAT_COCHE"
        }
    },
    NOMBRE_PILOTO: {
        type: DataTypes.STRING(255),
    },
    MS_TIEMPO_ESPORT: {
        type: DataTypes.INTEGER,
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_tiempos_referencia;