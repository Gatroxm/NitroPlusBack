"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const piloto_1 = require("../controller/piloto");
const routerPolitos = (0, express_1.Router)();
routerPolitos.get('/', piloto_1.getAllPilotos);
routerPolitos.get('/in-activos', piloto_1.getPilotosDesActivados);
routerPolitos.get('/potoBySim', piloto_1.getPilotoByidSim);
routerPolitos.put('/register-update', piloto_1.updatePilotoInActivo);
routerPolitos.get('/:id', piloto_1.getPiloto);
routerPolitos.get('/imagen/:id', piloto_1.getImagenPiloto);
routerPolitos.post('/login', piloto_1.LogIn);
routerPolitos.post('/register', piloto_1.createPiloto);
routerPolitos.put('/changue-parword', piloto_1.changePassword);
routerPolitos.put('/edit', piloto_1.updatePiloto);
routerPolitos.put('/AceptaCorreos', piloto_1.AceptaCorreos);
routerPolitos.put('/AceptaWhatsapp', piloto_1.AceptaWhatsapp);
exports.default = routerPolitos;
//# sourceMappingURL=piloto.js.map