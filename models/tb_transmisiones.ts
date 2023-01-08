import { DataTypes } from "sequelize";
import db from "../db/connection";

const tb_transmisiones = db.define('tb_transmisiones', {
    PK_ID_FORMATO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_DIVISION: {
        type: DataTypes.INTEGER,
    },
    NOMBRE: {
        type: DataTypes.STRING(255),
    },
    PLANTILLA_PHP: {
        type: DataTypes.STRING(255),
    },
    Descarga: {
        type: DataTypes.INTEGER,
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default tb_transmisiones;