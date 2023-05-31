"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const locutores_1 = require("../controller/locutores");
const routerLocutores = (0, express_1.Router)();
routerLocutores.get('/', locutores_1.gettablaLocutores);
routerLocutores.get('/get', locutores_1.getTransmisiones);
routerLocutores.get('/getTablaCams/:id', locutores_1.getTablaCams);
routerLocutores.get('/selectTablaCams/:id', locutores_1.selectTablaCams);
routerLocutores.get('/slecector-carrera-locutores', locutores_1.SelectorCarreraLocutores);
routerLocutores.get('/limpiarsalatransmision/:id', locutores_1.LIMPIARSALATRANSMISION);
routerLocutores.get('/pestanaOverlays/:id', locutores_1.pestanaOverlays);
routerLocutores.get('/SelectPOverlayRequiereConfirmacion/:id', locutores_1.SelectPOverlayRequiereConfirmacion);
routerLocutores.get('/SelectPOverlayNoRequiereConfirmacion/:id', locutores_1.SelectPOverlayNoRequiereConfirmacion);
routerLocutores.put('/updateSala', locutores_1.updateSala);
routerLocutores.put('/updatetTb_overlay_transmisiones', locutores_1.updatetTb_overlay_transmisiones);
routerLocutores.put('/updatetb_salas_transmision', locutores_1.updatetb_salas_transmision);
exports.default = routerLocutores;
//# sourceMappingURL=locutores.js.map