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
exports.insertTbRadioTransmisores = exports.SelectorMensaje = exports.updatetb_salas_transmision = exports.selectTablaCams = exports.getTablaCams = exports.updatetTb_overlay_transmisiones = exports.SelectPOverlayNoRequiereConfirmacion = exports.SelectPOverlayRequiereConfirmacion = exports.pestanaOverlays = exports.updateSala = exports.getTransmisiones = exports.LIMPIARSALATRANSMISION = exports.SelectorCarreraLocutores = exports.gettablaLocutores = void 0;
const sequelize_1 = require("sequelize");
const { sequelize } = require("sequelize");
const init_models_1 = require("../models/init-models");
const models = (0, init_models_1.initModels)(sequelize);
const gettablaLocutores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `SELECT CONCAT(tb_calendario.id,' - ',tb_torneos.nombre,' - ',tb_divisiones.nombre,' - ',tb_calendario.nombreEvento) AS EventoCargado,tb_salas_transmision.id, tb_salas_transmision.idCalendario, tb_salas_transmision.nombre, tb_salas_transmision.idEstado, tb_salas_transmision.noOrden, tb_salas_transmision.linkChat, tb_salas_transmision.linkTransmision, tb_salas_transmision.linkLiveTiming1, tb_salas_transmision.linkLiveTiming2, tb_salas_transmision.linkBotonera, tb_salas_transmision.linkObsControl, tb_salas_transmision.mensajeControl, tb_divisiones.requiereConfirmacion, tb_salas_transmision.linkCamaraCompartida
  FROM ((tb_salas_transmision LEFT JOIN tb_calendario ON tb_salas_transmision.idCalendario = tb_calendario.id) LEFT JOIN tb_divisiones ON tb_calendario.idDivision = tb_divisiones.id) LEFT JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo
  WHERE (((tb_salas_transmision.idEstado)=1))
  ORDER BY tb_salas_transmision.noOrden;`;
    try {
        const respuesta = yield models.tb_salas_transmision.sequelize.query(query, {
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
exports.gettablaLocutores = gettablaLocutores;
const SelectorCarreraLocutores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `SELECT CONCAT(tb_calendario.id,' - ',tb_torneos.nombre,' - ',tb_divisiones.nombre,' - ',tb_calendario.nombreEvento) AS Evento, tb_calendario.id FROM (tb_divisiones INNER JOIN tb_calendario ON tb_divisiones.id = tb_calendario.idDivision) INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo WHERE (tb_calendario.idEstadoCarrera = 1) AND (tb_divisiones.idEstado = 1) AND (tb_torneos.idEstadoTorneo = 1) AND tb_calendario.fechaHoraCarrera BETWEEN DATE_SUB(CURDATE(), INTERVAL 1 DAY) AND DATE_ADD(CURDATE(), INTERVAL 15 DAY) ORDER BY tb_calendario.fechaHoraCarrera;`;
    try {
        const respuesta = yield models.tb_calendario.sequelize.query(query, {
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
exports.SelectorCarreraLocutores = SelectorCarreraLocutores;
const LIMPIARSALATRANSMISION = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `CALL limpiar_sala_transmision(${id})`;
    try {
        const respuesta = yield models.tb_calendario.sequelize.query(query, {
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
exports.LIMPIARSALATRANSMISION = LIMPIARSALATRANSMISION;
const getTransmisiones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield models.tb_salas_transmision.findAll({});
    return res.json({
        data
    });
});
exports.getTransmisiones = getTransmisiones;
const updateSala = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, idCalendario } = req.body;
    try {
        const data = yield models.tb_salas_transmision.update({
            idCalendario: idCalendario
        }, {
            where: {
                id: id
            }
        });
        return res.json({
            ok: true,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.updateSala = updateSala;
const pestanaOverlays = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT tb_tipos_overlay.nombreOverlay, tb_tipos_overlay.esCam, tb_tipos_overlay.escenaObs, tb_overlay_transmisiones.id, tb_overlay_transmisiones.valor FROM tb_overlay_transmisiones INNER JOIN tb_tipos_overlay ON tb_overlay_transmisiones.idOverlay = tb_tipos_overlay.id WHERE (((tb_tipos_overlay.esCam)=0) AND ((tb_tipos_overlay.idEstado)=1) AND ((tb_overlay_transmisiones.esVisible)=1) AND ((tb_overlay_transmisiones.idEstado)=1) AND ((tb_overlay_transmisiones.idSala)=${id}));
  `;
    try {
        const respuesta = yield models.tb_calendario.sequelize.query(query, {
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
exports.pestanaOverlays = pestanaOverlays;
const SelectPOverlayRequiereConfirmacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT IF(tb_sim_plat_codplat.isVisible=0,tb_pilotos.nombreCorto,CONCAT(tb_pilotos.nombreCorto,' - (',tb_pilotos_id_sim.idSimPiloto,')')) AS Piloto, tb_parrilla_calendario.idPiloto FROM ( ( ( ( tb_parrilla_calendario INNER JOIN tb_divisiones_pilotos ON tb_parrilla_calendario.idDivision = tb_divisiones_pilotos.idNombreDivision ) INNER JOIN tb_inscripciones ON( tb_parrilla_calendario.idPiloto = tb_inscripciones.idPiloto ) AND( tb_divisiones_pilotos.idInscripcion = tb_inscripciones.id ) ) INNER JOIN tb_pilotos ON tb_inscripciones.idPiloto = tb_pilotos.id ) INNER JOIN tb_pilotos_id_sim ON tb_inscripciones.idPilotoIdSim = tb_pilotos_id_sim.id ) INNER JOIN tb_sim_plat_codplat ON tb_pilotos_id_sim.idSimCodPlataforma = tb_sim_plat_codplat.id WHERE ( ( ( tb_parrilla_calendario.idCalendario ) = ${id} ) ) ORDER BY tb_pilotos.nombreCorto;`;
    try {
        const respuesta = yield models.tb_calendario.sequelize.query(query, {
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
exports.SelectPOverlayRequiereConfirmacion = SelectPOverlayRequiereConfirmacion;
const SelectPOverlayNoRequiereConfirmacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT IF(tb_sim_plat_codplat.isVisible=0,tb_pilotos.nombreCorto,CONCAT(tb_pilotos.nombreCorto,' - (',tb_pilotos_id_sim.idSimPiloto,')')) AS Piloto, tb_pilotos.id FROM tb_calendario INNER JOIN( ( ( ( tb_divisiones_pilotos INNER JOIN tb_inscripciones ON tb_divisiones_pilotos.idInscripcion = tb_inscripciones.id ) INNER JOIN tb_pilotos ON tb_inscripciones.idPiloto = tb_pilotos.id ) INNER JOIN tb_pilotos_id_sim ON tb_inscripciones.idPilotoIdSim = tb_pilotos_id_sim.id ) INNER JOIN tb_sim_plat_codplat ON tb_pilotos_id_sim.idSimCodPlataforma = tb_sim_plat_codplat.id ) ON tb_calendario.idDivision = tb_divisiones_pilotos.idNombreDivision WHERE (((tb_calendario.id) = ${id})) ORDER BY tb_pilotos.nombreCorto;`;
    try {
        const respuesta = yield models.tb_calendario.sequelize.query(query, {
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
exports.SelectPOverlayNoRequiereConfirmacion = SelectPOverlayNoRequiereConfirmacion;
const updatetTb_overlay_transmisiones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, idPiloto } = req.body;
    const respuesta = yield models.tb_overlay_transmisiones.update({
        valor: idPiloto
    }, {
        where: { id: id }
    });
    return res.status(201).json({
        ok: true,
        respuesta,
        msg: 'Actualización correcta'
    });
});
exports.updatetTb_overlay_transmisiones = updatetTb_overlay_transmisiones;
const getTablaCams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT tb_tipos_overlay.nombreOverlay, tb_tipos_overlay.esCam, tb_tipos_overlay.escenaObs, tb_overlay_transmisiones.id, tb_overlay_transmisiones.valor FROM tb_overlay_transmisiones INNER JOIN tb_tipos_overlay ON tb_overlay_transmisiones.idOverlay = tb_tipos_overlay.id WHERE (((tb_tipos_overlay.esCam)=1) AND ((tb_tipos_overlay.idEstado)=1) AND ((tb_overlay_transmisiones.esVisible)=1) AND ((tb_overlay_transmisiones.idEstado)=1) AND ((tb_overlay_transmisiones.idSala)=${id}));`;
    try {
        const respuesta = yield models.tb_overlay_transmisiones.sequelize.query(query, {
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
exports.getTablaCams = getTablaCams;
const selectTablaCams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = `SELECT tb_pilotos.nombreCorto AS Piloto, tb_camaras_transmisiones.idPiloto FROM tb_camaras_transmisiones INNER JOIN tb_pilotos ON tb_camaras_transmisiones.idPiloto = tb_pilotos.id WHERE (((tb_camaras_transmisiones.idPerfil)=2) AND ((tb_camaras_transmisiones.idCalendario)= ${id})) ORDER BY tb_pilotos.nombreCorto;`;
    try {
        const respuesta = yield models.tb_camaras_transmisiones.sequelize.query(query, {
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
exports.selectTablaCams = selectTablaCams;
const updatetb_salas_transmision = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, linkChat, linkTransmision, linkLiveTiming1, linkLiveTiming2, linkBotonera, linkObsControl, linkCamaraCompartida } = req.body;
    console.log({ id, linkChat, linkTransmision, linkLiveTiming1, linkLiveTiming2, linkBotonera, linkObsControl, linkCamaraCompartida });
    try {
        const respuesta = yield models.tb_salas_transmision.update({
            linkChat: linkChat,
            linkTransmision: linkTransmision,
            linkLiveTiming1: linkLiveTiming1,
            linkLiveTiming2: linkLiveTiming2,
            linkBotonera: linkBotonera,
            linkObsControl: linkObsControl,
            linkCamaraCompartida: linkCamaraCompartida
        }, {
            where: {
                id: id
            }
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
exports.updatetb_salas_transmision = updatetb_salas_transmision;
const SelectorMensaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `SELECT tb_mensajes_radio.nombre, tb_mensajes_radio.id FROM tb_mensajes_radio ORDER BY tb_mensajes_radio.nombre;`;
    try {
        const respuesta = yield models.tb_mensajes_radio.sequelize.query(query, {
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
exports.SelectorMensaje = SelectorMensaje;
const insertTbRadioTransmisores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idSala, idPiloto, idMensaje, personalizadoPiloto, personalizadoEquipo, } = req.body;
    try {
        const respuesta = yield models.tb_radio_transmisiones.update({
            idPiloto: idPiloto,
            idMensaje: idMensaje,
            personalizadoPiloto: personalizadoPiloto,
            personalizadoEquipo: personalizadoEquipo,
        }, {
            where: {
                idSala: idSala
            }
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
exports.insertTbRadioTransmisores = insertTbRadioTransmisores;
//# sourceMappingURL=locutores.js.map