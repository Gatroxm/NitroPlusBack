import { QueryTypes } from "sequelize";
const { sequelize } = require("sequelize");
import { initModels } from "../models/init-models";
import { Response, Request } from "express";
const models = initModels(sequelize);

export const tablaResultados = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT tb_resultados_cod.idCalendario, tb_ident_pos.nombreCorto AS Pos, tb_pilotos.nombreCorto, etiquetaHtml(RutaImagenCompleta(tb_fotos_pilotos.rutaImagen),60) AS Piloto, tb_resultados.numeroDeVueltas, SubString(sec_to_time(tb_resultados.msTiempoTotal/1000),4,9) AS Total, SubString(sec_to_time(tb_resultados.msDiferencia/1000),4,9) AS Gap, tb_resultados.msParadasBox, SubString(sec_to_time(tb_resultados.msMejorVuelta/1000),4,9) AS MejorVuelta, SubString(sec_to_time(tb_resultados.msTiempoQualy/1000),4,9) AS TiempoQualy, tb_resultados.PosSalida, tb_resultados.posGanadas, tb_resultados.variacionELO, tb_resultados.variacionSR, tb_resultados.incidentesCarrera, etiquetaHtml(RutaImagenCompleta(tb_marcas_coches.imgLogo),40) AS Marca, tb_tipo_piloto.nombre AS TipoPiloto, tb_cat_piloto.nombre AS CatPiloto FROM (((((((tb_fotos_pilotos RIGHT JOIN (tb_resultados INNER JOIN tb_pilotos ON tb_resultados.idPiloto = tb_pilotos.id) ON tb_fotos_pilotos.idPiloto = tb_resultados.idPiloto) INNER JOIN (tb_coches INNER JOIN tb_coches_sim ON tb_coches.id = tb_coches_sim.idCoche) ON tb_resultados.idCocheSim = tb_coches_sim.id) INNER JOIN tb_marcas_coches ON tb_coches.idMarca = tb_marcas_coches.id) INNER JOIN tb_resultados_cod ON tb_resultados.id = tb_resultados_cod.idResultado) INNER JOIN tb_divisiones ON (tb_divisiones.idCodPred = tb_resultados_cod.idCodificacion) AND (tb_resultados_cod.idNombreDivision = tb_divisiones.id)) INNER JOIN tb_ident_pos ON tb_resultados_cod.PosCod = tb_ident_pos.id) INNER JOIN tb_tipo_piloto ON tb_resultados_cod.idTipoPiloto = tb_tipo_piloto.id) INNER JOIN tb_cat_piloto ON tb_resultados_cod.idCategoriaPiloto = tb_cat_piloto.id WHERE (((tb_resultados_cod.idCalendario)= ${id} ) AND ((tb_fotos_pilotos.idTipo)=1 Or (tb_fotos_pilotos.idTipo) Is Null)) ORDER BY tb_cat_piloto.id,tb_tipo_piloto.id,tb_ident_pos.nombreCorto;`;
  try {
    const resultados = await models.tb_fotos_pilotos.sequelize.query(query, {
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
};

export const InsertTbRepeticiones = async (req: Request, res: Response) => {
  const { idCalendario, idPiloto, segBanderaVerde, link_video, observaciones } =
    req.body;
  try {
    const insert = await models.tb_repeticiones.create({
      idCalendario,
      idPiloto,
      segBanderaVerde,
      link_video,
      observaciones,
    });
    return res.json({
      ok: true,
      insert,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const tblPosiciones = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT ROW_NUMBER() OVER(ORDER BY tb_tabla_posiciones.idtipopiloto,tb_tabla_posiciones.idcatpiloto,tb_tabla_posiciones.PuntosFinales DESC,tb_tabla_posiciones.nombreCorto) AS Pos, tb_tabla_posiciones.idNombreDivision, tb_tabla_posiciones.id, tb_tabla_posiciones.nombreCorto, tb_tabla_posiciones.PuntosGen, tb_tabla_posiciones.Part, tb_tabla_posiciones.Vic, tb_tabla_posiciones.Pod, tb_tabla_posiciones.DNF, tb_tabla_posiciones.DSQ, tb_tabla_posiciones.Poles, tb_tabla_posiciones.VR, tb_tabla_posiciones.PD, etiquetaHtml(tb_tabla_posiciones.imgPiloto,60) as Piloto, tb_tabla_posiciones.sanciones, tb_tabla_posiciones.idcatpiloto, tb_tabla_posiciones.nombrecat, tb_tabla_posiciones.idtipopiloto, tb_tabla_posiciones.nombretipo, tb_tabla_posiciones.idCodificacion, tb_tabla_posiciones.nombrecoche, etiquetaHtml(tb_tabla_posiciones.logocoche,40) as Marca, tb_tabla_posiciones.nombreequipo, etiquetaHtml(tb_tabla_posiciones.logoequipo,60) as Img, tb_tabla_posiciones.PuntosFinales FROM tb_tabla_posiciones INNER JOIN tb_divisiones ON (tb_tabla_posiciones.idCodificacion = tb_divisiones.idCodPred) AND (tb_tabla_posiciones.idNombreDivision = tb_divisiones.id) WHERE (((tb_tabla_posiciones.idNombreDivision)=${id})) ORDER BY tb_tabla_posiciones.idtipopiloto,tb_tabla_posiciones.idcatpiloto,tb_tabla_posiciones.PuntosFinales DESC, tb_tabla_posiciones.nombreCorto;`;
  try {
    const posiciones = await models.tb_tabla_posiciones.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    if (posiciones.length > 0) {
      return res.status(200).json({
        ok: true,
        posiciones,
      });
    } else {
      return res.status(404).json({
        ok: false,
        msg: "No cuentas con posiciones",
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getPilotosParticipantes = async (req: Request, res: Response) => {
  const { id } = req.params;

  const query = `SELECT IF(tb_sim_plat_codplat.isVisible = 1, CONCAT(tb_pilotos.nombreCorto, ' (', tb_pilotos_id_sim.idSimPiloto, ')'), tb_pilotos.nombreCorto) AS NombreSeleccion, tb_pilotos.id FROM tb_resultados INNER JOIN ( tb_pilotos INNER JOIN ( ( tb_inscripciones INNER JOIN tb_pilotos_id_sim ON tb_inscripciones.idPilotoIdSim = tb_pilotos_id_sim.id ) INNER JOIN tb_sim_plat_codplat ON tb_pilotos_id_sim.idSimCodPlataforma = tb_sim_plat_codplat.id ) ON tb_pilotos.id = tb_inscripciones.idPiloto ) ON tb_resultados.idInscripcion = tb_inscripciones.id WHERE tb_resultados.idCalendario = ${id} ORDER BY tb_pilotos.nombreCorto;`;

  try {
    const pilotosParticipantes =
      await models.tb_reportes_comisarios.sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

    if (pilotosParticipantes.length > 0) {
      return res.status(200).json({
        ok: true,
        pilotosParticipantes,
      });
    } else {
      return res.status(404).json({
        ok: false,
        msg: `No se encuentran Pilotos participantes`,
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const GuardadoReporte = async (req: Request, res: Response) => {
  let idReporte = "";
  let involucradoSancion = "";
  const respuestas = [];
  const {
    idDivision,
    idCalendario,
    idPiloto,
    idPilotoDenunciado,
    descripcion,
    evidencia,
    noVuelta,
  } = req.body;

  try {
    const reportesSomisarios = await models.tb_reportes_comisarios.create({
      idCalendario: idCalendario,
      idEstadoReporte: 1,
      noVuelta: noVuelta,
    });
    if (reportesSomisarios) {
      respuestas.push(reportesSomisarios);
      idReporte = reportesSomisarios.id;
      const involicradosSanciones1 =
        await models.tb_involucrados_sanciones.create({
          idReporte: idReporte,
          idPiloto: idPilotoDenunciado,
          idRolInvolucrado: 2,
        });
      respuestas.push(involicradosSanciones1);
      const involicradosSanciones2 =
        await models.tb_involucrados_sanciones.create({
          idReporte: idReporte,
          idPiloto: idPiloto,
          idRolInvolucrado: 1,
        });
      if (involicradosSanciones2) {
        respuestas.push(involicradosSanciones2);
        involucradoSancion = involicradosSanciones2.id;
        const evidenciasReportes = await models.tb_evidencias_reportes.create({
          idInvolucradoSancion: involucradoSancion,
          linkEvidencia: evidencia,
        });
        respuestas.push(evidenciasReportes);
        const descargosInvolucrados =
          await models.tb_descargos_involucrados.create({
            idInvolucradoSancion: involucradoSancion,
            descargo: descripcion,
          });
        respuestas.push(descargosInvolucrados);
        return res.json({
          ok: true,
          respuestas,
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getTblaRepeticiones = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT tb_pilotos.nombreCorto, IF(COALESCE(SUM( tb_involucrados_sanciones.esAutomatico ),0)>0,'Si','No') AS EsObligatorio, tb_repeticiones.link_video FROM ( tb_resultados LEFT JOIN tb_pilotos ON tb_resultados.idPiloto = tb_pilotos.id ) LEFT JOIN( tb_reportes_comisarios INNER JOIN tb_involucrados_sanciones ON tb_reportes_comisarios.id = tb_involucrados_sanciones.idReporte ) ON tb_resultados.idCalendario = tb_reportes_comisarios.idCalendario AND tb_resultados.idPiloto = tb_involucrados_sanciones.idPiloto LEFT JOIN tb_repeticiones ON tb_resultados.idPiloto = tb_repeticiones.idPiloto AND tb_resultados.idCalendario = tb_repeticiones.idCalendario WHERE tb_resultados.idCalendario = ${id} GROUP BY tb_resultados.idCalendario, tb_pilotos.nombreCorto, tb_repeticiones.link_video, tb_repeticiones.fechaCreacion ORDER BY tb_pilotos.nombreCorto;`;

  try {
    const Reportes = await models.tb_resultados.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });

    if (Reportes.length > 0) {
      return res.status(200).json({
        ok: true,
        Reportes,
      });
    } else {
      return res.status(404).json({
        ok: false,
        msg: `No se encuentran Repeticiones`,
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const modalInformacionGeneral = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = [];
  const query = `SELECT tb_reportes_comisarios.id AS idReporte, tb_estado_reportes.id AS idEstado, tb_estado_reportes.nombre AS Estado, convertir_a_utc(tb_reportes_comisarios.fechaReporte) as fechaIncidente, tb_calendario.nombreEvento, convertir_a_utc(tb_calendario.fechaHoraCarrera) as fechaHoraCarrera FROM ( tb_reportes_comisarios INNER JOIN tb_calendario ON tb_reportes_comisarios.idCalendario = tb_calendario.id ) INNER JOIN tb_estado_reportes ON tb_reportes_comisarios.idEstadoReporte = tb_estado_reportes.id WHERE ( ( (tb_reportes_comisarios.id) = ${id} ) );`;

  const query2 = `SELECT tb_reportes_comisarios.id AS idReporte,tb_involucrados_sanciones.id, tb_pilotos.nombreCorto AS nombrePiloto, tb_rol_involucrados.nombre AS Rol
  FROM tb_reportes_comisarios INNER JOIN ((tb_involucrados_sanciones INNER JOIN tb_pilotos ON tb_involucrados_sanciones.idPiloto = tb_pilotos.id) INNER JOIN tb_rol_involucrados ON tb_involucrados_sanciones.idRolInvolucrado = tb_rol_involucrados.id) ON tb_reportes_comisarios.id = tb_involucrados_sanciones.idReporte
  WHERE (((tb_reportes_comisarios.id)=${id}));`;

  const query3 = `SELECT tb_descargos_involucrados.fechaCreacion, tb_pilotos.nombreCorto AS nombrePiloto, tb_descargos_involucrados.descargo, tb_rol_involucrados.nombre AS Rol FROM (((tb_reportes_comisarios INNER JOIN tb_involucrados_sanciones ON tb_reportes_comisarios.id = tb_involucrados_sanciones.idReporte) INNER JOIN tb_descargos_involucrados ON tb_involucrados_sanciones.id = tb_descargos_involucrados.idInvolucradoSancion) INNER JOIN tb_pilotos ON tb_involucrados_sanciones.idPiloto = tb_pilotos.id) INNER JOIN tb_rol_involucrados ON tb_involucrados_sanciones.idRolInvolucrado = tb_rol_involucrados.id WHERE (((tb_reportes_comisarios.id)=${id})) ORDER BY tb_descargos_involucrados.fechaCreacion DESC;`;

  const query4 = `SELECT tb_evidencias_reportes.fechaCreacion, tb_pilotos.nombreCorto AS nombrePiloto, tb_rol_involucrados.nombre AS Rol, tb_evidencias_reportes.linkEvidencia FROM (((tb_reportes_comisarios INNER JOIN tb_involucrados_sanciones ON tb_reportes_comisarios.id = tb_involucrados_sanciones.idReporte) INNER JOIN tb_pilotos ON tb_involucrados_sanciones.idPiloto = tb_pilotos.id) INNER JOIN tb_rol_involucrados ON tb_involucrados_sanciones.idRolInvolucrado = tb_rol_involucrados.id) INNER JOIN tb_evidencias_reportes ON tb_involucrados_sanciones.id = tb_evidencias_reportes.idInvolucradoSancion WHERE (((tb_reportes_comisarios.id)=${id})) ORDER BY tb_evidencias_reportes.fechaCreacion DESC;`;
  try {
    const informacionGeneral =
      await models.tb_reportes_comisarios.sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
    response.push({ informacionGeneral: informacionGeneral });

    const involucrados = await models.tb_reportes_comisarios.sequelize.query(
      query2,
      {
        type: QueryTypes.SELECT,
      }
    );
    response.push({ involucrados: involucrados });
    const descargos = await models.tb_reportes_comisarios.sequelize.query(
      query3,
      {
        type: QueryTypes.SELECT,
      }
    );
    response.push({ descargos: descargos });

    const evicencias = await models.tb_reportes_comisarios.sequelize.query(
      query4,
      {
        type: QueryTypes.SELECT,
      }
    );
    response.push({ evicencias: evicencias });
    return res.status(200).json({
      ok: true,
      response,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const InsertApelacionAclaracion = async (
  req: Request,
  res: Response
) => {
  const rsparray = [];
  const { descargo, idInvolucradoSancion, linkEvidencia } = req.body;

  try {
    const descargosInvolucrados = await models.tb_descargos_involucrados.create(
      {
        idInvolucradoSancion: idInvolucradoSancion,
        descargo: descargo,
      }
    );
    rsparray.push(descargosInvolucrados);
    const ervidencia = await models.tb_evidencias_reportes.create({
      idInvolucradoSancion: idInvolucradoSancion,
      linkEvidencia: linkEvidencia,
    });
    rsparray.push(ervidencia);
    return res.json({
      ok: true,
      rsparray,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const confirmacion = async (req: Request, res: Response) => {
  const {
    idDivision,
    idCalendario,
    idCategoriaPiloto,
    idTipoPiloto,
    idPiloto,
    idCoche,
    idEquipo,
    estaConfirmado,
  } = req.body;

  try {
    const buscaPiloto = await models.tb_parrilla_calendario.findOne({
      where: {
        idCalendario: idCalendario,
        idPiloto: idPiloto,
      },
    });

    if (buscaPiloto) {
      const confirmacion = await models.tb_parrilla_calendario.update(
        {
          estaConfirmado: estaConfirmado,
        },
        {
          where: {
            id: buscaPiloto.id,
          },
        }
      );
      return res.json({
        ok: true,
        confirmacion,
        buscaPiloto,
      });
    } else {
      const confirmacion = await models.tb_parrilla_calendario.create({
        idDivision: idDivision,
        idCalendario: idCalendario,
        idCategoriaPiloto: idCategoriaPiloto,
        idTipoPiloto: idTipoPiloto,
        idPiloto: idPiloto,
        idCoche: idCoche,
        idEquipo: idEquipo,
        estaConfirmado: estaConfirmado,
      });
      return res.json({
        ok: true,
        confirmacion,
        buscaPiloto,
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};
export const tablaConfirmados = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT tb_pilotos.nombreCorto, tb_coches.nombre AS Coche, tb_cat_piloto.nombre AS Categoria, tb_tipo_piloto.nombre AS Tipo, COALESCE( CASE WHEN tb_parrilla_calendario.estaConfirmado IS NULL THEN "Sin Confirmar" WHEN tb_parrilla_calendario.estaConfirmado = 1 THEN "Confirmado" WHEN tb_parrilla_calendario.estaConfirmado = 0 THEN "No asistirá" END, "Sin Confirmar" ) AS Estado, convertir_a_utc(tb_parrilla_calendario.fechaCreacion) AS FechaCreacion, convertir_a_utc(tb_parrilla_calendario.fechaActualizacion) AS fechaActualizacion, IF(tb_sim_plat_codplat.isVisible = 1, tb_pilotos_id_sim.idSimPiloto, '') AS IDSim, RutaImagenCompleta(tb_marcas_coches.imgLogo) AS logoCoche, RutaImagenCompleta(tb_fotos_pilotos.rutaImagen) AS imgPiloto FROM tb_divisiones_pilotos INNER JOIN tb_inscripciones ON tb_divisiones_pilotos.idInscripcion = tb_inscripciones.id INNER JOIN tb_pilotos ON tb_inscripciones.idPiloto = tb_pilotos.id INNER JOIN tb_coches_sim ON tb_divisiones_pilotos.idCoche = tb_coches_sim.id INNER JOIN tb_coches ON tb_coches_sim.idCoche = tb_coches.id INNER JOIN tb_cat_piloto ON tb_divisiones_pilotos.idCategoriaPiloto = tb_cat_piloto.id INNER JOIN tb_tipo_piloto ON tb_divisiones_pilotos.idTipoPiloto = tb_tipo_piloto.id INNER JOIN tb_calendario ON tb_calendario.idDivision = tb_divisiones_pilotos.idNombreDivision LEFT JOIN tb_parrilla_calendario ON tb_inscripciones.idPiloto = tb_parrilla_calendario.idPiloto AND tb_parrilla_calendario.idCalendario = tb_calendario.id INNER JOIN tb_pilotos_id_sim ON tb_inscripciones.idPilotoIdSim = tb_pilotos_id_sim.id INNER JOIN tb_sim_plat_codplat ON tb_pilotos_id_sim.idSimCodPlataforma = tb_sim_plat_codplat.id INNER JOIN tb_marcas_coches ON tb_coches.idMarca = tb_marcas_coches.id LEFT JOIN tb_fotos_pilotos ON tb_inscripciones.idPiloto =   tb_fotos_pilotos.idPiloto WHERE tb_calendario.id = ${id} AND tb_divisiones_pilotos.idEstado = 1 AND (tb_fotos_pilotos.idTipo = 1 OR tb_fotos_pilotos.idTipo IS NULL) ORDER BY tb_parrilla_calendario.estaConfirmado DESC;`;
  try {
    const resultados = await models.tb_calendario.sequelize.query(query, {
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
};

export const InfoTorneo = async (req: Request, res: Response) => {
  const response = [];
  const { id } = req.params;
  const query1 = `SELECT tb_calendario.id, tb_torneos.nombre, tb_torneos.descripcion, tb_torneos.requisitosTxt, tb_torneos.formatoTxt, convertir_a_utc(tb_torneos.fechaInicio) AS fechaInicio, convertir_a_utc(tb_torneos.fechaFin) AS fechaFin, convertir_a_utc( tb_torneos.fechaLimiteInscripcion ) AS fechaLimiteInscripcion, tb_torneos.urlInscripcionAdicional, tb_torneos.instruccionesAdicionales, tb_divisiones.requiereConfirmacion, DATE_SUB( convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasAntesConfirmacionApertura HOUR ) AS horasAntesConfirmacionApertura, DATE_SUB( convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasAntesConfirmacionCierre HOUR ) AS horasAntesConfirmacionCierre, tb_divisiones.permiteReservas, tb_divisiones.permiteReportes, tb_divisiones.requiereRepeticion, DATE_ADD( convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasInicioReportes HOUR ) AS horasInicioReportes, DATE_ADD( convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinReportes HOUR ) AS horasFinReportes, DATE_ADD( convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinApelaciones HOUR ) AS horasFinApelaciones, DATE_ADD( convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.plazoEnvioRepeticion HOUR ) AS plazoEnvioRepeticion, tb_divisiones.afectaIndiceParticipacion, tb_divisiones.nombre AS NombreDivision, tb_formato_carrera.nombre AS Formato, tb_calendario.horaVirtual, tb_calendario.tempAire, tb_calendario.tempPista, tb_calendario.nubosidad, tb_calendario.requisitoBoxes, tb_calendario.lluvia, tb_calendario.observaciones, tb_calendario.urlTransmision, tb_calendario.esPorEtapas, tb_calendario.noVueltasRequeridas, tb_calendario.elo_multiplicador, if(tb_calendario.mostrarPracticas=0,NULL,CONCAT('https://nitrosimracing.com.co/practicas-calendario?var1=',tb_calendario.id)) AS link_practicas FROM ( ( tb_torneos INNER JOIN tb_divisiones ON tb_torneos.idTorneo = tb_divisiones.idTorneo ) INNER JOIN tb_calendario ON tb_divisiones.id = tb_calendario.idDivision ) INNER JOIN tb_formato_carrera ON tb_calendario.idFormatoCarrera = tb_formato_carrera.id WHERE (((tb_calendario.id) = ${id}));`;
  const query2 = `SELECT tb_reglas_torneos.reglastxt FROM tb_calendario INNER JOIN (tb_reglas_torneos INNER JOIN tb_divisiones ON tb_reglas_torneos.idTorneo = tb_divisiones.idTorneo) ON tb_calendario.idDivision = tb_divisiones.id WHERE (((tb_calendario.id)=${id}));`;
  const infoTorneoDivision = await models.tb_torneos.sequelize.query(query1, {
    type: QueryTypes.SELECT,
  });
  response.push({ info: infoTorneoDivision });
  const infoReglas = await models.tb_reglas_torneos.sequelize.query(query2, {
    type: QueryTypes.SELECT,
  });
  response.push({ reglas: infoReglas });
  return res.status(200).json({
    ok: true,
    response,
  });
};

export const ModaltablaReportesDeLaFecha = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const query = `SELECT tb_reportes_comisarios.id AS ReporteNo, tb_estado_reportes.nombre AS Estado, tb_reportes_comisarios.noVuelta, GROUP_CONCAT(CONCAT(tb_rol_involucrados.nombre, ' - ', tb_pilotos.nombreCorto) ORDER BY tb_rol_involucrados.id SEPARATOR ' // ' ) AS Roles, CONCAT('https://multimedia.nitrosimracing.com.co/plantillasphp/resolucion.php?&id_reporte=',tb_reportes_comisarios.id) AS Ver FROM (((tb_reportes_comisarios INNER JOIN tb_estado_reportes ON tb_reportes_comisarios.idEstadoReporte = tb_estado_reportes.id) INNER JOIN tb_involucrados_sanciones ON tb_reportes_comisarios.id = tb_involucrados_sanciones.idReporte) INNER JOIN tb_rol_involucrados ON tb_involucrados_sanciones.idRolInvolucrado = tb_rol_involucrados.id) INNER JOIN tb_pilotos ON tb_involucrados_sanciones.idPiloto = tb_pilotos.id WHERE tb_reportes_comisarios.idCalendario = ${id} GROUP BY tb_reportes_comisarios.idCalendario, tb_reportes_comisarios.id, tb_estado_reportes.nombre, tb_reportes_comisarios.noVuelta ORDER BY tb_reportes_comisarios.id;`;
  try {
    const resultados = await models.tb_calendario.sequelize.query(query, {
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
};

export const insetb_camaras_transmisiones = async (
  req: Request,
  res: Response
) => {
  const { idPerfil, idPiloto, idCalendario, linkCamara } = req.body;
  try {
    const resultados = await models.tb_camaras_transmisiones.findOne({
      where: {
        idCalendario: idCalendario,
        idPiloto: idPiloto,
      },
    });
    if (!resultados) {
      const respuesta = await models.tb_camaras_transmisiones.create({ idPerfil, idPiloto, idCalendario, linkCamara });
      return res.status(200).json({
        ok: true,
        respuesta,
      });
    } else {
      const respuesta = await models.tb_camaras_transmisiones.update({ idPerfil, idPiloto, idCalendario, linkCamara },{
        where: {
          idCalendario: idCalendario,
          idPiloto: idPiloto,
        },
      } );
      return res.status(200).json({
        ok: true,
        respuesta,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getSancionadosMasInfo = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const query = `SELECT tb_reportes_comisarios.id AS ReporteNo, tb_estado_reportes.nombre AS Estado, tb_pilotos.nombreCorto, GROUP_CONCAT( CONCAT( tb_penalizacion_sanciones.valor, ' ', tb_tipo_penalizacion.unidadDeMedida ) SEPARATOR ' - ' ) AS Sancion, CONCAT( 'https://multimedia.nitrosimracing.com.co/plantillasphp/resolucion.php?&id_reporte=', tb_reportes_comisarios.id ) AS Ver FROM ( ( ( tb_pilotos_penalizados INNER JOIN tb_penalizacion_sanciones ON tb_pilotos_penalizados.idPenalizacion = tb_penalizacion_sanciones.id ) INNER JOIN tb_tipo_penalizacion ON tb_penalizacion_sanciones.idTipoPenalizacion = tb_tipo_penalizacion.id ) INNER JOIN( ( tb_calendario AS tb_calendario_1 INNER JOIN( ( ( tb_reportes_comisarios INNER JOIN tb_calendario ON tb_reportes_comisarios.idCalendario = tb_calendario.id ) INNER JOIN tb_involucrados_sanciones ON tb_reportes_comisarios.id = tb_involucrados_sanciones.idReporte ) INNER JOIN tb_estado_reportes ON tb_reportes_comisarios.idEstadoReporte = tb_estado_reportes.id ) ON tb_calendario_1.idDivision = tb_calendario.idDivision ) INNER JOIN tb_pilotos ON tb_involucrados_sanciones.idPiloto = tb_pilotos.id ) ON tb_pilotos_penalizados.idInvolucradoSancion = tb_involucrados_sanciones.id ) WHERE (((tb_calendario_1.id)=${id}) AND ((tb_penalizacion_sanciones.valor)>0)) OR (((tb_calendario_1.id)=${id}) AND ((tb_penalizacion_sanciones.idTipoPenalizacion)=5 Or (tb_penalizacion_sanciones.idTipoPenalizacion)=6 Or (tb_penalizacion_sanciones.idTipoPenalizacion)=7 Or (tb_penalizacion_sanciones.idTipoPenalizacion)=8)) GROUP BY tb_pilotos.nombreCorto;`

  const resultados = await models.tb_pilotos_penalizados.sequelize.query(query, {
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
}

export const getCalendarioDelTornaoMasInfo = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const query = `SELECT tb_torneos.nombre AS Torneo, tb_divisiones.nombre AS Division, tb_calendario.nombreEvento AS Evento, tb_calendario.fechaHoraCarrera AS Fecha_Hora, tb_estado_carrera.nombre AS Estado FROM (tb_calendario AS tb_calendario_1 INNER JOIN ((tb_calendario INNER JOIN tb_divisiones ON tb_calendario.idDivision = tb_divisiones.id) INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo) ON tb_calendario_1.idDivision = tb_calendario.idDivision) INNER JOIN tb_estado_carrera ON tb_calendario.idEstadoCarrera = tb_estado_carrera.id WHERE (((tb_calendario_1.id)=${id}) AND ((tb_torneos.idEstadoTorneo)=1) AND ((tb_divisiones.idEstado)=1)) ORDER BY tb_calendario.fechaHoraCarrera;`

  const resultados = await models.tb_calendario.sequelize.query(query, {
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
}