import { Router } from "express";

import { getReportesHostorial } from "../controller/historial";
const routerHistorial = Router();

routerHistorial.get('/historial-reportes/:id', getReportesHostorial);

export default routerHistorial;
