
import { DataTypes } from "sequelize";
import db from "../db/connection";
import tb_estado_reportes from "./tb_estado_reportes";
import tb_pilotos from "./tb_pilotos";
import tb_reportes_comisarios from "./tb_reportes_comisarios";

const tb_apelaciones = db.define('tb_apelaciones', {
    PK_ID_APELACION: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_REPORTE: {
        type: DataTypes.INTEGER.UNSIGNED, //llave forenea tb_reportes_comisarios
        allowNull:false,
        references: {
            model: tb_reportes_comisarios,
            key: "PK_ID_REPORTE"
        }
    },
    FK_ID_PILOT_APELACION: { 
        type: DataTypes.INTEGER.UNSIGNED, //llave forenea tb_pilotos
        allowNull:false,
        references: {
            model: tb_pilotos,
            key: "PK_ID_PILOTO"
        }
    },
    FK_ESTADO_APELACION: {
        type: DataTypes.INTEGER
    },
    FECHA_APELACION: {
        type: DataTypes.DATE
    },
    DESCRIPCION_APELACION: {
        type: DataTypes.TEXT
    },
    LINKS_APELACION: {
        type: DataTypes.TEXT
    },
    NOMBREDENUNCIANTE: {
        type: DataTypes.STRING
    },
    NOMBREDENUNCIANDO: {
        type: DataTypes.STRING
    },
    ID_DISCORD_DENUNCIANTE: {
        type: DataTypes.STRING
    },
    ID_DISCORD_DENUNCIADO: {
        type: DataTypes.STRING
    }
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});


export default tb_apelaciones;