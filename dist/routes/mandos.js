"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mandos_1 = require("../controller/mandos");
const routerMandos = (0, express_1.Router)();
routerMandos.get('/', mandos_1.getMandos);
exports.default = routerMandos;
//# sourceMappingURL=mandos.js.map