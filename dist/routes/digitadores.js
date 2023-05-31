"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const digitadores_1 = require("../controller/digitadores");
const routerDigitadores = (0, express_1.Router)();
routerDigitadores.get('/', digitadores_1.getDigitadores);
routerDigitadores.get('/torneos-digitadores/:id', digitadores_1.getTornesoDigitadores);
routerDigitadores.get('/posiciones-digitadores', digitadores_1.getPosiscionesDigitadores);
routerDigitadores.get('/piloto-digitadores/:id', digitadores_1.getPilotosDigitadores);
routerDigitadores.get('/coche-digitadores/:id', digitadores_1.getCocheDigitadores);
routerDigitadores.get('/equipo-digitadores/:id', digitadores_1.getEquipoDigitadores);
routerDigitadores.post('/insert-resultados', digitadores_1.createRegistrosMasivosTblResultados);
exports.default = routerDigitadores;
//# sourceMappingURL=digitadores.js.map