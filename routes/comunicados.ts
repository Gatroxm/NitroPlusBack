import { Router } from "express";
import { PutComunicado, getComunicados, getComunicadosLeidos } from "../controller/comunicados";
const routerComunicados = Router();

routerComunicados.get('/:id', getComunicados);
routerComunicados.get('/comunicados-no-leidos/:id', getComunicadosLeidos);
routerComunicados.put('/', PutComunicado);

export default routerComunicados;