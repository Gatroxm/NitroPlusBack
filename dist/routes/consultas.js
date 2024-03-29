"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consultas_1 = require("../controller/consultas");
const routerConsultas = (0, express_1.Router)();
routerConsultas.get('/participaciones/:id', consultas_1.totalParticipaciones);
;
routerConsultas.get('/victorias/:id', consultas_1.totalVictorias);
;
routerConsultas.get('/shortNamePilot/:id', consultas_1.nombreCortoPiloto);
routerConsultas.get('/ProximasCarreras/:id', consultas_1.getProximasCarreras);
routerConsultas.get('/UltimosResultados/:id', consultas_1.getUltimosResultados);
routerConsultas.get('/UltimosReportesResibidos/:id', consultas_1.gteUltimosReportesEnProceso);
routerConsultas.get('/UltimosReportesEnviados/:id', consultas_1.getUltimosReportesCerrados);
routerConsultas.get('/podios/:id', consultas_1.getPodios);
routerConsultas.get('/dnf/:id', consultas_1.getDNF);
routerConsultas.get('/dsq/:id', consultas_1.getDSQ);
routerConsultas.get('/poles/:id', consultas_1.getPoles);
routerConsultas.get('/vueltaRapidas/:id', consultas_1.getVueltaRapida);
routerConsultas.get('/pilotoDelDia/:id', consultas_1.getPilotoDelDia);
routerConsultas.get('/calendario', consultas_1.getCalendario);
routerConsultas.get('/simuladores/:id', consultas_1.getSimuladores);
routerConsultas.get('/licencias/:id', consultas_1.getLicencias);
routerConsultas.get('/reportes/:id', consultas_1.getReportes);
routerConsultas.get('/resultados/:id', consultas_1.getResultados);
routerConsultas.get('/getRepeticiones/:id', consultas_1.getRepeticiones);
exports.default = routerConsultas;
//# sourceMappingURL=consultas.js.map