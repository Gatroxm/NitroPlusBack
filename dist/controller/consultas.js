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
exports.getCalendario = exports.getPilotoDelDia = exports.getVueltaRapida = exports.getPoles = exports.getDSQ = exports.getDNF = exports.getPodios = exports.getUltimosReportesEnviados = exports.gteUltimosReportesRecibidos = exports.getUltimosResultados = exports.getProximasCarreras = exports.nombreCortoPiloto = exports.totalVictorias = exports.totalParticipaciones = void 0;
const sequelize_1 = require("sequelize");
const { sequelize } = require("sequelize");
const init_models_1 = require("../models/init-models");
const models = (0, init_models_1.initModels)(sequelize);
const totalParticipaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    try {
        const Participaciones = yield ((_a = models.tb_puntos.sequelize) === null || _a === void 0 ? void 0 : _a.query(`SELECT Sum(tb_ident_pos.isParticipacion) AS Participaciones FROM (tb_puntos INNER JOIN tb_ident_pos ON tb_puntos.idIdentPos = tb_ident_pos.id) INNER JOIN (tb_reparto_puntos INNER JOIN tb_resultados ON tb_reparto_puntos.idResultado = tb_resultados.id) ON tb_puntos.id = tb_reparto_puntos.idPuntos GROUP BY tb_reparto_puntos.idCodificacion, tb_resultados.idPiloto HAVING (((tb_reparto_puntos.idCodificacion)=1) AND ((tb_resultados.idPiloto)=${id}));`, { type: sequelize_1.QueryTypes.SELECT }));
        return res.json({
            ok: true,
            Participaciones
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.totalParticipaciones = totalParticipaciones;
const totalVictorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { id } = req.params;
    try {
        const Victorias = yield ((_b = models.tb_puntos.sequelize) === null || _b === void 0 ? void 0 : _b.query(`SELECT Sum(tb_ident_pos.isVictoria) AS Victorias
      FROM (tb_puntos INNER JOIN tb_ident_pos ON tb_puntos.idIdentPos = tb_ident_pos.id) INNER JOIN (tb_reparto_puntos INNER JOIN tb_resultados ON tb_reparto_puntos.idResultado = tb_resultados.id) ON tb_puntos.id = tb_reparto_puntos.idPuntos
      GROUP BY tb_reparto_puntos.idCodificacion, tb_resultados.idPiloto
      HAVING (((tb_reparto_puntos.idCodificacion)=1) AND ((tb_resultados.idPiloto)=${id}));`, { type: sequelize_1.QueryTypes.SELECT }));
        return res.json({
            ok: true,
            Victorias,
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.totalVictorias = totalVictorias;
const nombreCortoPiloto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const { id } = req.params;
    try {
        const NombreCorto = yield ((_c = models.tb_puntos.sequelize) === null || _c === void 0 ? void 0 : _c.query(`SELECT tb_pilotos.NOMBRECORTO as NOMBRECORTO FROM tb_pilotos WHERE tb_pilotos.PK_ID_PILOTO = ${id} `, { type: sequelize_1.QueryTypes.SELECT }));
        return res.json({
            ok: true,
            NombreCorto
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.nombreCortoPiloto = nombreCortoPiloto;
const getProximasCarreras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    const { id } = req.params;
    const date = new Date();
    try {
        const query = `SELECT tb_calendario.fechaHoraCarrera, nitrodb.tb_calendario.fechaNo, nitrodb.tb_torneos.nombre, nitrodb.tb_divisiones.nombre,  nitrodb.tb_calendario.nombreEvento, nitrodb.tb_paises.imgBandera, nitrodb.tb_ident_pos.nombre, nitrodb.tb_puntos.puntos FROM (nitrodb.tb_paises INNER JOIN (nitrodb.tb_pistas INNER JOIN (nitrodb.tb_pistas_variantes INNER JOIN (nitrodb.tb_pistas_sim INNER JOIN ((nitrodb.tb_estado_carrera INNER JOIN (nitrodb.tb_divisiones INNER JOIN (nitrodb.tb_calendario INNER JOIN ((nitrodb.tb_reparto_puntos INNER JOIN nitrodb.tb_resultados ON nitrodb.tb_reparto_puntos.idResultado = nitrodb.tb_resultados.id) INNER JOIN nitrodb.tb_puntos ON nitrodb.tb_reparto_puntos.idPuntos = nitrodb.tb_puntos.id) ON nitrodb.tb_calendario.id = nitrodb.tb_resultados.idCalendario) ON nitrodb.tb_divisiones.id = nitrodb.tb_resultados.idNombreDivision) ON nitrodb.tb_estado_carrera.id = nitrodb.tb_calendario.idEstadoCarrera) INNER JOIN nitrodb.tb_torneos ON nitrodb.tb_divisiones.idTorneo = nitrodb.tb_torneos.idTorneo) ON nitrodb.tb_pistas_sim.id = nitrodb.tb_calendario.idPista) ON nitrodb.tb_pistas_variantes.id = nitrodb.tb_pistas_sim.id) ON nitrodb.tb_pistas.id = nitrodb.tb_pistas_variantes.idPistaPrincipal) ON nitrodb.tb_paises.id = nitrodb.tb_pistas.idPais) INNER JOIN nitrodb.tb_ident_pos ON nitrodb.tb_puntos.idIdentPos = nitrodb.tb_ident_pos.id WHERE (((nitrodb.tb_reparto_puntos.idCodificacion)=1) AND ((nitrodb.tb_resultados.idPiloto)=${id}) AND ((nitrodb.tb_estado_carrera.id)=1)) ORDER BY nitrodb.tb_calendario.fechaHoraCarrera LIMIT 10;`;
        const top5Carreras = yield ((_d = models.tb_calendario.sequelize) === null || _d === void 0 ? void 0 : _d.query(query, { type: sequelize_1.QueryTypes.SELECT }));
        if (top5Carreras.length > 0) {
            return res.json({
                ok: true,
                carreras: true,
                top5Carreras
            });
        }
        else {
            return res.json({
                ok: true,
                carreras: false,
                msg: 'No cuentas con carreras programadas'
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
exports.getProximasCarreras = getProximasCarreras;
const getUltimosResultados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    const { id } = req.params;
    try {
        const query = `SELECT tb_calendario.fechaHoraCarrera, tb_calendario.fechaNo, tb_torneos.nombre, tb_divisiones.nombre, tb_calendario.nombreEvento, tb_paises.imgBandera, tb_ident_pos.nombre, tb_puntos.puntos FROM (tb_paises INNER JOIN (tb_pistas INNER JOIN (tb_pistas_variantes INNER JOIN (tb_pistas_sim INNER JOIN ((tb_estado_carrera INNER JOIN (tb_divisiones INNER JOIN (tb_calendario INNER JOIN ((tb_reparto_puntos INNER JOIN tb_resultados ON tb_reparto_puntos.idResultado = tb_resultados.id) INNER JOIN tb_puntos ON tb_reparto_puntos.idPuntos = tb_puntos.id) ON tb_calendario.id = tb_resultados.idCalendario) ON tb_divisiones.id = tb_resultados.idNombreDivision) ON tb_estado_carrera.id = tb_calendario.idEstadoCarrera) INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo) ON tb_pistas_sim.id = tb_calendario.idPista) ON tb_pistas_variantes.id = tb_pistas_sim.id) ON tb_pistas.id = tb_pistas_variantes.idPistaPrincipal) ON tb_paises.id = tb_pistas.idPais) INNER JOIN tb_ident_pos ON tb_puntos.idIdentPos = tb_ident_pos.id WHERE (((tb_reparto_puntos.idCodificacion)=1) AND ((tb_resultados.idPiloto)=${id}) AND ((tb_estado_carrera.id)=1)) ORDER BY tb_calendario.fechaHoraCarrera LIMIT 10;`;
        const ultimosResultados = yield ((_e = models.tb_paises.sequelize) === null || _e === void 0 ? void 0 : _e.query(query, { type: sequelize_1.QueryTypes.SELECT }));
        if (ultimosResultados.length > 0) {
            return res.json({
                ok: true,
                resultados: true,
                ultimosResultados
            });
        }
        else {
            return res.json({
                ok: true,
                resultados: false,
                msg: 'No cuentas con Reportes'
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
exports.getUltimosResultados = getUltimosResultados;
const gteUltimosReportesRecibidos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _f;
    const { id } = req.params;
    const query = `SELECT tb_reportes_comisarios.id, tb_reportes_comisarios.fechaReporte, tb_torneos.nombre,     tb_divisiones.nombre, tb_estado_reportes.nombre, tb_rol_involucrados.nombre FROM ((tb_involucrados_sanciones INNER JOIN (((tb_reportes_comisarios INNER JOIN tb_estado_reportes ON tb_reportes_comisarios.idEstadoReporte = tb_estado_reportes.id) INNER JOIN tb_calendario ON tb_reportes_comisarios.idCalendario = tb_calendario.id) INNER JOIN tb_divisiones ON tb_calendario.idDivision = tb_divisiones.id) ON tb_involucrados_sanciones.idReporte = tb_reportes_comisarios.id) INNER JOIN tb_rol_involucrados ON tb_involucrados_sanciones.idRolInvolucrado = tb_rol_involucrados.id) INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo WHERE (((tb_estado_reportes.id)=1) AND ((tb_involucrados_sanciones.idPiloto)=${id}));`;
    try {
        const ultimosReportesRecibidos = yield ((_f = models.tb_involucrados_sanciones.sequelize) === null || _f === void 0 ? void 0 : _f.query(query, { type: sequelize_1.QueryTypes.SELECT }));
        if (ultimosReportesRecibidos.length > 0) {
            return res.json({
                ok: true,
                reportes: true,
                ultimosReportesRecibidos
            });
        }
        else {
            return res.json({
                ok: true,
                reportes: false,
                msg: 'No cuentas con Reportes'
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
exports.gteUltimosReportesRecibidos = gteUltimosReportesRecibidos;
const getUltimosReportesEnviados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _g;
    const { id } = req.params;
    const date = new Date();
    const query = `SELECT nitrodb.tb_reportes_comisarios.id, nitrodb.tb_reportes_comisarios.fechaReporte, nitrodb.tb_torneos.nombre, nitrodb.tb_divisiones.nombre, nitrodb.tb_estado_reportes.nombre, nitrodb.tb_rol_involucrados.nombre, nitrodb.tb_tipo_penalizacion.nombre, nitrodb.tb_penalizacion_sanciones.valor, nitrodb.tb_tipo_penalizacion.unidadDeMedida FROM (nitrodb.tb_tipo_penalizacion RIGHT JOIN nitrodb.tb_penalizacion_sanciones ON nitrodb.tb_tipo_penalizacion.id = nitrodb.tb_penalizacion_sanciones.idTipoPenalizacion) RIGHT JOIN (nitrodb.tb_pilotos_penalizados RIGHT JOIN (((nitrodb.tb_involucrados_sanciones INNER JOIN (((nitrodb.tb_reportes_comisarios INNER JOIN nitrodb.tb_estado_reportes ON nitrodb.tb_reportes_comisarios.idEstadoReporte = nitrodb.tb_estado_reportes.id) INNER JOIN nitrodb.tb_calendario 
    ON nitrodb.tb_reportes_comisarios.idCalendario = nitrodb.tb_calendario.id) INNER JOIN nitrodb.tb_divisiones ON nitrodb.tb_calendario.idDivision = nitrodb.tb_divisiones.id) ON nitrodb.tb_involucrados_sanciones.idReporte = nitrodb.tb_reportes_comisarios.id) INNER JOIN nitrodb.tb_rol_involucrados ON nitrodb.tb_involucrados_sanciones.idRolInvolucrado = nitrodb.tb_rol_involucrados.id) INNER JOIN nitrodb.tb_torneos ON nitrodb.tb_divisiones.idTorneo = nitrodb.tb_torneos.idTorneo) ON nitrodb.tb_pilotos_penalizados.idInvolucradoSancion = nitrodb.tb_involucrados_sanciones.id) ON nitrodb.tb_penalizacion_sanciones.id = nitrodb.tb_pilotos_penalizados.idPenalizacion WHERE (((nitrodb.tb_estado_reportes.id)>1) AND ((nitrodb.tb_involucrados_sanciones.idPiloto)=${id})) LIMIT 10;`;
    try {
        const ultimosReportesEnviados = yield ((_g = models.tb_reportes_comisarios.sequelize) === null || _g === void 0 ? void 0 : _g.query(query, { type: sequelize_1.QueryTypes.SELECT }));
        if (ultimosReportesEnviados.length > 0) {
            return res.json({
                ok: true,
                reportes: true,
                ultimosReportesEnviados
            });
        }
        else {
            return res.json({
                ok: true,
                reportes: false,
                msg: 'No cuentas con Reportes'
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
exports.getUltimosReportesEnviados = getUltimosReportesEnviados;
const getPodios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT Sum(tb_ident_pos.isPodio) AS Podios FROM (tb_puntos INNER JOIN tb_ident_pos ON tb_puntos.idIdentPos = tb_ident_pos.id) INNER JOIN (tb_reparto_puntos INNER JOIN tb_resultados ON tb_reparto_puntos.idResultado = tb_resultados.id) ON tb_puntos.id = tb_reparto_puntos.idPuntos GROUP BY tb_reparto_puntos.idCodificacion, tb_resultados.idPiloto
    HAVING (((tb_reparto_puntos.idCodificacion)=1) AND ((tb_resultados.idPiloto)=${id}))`;
    try {
        const Podios = yield models.tb_puntos.sequelize.query(query, { type: sequelize_1.QueryTypes.SELECT });
        if (Podios.length > 0) {
            return res.json({
                ok: true,
                reportes: true,
                Podios
            });
        }
        else {
            return res.json({
                ok: true,
                reportes: false,
                msg: 'No cuentas con Pódios'
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
exports.getPodios = getPodios;
const getDNF = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT Sum(tb_ident_pos.isDNF) AS DNF FROM (tb_puntos INNER JOIN tb_ident_pos ON tb_puntos.idIdentPos = tb_ident_pos.id) INNER JOIN (tb_reparto_puntos INNER JOIN tb_resultados ON tb_reparto_puntos.idResultado = tb_resultados.id) ON tb_puntos.id = tb_reparto_puntos.idPuntos GROUP BY tb_reparto_puntos.idCodificacion, tb_resultados.idPiloto HAVING (((tb_reparto_puntos.idCodificacion)=1) AND ((tb_resultados.idPiloto)=${id}));`;
    try {
        const DNF = yield models.tb_puntos.sequelize.query(query, { type: sequelize_1.QueryTypes.SELECT });
        if (DNF.length > 0) {
            return res.json({
                ok: true,
                reportes: true,
                DNF
            });
        }
        else {
            return res.json({
                ok: true,
                reportes: false,
                msg: 'No cuentas con DNF'
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
exports.getDNF = getDNF;
const getDSQ = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT Sum(tb_ident_pos.isDSQ) AS DSQ FROM (tb_puntos INNER JOIN tb_ident_pos ON tb_puntos.idIdentPos = tb_ident_pos.id) INNER JOIN (tb_reparto_puntos INNER JOIN tb_resultados ON tb_reparto_puntos.idResultado = tb_resultados.id) ON tb_puntos.id = tb_reparto_puntos.idPuntos GROUP BY tb_reparto_puntos.idCodificacion, tb_resultados.idPiloto
    HAVING (((tb_reparto_puntos.idCodificacion)=1) AND ((tb_resultados.idPiloto)=${id}));`;
    try {
        const DSQ = yield models.tb_puntos.sequelize.query(query, { type: sequelize_1.QueryTypes.SELECT });
        if (DSQ.length > 0) {
            return res.json({
                ok: true,
                reportes: true,
                DSQ
            });
        }
        else {
            return res.json({
                ok: true,
                reportes: false,
                msg: 'No cuentas con DSQ'
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
exports.getDSQ = getDSQ;
const getPoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT Sum(tb_ident_pos.isPole) AS Poles FROM (tb_puntos INNER JOIN tb_ident_pos ON tb_puntos.idIdentPos = tb_ident_pos.id) INNER JOIN (tb_reparto_puntos INNER JOIN tb_resultados ON tb_reparto_puntos.idResultado = tb_resultados.id) ON tb_puntos.id = tb_reparto_puntos.idPuntos GROUP BY tb_reparto_puntos.idCodificacion, tb_resultados.idPiloto
    HAVING (((tb_reparto_puntos.idCodificacion)=1) AND ((tb_resultados.idPiloto)=${id}));`;
    try {
        const Poles = yield models.tb_puntos.sequelize.query(query, { type: sequelize_1.QueryTypes.SELECT });
        if (Poles.length > 0) {
            return res.json({
                ok: true,
                reportes: true,
                Poles
            });
        }
        else {
            return res.json({
                ok: true,
                reportes: false,
                msg: 'No cuentas con Poles'
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
exports.getPoles = getPoles;
const getVueltaRapida = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT Sum(tb_ident_pos.isVueltaRapida) AS VueltaRapida FROM (tb_puntos INNER JOIN tb_ident_pos ON tb_puntos.idIdentPos = tb_ident_pos.id) INNER JOIN (tb_reparto_puntos INNER JOIN tb_resultados ON tb_reparto_puntos.idResultado = tb_resultados.id) ON tb_puntos.id = tb_reparto_puntos.idPuntos GROUP BY tb_reparto_puntos.idCodificacion, tb_resultados.idPiloto HAVING (((tb_reparto_puntos.idCodificacion)=1) AND ((tb_resultados.idPiloto)=${id}));`;
    try {
        const VueltaRapida = yield models.tb_puntos.sequelize.query(query, { type: sequelize_1.QueryTypes.SELECT });
        if (VueltaRapida.length > 0) {
            return res.json({
                ok: true,
                reportes: true,
                VueltaRapida
            });
        }
        else {
            return res.json({
                ok: true,
                reportes: false,
                msg: 'No cuentas con VueltaRapida'
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
exports.getVueltaRapida = getVueltaRapida;
const getPilotoDelDia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT Sum(tb_ident_pos.isPilotodelDia) AS PilotoDelDia FROM (tb_puntos INNER JOIN tb_ident_pos ON tb_puntos.idIdentPos = tb_ident_pos.id) INNER JOIN (tb_reparto_puntos INNER JOIN tb_resultados ON tb_reparto_puntos.idResultado = tb_resultados.id) ON tb_puntos.id = tb_reparto_puntos.idPuntos GROUP BY tb_reparto_puntos.idCodificacion, tb_resultados.idPiloto HAVING (((tb_reparto_puntos.idCodificacion)=1) AND ((tb_resultados.idPiloto)=${id}));`;
    try {
        const PilotoDelDia = yield models.tb_puntos.sequelize.query(query, { type: sequelize_1.QueryTypes.SELECT });
        if (PilotoDelDia.length > 0) {
            return res.json({
                ok: true,
                reportes: true,
                PilotoDelDia
            });
        }
        else {
            return res.json({
                ok: true,
                reportes: false,
                msg: 'No cuentas con Piloto Del Día'
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
exports.getPilotoDelDia = getPilotoDelDia;
const getCalendario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const division = Number(req.query.division) || 0;
    const query = `SELECT tb_calendario.fechaNo, tb_calendario.codFecha, tb_paises.imgBandera, tb_calendario.nombreEvento, tb_pistas_variantes.nombre AS nombreVariante, tb_calendario.fechaHoraCarrera, tb_calendario.horaVirtual, tb_calendario.tempAire, tb_calendario.tempPista, tb_calendario.nubosidad, tb_calendario.lluvia, tb_calendario.observaciones, tb_calendario.urlTransmision, tb_calendario.requisitoBoxes, tb_formato_carrera.nombre AS NombreFormato, tb_estado_carrera.nombre AS NombreEstado, tb_divisiones.nombre AS NombreDivision, tb_calendario.esPorEtapas, tb_calendario.noVueltasRequeridas, tb_calendario.elo_multiplicador, tb_calendario.nombreEventoCorto, tb_calendario.confirmacionCreada, tb_sistema_puntos.nombre AS NombreSistema FROM tb_sistema_puntos INNER JOIN ((tb_estado_carrera INNER JOIN (tb_formato_carrera INNER JOIN ((((tb_calendario INNER JOIN tb_pistas_sim ON tb_calendario.idPista = tb_pistas_sim.id) INNER JOIN tb_pistas_variantes ON tb_pistas_sim.idPistaVariante = tb_pistas_variantes.id) INNER JOIN tb_pistas ON tb_pistas_variantes.idPistaPrincipal = tb_pistas.id) INNER JOIN tb_paises ON tb_pistas.idPais = tb_paises.id) ON tb_formato_carrera.id = tb_calendario.idFormatoCarrera) ON tb_estado_carrera.id = tb_calendario.idEstadoCarrera) INNER JOIN tb_divisiones ON tb_calendario.idDivision = tb_divisiones.id) ON tb_sistema_puntos.id = tb_calendario.idSistemaPuntos WHERE (((tb_calendario.idDivision)=${division})) ORDER BY tb_calendario.fechaHoraCarrera DESC;`;
    try {
        const calendario = yield models.tb_sistema_puntos.sequelize.query(query, { type: sequelize_1.QueryTypes.SELECT });
        if (calendario.length > 0) {
            const resp = [];
            calendario.forEach((element) => {
                const imgBandera = `https://multimedia.nitrosimracingclub.com${element.imgBandera}`;
                const arr = Object.assign({ img: imgBandera }, element);
                resp.push(arr);
            });
            return res.status(200).json({
                ok: true,
                calendario: resp
            });
        }
        else {
            return res.status(404).json({
                ok: false,
                msg: `No se encuentra calendario para la división ${division}`
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
exports.getCalendario = getCalendario;
//# sourceMappingURL=consultas.js.map