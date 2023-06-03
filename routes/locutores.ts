import { Router } from "express";
import { LIMPIARSALATRANSMISION, SelectPOverlayNoRequiereConfirmacion, SelectPOverlayRequiereConfirmacion, SelectorCarreraLocutores, SelectorMensaje, getTablaCams, getTransmisiones, gettablaLocutores, insertTbRadioTransmisores, pestanaOverlays, selectTablaCams, updateSala, updatetTb_overlay_transmisiones, updatetb_salas_transmision } from "../controller/locutores";
const routerLocutores = Router();

routerLocutores.get('/', gettablaLocutores);
routerLocutores.get('/get', getTransmisiones);
routerLocutores.get('/getTablaCams/:id', getTablaCams);
routerLocutores.get('/selectTablaCams/:id', selectTablaCams);
routerLocutores.get('/slecector-carrera-locutores', SelectorCarreraLocutores);
routerLocutores.get('/limpiarsalatransmision/:id', LIMPIARSALATRANSMISION);
routerLocutores.get('/pestanaOverlays/:id', pestanaOverlays);
routerLocutores.get('/SelectPOverlayRequiereConfirmacion/:id', SelectPOverlayRequiereConfirmacion);
routerLocutores.get('/SelectPOverlayNoRequiereConfirmacion/:id', SelectPOverlayNoRequiereConfirmacion);
routerLocutores.get('/SelectorMensaje', SelectorMensaje);
routerLocutores.put('/updateSala', updateSala);
routerLocutores.put('/updatetTb_overlay_transmisiones', updatetTb_overlay_transmisiones);
routerLocutores.put('/updatetb_salas_transmision', updatetb_salas_transmision);
routerLocutores.put('/insertTbRadioTransmisores', insertTbRadioTransmisores);

export default routerLocutores;
