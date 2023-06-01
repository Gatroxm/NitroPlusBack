import { Router } from "express";

import { getReportesHostorial, getResultadosHostorial } from "../controller/historial";
const routerHistorial = Router();

routerHistorial.get('/historial-reportes/:id', getReportesHostorial);
routerHistorial.get('/historial-resultados/:id', getResultadosHostorial);

export default routerHistorial;
