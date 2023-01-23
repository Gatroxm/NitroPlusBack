import { Router } from "express";
import { 
    getProximasCarreras,
    getUltimosReportesEnviados,
    getUltimosResultados,
    gteUltimosReportesRecibidos,
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
routerConsultas.get('/UltimosReportesResibidos/:id', gteUltimosReportesRecibidos);
routerConsultas.get('/UltimosReportesEnviados/:id', getUltimosReportesEnviados);

export default routerConsultas;