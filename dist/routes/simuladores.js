"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const simulador_1 = require("../controller/simulador");
const routerSimuladores = (0, express_1.Router)();
routerSimuladores.get('/', simulador_1.getSimuladores);
routerSimuladores.get('/identificadores/:id', simulador_1.getSimuladoresById);
routerSimuladores.post('/indicador', simulador_1.createIndicador);
routerSimuladores.put('/indicador', simulador_1.updateIndicadorStatus);
exports.default = routerSimuladores;
//# sourceMappingURL=simuladores.js.map