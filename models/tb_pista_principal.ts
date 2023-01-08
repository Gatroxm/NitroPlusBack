import { DataTypes } from "sequelize";
import db from "../db/connection";
import tb_pistas from "./tb_pistas";
import tb_resultados from "./tb_resultados";

const tb_pista_principal = db.define('tb_pista_principal', {
    PK_ID_PISTA: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    NOMBRE: {
        type: DataTypes.STRING(255),
    },
    PAIS: {
        type: DataTypes.STRING(255),
    },
    URL_BANDERA: {
        type: DataTypes.STRING(255),
    },
    URL_LOGO: {
        type: DataTypes.STRING(255),
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

export default tb_pista_principal;