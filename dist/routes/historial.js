"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const historial_1 = require("../controller/historial");
const routerHistorial = (0, express_1.Router)();
routerHistorial.get('/historial-reportes/:id', historial_1.getReportesHostorial);
routerHistorial.get('/historial-resultados/:id', historial_1.getResultadosHostorial);
exports.default = routerHistorial;
//# sourceMappingURL=historial.js.map