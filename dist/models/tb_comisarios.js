"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const sr_estados_1 = __importDefault(require("./sr_estados"));
const sr_niveles_1 = __importDefault(require("./sr_niveles"));
const tb_pilotos_1 = __importDefault(require("./tb_pilotos"));
const tb_comisarios = connection_1.default.define('tb_comisarios', {
    PK_ID_COMISARIO: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    FK_ID_PILOTO: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    idNivel: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    Estado: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    ID_WORDPRESS_COMISARIO: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ROL: {
        type: sequelize_1.DataTypes.STRING(50)
    },
    ID_DISCORD_COMISARIO: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    Pass: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    Creacion: {
        type: sequelize_1.DataTypes.TIME
    },
    Email: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    Pais: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING(255)
    }
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
tb_comisarios.hasMany(tb_pilotos_1.default, { foreignKey: "FK_ID_PILOTO" });
tb_comisarios.hasMany(sr_niveles_1.default, { foreignKey: "idNivel" });
tb_comisarios.hasMany(sr_estados_1.default, { foreignKey: "Estado" });
exports.default = tb_comisarios;
//# sourceMappingURL=tb_comisarios.js.map