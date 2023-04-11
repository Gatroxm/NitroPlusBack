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
exports.insertReserva = exports.getListadoReserva = exports.insertInscription = exports.respuestasTipoUno = exports.pregunta = exports.selectIdEquipoInicial = exports.selectIdCocheInicial = exports.slectidentificadorPilotoSim = exports.getFormInscripcion = exports.getInscritosTorneo = void 0;
const sequelize_1 = require("sequelize");
const { sequelize } = require("sequelize");
const init_models_1 = require("../models/init-models");
const models = (0, init_models_1.initModels)(sequelize);
const getInscritosTorneo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT t.*, RutaImagenCompleta(t.imgLogo) AS rutaimgLogo, RutaImagenCompleta(t.imgCuadro) AS rutaimgCuadro, convertir_a_utc(t.fechaInicio) AS convfechadeInicio, convertir_a_utc(t.fechaFin) AS convfechadeFin, convertir_a_utc(t.fechaLimiteInscripcion) AS convfechafinInscripcion, e.valorELO, sr.valorSR, pt.participaciones, pt.indicadorCumplimiento, ( SELECT COUNT(*) FROM tb_divisiones d WHERE d.idTorneo = t.idTorneo ) AS DivisionesTorneo, EXISTS( SELECT * FROM tb_inscripciones WHERE idPiloto = ${id} AND idTorneo = t.idTorneo ) AS EstaInscrito, ( SELECT COUNT(*) FROM tb_divisiones d WHERE d.idTorneo = t.idTorneo AND d.permiteReservas = 1 AND COALESCE(e.valorELO, 0) >= COALESCE(d.minEloReserva, 0) AND COALESCE(sr.valorSR, 0) >= COALESCE(d.minSrReserva, 0) AND COALESCE(pt.participaciones, 0) >= COALESCE(d.minParticipacionesReserva, 0) AND COALESCE(pt.indicadorCumplimiento, 0) >= COALESCE(d.minCumplimientoReserva, 0) ) AS DivisionesPuedeSerReserva, ( SELECT COUNT(*) FROM tb_divisiones_pilotos dp INNER JOIN tb_inscripciones i ON dp.idInscripcion = i.id WHERE i.idTorneo = t.idTorneo AND dp.idTipoPiloto = 1 AND i.idPiloto = ${id} ) AS InscritoEnDivisionComoTitular, ( SELECT COUNT(*) FROM tb_divisiones_pilotos dp INNER JOIN tb_inscripciones i ON dp.idInscripcion = i.id WHERE i.idTorneo = t.idTorneo AND i.idPiloto = ${id} ) AS InscritoEnDivisionesgeneral, CASE WHEN COUNT(DISTINCT s.idSimCodPlat) > 0 AND COUNT(DISTINCT p.idSimCodPlataforma) = 0 THEN 0 WHEN t.requierePreclasificatorio = 1 AND COUNT(DISTINCT c.idClasificatorio) = 0 THEN 0 WHEN t.idCategoriaELO IS NOT NULL AND t.idCategoriaELO <> COALESCE(e.idCategoriaELO, 0) THEN 0 WHEN t.maxELO IS NOT NULL AND COALESCE(e.valorELO, 0) >= t.maxELO THEN 0 WHEN t.minELO IS NOT NULL AND COALESCE(e.valorELO, 0) <= t.minELO THEN 0 WHEN t.minSR IS NOT NULL AND COALESCE(sr.valorSR, 0) <= t.minSR THEN 0 WHEN t.maxSR IS NOT NULL AND COALESCE(sr.valorSR, 0) >= t.maxSR THEN 0 WHEN t.minParticipaciones IS NOT NULL AND COALESCE(pt.participaciones, 0) <= t.minParticipaciones THEN 0 WHEN t.maxParticipaciones IS NOT NULL AND COALESCE(pt.participaciones, 0) >= t.maxParticipaciones THEN 0 WHEN t.minIndiceCumplimiento IS NOT NULL AND COALESCE(pt.indicadorCumplimiento, 0) <= t.minIndiceCumplimiento THEN 0 WHEN t.maxIndiceCumplimiento IS NOT NULL AND COALESCE(pt.indicadorCumplimiento, 0) >= t.maxIndiceCumplimiento THEN 0 ELSE 1 END AS idCumple, CASE WHEN COUNT(DISTINCT s.idSimCodPlat) > 0 AND COUNT(DISTINCT p.idSimCodPlataforma) = 0 THEN 'No tienes el identificador' WHEN t.requierePreclasificatorio = 1 AND COUNT(DISTINCT c.idClasificatorio) = 0 THEN 'No tienes la clasificatoria requerida' WHEN t.idCategoriaELO IS NOT NULL AND t.idCategoriaELO <> COALESCE(e.idCategoriaELO, 0) THEN 'No tienes la licencia requerida' WHEN t.maxELO IS NOT NULL AND COALESCE(e.valorELO, 0) >= t.maxELO THEN 'Tu elo es demasiado alto' WHEN t.minELO IS NOT NULL AND COALESCE(e.valorELO, 0) <= t.minELO THEN 'Tu elo es demasiado bajo' WHEN t.minSR IS NOT NULL AND COALESCE(sr.valorSR, 0) <= t.minSR THEN 'Tu SR es demasiado bajo' WHEN t.maxSR IS NOT NULL AND COALESCE(sr.valorSR, 0) >= t.maxSR THEN 'Tu SR es demasiado alto' WHEN t.minParticipaciones IS NOT NULL AND COALESCE(pt.participaciones, 0) <= t.minParticipaciones THEN 'Tus participaciones son muy bajas' WHEN t.maxParticipaciones IS NOT NULL AND COALESCE(pt.participaciones, 0) >= t.maxParticipaciones THEN 'Tus participaciones son muy altas' WHEN t.minIndiceCumplimiento IS NOT NULL AND COALESCE(pt.indicadorCumplimiento, 0) <= t.minIndiceCumplimiento THEN 'Tu Ind. Cump. es muy bajo' WHEN t.maxIndiceCumplimiento IS NOT NULL AND COALESCE(pt.indicadorCumplimiento, 0) >= t.maxIndiceCumplimiento THEN 'Tu Ind. Cump. es muy alto' ELSE 'Estas habilitado' END AS Mensaje FROM tb_torneos t LEFT JOIN tb_simcodplat_torneo s ON t.idTorneo = s.idTorneo LEFT JOIN tb_pilotos_id_sim p ON s.idSimCodPlat = p.idSimCodPlataforma LEFT JOIN tb_opcion_clasificatorios_torneo o ON t.idTorneo = o.idTorneo AND t.requierePreclasificatorio = 1 LEFT JOIN tb_resultados_clasificatorios c ON o.idClasificatorio = c.idClasificatorio AND c.idPiloto = ${id} LEFT JOIN tb_elo_actual e ON t.idCategoriaELO = e.idCategoriaELO AND e.idPiloto = ${id} LEFT JOIN tb_sr_actual sr ON t.idSimulador = sr.idSimulador AND sr.idPiloto = ${id} LEFT JOIN tb_participaciones pt ON t.idSimulador = pt.idSimulador AND pt.idPiloto = ${id} WHERE t.idEstadoTorneo = 1 AND (t.permiteReservas = 1 OR (t.permiteReservas = 0 AND (t.fechaLimiteInscripcion IS NULL OR t.fechaLimiteInscripcion >= CURDATE()))) AND EXISTS ( SELECT * FROM tb_pilotos_liga pl WHERE pl.idPiloto = ${id} AND pl.idLiga = t.idLiga ) AND ( SELECT COUNT(*) FROM tb_divisiones d WHERE d.idTorneo = t.idTorneo AND d.permiteReservas = 1 AND COALESCE(e.valorELO, 0) >= COALESCE(d.minEloReserva, 0) AND COALESCE(sr.valorSR, 0) >= COALESCE(d.minSrReserva, 0) AND COALESCE(pt.participaciones, 0) >= COALESCE(d.minParticipacionesReserva, 0) AND COALESCE(pt.indicadorCumplimiento, 0) >= COALESCE(d.minCumplimientoReserva, 0) ) > ( SELECT COUNT(*) FROM tb_divisiones_pilotos dp INNER JOIN tb_inscripciones i ON dp.idInscripcion = i.id WHERE i.idTorneo = t.idTorneo AND i.idPiloto = ${id} ) GROUP BY t.idTorneo;`;
    try {
        const inscritos = yield models.tb_inscripciones.sequelize.query(query, {
            type: sequelize_1.QueryTypes.SELECT,
        });
        return res.json({
            ok: true,
            inscritos,
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.getInscritosTorneo = getInscritosTorneo;
const getFormInscripcion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT tb_torneos.idTorneo, tb_torneos.idCocheSimPermitido, tb_torneos.idMarcaCochePermitida, tb_torneos.idCategoriaCochePermitida, tb_torneos.idGrupoCochePersonalizado, tb_torneos.idGrupoEquipoPersonalizado, tb_torneos.idPreguntaInscripcion, tb_torneos.urlInscripcionAdicional, tb_torneos.instruccionesAdicionales, tb_torneos.DivisionPredeterminada, tb_pregunta_inscripcion.pregunta, tb_pregunta_inscripcion.idTipoPregunta, tb_divisiones.idCatPred, tb_divisiones.idTipoPred, tb_divisiones.idCochePred, tb_divisiones.idEquipoPred FROM (tb_torneos LEFT JOIN tb_pregunta_inscripcion ON tb_torneos.idPreguntaInscripcion = tb_pregunta_inscripcion.id) LEFT JOIN tb_divisiones ON tb_torneos.DivisionPredeterminada = tb_divisiones.id WHERE (((tb_torneos.idTorneo)=${id}));`;
    try {
        console.log(id);
        const FormInscripcion = yield models.tb_torneos.sequelize.query(query, {
            type: sequelize_1.QueryTypes.SELECT,
        });
        return res.json({
            ok: true,
            FormInscripcion: FormInscripcion[0],
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.getFormInscripcion = getFormInscripcion;
const slectidentificadorPilotoSim = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idPiloto, idTorneo } = req.params;
    const query = `SELECT tb_pilotos_id_sim.idSimPiloto, tb_pilotos_id_sim.id FROM tb_pilotos_id_sim INNER JOIN (tb_sim_plat_codplat INNER JOIN tb_torneos ON tb_sim_plat_codplat.idSimulador = tb_torneos.idSimulador) ON tb_pilotos_id_sim.idSimCodPlataforma = tb_sim_plat_codplat.id WHERE (((tb_pilotos_id_sim.idEstado)=1) AND ((tb_pilotos_id_sim.idPiloto)=${idPiloto}) AND ((tb_torneos.idTorneo)=${idTorneo})) ORDER BY tb_pilotos_id_sim.idSimPiloto;`;
    try {
        const listado = yield models.tb_pilotos_id_sim.sequelize.query(query, {
            type: sequelize_1.QueryTypes.SELECT,
        });
        return res.json({
            ok: true,
            listado,
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.slectidentificadorPilotoSim = slectidentificadorPilotoSim;
const selectIdCocheInicial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT tb_coches.nombre, tb_coches_sim.id FROM tb_torneos INNER JOIN (tb_coches_sim INNER JOIN tb_coches ON tb_coches_sim.idCoche = tb_coches.id) ON (tb_torneos.idSimulador = tb_coches_sim.idSimulador) AND (tb_torneos.idCocheSimPermitido = tb_coches_sim.id) WHERE (((tb_torneos.idTorneo)=${id}) AND ((tb_coches_sim.idEstado)=1)) UNION SELECT tb_coches.nombre, tb_coches_sim.id FROM tb_torneos INNER JOIN (tb_coches_sim INNER JOIN tb_coches ON tb_coches_sim.idCoche = tb_coches.id) ON (tb_torneos.idMarcaCochePermitida = tb_coches.idMarca) AND (tb_torneos.idSimulador = tb_coches_sim.idSimulador) WHERE (((tb_torneos.idTorneo)=${id}) AND ((tb_coches_sim.idEstado)=1)) UNION SELECT tb_coches.nombre, tb_coches_sim.id FROM tb_torneos INNER JOIN (tb_coches_sim INNER JOIN tb_coches ON tb_coches_sim.idCoche = tb_coches.id) ON (tb_torneos.idCategoriaCochePermitida = tb_coches.idCategoria) AND (tb_torneos.idSimulador = tb_coches_sim.idSimulador) WHERE (((tb_torneos.idTorneo)=${id}) AND ((tb_coches_sim.idEstado)=1)) UNION SELECT tb_coches.nombre, tb_coches_sim.id FROM ((tb_torneos INNER JOIN tb_nombre_grupo_coches_personalizado ON (tb_torneos.idSimulador = tb_nombre_grupo_coches_personalizado.idSimulador) AND (tb_torneos.idGrupoCochePersonalizado = tb_nombre_grupo_coches_personalizado.id)) INNER JOIN tb_grupo_coches_personalizado ON tb_nombre_grupo_coches_personalizado.id = tb_grupo_coches_personalizado.idNombreGrupo) INNER JOIN (tb_coches_sim INNER JOIN tb_coches ON tb_coches_sim.idCoche = tb_coches.id) ON tb_grupo_coches_personalizado.idCocheSim = tb_coches_sim.id WHERE (((tb_torneos.idTorneo)=${id}) AND ((tb_coches_sim.idEstado)=1)) GROUP BY tb_coches.nombre, tb_coches_sim.id ORDER BY nombre;`;
    try {
        const listado = yield models.tb_torneos.sequelize.query(query, {
            type: sequelize_1.QueryTypes.SELECT,
        });
        return res.json({
            ok: true,
            listado,
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.selectIdCocheInicial = selectIdCocheInicial;
const selectIdEquipoInicial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT tb_equipos.nombre, tb_equipos.id FROM ((tb_torneos INNER JOIN tb_nombre_grupo_equipos ON tb_torneos.idGrupoEquipoPersonalizado = tb_nombre_grupo_equipos.id) INNER JOIN tb_grupo_equipos ON tb_nombre_grupo_equipos.id = tb_grupo_equipos.idNombre) INNER JOIN tb_equipos ON tb_grupo_equipos.idEquipoSim = tb_equipos.id WHERE (((tb_torneos.idTorneo)=${id})) ORDER BY tb_equipos.nombre;`;
    try {
        const listado = yield models.tb_torneos.sequelize.query(query, {
            type: sequelize_1.QueryTypes.SELECT,
        });
        return res.json({
            ok: true,
            listado,
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.selectIdEquipoInicial = selectIdEquipoInicial;
const pregunta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT tb_pregunta_inscripcion.pregunta, tb_pregunta_inscripcion.idTipoPregunta FROM tb_torneos INNER JOIN tb_pregunta_inscripcion ON tb_torneos.idPreguntaInscripcion = tb_pregunta_inscripcion.id WHERE (((tb_torneos.idTorneo)=${id})) ORDER BY tb_pregunta_inscripcion.pregunta;`;
    try {
        const listado = yield models.tb_torneos.sequelize.query(query, {
            type: sequelize_1.QueryTypes.SELECT,
        });
        return res.json({
            ok: true,
            listado: listado[0],
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.pregunta = pregunta;
const respuestasTipoUno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT tb_opciones_respuesta.respuesta, tb_opciones_respuesta.id FROM tb_torneos INNER JOIN tb_opciones_respuesta ON tb_torneos.idPreguntaInscripcion = tb_opciones_respuesta.idPregunta WHERE (((tb_torneos.idTorneo)=${id})) ORDER BY tb_opciones_respuesta.noOrden;`;
    try {
        const listado = yield models.tb_torneos.sequelize.query(query, {
            type: sequelize_1.QueryTypes.SELECT,
        });
        return res.json({
            ok: true,
            listado,
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.respuestasTipoUno = respuestasTipoUno;
const insertInscription = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idEstadoInscripcion, idPiloto, idTorneo, idCocheInicial, idEquipoInicial, idPilotoIdSim, noParticipacion, observaciones, idRespuesta, respuestaPersonalizada, DivisionPredeterminada, idCochePred, idCategoriaPiloto, idTipoPiloto, idEquipoPred, } = req.body;
    const resp = [];
    try {
        const incercion = yield models.tb_inscripciones.create({
            idEstadoInscripcion,
            idPiloto,
            idTorneo,
            idCocheInicial,
            idEquipoInicial,
            idPilotoIdSim,
            noParticipacion,
            observaciones,
            idRespuesta,
            respuestaPersonalizada,
        });
        resp.push(incercion);
        if (incercion) {
            const id = incercion.id;
            let idCocheInicialInset = idCocheInicial;
            let idEquipoInicialInset = idEquipoInicial;
            if (idCocheInicial === null) {
                idCocheInicialInset = idCochePred;
            }
            if (idEquipoInicial === null) {
                idEquipoInicialInset = idEquipoPred;
            }
            if (DivisionPredeterminada != null) {
                const insertdivicionespilotos = yield models.tb_divisiones_pilotos.create({
                    idInscripcion: id,
                    idNombreDivision: DivisionPredeterminada,
                    idCoche: idCocheInicialInset,
                    idEquipo: idEquipoInicialInset,
                    idCategoriaPiloto: idCategoriaPiloto,
                    idTipoPiloto: idTipoPiloto,
                    idEstado: 1,
                    noCarreraInicial: 1,
                    puntosIniciales: 0,
                });
                resp.push(insertdivicionespilotos);
                return res.json({
                    ok: true,
                    incerciones: resp,
                });
            }
            else {
                return res.json({
                    ok: true,
                    incerciones: resp,
                });
            }
        }
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.insertInscription = insertInscription;
const getListadoReserva = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idPiloto, idTorneo } = req.params;
    const query = `SELECT d.id, d.nombre, i.id as idInscripcion, d.idNivelDivision, d.descDiaHora, t.idTorneo, IF(COALESCE(dp.id, 0) = 0, 0, 1) AS Inscrito, d.idCatPred, d.idTipoPred, d.idCochePred, dp.idCoche AS CocheInscrito, dp.idEquipo AS EquipoInscrito, d.idEquipoPred, COALESCE( ( SELECT MAX(tb_calendario.fechaNo) FROM tb_calendario WHERE tb_calendario.idDivision = d.id AND tb_calendario.fechaNo > 0 AND tb_calendario.fechaHoraCarrera <= CURDATE()), 0 ) +1 AS CarreraInicial, d.minSrReserva, d.minEloReserva, d.minParticipacionesReserva, d.minCumplimientoReserva, t.idCategoriaELO, d.reservaSelectCoche, d.reservaSelectEquipo, t.idCocheSimPermitido, t.idMarcaCochePermitida, t.idCategoriaCochePermitida, t.idGrupoCochePersonalizado, t.idGrupoEquipoPersonalizado, t.idSimulador, CASE WHEN COALESCE( ( SELECT valorELO FROM tb_elo_actual WHERE idPiloto = i.idPiloto AND idSimulador = t.idSimulador AND idCategoriaElo = t.idCategoriaELO ), 0 ) < COALESCE(d.minEloReserva, 0) THEN 0 WHEN COALESCE( ( SELECT valorSR FROM tb_sr_actual WHERE idPiloto = i.idPiloto AND idSimulador = t.idSimulador ), 0 ) < COALESCE(d.minSrReserva, 0) THEN 0 WHEN COALESCE( ( SELECT participaciones FROM tb_participaciones WHERE idPiloto = i.idPiloto AND idSimulador = t.idSimulador ), 0 ) < COALESCE(d.minParticipacionesReserva, 0) THEN 0 WHEN COALESCE( ( SELECT indicadorCumplimiento FROM tb_participaciones WHERE idPiloto = i.idPiloto AND idSimulador = t.idSimulador ), 0 ) < COALESCE(d.minCumplimientoReserva, 0) THEN 0 ELSE 1 END AS idCumple, CASE WHEN COALESCE( ( SELECT valorELO FROM tb_elo_actual WHERE idPiloto = i.idPiloto AND idSimulador = t.idSimulador AND idCategoriaElo = t.idCategoriaELO ), 0 ) < COALESCE(d.minEloReserva, 0) THEN 'Tu elo es muy bajo' WHEN COALESCE( ( SELECT valorSR FROM tb_sr_actual WHERE idPiloto = i.idPiloto AND idSimulador = t.idSimulador ), 0 ) < COALESCE(d.minSrReserva, 0) THEN 'Tu SR es muy bajo' WHEN COALESCE( ( SELECT participaciones FROM tb_participaciones WHERE idPiloto = i.idPiloto AND idSimulador = t.idSimulador ), 0 ) < COALESCE(d.minParticipacionesReserva, 0) THEN 'Tus participaciones son bajas' WHEN COALESCE( ( SELECT indicadorCumplimiento FROM tb_participaciones WHERE idPiloto = i.idPiloto AND idSimulador = t.idSimulador ), 0 ) < COALESCE(d.minCumplimientoReserva, 0) THEN 'Tu Ind Cump es bajo' ELSE 'Habilitado' END AS mensaje FROM tb_torneos t INNER JOIN tb_divisiones d ON t.idTorneo = d.idTorneo LEFT JOIN tb_inscripciones i ON t.idTorneo = i.idTorneo AND i.idPiloto = ${idPiloto} LEFT JOIN tb_divisiones_pilotos dp ON d.id = dp.idNombreDivision AND i.id = dp.idInscripcion WHERE t.idTorneo = ${idTorneo} ORDER BY IF(COALESCE(dp.id, 0) = 0, 0, 1), d.idNivelDivision; `;
    try {
        const listado = yield models.tb_torneos.sequelize.query(query, {
            type: sequelize_1.QueryTypes.SELECT,
        });
        return res.json({
            ok: true,
            listado,
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.getListadoReserva = getListadoReserva;
const insertReserva = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idInscripcion, idNombreDivision, idCoche, idEquipo, idCategoriaPiloto, idTipoPiloto, noCarreraInicial, puntosIniciales, } = req.body;
    try {
        const inserccion = yield models.tb_divisiones_pilotos.create({
            idInscripcion,
            idNombreDivision,
            idCoche,
            idEquipo,
            idCategoriaPiloto,
            idTipoPiloto,
            noCarreraInicial,
            puntosIniciales
        });
        if (inserccion) {
            return res.json({
                ok: true,
                inserccion,
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
exports.insertReserva = insertReserva;
//# sourceMappingURL=torneos.js.map