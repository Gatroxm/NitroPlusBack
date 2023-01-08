import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_f122 = db.define('tb_f122', {
    id_inscripcion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    id_piloto_inscrito:{
        type: DataTypes.INTEGER
    },
    id_plataforma:{
        type: DataTypes.INTEGER
    },
    equipos_favoritos:{
        type: DataTypes.STRING(255)
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_f122;