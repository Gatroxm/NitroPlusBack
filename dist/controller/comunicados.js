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
exports.getComunicados = void 0;
const sequelize_1 = require("sequelize");
const { sequelize } = require("sequelize");
const init_models_1 = require("../models/init-models");
const models = (0, init_models_1.initModels)(sequelize);
const getComunicados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT tb_comunicados.id, tb_comunicados.fecha, tb_comunicados.asunto, tb_comunicados.linkPDF FROM tb_comunicados LEFT JOIN (tb_pilotos_id_sim RIGHT JOIN tb_sim_plat_codplat ON tb_pilotos_id_sim.idSimCodPlataforma = tb_sim_plat_codplat.id) ON tb_comunicados.idSimulador = tb_sim_plat_codplat.idSimulador WHERE (((tb_pilotos_id_sim.idPiloto)=${id} Or (tb_pilotos_id_sim.idPiloto) Is Null) AND ((tb_comunicados.activo)=1 Or (tb_comunicados.activo) Is Null) AND ((tb_pilotos_id_sim.idEstado)=1 Or (tb_pilotos_id_sim.idEstado) Is Null)) ORDER BY tb_comunicados.id DESC;`;
    try {
        const comunicados = yield models.tb_comunicados.sequelize.query(query, { type: sequelize_1.QueryTypes.SELECT });
        if (comunicados.length > 0) {
            return res.status(200).json({
                ok: true,
                comunicados
            });
        }
        else {
            return res.status(200).json({
                ok: false,
                msg: 'No hay comunicados nuevos'
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.getComunicados = getComunicados;
//# sourceMappingURL=comunicados.js.map