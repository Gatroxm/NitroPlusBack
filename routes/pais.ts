import { Router } from "express";
import { getPaices } from "../controller/pais";
const routerPaices = Router();

routerPaices.get('/', getPaices);

export default routerPaices;