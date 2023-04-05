import { Router } from "express";
import { InsertInscripcion, getCalendarioLicencias, getTiemposActuales, getTorneos } from "../controller/licencias";
const routerLicencias = Router();

routerLicencias.get('/calendario/:id', getCalendarioLicencias);
routerLicencias.get('/torneos/:id', getTorneos);
routerLicencias.get('/tiempos-actuales/:idPiloto/:idClasificacion', getTiemposActuales);
routerLicencias.post('/inscripcion', InsertInscripcion);

export default routerLicencias;