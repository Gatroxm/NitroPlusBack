
import { Router } from "express";
import { Roles } from "../controller/roles";


const routerRoles = Router();

routerRoles.get('/rol-piloto/:id', Roles);

export default routerRoles;