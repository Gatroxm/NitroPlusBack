"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cards_1 = require("../controller/cards");
const routerCards = (0, express_1.Router)();
routerCards.get('/tabla-reultados/:id', cards_1.tablaResultados);
routerCards.post('/insert-repeticiones', cards_1.InsertTbRepeticiones);
routerCards.get('/tabla-posiciones/:id', cards_1.tblPosiciones);
routerCards.get('/listado-pilotos-participantes/:id', cards_1.getPilotosParticipantes);
routerCards.post('/insert-reporte', cards_1.GuardadoReporte);
routerCards.get('/tabla-repeticiones/:id', cards_1.getTblaRepeticiones);
routerCards.get('/tabla-confirmados/:id', cards_1.tablaConfirmados);
routerCards.get('/modal-informacion-generla/:id', cards_1.modalInformacionGeneral);
routerCards.post('/apelaciones', cards_1.InsertApelacionAclaracion);
routerCards.post('/confirmacion', cards_1.confirmacion);
routerCards.get('/infoTorneo/:id', cards_1.InfoTorneo);
exports.default = routerCards;
//# sourceMappingURL=cards.js.map