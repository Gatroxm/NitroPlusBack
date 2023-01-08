import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_multijugador_f1 = db.define('tb_multijugador_f1', {
    PK_ASIG_NUM: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_NUM_ASIGNADO: {
        type: DataTypes.INTEGER
    },
    FK_PLATAFORMA: {
        type: DataTypes.INTEGER
    },
    FK_ID_PILOTO: {
        type: DataTypes.INTEGER
    },
    FK_ID_SIMULADOR: {
        type: DataTypes.INTEGER
    },
    FK_ID_LIGA: {
        type: DataTypes.INTEGER
    },
    NIVEL:{
        type: DataTypes.INTEGER
    },
    NOMBRE_PLATAFORMA:{
        type: DataTypes.STRING(250)
    },
    NOMBRE_PILOTO:{
        type: DataTypes.STRING(250)
    },
    entry_id:{
        type: DataTypes.INTEGER
    }
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_multijugador_f1;