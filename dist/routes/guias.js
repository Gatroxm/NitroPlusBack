"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const guias_1 = require("../controller/guias");
const routerGias = (0, express_1.Router)();
routerGias.get('/', guias_1.getGias);
exports.default = routerGias;
//# sourceMappingURL=guias.js.map