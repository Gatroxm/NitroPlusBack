import { Router } from "express";
import { getGravedad, getReportesPendientes, getSancionPropuesta, updateConceptos } from "../controller/reportesComisarios";
const routerReportesComisarios = Router();

routerReportesComisarios.get('/reportes-pendientes/:id', getReportesPendientes)
routerReportesComisarios.get('/sancion-propuesta', getSancionPropuesta)
routerReportesComisarios.get('/gravedad', getGravedad)
routerReportesComisarios.put('/update-conceptos', updateConceptos)


export default routerReportesComisarios;