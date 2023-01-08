import { DataTypes } from "sequelize";
import db from "../db/connection";
import tb_simulador from "./tb_simulador";
import tb_tiempos_referencia from "./tb_tiempos_referencia";

const tb_cat_coches = db.define('tb_cat_coches', {
    PK_ID_CAT_COCHE: {
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
    DESCRIPCION:{
        type: DataTypes.STRING(255)
    },

},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_cat_coches;