"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comunicados_1 = require("../controller/comunicados");
const routerComunicados = (0, express_1.Router)();
routerComunicados.get('/:id', comunicados_1.getComunicados);
routerComunicados.get('/comunicados-no-leidos/:id', comunicados_1.getComunicadosLeidos);
routerComunicados.put('/', comunicados_1.PutComunicado);
exports.default = routerComunicados;
//# sourceMappingURL=comunicados.js.map