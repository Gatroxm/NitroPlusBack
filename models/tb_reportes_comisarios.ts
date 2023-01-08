import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_reportes_comisarios = db.define('tb_reportes_comisarios', {
    PK_ID_REPORTE: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FECHA_REPORTE: {
        type: DataTypes.DATE,
    },
    FK_ID_EVENTO: {
        type: DataTypes.INTEGER,
    },
    FK_DENUNCIANTE: {
        type: DataTypes.INTEGER,
    },
    FK_DENUNCIADO: {
        type: DataTypes.INTEGER,
    },
    NoVUELTA: {
        type: DataTypes.STRING(255),
    },
    DESCRIPCION: {
        type: DataTypes.TEXT,
    },
    LINKS: {
        type: DataTypes.TEXT,
    },
    LINKS2: {
        type: DataTypes.TEXT,
    },
    LINK3: {
        type: DataTypes.TEXT,
    },
    LINK4: {
        type: DataTypes.TEXT,
    },
    LINK5: {
        type: DataTypes.TEXT,
    },
    FK_TIPOINFRACCION: {
        type: DataTypes.INTEGER,
    },
    ID_COMISARIO1: {
        type: DataTypes.INTEGER,
    },
    CONCEPTOCOMISARIO1: {
        type: DataTypes.TEXT,
    },
    ID_COMISARIO2: {
        type: DataTypes.INTEGER,
    },
    CONCEPTOCOMISARIO2: {
        type: DataTypes.TEXT,
    },
    ID_COMISARIO_LIDER: {
        type: DataTypes.INTEGER,
    },
    CONCEPTO_FINAL: {
        type: DataTypes.TEXT,
    },
    FK_REGLAMENTO: {
        type: DataTypes.INTEGER,
    },
    PUNTOS_PENALIZACION: {
        type: DataTypes.INTEGER,
    },
    SEGUNDOS_PENALIZACION: {
        type: DataTypes.INTEGER,
    },
    POS_PENALIZACION: {
        type: DataTypes.INTEGER,
    },
    FK_COMISARIO_APELACION: {
        type: DataTypes.INTEGER,
    },
    CONCEPTO_APELACION: {
        type: DataTypes.TEXT,
    },
    FK_ESTADO_REPORTE: {
        type: DataTypes.INTEGER,
    },
    NOMBREDENUNCIANTE: {
        type: DataTypes.STRING(255),
    },
    NOMBREDENUNCIADO: {
        type: DataTypes.STRING(255),
    },
    ID_DISCORD_DENUNCIANTE: {
        type: DataTypes.STRING(255),
    },
    ID_DISCORD_DENUNCIADO: {
        type: DataTypes.STRING(255),
    },
    ID_NOTA: {
        type: DataTypes.INTEGER,
    },
    ID_REF_EXT: {
        type: DataTypes.INTEGER,
    },
    webhook_notificacion: {
        type: DataTypes.STRING(255),
    },
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});


export default tb_reportes_comisarios;