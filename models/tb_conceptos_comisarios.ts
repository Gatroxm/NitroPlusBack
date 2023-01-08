import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_conceptos_comisarios = db.define('tb_conceptos_comisarios', {
    PK_ID_CONCEPTO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_REPORTE:{
        type: DataTypes.INTEGER,
    },
    FK_ID_COMISARIO:{
        type: DataTypes.INTEGER
    },
    DISCORD_COMISARIO:{
        type: DataTypes.STRING(255)
    },
    CONCEPTO:{
        type: DataTypes.STRING
    },
    ID_REF_EXT_CON:{
        type: DataTypes.INTEGER
    },
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_conceptos_comisarios;