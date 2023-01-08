import { Router } from "express";
import { 
    getProximasCarreras,
    getUltimosResultados,
    nombreCortoPiloto,
    totalParticipaciones,
    totalVictorias 
} from "../controller/consultas";

const routerConsultas = Router();

routerConsultas.get('/participaciones/:id', totalParticipaciones);;
routerConsultas.get('/victorias/:id', totalVictorias);;
routerConsultas.get('/shortNamePilot/:id', nombreCortoPiloto);
routerConsultas.get('/ProximasCarreras/:id', getProximasCarreras);
routerConsultas.get('/UltimosResultados/:id', getUltimosResultados);

export default routerConsultas;