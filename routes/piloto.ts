import { Router } from "express";
import { changePassword, createPiloto, getAllPilotos, getPiloto, getPilotosDesActivados, LogIn, updatePiloto, updatePilotoInActivo } from "../controller/piloto";

const routerPolitos = Router();

routerPolitos.get('/', getAllPilotos);
routerPolitos.get('/in-activos', getPilotosDesActivados);
routerPolitos.put('/register-update', updatePilotoInActivo);
routerPolitos.get('/:id', getPiloto);
routerPolitos.post('/login', LogIn);
routerPolitos.post('/register', createPiloto);
routerPolitos.put('/changue-parword', changePassword);
routerPolitos.put('/edit', updatePiloto);

export default routerPolitos;