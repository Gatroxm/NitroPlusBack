import express, { Application } from "express";
import cors from "cors"
/* Conexion */
import db from "../db/connection";

import pilotRouter from '../routes/piloto';
import routerConsultas from "../routes/consultas";
import routerPaices from "../routes/pais";
import routerDiscord from "../routes/discord";
import routerMandos from "../routes/mandos";

class Server {

    private app: Application;
    private port: string;

    private apiPaths = {
        pilotos: '/api/pilotos',
        consultas: '/api/consultas',
        pais: '/api/pais',
        discord: '/api/discord',
        mandos: '/api/mandos'
    }

    constructor(){

        this.app = express();
        this.port = process.env.PORT || '3000';
        this.dbConnection();
        this.middelwares();
        this.routes();

    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }

    middelwares(){
        //Cors
        this.app.use(cors());

        //parseo de Body
        this.app.use(express.json());

        //Carpeta publica
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.apiPaths.pilotos, pilotRouter );
        this.app.use(this.apiPaths.consultas, routerConsultas );
        this.app.use(this.apiPaths.pais, routerPaices );
        this.app.use(this.apiPaths.discord, routerDiscord );
        this.app.use(this.apiPaths.mandos, routerMandos );
    }

    lisent() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en ${this.port}`)
        });
    }

}

export default Server;