import { Router } from "express";
import { getComunicados } from "../controller/comunicados";
const routerComunicados = Router();

routerComunicados.get('/', getComunicados);

export default routerComunicados;