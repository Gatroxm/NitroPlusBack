import { QueryTypes } from "sequelize";
const { sequelize } = require("sequelize");
import { initModels } from "../models/init-models";
import { Response, Request } from "express";
const models = initModels(sequelize);

export const getReportesPendientes = async (req: Request, res: Response) => {
    const {id} = req.params
    const query = `SELECT tb_conceptos_comisarios.idReporte, tb_torneos.nombre AS Torneo, tb_divisiones.nombre AS Division, tb_calendario.nombreEvento AS Evento, tb_roles_pilotos.idPiloto, tb_conceptos_comisarios.idSancion, tb_conceptos_comisarios.idGravedad, tb_reportes_comisarios.idEstadoReporte, tb_divisiones.horasFinReportes, tb_divisiones.horasFinApelaciones, tb_divisiones.horasFinConceptosComisarios, tb_conceptos_comisarios.id AS idConcepto, tb_conceptos_comisarios.concepto, tb_calendario.fechaHoraCarrera, DATE_ADD(convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinApelaciones HOUR) AS FinApelaciones, DATE_ADD(convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinConceptosComisarios HOUR) AS CierreConceptos FROM tb_divisiones INNER JOIN tb_calendario ON tb_divisiones.id = tb_calendario.idDivision INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo INNER JOIN tb_reportes_comisarios ON tb_calendario.id = tb_reportes_comisarios.idCalendario INNER JOIN tb_conceptos_comisarios ON tb_reportes_comisarios.id = tb_conceptos_comisarios.idReporte INNER JOIN tb_asignacion_comisario ON tb_conceptos_comisarios.idAsignacionComisario = tb_asignacion_comisario.id INNER JOIN tb_roles_pilotos ON tb_asignacion_comisario.idRolPilotoComisario = tb_roles_pilotos.id WHERE tb_roles_pilotos.idPiloto =${id} AND tb_reportes_comisarios.idEstadoReporte = 1 AND tb_conceptos_comisarios.concepto IS NULL AND NOW() BETWEEN DATE_ADD(convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones. horasFinConceptosComisarios HOUR) AND DATE_ADD(convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinConceptosFinales HOUR)  order by tb_conceptos_comisarios.idReporte DESC;`
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
export const getReportesPendientesRevisores = async (req: Request, res: Response) => {
    const {id} = req.params
    const query = `SELECT tb_conceptos_comisarios.idReporte, tb_torneos.nombre AS Torneo, tb_divisiones.nombre AS Division, tb_calendario.nombreEvento AS Evento, tb_roles_pilotos.idPiloto, tb_conceptos_comisarios.idSancion, tb_conceptos_comisarios.idGravedad, tb_reportes_comisarios.idEstadoReporte, tb_divisiones.horasFinReportes, tb_divisiones.horasFinApelaciones, tb_divisiones.horasFinConceptosComisarios, tb_conceptos_comisarios.id AS idConcepto, tb_conceptos_comisarios.concepto, tb_calendario.fechaHoraCarrera, DATE_ADD( convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinApelaciones HOUR ) AS FinApelaciones, DATE_ADD( convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinConceptosComisarios HOUR ) AS CierreConceptos FROM tb_divisiones INNER JOIN tb_calendario ON tb_divisiones.id = tb_calendario.idDivision INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo INNER JOIN tb_reportes_comisarios ON tb_calendario.id = tb_reportes_comisarios.idCalendario INNER JOIN tb_conceptos_comisarios ON tb_reportes_comisarios.id = tb_conceptos_comisarios.idReporte INNER JOIN tb_asignacion_comisario ON tb_conceptos_comisarios.idAsignacionComisario = tb_asignacion_comisario.id INNER JOIN tb_roles_pilotos ON tb_asignacion_comisario.idRolPilotoComisario = tb_roles_pilotos.id WHERE tb_roles_pilotos.idPiloto = ${id} AND tb_reportes_comisarios.idEstadoReporte = 1 AND tb_conceptos_comisarios.concepto IS NULL AND NOW() BETWEEN DATE_ADD( convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinApelaciones HOUR ) AND DATE_ADD( convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinConceptosComisarios HOUR ) ORDER BY tb_conceptos_comisarios.idReporte DESC;`
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
    const query = `SELECT tb_tabla_sanciones.titulo, tb_tabla_sanciones.id FROM tb_tabla_sanciones WHERE tb_tabla_sanciones.idEstado = 1 ORDER BY tb_tabla_sanciones.titulo ;`
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
    const query = `SELECT tb_gravedad_sancion.nombre, tb_gravedad_sancion.id FROM tb_penalizacion_sanciones INNER JOIN tb_gravedad_sancion ON tb_penalizacion_sanciones.idGravedad = tb_gravedad_sancion.id GROUP BY tb_gravedad_sancion.nombre, tb_gravedad_sancion.id, tb_penalizacion_sanciones.idEstado, tb_penalizacion_sanciones.idSancion HAVING (((tb_penalizacion_sanciones.idEstado)=1) AND  ((tb_penalizacion_sanciones.idSancion)=${id})) ORDER BY tb_gravedad_sancion.id;`
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
    idReporte,
    idPiloto,
    pilotos
  } = req.body;
  console.log(req.body);
  try {
    const resultados = await models.tb_conceptos_comisarios.update({
      concepto:concepto,
    }, {
      where: {
        id: idConcepto
      }
    })
    const ingresos = await models.tb_ingreso_sanciones.bulkCreate(pilotos);
    const control = await models.tb_control_sanciones.create({idReporte:idReporte,idPilotoSancion:idPiloto});
    return res.status(200).json({
      ok: true,
      msg: "Filas Afectadas",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }

}

export const getHistorialDeReportes = async (req: Request, res: Response) => {
  const {id} = req.params
  const query = `SELECT tb_conceptos_comisarios.idReporte, tb_torneos.nombre AS Torneo, tb_divisiones.nombre AS Division, tb_calendario.nombreEvento AS Evento, tb_roles_pilotos.idPiloto, tb_conceptos_comisarios.idSancion, tb_conceptos_comisarios.idGravedad, tb_reportes_comisarios.idEstadoReporte, tb_conceptos_comisarios.id AS idConcepto, tb_conceptos_comisarios.concepto, tb_calendario.fechaHoraCarrera, tb_estado_reportes.nombre AS EstadoReporte, tb_conceptos_comisarios.fechaCreacion, tb_conceptos_comisarios.fechaActualizacion, DATE_ADD(convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinApelaciones HOUR) as FechaInicio, CASE WHEN tb_conceptos_comisarios.concepto IS NULL THEN "Sin Concepto" ELSE "Completado" END AS 'Estado Concepto', CASE WHEN tb_conceptos_comisarios.fechaActualizacion IS NULL THEN "-" ELSE TIMESTAMPDIFF(HOUR, DATE_ADD(convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinApelaciones HOUR), tb_conceptos_comisarios.fechaActualizacion) END AS 'Horas Res' FROM tb_divisiones INNER JOIN tb_calendario ON tb_divisiones.id = tb_calendario.idDivision INNER JOIN tb_reportes_comisarios ON tb_calendario.id = tb_reportes_comisarios.idCalendario INNER JOIN tb_conceptos_comisarios ON tb_reportes_comisarios.id = tb_conceptos_comisarios.idReporte INNER JOIN tb_asignacion_comisario ON tb_conceptos_comisarios.idAsignacionComisario = tb_asignacion_comisario.id INNER JOIN tb_roles_pilotos ON tb_asignacion_comisario.idRolPilotoComisario = tb_roles_pilotos.id INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo INNER JOIN tb_estado_reportes ON tb_reportes_comisarios.idEstadoReporte = tb_estado_reportes.id WHERE tb_roles_pilotos.idPiloto = ${id} ORDER BY tb_conceptos_comisarios.idReporte DESC;;`
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

export const pestannaConceptos = async (req: Request, res: Response) => {
  const {id} = req.params
  const query = `SELECT tb_pilotos.nombreCorto AS Comisario, tb_conceptos_comisarios.concepto, tb_tabla_sanciones.seccion AS SancionPropuesta, tb_gravedad_sancion.nombre AS GravedadPropuesta, tb_conceptos_comisarios.fechaActualizacion AS FechaEmision, tb_roles.nombre AS Rol FROM (((((tb_conceptos_comisarios INNER JOIN tb_asignacion_comisario ON tb_conceptos_comisarios.idAsignacionComisario = tb_asignacion_comisario.id) INNER JOIN tb_roles_pilotos ON tb_asignacion_comisario.idRolPilotoComisario = tb_roles_pilotos.id) INNER JOIN tb_pilotos ON tb_roles_pilotos.idPiloto = tb_pilotos.id) LEFT JOIN tb_tabla_sanciones ON tb_conceptos_comisarios.idSancion = tb_tabla_sanciones.id) LEFT JOIN tb_gravedad_sancion ON tb_conceptos_comisarios.idGravedad = tb_gravedad_sancion.id) INNER JOIN tb_roles ON tb_roles_pilotos.idRol = tb_roles.id WHERE (((tb_conceptos_comisarios.idReporte)=${id})) ORDER BY tb_conceptos_comisarios.fechaActualizacion DESC;`
  try {
      const resultados = await models.tb_conceptos_comisarios.sequelize.query(query, {
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

export const pestannaSancionados = async (req: Request, res: Response) => {
  const {id} = req.params
  const query = `SELECT tb_reportes_comisarios.id, tb_pilotos.nombreCorto AS Piloto, tb_rol_involucrados.nombre AS Rol, tb_tabla_sanciones.seccion, tb_tipo_penalizacion.nombre AS Penalizacion, tb_penalizacion_sanciones.valor, tb_tipo_penalizacion.unidadDeMedida, tb_pilotos_1.nombreCorto AS Comisario FROM (tb_asignacion_comisario RIGHT JOIN (((((((tb_reportes_comisarios INNER JOIN tb_involucrados_sanciones ON tb_reportes_comisarios.id = tb_involucrados_sanciones.idReporte) LEFT JOIN tb_pilotos_penalizados ON tb_involucrados_sanciones.id = tb_pilotos_penalizados.idInvolucradoSancion) LEFT JOIN tb_penalizacion_sanciones ON tb_pilotos_penalizados.idPenalizacion = tb_penalizacion_sanciones.id) INNER JOIN tb_pilotos ON tb_involucrados_sanciones.idPiloto = tb_pilotos.id) INNER JOIN tb_rol_involucrados ON tb_involucrados_sanciones.idRolInvolucrado = tb_rol_involucrados.id) LEFT JOIN tb_tabla_sanciones ON tb_penalizacion_sanciones.idSancion = tb_tabla_sanciones.id) LEFT JOIN tb_tipo_penalizacion ON tb_penalizacion_sanciones.idTipoPenalizacion = tb_tipo_penalizacion.id) ON tb_asignacion_comisario.id = tb_pilotos_penalizados.idRolComisarioSancion) LEFT JOIN (tb_roles_pilotos LEFT JOIN tb_pilotos AS tb_pilotos_1 ON tb_roles_pilotos.idPiloto = tb_pilotos_1.id) ON tb_asignacion_comisario.idRolPilotoComisario = tb_roles_pilotos.id WHERE (((tb_reportes_comisarios.id)=${id}));`
  try {
      const resultados = await models.tb_conceptos_comisarios.sequelize.query(query, {
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

export const getPilotosInvolucrados = async (req: Request, res: Response) =>{
  const {id} = req.params;
  const query = `SELECT tb_pilotos.nombreCorto, tb_pilotos.id FROM (((tb_reportes_comisarios INNER JOIN tb_calendario ON tb_reportes_comisarios.idCalendario = tb_calendario.id) INNER JOIN tb_divisiones_pilotos ON tb_calendario.idDivision = tb_divisiones_pilotos.idNombreDivision) INNER JOIN tb_inscripciones ON tb_divisiones_pilotos.idInscripcion = tb_inscripciones.id) INNER JOIN tb_pilotos ON tb_inscripciones.idPiloto = tb_pilotos.id WHERE (((tb_reportes_comisarios.id)=${id})) ORDER BY tb_pilotos.nombreCorto;`;
  
  try {
    const resultados = await models.tb_reportes_comisarios.sequelize.query(query, {
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
    console.log(error);
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
}

export const pestannaConceptosReportesPendientesLideres = async (req: Request, res: Response) => {
  const {id} = req.params
  const query = `SELECT tb_conceptos_comisarios.idReporte, tb_torneos.nombre AS Torneo, tb_divisiones.nombre AS Division, tb_calendario.nombreEvento AS Evento, tb_roles_pilotos.idPiloto, tb_conceptos_comisarios.idSancion, tb_conceptos_comisarios.idGravedad, tb_reportes_comisarios.idEstadoReporte, tb_divisiones.horasFinReportes, tb_divisiones.horasFinApelaciones, tb_divisiones.horasFinConceptosComisarios, tb_conceptos_comisarios.id AS idConcepto, tb_conceptos_comisarios.concepto, tb_calendario.fechaHoraCarrera, DATE_ADD(convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinApelaciones HOUR) AS FinApelaciones, DATE_ADD(convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinConceptosComisarios HOUR) AS CierreConceptos FROM tb_divisiones INNER JOIN tb_calendario ON tb_divisiones.id = tb_calendario.idDivision INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo INNER JOIN tb_reportes_comisarios ON tb_calendario.id = tb_reportes_comisarios.idCalendario INNER JOIN tb_conceptos_comisarios ON tb_reportes_comisarios.id = tb_conceptos_comisarios.idReporte INNER JOIN tb_asignacion_comisario ON tb_conceptos_comisarios.idAsignacionComisario = tb_asignacion_comisario.id INNER JOIN tb_roles_pilotos ON tb_asignacion_comisario.idRolPilotoComisario = tb_roles_pilotos.id WHERE tb_roles_pilotos.idPiloto = ${id} AND tb_reportes_comisarios.idEstadoReporte = 1 AND tb_conceptos_comisarios.concepto IS NULL AND NOW() BETWEEN DATE_ADD(convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones. horasFinConceptosComisarios HOUR) AND DATE_ADD(convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinConceptosFinales HOUR) ORDER BY Tb_conceptos_comisarios.idReporte DESC;`
  try {
      const resultados = await models.tb_conceptos_comisarios.sequelize.query(query, {
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
export const getTablaSanciones = async (req: Request, res: Response) => {
  const query = `SELECT tb_tabla_sanciones.seccion, tb_tabla_sanciones.titulo, tb_gravedad_sancion.nombre, GROUP_CONCAT(CONCAT(tb_tipo_penalizacion.unidadDeMedida, IF(tb_penalizacion_sanciones.valor=0,'',CONCAT(':',tb_penalizacion_sanciones.valor))) ORDER BY tb_tipo_penalizacion.id  DESC SEPARATOR ' // ') AS Sancion, GROUP_CONCAT(tb_penalizacion_sanciones.descripcion SEPARATOR ' // ') AS Descrip FROM ((tb_penalizacion_sanciones INNER JOIN tb_tabla_sanciones ON tb_penalizacion_sanciones.idSancion = tb_tabla_sanciones.id) INNER JOIN tb_gravedad_sancion ON tb_penalizacion_sanciones.idGravedad = tb_gravedad_sancion.id) INNER JOIN tb_tipo_penalizacion ON tb_penalizacion_sanciones.idTipoPenalizacion = tb_tipo_penalizacion.id WHERE tb_tabla_sanciones.idEstado = 1 AND tb_penalizacion_sanciones.idEstado = 1 GROUP BY tb_tabla_sanciones.seccion, tb_tabla_sanciones.titulo, tb_gravedad_sancion.nombre ORDER BY tb_tabla_sanciones.seccion,tb_tabla_sanciones.titulo, tb_gravedad_sancion.id`
  try {
      const resultados = await models.tb_penalizacion_sanciones.sequelize.query(query, {
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

export const insertInvolucrado = async (req: Request, res: Response) => {
  const { idPiloto, idReporte,  } = req.body;

  try {
    const repuesta  = await models.tb_involucrados_sanciones.create({
      idRolInvolucrado:3,
      idPiloto:idPiloto,
      idReporte:idReporte,
      esAutomatico:0
    });
    return res.status(200).json({
      ok:true,
      repuesta
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
}