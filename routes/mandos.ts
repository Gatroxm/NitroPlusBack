import { Router } from "express";
import { getMandos } from "../controller/mandos";
const routerMandos = Router();

routerMandos.get('/', getMandos);

export default routerMandos;