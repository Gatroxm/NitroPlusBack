"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
const sequelize_1 = require("sequelize");
const { sequelize } = require("sequelize");
const init_models_1 = require("../models/init-models");
const models = (0, init_models_1.initModels)(sequelize);
const Roles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT tb_roles_pilotos.idPiloto, tb_roles_pilotos.idEstado, tb_roles_pilotos.idRol FROM tb_roles_pilotos WHERE (((tb_roles_pilotos.idPiloto)=${id}) AND ((tb_roles_pilotos.idEstado)=1) );`;
    try {
        const rol = yield models.tb_roles_pilotos.sequelize.query(query, {
            type: sequelize_1.QueryTypes.SELECT,
        });
        return res.json({
            ok: true,
            rol,
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.Roles = Roles;
//# sourceMappingURL=roles.js.map