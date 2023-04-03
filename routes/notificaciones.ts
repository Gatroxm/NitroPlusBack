import { Router } from "express";
import { getNotificaciones, updateNotification } from "../controller/notificaciones";
const routerNotificaciones = Router();

routerNotificaciones.get('/:id', getNotificaciones);
routerNotificaciones.put('/:id', updateNotification);

export default routerNotificaciones;