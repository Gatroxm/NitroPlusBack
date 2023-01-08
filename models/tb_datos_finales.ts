import { DataTypes } from "sequelize";
import db from "../db/connection";
import tb_coches from "./tb_coches";
import tb_divisiones_salas from "./tb_divisiones_salas";
import tb_equipos from "./tb_equipos";
import tb_pilotos from "./tb_pilotos";
import tb_pos_final from "./tb_pos_final";
import tb_torneos from "./tb_torneos";

const tb_datos_finales = db.define('tb_datos_finales', {
    PK_ID_FINAL: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_TORNEO:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_torneos
        allowNull:false
    },
    FK_DIVISION:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_divisiones_salas
        allowNull:false
    },
    FK_ID_PILOTO:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_pilotos
        allowNull:false
    },
    FK_COCHE:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_pilotos
        allowNull:false
    },
    FK_EQUIPO:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_equipos
        allowNull:false
    },
    FK_POSICION_FINAL:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_pos_final
        allowNull:false
    },
    PUNTOS_FINALES:{
        type: DataTypes.INTEGER
    },
    PUNTOS_POSIBLES:{
        type: DataTypes.INTEGER
    },
    RENDIMIENTO:{
        type: DataTypes.FLOAT
    },
    PARTICIPACIONES:{
        type: DataTypes.INTEGER
    },
    VICTORIAS:{
        type: DataTypes.INTEGER
    },
    PODIOS:{
        type: DataTypes.INTEGER
    },
    DNF:{
        type: DataTypes.INTEGER
    },
    POLES:{
        type: DataTypes.INTEGER
    },
    V_RAPIDAS:{
        type: DataTypes.INTEGER
    }
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

tb_datos_finales.hasMany(tb_divisiones_salas, {foreignKey:"FK_DIVISION"})
tb_datos_finales.hasMany(tb_torneos, {foreignKey:"FK_TORNEO"})
tb_datos_finales.hasMany(tb_pilotos, {foreignKey:"FK_ID_PILOTO"})
tb_datos_finales.hasMany(tb_coches, {foreignKey:"FK_COCHE"})
tb_datos_finales.hasMany(tb_equipos, {foreignKey:"FK_EQUIPO"})
tb_datos_finales.hasMany(tb_pos_final, {foreignKey:"FK_POSICION_FINAL"})

export default tb_datos_finales;