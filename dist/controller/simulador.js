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
exports.updateIndicadorStatus = exports.createIndicador = exports.getSimuladoresById = exports.getSimuladores = void 0;
const sequelize_1 = require("sequelize");
const { sequelize } = require("sequelize");
const init_models_1 = require("../models/init-models");
const models = (0, init_models_1.initModels)(sequelize);
const getSimuladores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const query = `SELECT tb_simulador.nombre AS sim, tb_plataforma.nombre AS plat, tb_cod_plataforma.nombre AS cod, tb_sim_plat_codplat.id, tb_sim_plat_codplat.descripcion, tb_sim_plat_codplat.instrucciones, rutaimagencompleta(tb_sim_plat_codplat.imgGuia) as imgGuia, tb_sim_plat_codplat.restricciones FROM ((tb_sim_plat_codplat INNER JOIN tb_simulador ON tb_sim_plat_codplat.idSimulador = tb_simulador.id) INNER JOIN tb_plataforma ON tb_sim_plat_codplat.idPlataforma = tb_plataforma.id) INNER JOIN tb_cod_plataforma ON tb_sim_plat_codplat.idCodplataforma = tb_cod_plataforma.id WHERE tb_sim_plat_codplat.idEstado = 1 ORDER BY tb_simulador.nombre, tb_plataforma.nombre, tb_cod_plataforma.nombre ;`;
    try {
        const simuladores = yield ((_a = models.tb_sim_plat_codplat.sequelize) === null || _a === void 0 ? void 0 : _a.query(query, { type: sequelize_1.QueryTypes.SELECT }));
        return res.json({
            ok: true,
            simuladores,
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.getSimuladores = getSimuladores;
const getSimuladoresById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { id } = req.params;
    const query = `SELECT tb_simulador.nombre AS Simulador, tb_plataforma.nombre AS Plataforma, tb_cod_plataforma.nombre AS Identificador, tb_pilotos_id_sim.idSimPiloto AS Valor, tb_estado_general.nombre AS Estado, rutaimagencompleta(tb_simulador.logo) AS logosim, rutaimagencompleta(tb_plataforma.logo) AS logoplat, tb_pilotos_id_sim.id, tb_pilotos_id_sim.idEstado FROM ((((tb_pilotos_id_sim INNER JOIN tb_sim_plat_codplat ON tb_pilotos_id_sim.idSimCodPlataforma = tb_sim_plat_codplat.id) INNER JOIN tb_cod_plataforma ON tb_sim_plat_codplat.idCodplataforma = tb_cod_plataforma.id) INNER JOIN tb_simulador ON tb_sim_plat_codplat.idSimulador = tb_simulador.id) INNER JOIN tb_plataforma ON tb_sim_plat_codplat.idPlataforma = tb_plataforma.id) INNER JOIN tb_estado_general ON tb_pilotos_id_sim.idEstado = tb_estado_general.id WHERE (((tb_pilotos_id_sim.idPiloto)= ${id}) )ORDER BY tb_pilotos_id_sim.idEstado DESC;`;
    try {
        const simuladoresByPiloto = yield ((_b = models.tb_pilotos_id_sim.sequelize) === null || _b === void 0 ? void 0 : _b.query(query, { type: sequelize_1.QueryTypes.SELECT }));
        if (simuladoresByPiloto.length > 0) {
            return res.status(200).json({
                ok: true,
                simuladores: simuladoresByPiloto,
            });
        }
        else {
            return res.status(200).json({
                ok: false,
                msg: `No se encuentran identificadores registrados con el id ${id}`,
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.getSimuladoresById = getSimuladoresById;
const createIndicador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idPiloto, idSimCodPlataforma, idSimPiloto } = req.body;
    try {
        const Indicador = yield models.tb_pilotos_id_sim.create({ idPiloto, idSimCodPlataforma, idSimPiloto });
        return res.status(201).json({
            ok: true,
            Indicador
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.createIndicador = createIndicador;
const updateIndicadorStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { estado, id } = req.body;
    try {
        const update = yield models.tb_pilotos_id_sim.update({
            idEstado: estado
        }, { where: { id: id } });
        if (update[0] === 1) {
            return res.json({
                ok: true,
                msg: "Indicador actualizado",
            });
        }
        else {
            return res.json({
                ok: false,
                msg: "El indicador no se pudo actualizar por que o no existe o no detecta cambios",
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.updateIndicadorStatus = updateIndicadorStatus;
//# sourceMappingURL=simulador.js.map