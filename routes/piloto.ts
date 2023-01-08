import { Router } from "express";
import { getAllPilotos, getPiloto } from "../controller/piloto";

const routerPolitos = Router();

routerPolitos.get('/', getAllPilotos);
routerPolitos.get('/:id', getPiloto);

export default routerPolitos;