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
exports.getGias = void 0;
const sequelize_1 = require("sequelize");
const { sequelize } = require("sequelize");
const init_models_1 = require("../models/init-models");
const models = (0, init_models_1.initModels)(sequelize);
const getGias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `SELECT tb_simulador.nombre AS Simulador, tb_guias.nombre AS Guia, tb_guias.guiaHTML FROM tb_guias LEFT JOIN tb_simulador ON tb_guias.idSimulador = tb_simulador.id WHERE (((tb_simulador.idEstado)=1)) OR (((tb_guias.idEstado)=1)) ORDER BY tb_guias.noOrden; `;
    try {
        const respuesta = yield models.tb_guias.sequelize.query(query, {
            type: sequelize_1.QueryTypes.SELECT,
        });
        return res.json({
            ok: true,
            respuesta,
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.getGias = getGias;
//# sourceMappingURL=guias.js.map