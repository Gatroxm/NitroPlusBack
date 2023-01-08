import { DataTypes } from "sequelize";
import db from "../db/connection";

const updatepilotos = db.define('updatepilotos', {

    No: {
        type: DataTypes.STRING(255),
    },
    NOMBRECORTO: {
        type: DataTypes.STRING(255),
    },
    ID: {
        type: DataTypes.STRING(255),
    },
    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
});

export default updatepilotos;