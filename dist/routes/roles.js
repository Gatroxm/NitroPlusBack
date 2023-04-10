"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roles_1 = require("../controller/roles");
const routerRoles = (0, express_1.Router)();
routerRoles.get('/rol-piloto/:id', roles_1.Roles);
exports.default = routerRoles;
//# sourceMappingURL=roles.js.map