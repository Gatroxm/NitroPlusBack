import { Router } from "express";
import { getApoyanosNitro, getTiendaOficial } from "../controller/apoyanos";
const routerApoyo = Router();

routerApoyo.get('/nitro', getApoyanosNitro)
routerApoyo.get('/tienda-oficial', getTiendaOficial)

export default routerApoyo;