import { QueryTypes } from "sequelize";
const { sequelize } = require("sequelize");
import { initModels } from "../models/init-models";
import { Response, Request } from "express";
const models = initModels(sequelize);

export const getReportesPendientes = async (req: Request, res: Response) => {
    const {id} = req.params
    const query = `SELECT tb_conceptos_comisarios.idReporte, tb_torneos.nombre AS Torneo, tb_divisiones.nombre AS Division, tb_calendario.nombreEvento AS Evento, tb_roles_pilotos.idPiloto, tb_conceptos_comisarios.idSancion, tb_conceptos_comisarios.idGravedad, tb_reportes_comisarios.idEstadoReporte, tb_divisiones.horasFinReportes, tb_divisiones.horasFinApelaciones, tb_divisiones.horasFinConceptosComisarios, tb_conceptos_comisarios.id AS idConcepto, tb_conceptos_comisarios.concepto, tb_calendario.fechaHoraCarrera, DATE_ADD(convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinApelaciones HOUR) AS FinApelaciones, DATE_ADD(convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinConceptosComisarios HOUR) AS CierreConceptos FROM tb_divisiones INNER JOIN tb_calendario ON tb_divisiones.id = tb_calendario.idDivision INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo INNER JOIN tb_reportes_comisarios ON tb_calendario.id = tb_reportes_comisarios.idCalendario INNER JOIN tb_conceptos_comisarios ON tb_reportes_comisarios.id = tb_conceptos_comisarios.idReporte INNER JOIN tb_asignacion_comisario ON tb_conceptos_comisarios.idAsignacionComisario = tb_asignacion_comisario.id INNER JOIN tb_roles_pilotos ON tb_asignacion_comisario.idRolPilotoComisario = tb_roles_pilotos.id WHERE tb_roles_pilotos.idPiloto = ${id} AND tb_reportes_comisarios.idEstadoReporte = 1 AND tb_conceptos_comisarios.concepto IS NULL AND NOW() BETWEEN DATE_ADD(convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinApelaciones HOUR) AND DATE_ADD(convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinConceptosComisarios HOUR);`
    try {
        const resultados = await models.tb_divisiones.sequelize.query(query, {
          type: QueryTypes.SELECT,
        });
        if (resultados.length > 0) {
          return res.status(200).json({
            ok: true,
            resultados,
          });
        } else {
          return res.status(404).json({
            ok: false,
            msg: "No cuentas con resultados",
          });
        }
      } catch (error) {
        return res.status(500).json({
          ok: false,
          error: error,
        });
      }

}

export const getSancionPropuesta = async (req: Request, res: Response) => {
    const {id} = req.params
    const query = `SELECT tb_tabla_sanciones.titulo, tb_tabla_sanciones.id FROM tb_tabla_sanciones ORDER BY tb_tabla_sanciones.titulo;`
    try {
        const resultados = await models.tb_divisiones.sequelize.query(query, {
          type: QueryTypes.SELECT,
        });
        if (resultados.length > 0) {
          return res.status(200).json({
            ok: true,
            resultados,
          });
        } else {
          return res.status(404).json({
            ok: false,
            msg: "No cuentas con resultados",
          });
        }
      } catch (error) {
        return res.status(500).json({
          ok: false,
          error: error,
        });
      }

}

export const getGravedad = async (req: Request, res: Response) => {
    const {id} = req.params
    const query = `SELECT tb_gravedad_sancion.nombre, tb_gravedad_sancion.id FROM tb_gravedad_sancion ORDER BY tb_gravedad_sancion.id;`
    try {
        const resultados = await models.tb_divisiones.sequelize.query(query, {
          type: QueryTypes.SELECT,
        });
        if (resultados.length > 0) {
          return res.status(200).json({
            ok: true,
            resultados,
          });
        } else {
          return res.status(404).json({
            ok: false,
            msg: "No cuentas con resultados",
          });
        }
      } catch (error) {
        return res.status(500).json({
          ok: false,
          error: error,
        });
      }

}

export const updateConceptos = async (req: Request, res: Response) => {

  const {
    idConcepto,
    concepto,
    idSancion,
    idGravedad
  } = req.body;
  try {
    const resultados = await models.tb_conceptos_comisarios.update({
      concepto:concepto,
      idSancion:idSancion,
      idGravedad:idGravedad
    }, {
      where: {
        id: idConcepto
      }
    })
    if (resultados[0]===1) {
      return res.status(200).json({
        ok: true,
        msg:'Concepto guardado',
      });
    } else {
      return res.status(404).json({
        ok: false,
        msg: "No se detectan cambios",
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }

}