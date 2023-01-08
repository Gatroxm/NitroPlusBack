import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_pilotos = db.define('tb_pilotos', {
    PK_ID_PILOTO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_LIGA: {
        type: DataTypes.INTEGER
    },
    NOMBRE: {
        type: DataTypes.STRING
    },
    APELLIDO: {
        type: DataTypes.STRING
    },
    NOMBRECORTO: {
        type: DataTypes.STRING
    },
    ACTIVO: {
        type: DataTypes.INTEGER
    },
    FECHA_NACIMIENTO: {
        type: DataTypes.DATE
    },
    COD_STEAM: {
        type: DataTypes.STRING
    },
    ID_STEAM: {
        type: DataTypes.STRING
    },
    INSTAGRAM: {
        type: DataTypes.STRING
    },
    CIUDAD: {
        type: DataTypes.STRING
    },
    DEPARTAMENTO: {
        type: DataTypes.STRING
    },
    PAIS: {
        type: DataTypes.STRING
    },
    RESENA: {
        type: DataTypes.TEXT
    },
    URLSILUETA: {
        type: DataTypes.STRING
    },
    URLRETRATO: {
        type: DataTypes.STRING
    },
    URLPOSTER: {
        type: DataTypes.STRING
    },
    XBOX_GAMERTAG: {
        type: DataTypes.STRING
    },
    PSN_ID: {
        type: DataTypes.STRING
    },
    ID_EA: {
        type: DataTypes.STRING
    },
    IRACING_ID: {
        type: DataTypes.INTEGER
    },
    DISCORD_ID: {
        type: DataTypes.STRING
    },
    NOMBRE_DISCORD: {
        type: DataTypes.STRING
    },
    ID_FORMINATOR: {
        type: DataTypes.STRING
    },
    NIVEL_SUB: {
        type: DataTypes.INTEGER
    },
    TIPO_MANDO: {
        type: DataTypes.STRING
    },
    PLATAFORMA_FORM: {
        type: DataTypes.STRING
    },
    ID_FORM: {
        type: DataTypes.INTEGER
    },
    useremail: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    token: {
        type: DataTypes.STRING
    },
    zona_horaria: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    whatsapp: {
        type: DataTypes.STRING
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_pilotos;