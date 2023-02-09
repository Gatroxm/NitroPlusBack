import { Router } from "express";
import { LoginDiscord } from "../controller/discord";
const routerDiscord = Router();

routerDiscord.get('/login-discord', LoginDiscord);

export default routerDiscord;