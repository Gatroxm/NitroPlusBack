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
exports.default = routerConsultas;
//# sourceMappingURL=consultas.js.map