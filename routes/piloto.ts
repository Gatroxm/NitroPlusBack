import { Router } from "express";
import { 
    changePassword, 
    createPiloto, 
    getAllPilotos, 
    getImagenPiloto, 
    getPiloto, 
    getPilotoByidSim, 
    getPilotosDesActivados, 
    LogIn, 
    updatePiloto, 
    updatePilotoInActivo,
    AceptaWhatsapp,
    AceptaCorreos
} from "../controller/piloto";

const routerPolitos = Router();

routerPolitos.get('/', getAllPilotos);
routerPolitos.get('/in-activos', getPilotosDesActivados);
routerPolitos.get('/potoBySim', getPilotoByidSim);
routerPolitos.put('/register-update', updatePilotoInActivo);
routerPolitos.get('/:id', getPiloto);
routerPolitos.get('/imagen/:id', getImagenPiloto);
routerPolitos.post('/login', LogIn);
routerPolitos.post('/register', createPiloto);
routerPolitos.put('/changue-parword', changePassword);
routerPolitos.put('/edit', updatePiloto);
routerPolitos.put('/AceptaCorreos', AceptaCorreos);
routerPolitos.put('/AceptaWhatsapp', AceptaWhatsapp);

export default routerPolitos;