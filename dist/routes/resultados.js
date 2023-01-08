"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consultas_1 = require("../controller/consultas");
const routerConsultas = (0, express_1.Router)();
routerConsultas.get('/', consultas_1.totalResultados);
;
exports.default = routerConsultas;
//# sourceMappingURL=resultados.js.map