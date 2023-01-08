import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_publicacion_poster_discord = db.define('tb_publicacion_poster_discord', {
    id_poster: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    texto_discord: {
        type: DataTypes.TEXT,
    },
    link: {
        type: DataTypes.STRING(255),
    },
    id_referencia_poster: {
        type: DataTypes.STRING(255),
    },
    webhook_poster: {
        type: DataTypes.STRING(255),
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_publicacion_poster_discord;