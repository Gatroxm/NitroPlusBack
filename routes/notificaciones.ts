import { Router } from "express";
import { getNotificaciones } from "../controller/notificaciones";
const routerNotificaciones = Router();

routerNotificaciones.get('/:id', getNotificaciones);

export default routerNotificaciones;