import { DataTypes } from "sequelize";
import db from "../db/connection";
import tb_categoria from "./tb_categoria";
import tb_coches from "./tb_coches";
import tb_divisiones_salas from "./tb_divisiones_salas";
import tb_equipos from "./tb_equipos";
import tb_pilotos from "./tb_pilotos";
import tb_resultados from "./tb_resultados";

const tb_participantes = db.define('tb_participantes', {
    PK_PARTICIPANTE_TORNEO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_DIVISION_SALA:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_divisiones_salas
        allowNull: true,
        references: {
            model: tb_divisiones_salas,
            key: "PK_DIVISION_SALA"
        }
    },
    FK_ID_PILOTO:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_pilotos
        allowNull: true,
        references: {
            model: tb_pilotos,
            key: "PK_ID_PILOTO"
        }
    },
    FK_COCHE_PREDETERMINADO:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_coches
        allowNull: true,
        references: {
            model: tb_coches,
            key: "PK_COCHE"
        }
    },
    FK_EQUIPO_PREDETERMINADO:{
        type: DataTypes.INTEGER.UNSIGNED, // foranea de tb_equipos
        allowNull: true,
        references: {
            model: tb_equipos,
            key: "PK_EQUIPO"
        }
    },
    FK_CATEGORIA:{
        type: DataTypes.INTEGER.UNSIGNED, //foranea de tb_categoria
        allowNull: true,
        references: {
            model: tb_categoria,
            key: "PK_ID_CATEGORIA"
        }
    },
    NUMERO_PARTICIPACION:{
        type: DataTypes.INTEGER
    },
    FECHA_INICIO:{
        type: DataTypes.INTEGER
    },
    ES_TITULAR:{
        type: DataTypes.INTEGER
    },
    ESTADO_PART:{
        type: DataTypes.INTEGER
    },
    OBSERV_PART:{
        type: DataTypes.STRING(255)
    },
    id_form:{
        type: DataTypes.STRING(255)
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_participantes;