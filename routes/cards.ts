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
    InfoTorneo,
    ModaltablaReportesDeLaFecha,
    insetb_camaras_transmisiones,
    getSancionadosMasInfo,
    getCalendarioDelTornaoMasInfo,
    getSistemaDePuntosMasInfo,
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
routerCards.get('/infoTorneo/:id', InfoTorneo); 
routerCards.get('/modal-reportes-dela-fecha/:id', ModaltablaReportesDeLaFecha); 
routerCards.get('/getSancionadosMasInfo/:id', getSancionadosMasInfo); 
routerCards.get('/getSistemaDePuntosMasInfo/:id', getSistemaDePuntosMasInfo); 
routerCards.get('/getCalendarioDelTornaoMasInfo/:id', getCalendarioDelTornaoMasInfo); 
routerCards.post('/insetb_camaras_transmisiones', insetb_camaras_transmisiones); 

export default routerCards;