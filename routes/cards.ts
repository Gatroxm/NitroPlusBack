import { Router } from "express";
import { 
    InsertTbRepeticiones, 
    tablaResultados, 
    tblPosiciones,
    getPilotosParticipantes, 
    GuardadoReporte, 
    getTblaRepeticiones, 
    modalInformacionGeneral,
    InsertApelacionAclaracion,
    confirmacion,
    tablaConfirmados,
 } from "../controller/cards";

const routerCards = Router();

routerCards.get('/tabla-reultados/:id', tablaResultados);
routerCards.post('/insert-repeticiones', InsertTbRepeticiones);
routerCards.get('/tabla-posiciones/:id', tblPosiciones);
routerCards.get('/listado-pilotos-participantes/:id', getPilotosParticipantes);
routerCards.post('/insert-reporte', GuardadoReporte);
routerCards.get('/tabla-repeticiones/:id', getTblaRepeticiones);
routerCards.get('/tabla-confirmados/:id', tablaConfirmados);
routerCards.get('/modal-informacion-generla/:id', modalInformacionGeneral);
routerCards.post('/apelaciones', InsertApelacionAclaracion);
routerCards.post('/confirmacion', confirmacion); 

export default routerCards;