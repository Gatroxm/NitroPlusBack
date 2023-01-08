import { DataTypes } from "sequelize";
import db from "../db/connection";
import tb_resultados from "./tb_resultados";
import tb_sim_version from "./tb_sim_version";
import tb_torneos from "./tb_torneos";

const tb_plataformas = db.define('tb_plataformas', {
    PK_ID_PLATAFORMA: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    PLATAFORMA: {
        type: DataTypes.STRING(255),
    },
    URL_LOGO_PLATAFORMA: {
        type: DataTypes.STRING(255),
    },
    HEXA_PLATAFORMA: {
        type: DataTypes.STRING(255),
    },
    RUTA_LOGO_PLATAFORMA: {
        type: DataTypes.STRING(255),
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});
export default tb_plataformas;