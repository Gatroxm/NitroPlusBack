import { Router } from "express";
import { createIndicador, getSimuladores, getSimuladoresById, updateIndicadorStatus } from "../controller/simulador";

const routerSimuladores = Router();

routerSimuladores.get('/',getSimuladores);
routerSimuladores.get('/identificadores/:id',getSimuladoresById);
routerSimuladores.post('/indicador',createIndicador);
routerSimuladores.put('/indicador',updateIndicadorStatus);

export default routerSimuladores;