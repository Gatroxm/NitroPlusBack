import { Router } from "express";
import { getAllPilotos, getPiloto, getPilotosDesActivados, LogIn, updatePilotoInActivo } from "../controller/piloto";

const routerPolitos = Router();

routerPolitos.get('/', getAllPilotos);
routerPolitos.get('/in-activos', getPilotosDesActivados);
routerPolitos.put('/register-update', updatePilotoInActivo);
routerPolitos.get('/:id', getPiloto);
routerPolitos.post('/login', LogIn);

export default routerPolitos;