import { Router } from "express";
import { getFormInscripcion, getInscritosTorneo, getListadoReserva, insertInscription, insertReserva, pregunta, respuestasTipoUno, selectIdCocheInicial, selectIdEquipoInicial, slectidentificadorPilotoSim } from "../controller/torneos";


const routerTorneos = Router();

routerTorneos.get('/tabla-inscritos/:id', getInscritosTorneo);
routerTorneos.get('/tabla-form-torneos/:id', getFormInscripcion);
routerTorneos.get('/lista-form-torneos/:idPiloto/:idTorneo', slectidentificadorPilotoSim);
routerTorneos.get('/lista-coches-form-torneos/:id', selectIdCocheInicial);
routerTorneos.get('/lista-equipo-form-torneos/:id', selectIdEquipoInicial);
routerTorneos.get('/pregunta/:id', pregunta);
routerTorneos.get('/respuesta/:id', respuestasTipoUno);
routerTorneos.post('/insert-inscripcion', insertInscription);
routerTorneos.post('/insert-reserva', insertReserva);
routerTorneos.get('/lista-form-reservas/:idPiloto/:idTorneo', getListadoReserva);

export default routerTorneos;