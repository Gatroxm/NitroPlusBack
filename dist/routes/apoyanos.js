"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apoyanos_1 = require("../controller/apoyanos");
const routerApoyo = (0, express_1.Router)();
routerApoyo.get('/nitro', apoyanos_1.getApoyanosNitro);
routerApoyo.get('/tienda-oficial', apoyanos_1.getTiendaOficial);
exports.default = routerApoyo;
//# sourceMappingURL=apoyanos.js.map