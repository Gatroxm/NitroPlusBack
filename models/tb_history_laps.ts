import { DataTypes } from "sequelize";
import db from "../db/connection";
import tb_calendario from "./tb_calendario";
import tb_coches from "./tb_coches";
import tb_neumaticos from "./tb_neumaticos";
import tb_pilotos from "./tb_pilotos";

const tb_history_laps = db.define('tb_history_laps', {
    ID_HISTORY: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_CALENDARIO:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_calendario
        allowNull: false
    },
    FK_ID_PILOTO:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_piloto
        allowNull: false
    },
    FK_NEUMATICO:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_neumaticos
        allowNull: false
    },
    FK_COCHE:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_coches
        allowNull: false
    },
    No_VUELTA:{
        type: DataTypes.INTEGER
    },
    MS_TIEMPO_VUELTA:{
        type: DataTypes.INTEGER
    },
    MS_SECTOR1:{
        type: DataTypes.INTEGER
    },
    MS_SECTOR2:{
        type: DataTypes.INTEGER
    },
    MS_SECTOR3:{
        type: DataTypes.INTEGER
    },
    MS_SECTOR1_2:{
        type: DataTypes.INTEGER
    },
    STINT:{
        type: DataTypes.INTEGER
    },
    LAPS_STINT:{
        type: DataTypes.INTEGER
    },
    BOXES:{
        type: DataTypes.STRING(1)
    },
    IS_VALID:{
        type: DataTypes.INTEGER
    },
    SESION:{
        type: DataTypes.STRING(50)
    },
    POS_EVENTO:{
        type: DataTypes.INTEGER
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

// tb_history_laps.hasMany(tb_calendario)
// tb_history_laps.hasMany(tb_pilotos, {foreignKey: "FK_ID_PILOTO"})
// tb_history_laps.hasMany(tb_neumaticos, {foreignKey: "FK_NEUMATICO"})
// tb_history_laps.hasMany(tb_coches, {foreignKey: "FK_COCHE"})

export default tb_history_laps;