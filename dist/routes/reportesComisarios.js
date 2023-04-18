"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportesComisarios_1 = require("../controller/reportesComisarios");
const routerReportesComisarios = (0, express_1.Router)();
routerReportesComisarios.get('/reportes-pendientes/:id', reportesComisarios_1.getReportesPendientes);
routerReportesComisarios.get('/sancion-propuesta', reportesComisarios_1.getSancionPropuesta);
routerReportesComisarios.get('/gravedad', reportesComisarios_1.getGravedad);
routerReportesComisarios.put('/update-conceptos', reportesComisarios_1.updateConceptos);
exports.default = routerReportesComisarios;
//# sourceMappingURL=reportesComisarios.js.map