"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportesComisarios_1 = require("../controller/reportesComisarios");
const routerReportesComisarios = (0, express_1.Router)();
routerReportesComisarios.get('/reportes-pendientes/:id', reportesComisarios_1.getReportesPendientes);
routerReportesComisarios.get('/sancion-propuesta', reportesComisarios_1.getSancionPropuesta);
routerReportesComisarios.get('/gravedad/:id', reportesComisarios_1.getGravedad);
routerReportesComisarios.put('/update-conceptos', reportesComisarios_1.updateConceptos);
routerReportesComisarios.get('/historial-reportes/:id', reportesComisarios_1.getHistorialDeReportes);
routerReportesComisarios.get('/sanciones/:id', reportesComisarios_1.pestannaSancionados);
routerReportesComisarios.get('/conceptos/:id', reportesComisarios_1.pestannaConceptos);
routerReportesComisarios.get('/reportes-pendientes-lideres/:id', reportesComisarios_1.pestannaConceptosReportesPendientesLideres);
routerReportesComisarios.post('/call-aplica-sancion', reportesComisarios_1.callAplicarSancion);
exports.default = routerReportesComisarios;
//# sourceMappingURL=reportesComisarios.js.map