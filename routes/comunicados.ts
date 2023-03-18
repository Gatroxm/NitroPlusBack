import { Router } from "express";
import { getComunicados } from "../controller/comunicados";
const routerComunicados = Router();

routerComunicados.get('/:id', getComunicados);

export default routerComunicados;