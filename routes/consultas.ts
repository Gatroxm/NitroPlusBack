import { Router } from "express";
import { 
    getCalendario,
    getDNF,
    getDSQ,
    getPilotoDelDia,
    getPodios,
    getPoles,
    getProximasCarreras,
    getUltimosReportesEnviados,
    getUltimosResultados,
    getVueltaRapida,
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
routerConsultas.get('/podios/:id', getPodios);
routerConsultas.get('/dnf/:id', getDNF);
routerConsultas.get('/dsq/:id', getDSQ);
routerConsultas.get('/poles/:id', getPoles);
routerConsultas.get('/vueltaRapidas/:id', getVueltaRapida );
routerConsultas.get('/pilotoDelDia/:id', getPilotoDelDia );
routerConsultas.get('/calendario', getCalendario );

export default routerConsultas;