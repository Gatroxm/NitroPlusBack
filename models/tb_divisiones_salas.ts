import { DataTypes } from "sequelize";
import db from "../db/connection";
import tb_torneos from "./tb_torneos";

const tb_divisiones_salas = db.define('tb_divisiones_salas', {
    PK_DIVISION_SALA: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_TORNEO:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_torneos
        allowNull:false,
        references: {
            model: tb_torneos,
            key: "PK_TORNEO"
        }
    },
    NOMBRE_DIVISION:{
        type: DataTypes.STRING(250)
    },
    ES_OFICIAL:{
        type: DataTypes.INTEGER
    },
    FK_ID_COMISARIO_1:{
        type: DataTypes.INTEGER
    },
    FK_ID_COMISARIO_2:{
        type: DataTypes.INTEGER
    },
    FK_ID_COMISARIO_LIDER:{
        type: DataTypes.INTEGER
    },
    URL_LOGO_DIVISION:{
        type: DataTypes.STRING(250)
    },
    HTML_LOGO_DIVISION:{
        type: DataTypes.STRING(250)
    },
    DIA_HORA_CARRERA:{
        type: DataTypes.STRING(250)
    },
    coche_predeterminado:{
        type: DataTypes.INTEGER
    },
    equipo_predeterminado:{
        type: DataTypes.INTEGER
    },
    categoria_predeterminado:{
        type: DataTypes.INTEGER
    },
    tipo_predeterminado:{
        type: DataTypes.INTEGER
    },
    webhook_reportes:{
        type: DataTypes.STRING(250)
    },
    webhook_veredictos:{
        type: DataTypes.STRING(250)
    },
    webhook_posters:{
        type: DataTypes.STRING(250)
    },
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});


export default tb_divisiones_salas;