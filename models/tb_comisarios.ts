import { DataTypes } from "sequelize";
import db from "../db/connection";
import sr_estados from "./sr_estados";
import sr_niveles from "./sr_niveles";
import tb_pilotos from "./tb_pilotos";

const tb_comisarios = db.define('tb_comisarios', {
    PK_ID_COMISARIO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_PILOTO: {
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_pilotos
        allowNull: false,
    },
    idNivel: {
        type: DataTypes.INTEGER.UNSIGNED, // foranea de sr_niveles
        allowNull: false,
    },
    Estado: {
        type: DataTypes.INTEGER, // foranea de sr_estados 
        allowNull: false,
    },
    ID_WORDPRESS_COMISARIO:{
        type: DataTypes.INTEGER
    },
    ROL:{
        type: DataTypes.STRING(50)
    },
    ID_DISCORD_COMISARIO:{
        type: DataTypes.STRING(255)
    },
    Pass:{
        type: DataTypes.STRING(255)
    },
    Creacion:{
        type: DataTypes.TIME
    },
    Email:{
        type: DataTypes.STRING(255)
    },
    Pais:{
        type: DataTypes.STRING(255)
    },
    Nombre:{
        type: DataTypes.STRING(255)
    }
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});
tb_comisarios.hasMany(tb_pilotos,{foreignKey: "FK_ID_PILOTO"})
tb_comisarios.hasMany(sr_niveles,{foreignKey: "idNivel"})
tb_comisarios.hasMany(sr_estados,{foreignKey: "Estado"})
export default tb_comisarios;