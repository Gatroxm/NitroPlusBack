"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notificaciones_1 = require("../controller/notificaciones");
const routerNotificaciones = (0, express_1.Router)();
routerNotificaciones.get('/:id', notificaciones_1.getNotificaciones);
routerNotificaciones.put('/:id', notificaciones_1.updateNotification);
exports.default = routerNotificaciones;
//# sourceMappingURL=notificaciones.js.map