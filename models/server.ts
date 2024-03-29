import express, { Application } from "express";
import cors from "cors"
/* Conexion */
import db from "../db/connection";

import pilotRouter from '../routes/piloto';
import routerConsultas from "../routes/consultas";
import routerPaices from "../routes/pais";
import routerDiscord from "../routes/discord";
import routerMandos from "../routes/mandos";
import routerSimuladores from "../routes/simuladores";
import routerNotificaciones from "../routes/notificaciones";
import routerComunicados from "../routes/comunicados";
import routerCards from "../routes/cards";
import routerLicencias from "../routes/licencias";
import routerTorneos from "../routes/torneo";
import routerRoles from "../routes/roles";
import routerApoyo from "../routes/apoyanos";
import routerReportesComisarios from "../routes/reportesComisarios";
import routerDigitadores from "../routes/digitadores";
import routerGias from "../routes/guias";
import routerLocutores from "../routes/locutores";
import routerHistorial from "../routes/historial";

class Server {

    private app: Application;
    private port: string;

    private apiPaths = {
        pilotos: '/api/pilotos',
        consultas: '/api/consultas',
        pais: '/api/pais',
        discord: '/api/discord',
        mandos: '/api/mandos',
        simuladores: '/api/simuladores',
        notificaciones: '/api/notificaciones',
        comunicados: '/api/comunicados',
        cards: '/api/cards',
        licencias: '/api/licencias',
        torneo: '/api/torneo',
        rol: '/api/rol',
        apoyo: '/api/apoyo',
        reportesComisarios: '/api/reportes-comisaros',
        digitadores: '/api/digitadores',
        guias: '/api/guias',
        locutores: '/api/locutores',
        historial: '/api/historial',
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
        this.app.use(this.apiPaths.simuladores, routerSimuladores );
        this.app.use(this.apiPaths.notificaciones, routerNotificaciones );
        this.app.use(this.apiPaths.comunicados, routerComunicados );
        this.app.use(this.apiPaths.cards, routerCards );
        this.app.use(this.apiPaths.licencias, routerLicencias );
        this.app.use(this.apiPaths.torneo, routerTorneos );
        this.app.use(this.apiPaths.rol, routerRoles );
        this.app.use(this.apiPaths.apoyo, routerApoyo );
        this.app.use(this.apiPaths.reportesComisarios, routerReportesComisarios );
        this.app.use(this.apiPaths.digitadores, routerDigitadores );
        this.app.use(this.apiPaths.guias, routerGias );
        this.app.use(this.apiPaths.locutores, routerLocutores );
        this.app.use(this.apiPaths.historial, routerHistorial );
    }

    lisent() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en ${this.port}`)
        });
    }

}

export default Server;