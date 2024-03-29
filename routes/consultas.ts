import { Router } from "express";
import { 
    getLicencias,
    getCalendario,
    getDNF,
    getDSQ,
    getPilotoDelDia,
    getPodios,
    getPoles,
    getProximasCarreras,
    getSimuladores,
    getUltimosReportesCerrados,
    getUltimosResultados,
    getVueltaRapida,
    gteUltimosReportesEnProceso,
    nombreCortoPiloto,
    totalParticipaciones,
    totalVictorias, 
    getReportes,
    getResultados,
    getRepeticiones
} from "../controller/consultas";

const routerConsultas = Router();

routerConsultas.get('/participaciones/:id', totalParticipaciones);;
routerConsultas.get('/victorias/:id', totalVictorias);;
routerConsultas.get('/shortNamePilot/:id', nombreCortoPiloto);
routerConsultas.get('/ProximasCarreras/:id', getProximasCarreras);
routerConsultas.get('/UltimosResultados/:id', getUltimosResultados);
routerConsultas.get('/UltimosReportesResibidos/:id', gteUltimosReportesEnProceso);
routerConsultas.get('/UltimosReportesEnviados/:id', getUltimosReportesCerrados);
routerConsultas.get('/podios/:id', getPodios);
routerConsultas.get('/dnf/:id', getDNF);
routerConsultas.get('/dsq/:id', getDSQ);
routerConsultas.get('/poles/:id', getPoles);
routerConsultas.get('/vueltaRapidas/:id', getVueltaRapida );
routerConsultas.get('/pilotoDelDia/:id', getPilotoDelDia );
routerConsultas.get('/calendario', getCalendario );
routerConsultas.get('/simuladores/:id', getSimuladores );
routerConsultas.get('/licencias/:id', getLicencias );
routerConsultas.get('/reportes/:id', getReportes );
routerConsultas.get('/resultados/:id', getResultados );
routerConsultas.get('/getRepeticiones/:id', getRepeticiones );



export default routerConsultas;