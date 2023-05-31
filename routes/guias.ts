import { Router } from "express";
import { getGias } from "../controller/guias";
const routerGias = Router();

routerGias.get('/', getGias);

export default routerGias;