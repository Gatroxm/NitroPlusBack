"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
/* Conexion */
const connection_1 = __importDefault(require("../db/connection"));
const piloto_1 = __importDefault(require("../routes/piloto"));
const consultas_1 = __importDefault(require("../routes/consultas"));
const pais_1 = __importDefault(require("../routes/pais"));
const discord_1 = __importDefault(require("../routes/discord"));
const mandos_1 = __importDefault(require("../routes/mandos"));
const simuladores_1 = __importDefault(require("../routes/simuladores"));
const notificaciones_1 = __importDefault(require("../routes/notificaciones"));
const comunicados_1 = __importDefault(require("../routes/comunicados"));
const cards_1 = __importDefault(require("../routes/cards"));
const licencias_1 = __importDefault(require("../routes/licencias"));
const torneo_1 = __importDefault(require("../routes/torneo"));
const roles_1 = __importDefault(require("../routes/roles"));
const apoyanos_1 = __importDefault(require("../routes/apoyanos"));
const reportesComisarios_1 = __importDefault(require("../routes/reportesComisarios"));
const digitadores_1 = __importDefault(require("../routes/digitadores"));
const guias_1 = __importDefault(require("../routes/guias"));
const locutores_1 = __importDefault(require("../routes/locutores"));
const historial_1 = __importDefault(require("../routes/historial"));
class Server {
    constructor() {
        this.apiPaths = {
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
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.dbConnection();
        this.middelwares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Connection has been established successfully.');
            }
            catch (error) {
                console.error('Unable to connect to the database:', error);
            }
        });
    }
    middelwares() {
        //Cors
        this.app.use((0, cors_1.default)());
        //parseo de Body
        this.app.use(express_1.default.json());
        //Carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.pilotos, piloto_1.default);
        this.app.use(this.apiPaths.consultas, consultas_1.default);
        this.app.use(this.apiPaths.pais, pais_1.default);
        this.app.use(this.apiPaths.discord, discord_1.default);
        this.app.use(this.apiPaths.mandos, mandos_1.default);
        this.app.use(this.apiPaths.simuladores, simuladores_1.default);
        this.app.use(this.apiPaths.notificaciones, notificaciones_1.default);
        this.app.use(this.apiPaths.comunicados, comunicados_1.default);
        this.app.use(this.apiPaths.cards, cards_1.default);
        this.app.use(this.apiPaths.licencias, licencias_1.default);
        this.app.use(this.apiPaths.torneo, torneo_1.default);
        this.app.use(this.apiPaths.rol, roles_1.default);
        this.app.use(this.apiPaths.apoyo, apoyanos_1.default);
        this.app.use(this.apiPaths.reportesComisarios, reportesComisarios_1.default);
        this.app.use(this.apiPaths.digitadores, digitadores_1.default);
        this.app.use(this.apiPaths.guias, guias_1.default);
        this.app.use(this.apiPaths.locutores, locutores_1.default);
        this.app.use(this.apiPaths.historial, historial_1.default);
    }
    lisent() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map