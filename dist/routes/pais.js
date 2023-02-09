"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pais_1 = require("../controller/pais");
const routerPaices = (0, express_1.Router)();
routerPaices.get('/', pais_1.getPaices);
exports.default = routerPaices;
//# sourceMappingURL=pais.js.map