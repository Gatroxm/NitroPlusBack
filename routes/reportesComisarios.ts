import { Router } from "express";
import { callAplicarSancion, getGravedad, getHistorialDeReportes, getReportesPendientes, getReportesPendientesRevisores, getSancionPropuesta, getTablaSanciones, pestannaConceptos, pestannaConceptosReportesPendientesLideres, pestannaSancionados, updateConceptos } from "../controller/reportesComisarios";
const routerReportesComisarios = Router();

routerReportesComisarios.get('/reportes-pendientes/:id', getReportesPendientes)
routerReportesComisarios.get('/reportes-pendientes-revisores/:id', getReportesPendientesRevisores)
routerReportesComisarios.get('/sancion-propuesta', getSancionPropuesta)
routerReportesComisarios.get('/gravedad/:id', getGravedad)
routerReportesComisarios.put('/update-conceptos', updateConceptos)
routerReportesComisarios.get('/historial-reportes/:id', getHistorialDeReportes)
routerReportesComisarios.get('/sanciones/:id', pestannaSancionados)
routerReportesComisarios.get('/conceptos/:id', pestannaConceptos)
routerReportesComisarios.get('/reportes-pendientes-lideres/:id', pestannaConceptosReportesPendientesLideres);
routerReportesComisarios.get('/getTablaSanciones', getTablaSanciones);
routerReportesComisarios.post('/call-aplica-sancion', callAplicarSancion)


export default routerReportesComisarios;