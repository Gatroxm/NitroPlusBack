import { Router } from "express";
import { getAllPilotos, getPiloto, LogIn } from "../controller/piloto";

const routerPolitos = Router();

routerPolitos.get('/', getAllPilotos);
routerPolitos.get('/:id', getPiloto);
routerPolitos.post('/login', LogIn);

export default routerPolitos;