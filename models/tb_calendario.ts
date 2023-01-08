import { DataTypes } from "sequelize";
import db from "../db/connection";
import tb_divisiones_salas from "./tb_divisiones_salas";
import tb_estado_carrera from "./tb_estado_carrera";
import tb_formato_carreras from "./tb_formato_carreras";
import tb_pistas from "./tb_pistas";
import tb_sistema_puntos from "./tb_sistema_puntos";

const tb_calendario = db.define('tb_calendario', {
    PK_ID_CALENDARIO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_PISTA: {
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_pistas
        allowNull: false,
        references: {
            model: tb_pistas,
            key: "PK_ID_PISTA"
        }
    },
    FK_DIVISION_SALA: {
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_divisiones_salas
        allowNull: false,
        references: {
            model: tb_divisiones_salas,
            key: "PK_DIVISION_SALA"
        }
    },
    FK_FORMATO: {
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_formato_carreras
        allowNull: false,
        references: {
            model: tb_formato_carreras,
            key: "PK_FORMATO_CARRERA"
        }
    },
    FK_SISTEMA_PUNTOS: {
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_sistema_puntos
        allowNull: false,
        references: {
            model: tb_sistema_puntos,
            key: "PK_ID_SIS_PUNTOS"
        }
    },
    FK_ESTADO: {
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_estado_carrera
        allowNull: false,
        references: {
            model: tb_estado_carrera,
            key: "PK_ESTADO"
        }
    },
    FECHA_No:{
        type: DataTypes.STRING(4)
    },
    FECHA_ID:{
        type: DataTypes.INTEGER
    },
    OBSERVACIONES:{
        type: DataTypes.INTEGER
    },
    FECHA:{
        type: DataTypes.DATE
    },
    HORA:{
        type: DataTypes.TIME
    },
    HORA_VIRTUAL:{
        type: DataTypes.TIME
    },
    NOMBRE_EVENTO:{
        type: DataTypes.STRING(255)
    },
    NOMBRE_CORTO:{
        type: DataTypes.STRING(255)
    },
    RECAP:{
        type: DataTypes.STRING(255)
    },
    URL_POSTER:{
        type: DataTypes.STRING(255)
    },
    TEMP_GRADOS_C:{
        type: DataTypes.INTEGER
    },
    NUBOSIDAD:{
        type: DataTypes.FLOAT
    },
    LLUVA:{
        type: DataTypes.FLOAT
    },
    AC_RACE_ID_SESION:{
        type: DataTypes.INTEGER
    },
    AC_QUALY_ID_SESION:{
        type: DataTypes.INTEGER
    },
    PROM_ESP:{
        type: DataTypes.FLOAT
    },
    VISTAS:{
        type: DataTypes.INTEGER
    },
    E_MAX:{
        type: DataTypes.INTEGER
    },
    codificacion_resultados:{
        type: DataTypes.INTEGER
    }    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});



export default tb_calendario;