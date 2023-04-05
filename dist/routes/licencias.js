"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const licencias_1 = require("../controller/licencias");
const routerLicencias = (0, express_1.Router)();
routerLicencias.get('/calendario/:id', licencias_1.getCalendarioLicencias);
routerLicencias.get('/torneos/:id', licencias_1.getTorneos);
routerLicencias.get('/tiempos-actuales/:idPiloto/:idClasificacion', licencias_1.getTiemposActuales);
routerLicencias.post('/inscripcion', licencias_1.InsertInscripcion);
exports.default = routerLicencias;
//# sourceMappingURL=licencias.js.map