"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const torneos_1 = require("../controller/torneos");
const routerTorneos = (0, express_1.Router)();
routerTorneos.get('/tabla-inscritos/:id', torneos_1.getInscritosTorneo);
routerTorneos.get('/tabla-form-torneos/:id', torneos_1.getFormInscripcion);
routerTorneos.get('/lista-form-torneos/:idPiloto/:idTorneo', torneos_1.slectidentificadorPilotoSim);
routerTorneos.get('/lista-coches-form-torneos/:id', torneos_1.selectIdCocheInicial);
routerTorneos.get('/lista-equipo-form-torneos/:id', torneos_1.selectIdEquipoInicial);
routerTorneos.get('/pregunta/:id', torneos_1.pregunta);
routerTorneos.get('/respuesta/:id', torneos_1.respuestasTipoUno);
routerTorneos.post('/insert-inscripcion', torneos_1.insertInscription);
routerTorneos.post('/insert-reserva', torneos_1.insertReserva);
routerTorneos.get('/lista-form-reservas/:idPiloto/:idTorneo', torneos_1.getListadoReserva);
exports.default = routerTorneos;
//# sourceMappingURL=torneo.js.map