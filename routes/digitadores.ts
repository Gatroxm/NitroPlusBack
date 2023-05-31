import { Router } from "express";
import { createRegistrosMasivosTblResultados, getCocheDigitadores, getDigitadores, getEquipoDigitadores, getPilotosDigitadores, getPosiscionesDigitadores, getTornesoDigitadores } from "../controller/digitadores";

const routerDigitadores = Router();

routerDigitadores.get('/', getDigitadores);
routerDigitadores.get('/torneos-digitadores/:id', getTornesoDigitadores);
routerDigitadores.get('/posiciones-digitadores', getPosiscionesDigitadores);
routerDigitadores.get('/piloto-digitadores/:id', getPilotosDigitadores);
routerDigitadores.get('/coche-digitadores/:id', getCocheDigitadores);
routerDigitadores.get('/equipo-digitadores/:id', getEquipoDigitadores);
routerDigitadores.post('/insert-resultados', createRegistrosMasivosTblResultados);

export default routerDigitadores;