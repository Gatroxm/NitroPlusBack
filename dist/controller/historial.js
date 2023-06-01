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
exports.getResultadosHostorial = exports.getReportesHostorial = void 0;
const sequelize_1 = require("sequelize");
const { sequelize } = require("sequelize");
const init_models_1 = require("../models/init-models");
const models = (0, init_models_1.initModels)(sequelize);
const getReportesHostorial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT tb_reportes_comisarios.id AS ReporteNo,convertir_a_utc(tb_reportes_comisarios.fechaReporte) AS Fecha, tb_torneos.nombre AS Torneo, tb_divisiones.nombre AS Division, tb_calendario.nombreEvento AS Carrera,tb_rol_involucrados.nombre AS Rol, tb_estado_reportes.nombre AS Estado FROM ( ( ( tb_reportes_comisarios INNER JOIN tb_involucrados_sanciones ON tb_reportes_comisarios.id = tb_involucrados_sanciones.idReporte ) INNER JOIN tb_rol_involucrados ON tb_involucrados_sanciones.idRolInvolucrado = tb_rol_involucrados.id ) INNER JOIN tb_estado_reportes ON tb_reportes_comisarios.idEstadoReporte = tb_estado_reportes.id ) INNER JOIN( ( ( ( ( ( ( ( tb_calendario INNER JOIN tb_divisiones ON tb_calendario.idDivision = tb_divisiones.id ) INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo ) INNER JOIN tb_pistas_sim ON tb_calendario.idPista = tb_pistas_sim.id ) INNER JOIN tb_pistas_variantes ON tb_pistas_sim.idPistaVariante = tb_pistas_variantes.id ) INNER JOIN tb_pistas ON tb_pistas_variantes.idPistaPrincipal = tb_pistas.id ) INNER JOIN tb_paises ON tb_pistas.idPais = tb_paises.id ) INNER JOIN tb_banners_menu ON tb_calendario.idBanner = tb_banners_menu.id ) INNER JOIN tb_simulador ON tb_torneos.idSimulador = tb_simulador.id ) ON tb_reportes_comisarios.idCalendario = tb_calendario.id WHERE ( ( tb_involucrados_sanciones.idPiloto ) = ${id}) ORDER BY tb_reportes_comisarios.id DESC;`;
    try {
        const respuesta = yield models.tb_reportes_comisarios.sequelize.query(query, {
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
exports.getReportesHostorial = getReportesHostorial;
const getResultadosHostorial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const desde = Number(req.query.desde) || 0;
    const query = `SELECT tb_resultados.id, tb_calendario.fechaHoraCarrera AS Fecha, RutaImagenCompleta(tb_simulador.logo) AS Sim, tb_torneos.nombre AS Torneo, tb_divisiones.nombre AS Division, tb_calendario.nombreEventoCorto AS Evento, SUBSTRING(SEC_TO_TIME(tb_resultados.msMejorVuelta/1000),4,9) AS Mejor_Vuelta, SUBSTRING(SEC_TO_TIME(tb_resultados.msTiempoQualy/1000),4,9) AS Tiempo_Qualy, tb_ident_pos.nombreCorto AS Pos_G, tb_ident_pos_1.nombreCorto AS Pos_Cod, tb_tipo_piloto.nombre AS Tipo, tb_cat_piloto.nombre AS Cat, tb_calendario.urlTransmision AS Transm FROM ( ( ( ( ( tb_resultados_cod INNER JOIN( ( ( tb_resultados INNER JOIN tb_calendario ON tb_resultados.idCalendario = tb_calendario.id ) INNER JOIN tb_divisiones ON tb_calendario.idDivision = tb_divisiones.id ) INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo ) ON ( tb_resultados_cod.idCodificacion = tb_divisiones.idCodPred ) AND( tb_resultados_cod.idResultado = tb_resultados.id ) ) INNER JOIN tb_ident_pos ON tb_resultados.idPosicion = tb_ident_pos.id ) INNER JOIN tb_cat_piloto ON tb_resultados_cod.idCategoriaPiloto = tb_cat_piloto.id ) INNER JOIN tb_tipo_piloto ON tb_resultados_cod.idTipoPiloto = tb_tipo_piloto.id ) INNER JOIN tb_ident_pos AS tb_ident_pos_1 ON tb_resultados_cod.PosCod = tb_ident_pos_1.id ) INNER JOIN tb_simulador ON tb_torneos.idSimulador = tb_simulador.id WHERE (((tb_resultados.idPiloto) = ${id})) ORDER BY tb_resultados.id LIMIT 10 offset ${desde}`;
    try {
        const respuesta = yield models.tb_reportes_comisarios.sequelize.query(query, {
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
exports.getResultadosHostorial = getResultadosHostorial;
//# sourceMappingURL=historial.js.map