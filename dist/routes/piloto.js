"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const piloto_1 = require("../controller/piloto");
const routerPolitos = (0, express_1.Router)();
routerPolitos.get('/', piloto_1.getAllPilotos);
routerPolitos.get('/:id', piloto_1.getPiloto);
routerPolitos.post('/login', piloto_1.LogIn);
exports.default = routerPolitos;
//# sourceMappingURL=piloto.js.map