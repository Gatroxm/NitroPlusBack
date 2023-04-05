import { Response, Request } from "express";
import { QueryTypes } from "sequelize";
const { sequelize } = require("sequelize");
import { initModels } from "../models/init-models";

const models = initModels(sequelize);

export const totalParticipaciones = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const Participaciones: any = await models.tb_puntos.sequelize?.query(
      `SELECT Sum(tb_ident_pos.isParticipacion) AS Participaciones FROM (tb_puntos INNER JOIN tb_ident_pos ON tb_puntos.idIdentPos = tb_ident_pos.id) INNER JOIN (tb_reparto_puntos INNER JOIN tb_resultados ON tb_reparto_puntos.idResultado = tb_resultados.id) ON tb_puntos.id = tb_reparto_puntos.idPuntos GROUP BY tb_reparto_puntos.idCodificacion, tb_resultados.idPiloto HAVING (((tb_reparto_puntos.idCodificacion)=1) AND ((tb_resultados.idPiloto)=${id}));`,
      { type: QueryTypes.SELECT }
    );
    return res.json({
      ok: true,
      Participaciones,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const totalVictorias = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const Victorias = await models.tb_puntos.sequelize?.query(
      `SELECT Sum(tb_ident_pos.isVictoria) AS Victorias
      FROM (tb_puntos INNER JOIN tb_ident_pos ON tb_puntos.idIdentPos = tb_ident_pos.id) INNER JOIN (tb_reparto_puntos INNER JOIN tb_resultados ON tb_reparto_puntos.idResultado = tb_resultados.id) ON tb_puntos.id = tb_reparto_puntos.idPuntos
      GROUP BY tb_reparto_puntos.idCodificacion, tb_resultados.idPiloto
      HAVING (((tb_reparto_puntos.idCodificacion)=1) AND ((tb_resultados.idPiloto)=${id}));`,
      { type: QueryTypes.SELECT }
    );
    return res.json({
      ok: true,
      Victorias,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const nombreCortoPiloto = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const NombreCorto = await models.tb_puntos.sequelize?.query(
      `SELECT tb_pilotos.NOMBRECORTO as NOMBRECORTO FROM tb_pilotos WHERE tb_pilotos.PK_ID_PILOTO = ${id} `,
      { type: QueryTypes.SELECT }
    );

    return res.json({
      ok: true,
      NombreCorto,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getProximasCarreras = async (req: Request, res: Response) => {
  const { id } = req.params;

  const date = new Date();
  try {
    const query = `SELECT RutaImagenCompleta(tb_simulador.logo) AS logosimulador, tb_calendario.id AS idCalendario, convertir_a_utc(tb_calendario.fechaHoraCarrera) AS Fecha, tb_calendario.codFecha AS Fecha_No, tb_divisiones.id AS idDivision, tb_divisiones.nombre AS NombreDivision, tb_calendario.nombreEvento, tb_torneos.linkOficial, tb_inscripciones.idPiloto, tb_torneos.idTorneo, RutaImagenCompleta(tb_pistas_sim.imgOntrack) AS ImgTrack, tb_pistas_variantes.nombre AS nombrePista, RutaImagenCompleta(tb_pistas_variantes.imgMapa) AS ImgMapa, RutaImagenCompleta(tb_paises.imgBandera) AS Bandera, tb_estado_carrera.id AS idEstadoCarrera, tb_estado_carrera.nombre AS EstadoCarrera, tb_calendario.nombreEventoCorto, RutaImagenCompleta(tb_torneos.imgLogo) AS logotorneo, tb_divisiones.permiteReportes, tb_divisiones.requiereRepeticion, tb_divisiones.plazoEnvioRepeticion, tb_divisiones.horasInicioReportes, tb_divisiones.horasFinReportes, tb_coches.idCategoria, tb_cat_coches.nombre AS nombrecatcoche, RutaImagenCompleta(tb_marcas_coches.imgLogo) AS logomarcacoche, tb_cat_piloto.nombre AS catPiloto, tb_tipo_piloto.nombre AS tipoPiloto, RutaImagenCompleta(tb_banners_menu.urlPng) AS imgBanner, tb_banners_menu.urlLink AS urlBanner, tb_torneos.nombre AS nombreTorneo, tb_divisiones_pilotos.idEstado AS idEstadoDivision, tb_divisiones.requiereConfirmacion, tb_divisiones.horasAntesConfirmacionApertura, tb_divisiones.horasAntesConfirmacionCierre, tb_calendario.confirmacionCreada, tb_calendario.host, tb_calendario.noVueltasRequeridas, tb_calendario.elo_multiplicador, tb_calendario.idSistemaPuntos, tb_coches.nombre AS nombrecoche, tb_divisiones_pilotos.idCategoriaPiloto, tb_divisiones_pilotos.idCoche, tb_divisiones_pilotos.idEquipo, tb_tipo_piloto.id AS idTipoPiloto, tb_equipos.nombre AS nombreEquipo, DATE_SUB( convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasAntesConfirmacionApertura HOUR ) AS inicioConfirmacion, DATE_SUB( convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasAntesConfirmacionCierre HOUR ) AS CierreConfirmacion FROM ( ( ( ( ( tb_inscripciones INNER JOIN( ( tb_divisiones_pilotos INNER JOIN tb_cat_piloto ON tb_divisiones_pilotos.idCategoriaPiloto = tb_cat_piloto.id ) INNER JOIN tb_tipo_piloto ON tb_divisiones_pilotos.idTipoPiloto = tb_tipo_piloto.id ) ON tb_inscripciones.id = tb_divisiones_pilotos.idInscripcion ) INNER JOIN( tb_simulador INNER JOIN( ( ( ( ( ( ( ( tb_calendario INNER JOIN tb_divisiones ON tb_calendario.idDivision = tb_divisiones.id ) INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo ) INNER JOIN tb_pistas_sim ON tb_calendario.idPista = tb_pistas_sim.id ) INNER JOIN tb_pistas_variantes ON tb_pistas_sim.idPistaVariante = tb_pistas_variantes.id ) INNER JOIN tb_pistas ON tb_pistas_variantes.idPistaPrincipal = tb_pistas.id ) INNER JOIN tb_paises ON tb_pistas.idPais = tb_paises.id ) INNER JOIN tb_estado_carrera ON tb_calendario.idEstadoCarrera = tb_estado_carrera.id ) INNER JOIN tb_banners_menu ON tb_calendario.idBanner = tb_banners_menu.id ) ON tb_simulador.id = tb_torneos.idSimulador ) ON tb_divisiones_pilotos.idNombreDivision = tb_calendario.idDivision ) INNER JOIN tb_sistema_puntos ON tb_calendario.idSistemaPuntos = tb_sistema_puntos.id ) INNER JOIN( ( ( tb_coches_sim INNER JOIN tb_coches ON tb_coches_sim.idCoche = tb_coches.id ) INNER JOIN tb_cat_coches ON tb_coches.idCategoria = tb_cat_coches.id ) INNER JOIN tb_marcas_coches ON tb_coches.idMarca = tb_marcas_coches.id ) ON tb_divisiones_pilotos.idCoche = tb_coches_sim.id ) INNER JOIN tb_equipos_sim ON tb_divisiones_pilotos.idEquipo = tb_equipos_sim.id ) INNER JOIN tb_equipos ON tb_equipos_sim.idEquipo = tb_equipos.id WHERE ( ( (tb_inscripciones.idPiloto) = ${id} ) AND((tb_estado_carrera.id) = 1) AND( (tb_divisiones_pilotos.idEstado) = 1 ) ) ORDER BY tb_calendario.fechaHoraCarrera LIMIT 20;`;
    const top5Carreras: any = await models.tb_calendario.sequelize?.query(
      query,
      { type: QueryTypes.SELECT }
    );
    if (top5Carreras.length > 0) {
      return res.json({
        ok: true,
        carreras: true,
        top5Carreras,
      });
    } else {
      return res.json({
        ok: true,
        carreras: false,
        msg: "No cuentas con carreras programadas",
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getUltimosResultados = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const query = `SELECT tb_calendario.fechaHoraCarrera, tb_calendario.fechaNo, tb_torneos.nombre, tb_divisiones.nombre, tb_calendario.nombreEvento, tb_paises.imgBandera, tb_ident_pos.nombre, tb_puntos.puntos FROM (tb_paises INNER JOIN (tb_pistas INNER JOIN (tb_pistas_variantes INNER JOIN (tb_pistas_sim INNER JOIN ((tb_estado_carrera INNER JOIN (tb_divisiones INNER JOIN (tb_calendario INNER JOIN ((tb_reparto_puntos INNER JOIN tb_resultados ON tb_reparto_puntos.idResultado = tb_resultados.id) INNER JOIN tb_puntos ON tb_reparto_puntos.idPuntos = tb_puntos.id) ON tb_calendario.id = tb_resultados.idCalendario) ON tb_divisiones.id = tb_resultados.idNombreDivision) ON tb_estado_carrera.id = tb_calendario.idEstadoCarrera) INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo) ON tb_pistas_sim.id = tb_calendario.idPista) ON tb_pistas_variantes.id = tb_pistas_sim.id) ON tb_pistas.id = tb_pistas_variantes.idPistaPrincipal) ON tb_paises.id = tb_pistas.idPais) INNER JOIN tb_ident_pos ON tb_puntos.idIdentPos = tb_ident_pos.id WHERE (((tb_reparto_puntos.idCodificacion)=1) AND ((tb_resultados.idPiloto)=${id}) AND ((tb_estado_carrera.id)=1)) ORDER BY tb_calendario.fechaHoraCarrera LIMIT 10;`;
    const ultimosResultados: any = await models.tb_paises.sequelize?.query(
      query,
      { type: QueryTypes.SELECT }
    );
    if (ultimosResultados.length > 0) {
      return res.json({
        ok: true,
        resultados: true,
        ultimosResultados,
      });
    } else {
      return res.json({
        ok: true,
        resultados: false,
        msg: "No cuentas con Reportes",
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const gteUltimosReportesEnProceso = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const query = `SELECT tb_reportes_comisarios.id AS idReporte, RutaImagenCompleta(tb_simulador.logo) AS logosimulador, tb_calendario.id AS idCalendario, convertir_a_utc(tb_calendario.fechaHoraCarrera) AS Fecha, tb_calendario.codFecha AS Fecha_No, tb_divisiones.id AS idDivision, tb_divisiones.nombre AS NombreDivision, tb_calendario.nombreEvento, tb_torneos.linkOficial, tb_involucrados_sanciones.idPiloto, tb_torneos.idTorneo, tb_divisiones.permiteReportes, RutaImagenCompleta(tb_pistas_sim.imgOntrack) AS ImgTrack, tb_pistas_variantes.nombre AS nombrePista, RutaImagenCompleta(tb_pistas_variantes.imgMapa) AS ImgMapa, RutaImagenCompleta(tb_paises.imgBandera) AS Bandera, tb_calendario.nombreEventoCorto, RutaImagenCompleta(tb_torneos.imgLogo) AS logotorneo, RutaImagenCompleta(tb_banners_menu.urlPng) AS imgBanner, tb_banners_menu.urlLink AS urlBanner, tb_torneos.nombre AS nombreTorneo, tb_rol_involucrados.nombre AS nombreRol, tb_involucrados_sanciones.id AS idInvolucrado, DATE_ADD( convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasInicioReportes HOUR ) AS inicioReportes, DATE_ADD( convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinApelaciones HOUR ) AS finApelaciones FROM ( ( ( tb_reportes_comisarios INNER JOIN tb_involucrados_sanciones ON tb_reportes_comisarios.id = tb_involucrados_sanciones.idReporte ) INNER JOIN tb_rol_involucrados ON tb_involucrados_sanciones.idRolInvolucrado = tb_rol_involucrados.id ) INNER JOIN tb_estado_reportes ON tb_reportes_comisarios.idEstadoReporte = tb_estado_reportes.id ) INNER JOIN( ( ( ( ( ( ( ( tb_calendario INNER JOIN tb_divisiones ON tb_calendario.idDivision = tb_divisiones.id ) INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo ) INNER JOIN tb_pistas_sim ON tb_calendario.idPista = tb_pistas_sim.id ) INNER JOIN tb_pistas_variantes ON tb_pistas_sim.idPistaVariante = tb_pistas_variantes.id ) INNER JOIN tb_pistas ON tb_pistas_variantes.idPistaPrincipal = tb_pistas.id ) INNER JOIN tb_paises ON tb_pistas.idPais = tb_paises.id ) INNER JOIN tb_banners_menu ON tb_calendario.idBanner = tb_banners_menu.id ) INNER JOIN tb_simulador ON tb_torneos.idSimulador = tb_simulador.id ) ON tb_reportes_comisarios.idCalendario = tb_calendario.id WHERE ( ( ( tb_involucrados_sanciones.idPiloto ) = ${id} ) AND((tb_estado_reportes.id) = 1) ) ORDER BY tb_calendario.fechaHoraCarrera DESC ;`;
  try {
    const ultimosReportesEnProceso: any =
      await models.tb_involucrados_sanciones.sequelize?.query(query, {
        type: QueryTypes.SELECT,
      });
    if (ultimosReportesEnProceso.length > 0) {
      return res.json({
        ok: true,
        reportes: true,
        ultimosReportesEnProceso,
      });
    } else {
      return res.json({
        ok: false,
        reportes: false,
        msg: "No cuentas con Reportes",
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getUltimosReportesCerrados = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const desde = Number(req.query.desde) || 0;
  const date = new Date();
  const query = `SELECT tb_reportes_comisarios.id AS idReporte, tb_reportes_comisarios.fechaReporte, tb_torneos.nombre AS NombreTorneo, tb_divisiones.nombre AS NombreDivision, tb_rol_involucrados.nombre AS Rol, tb_involucrados_sanciones.idPiloto, tb_involucrados_sanciones.idRolInvolucrado, tb_tipo_penalizacion.nombre, tb_gravedad_sancion.nombre AS gravedad, tb_tipo_penalizacion.unidadDeMedida, tb_penalizacion_sanciones.valor, tb_estado_reportes.id AS idEstado FROM ((tb_conceptos_comisarios RIGHT JOIN (((((((((tb_reportes_comisarios INNER JOIN tb_calendario ON tb_reportes_comisarios.idCalendario = tb_calendario.id) INNER JOIN (tb_torneos INNER JOIN tb_divisiones ON tb_torneos.idTorneo = tb_divisiones.idTorneo) ON tb_calendario.idDivision = tb_divisiones.id) INNER JOIN tb_involucrados_sanciones ON tb_reportes_comisarios.id = tb_involucrados_sanciones.idReporte) LEFT JOIN tb_pilotos_penalizados ON tb_involucrados_sanciones.id = tb_pilotos_penalizados.idInvolucradoSancion) LEFT JOIN tb_rol_involucrados ON tb_involucrados_sanciones.idRolInvolucrado = tb_rol_involucrados.id) LEFT JOIN tb_descargos_involucrados ON tb_involucrados_sanciones.id = tb_descargos_involucrados.idInvolucradoSancion) LEFT JOIN tb_evidencias_reportes ON tb_involucrados_sanciones.id = tb_evidencias_reportes.idInvolucradoSancion) LEFT JOIN tb_penalizacion_sanciones ON tb_pilotos_penalizados.idPenalizacion = tb_penalizacion_sanciones.id) INNER JOIN tb_estado_reportes ON tb_reportes_comisarios.idEstadoReporte = tb_estado_reportes.id) ON tb_conceptos_comisarios.idReporte = tb_reportes_comisarios.id) LEFT JOIN tb_tipo_penalizacion ON tb_penalizacion_sanciones.idTipoPenalizacion = tb_tipo_penalizacion.id) LEFT JOIN tb_gravedad_sancion ON tb_penalizacion_sanciones.idGravedad = tb_gravedad_sancion.id GROUP BY tb_reportes_comisarios.id, tb_reportes_comisarios.fechaReporte, tb_torneos.nombre, tb_divisiones.nombre, tb_rol_involucrados.nombre, tb_involucrados_sanciones.idPiloto, tb_involucrados_sanciones.idRolInvolucrado, tb_tipo_penalizacion.nombre, tb_gravedad_sancion.nombre, tb_tipo_penalizacion.unidadDeMedida, tb_penalizacion_sanciones.valor, tb_estado_reportes.id HAVING (((tb_involucrados_sanciones.idPiloto)=${id}) AND ((tb_estado_reportes.id)>1)) ORDER BY tb_reportes_comisarios.id DESC Limit 20`;
  try {
    const ultimosReportesCerrados: any =
      await models.tb_reportes_comisarios.sequelize?.query(query, {
        type: QueryTypes.SELECT,
      });
    if (ultimosReportesCerrados.length > 0) {
      return res.json({
        ok: true,
        ultimosReportesCerrados,
      });
    } else {
      return res.json({
        ok: true,
        reportes: false,
        msg: "No cuentas con Reportes",
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getPodios = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT Sum(tb_ident_pos.isPodio) AS Podios FROM (tb_puntos INNER JOIN tb_ident_pos ON tb_puntos.idIdentPos = tb_ident_pos.id) INNER JOIN (tb_reparto_puntos INNER JOIN tb_resultados ON tb_reparto_puntos.idResultado = tb_resultados.id) ON tb_puntos.id = tb_reparto_puntos.idPuntos GROUP BY tb_reparto_puntos.idCodificacion, tb_resultados.idPiloto
    HAVING (((tb_reparto_puntos.idCodificacion)=1) AND ((tb_resultados.idPiloto)=${id}))`;
  try {
    const Podios = await models.tb_puntos.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    if (Podios.length > 0) {
      return res.json({
        ok: true,
        reportes: true,
        Podios,
      });
    } else {
      return res.json({
        ok: true,
        reportes: false,
        msg: "No cuentas con Pódios",
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getDNF = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT Sum(tb_ident_pos.isDNF) AS DNF FROM (tb_puntos INNER JOIN tb_ident_pos ON tb_puntos.idIdentPos = tb_ident_pos.id) INNER JOIN (tb_reparto_puntos INNER JOIN tb_resultados ON tb_reparto_puntos.idResultado = tb_resultados.id) ON tb_puntos.id = tb_reparto_puntos.idPuntos GROUP BY tb_reparto_puntos.idCodificacion, tb_resultados.idPiloto HAVING (((tb_reparto_puntos.idCodificacion)=1) AND ((tb_resultados.idPiloto)=${id}));`;
  try {
    const DNF = await models.tb_puntos.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    if (DNF.length > 0) {
      return res.json({
        ok: true,
        reportes: true,
        DNF,
      });
    } else {
      return res.json({
        ok: true,
        reportes: false,
        msg: "No cuentas con DNF",
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getDSQ = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT Sum(tb_ident_pos.isDSQ) AS DSQ FROM (tb_puntos INNER JOIN tb_ident_pos ON tb_puntos.idIdentPos = tb_ident_pos.id) INNER JOIN (tb_reparto_puntos INNER JOIN tb_resultados ON tb_reparto_puntos.idResultado = tb_resultados.id) ON tb_puntos.id = tb_reparto_puntos.idPuntos GROUP BY tb_reparto_puntos.idCodificacion, tb_resultados.idPiloto
    HAVING (((tb_reparto_puntos.idCodificacion)=1) AND ((tb_resultados.idPiloto)=${id}));`;
  try {
    const DSQ = await models.tb_puntos.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    if (DSQ.length > 0) {
      return res.json({
        ok: true,
        reportes: true,
        DSQ,
      });
    } else {
      return res.json({
        ok: true,
        reportes: false,
        msg: "No cuentas con DSQ",
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getPoles = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT Sum(tb_ident_pos.isPole) AS Poles FROM (tb_puntos INNER JOIN tb_ident_pos ON tb_puntos.idIdentPos = tb_ident_pos.id) INNER JOIN (tb_reparto_puntos INNER JOIN tb_resultados ON tb_reparto_puntos.idResultado = tb_resultados.id) ON tb_puntos.id = tb_reparto_puntos.idPuntos GROUP BY tb_reparto_puntos.idCodificacion, tb_resultados.idPiloto
    HAVING (((tb_reparto_puntos.idCodificacion)=1) AND ((tb_resultados.idPiloto)=${id}));`;
  try {
    const Poles = await models.tb_puntos.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    if (Poles.length > 0) {
      return res.json({
        ok: true,
        reportes: true,
        Poles,
      });
    } else {
      return res.json({
        ok: true,
        reportes: false,
        msg: "No cuentas con Poles",
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getVueltaRapida = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT Sum(tb_ident_pos.isVueltaRapida) AS VueltaRapida FROM (tb_puntos INNER JOIN tb_ident_pos ON tb_puntos.idIdentPos = tb_ident_pos.id) INNER JOIN (tb_reparto_puntos INNER JOIN tb_resultados ON tb_reparto_puntos.idResultado = tb_resultados.id) ON tb_puntos.id = tb_reparto_puntos.idPuntos GROUP BY tb_reparto_puntos.idCodificacion, tb_resultados.idPiloto HAVING (((tb_reparto_puntos.idCodificacion)=1) AND ((tb_resultados.idPiloto)=${id}));`;
  try {
    const VueltaRapida = await models.tb_puntos.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    if (VueltaRapida.length > 0) {
      return res.json({
        ok: true,
        reportes: true,
        VueltaRapida,
      });
    } else {
      return res.json({
        ok: true,
        reportes: false,
        msg: "No cuentas con VueltaRapida",
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getPilotoDelDia = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT Sum(tb_ident_pos.isPilotodelDia) AS PilotoDelDia FROM (tb_puntos INNER JOIN tb_ident_pos ON tb_puntos.idIdentPos = tb_ident_pos.id) INNER JOIN (tb_reparto_puntos INNER JOIN tb_resultados ON tb_reparto_puntos.idResultado = tb_resultados.id) ON tb_puntos.id = tb_reparto_puntos.idPuntos GROUP BY tb_reparto_puntos.idCodificacion, tb_resultados.idPiloto HAVING (((tb_reparto_puntos.idCodificacion)=1) AND ((tb_resultados.idPiloto)=${id}));`;
  try {
    const PilotoDelDia = await models.tb_puntos.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    if (PilotoDelDia.length > 0) {
      return res.json({
        ok: true,
        reportes: true,
        PilotoDelDia,
      });
    } else {
      return res.json({
        ok: true,
        reportes: false,
        msg: "No cuentas con Piloto Del Día",
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getCalendario = async (req: Request, res: Response) => {
  const division = Number(req.query.division) || 0;
  const query = `SELECT tb_calendario.fechaNo, tb_calendario.codFecha, tb_paises.imgBandera, tb_calendario.nombreEvento, tb_pistas_variantes.nombre AS nombreVariante, tb_calendario.fechaHoraCarrera, tb_calendario.horaVirtual, tb_calendario.tempAire, tb_calendario.tempPista, tb_calendario.nubosidad, tb_calendario.lluvia, tb_calendario.observaciones, tb_calendario.urlTransmision, tb_calendario.requisitoBoxes, tb_formato_carrera.nombre AS NombreFormato, tb_estado_carrera.nombre AS NombreEstado, tb_divisiones.nombre AS NombreDivision, tb_calendario.esPorEtapas, tb_calendario.noVueltasRequeridas, tb_calendario.elo_multiplicador, tb_calendario.nombreEventoCorto, tb_calendario.confirmacionCreada, tb_sistema_puntos.nombre AS NombreSistema FROM tb_sistema_puntos INNER JOIN ((tb_estado_carrera INNER JOIN (tb_formato_carrera INNER JOIN ((((tb_calendario INNER JOIN tb_pistas_sim ON tb_calendario.idPista = tb_pistas_sim.id) INNER JOIN tb_pistas_variantes ON tb_pistas_sim.idPistaVariante = tb_pistas_variantes.id) INNER JOIN tb_pistas ON tb_pistas_variantes.idPistaPrincipal = tb_pistas.id) INNER JOIN tb_paises ON tb_pistas.idPais = tb_paises.id) ON tb_formato_carrera.id = tb_calendario.idFormatoCarrera) ON tb_estado_carrera.id = tb_calendario.idEstadoCarrera) INNER JOIN tb_divisiones ON tb_calendario.idDivision = tb_divisiones.id) ON tb_sistema_puntos.id = tb_calendario.idSistemaPuntos WHERE (((tb_calendario.idDivision)=${division})) ORDER BY tb_calendario.fechaHoraCarrera DESC;`;
  try {
    const calendario = await models.tb_sistema_puntos.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    if (calendario.length > 0) {
      const resp: any = [];
      calendario.forEach((element: any) => {
        const imgBandera = `https://multimedia.nitrosimracingclub.com${element.imgBandera}`;
        const arr = { img: imgBandera, ...element };
        resp.push(arr);
      });
      return res.status(200).json({
        ok: true,
        calendario: resp,
      });
    } else {
      return res.status(404).json({
        ok: false,
        msg: `No se encuentra calendario para la división ${division}`,
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getSimuladores = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT tb_simulador.nombre AS Simulador, tb_plataforma.nombre AS Plataforma, tb_pilotos_id_sim.idPiloto, tb_cod_plataforma.nombre, tb_pilotos_id_sim.idSimPiloto, tb_pilotos_id_sim.idEstado, tb_sim_plat_codplat.idSimulador, tb_sim_plat_codplat.idPlataforma FROM tb_cod_plataforma INNER JOIN (tb_plataforma INNER JOIN ((tb_pilotos_id_sim INNER JOIN tb_sim_plat_codplat ON tb_pilotos_id_sim.idSimCodPlataforma = tb_sim_plat_codplat.id) INNER JOIN tb_simulador ON tb_sim_plat_codplat.idSimulador = tb_simulador.id) ON tb_plataforma.id = tb_sim_plat_codplat.idPlataforma) ON tb_cod_plataforma.id = tb_sim_plat_codplat.idCodplataforma WHERE (((tb_pilotos_id_sim.idPiloto)=${id}));
    `;
  try {
    const simuladores = await models.tb_cod_plataforma.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    if (simuladores.length > 0) {
      return res.status(200).json({
        ok: true,
        simuladores,
      });
    } else {
      return res.status(404).json({
        ok: false,
        msg: `No se encuentran Simuladores`,
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getLicencias = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT tb_pilotos.id, tb_sim_plat_codplat.idSimulador, tb_pilotos_id_sim.idEstado, tb_licencias_pilotos.id AS LicenciaNo, tb_categoria_elo.nombreCategoria, tb_categoria_elo.descripcion, tb_categoria_elo.comoObtenerla, tb_categoria_elo.linkImagen, CASE WHEN tb_categoria_elo.linkFicha IS NOT NULL THEN CONCAT(tb_categoria_elo.linkFicha,'?&id_piloto=',tb_pilotos.id,'&id_licencia=',tb_categoria_elo.id) END AS LinkFicha, tb_elo_actual.valorELO, MAX(tb_pilotos_id_sim.id) AS idSimPiloto, tb_info_clasificatorios.id AS idClasificatorio, tb_info_clasificatorios.requiereSala, tb_info_clasificatorios.linkTiempos, tb_sim_plat_codplat.isVisible, tb_categoria_elo.idEstado AS idEstadoElo, tb_tipo_licencias.nivelLicencia, tb_tipo_licencias.nombre AS nombreNivelLicencia, CASE WHEN tb_tipo_licencias.nombre IS NULL THEN 'Sin Licencia' END AS TextoLicencia, tb_licencias_pilotos.idCategoriaELO as idEloLicencias, tb_categoria_elo.id as idCatElo, tb_elo_actual.idCategoriaELO as idEloActual, CASE WHEN tb_elo_actual.valorELO IS NOT NULL THEN CONCAT('Elo: ', tb_elo_actual.valorELO) END AS TextoELO, CASE WHEN tb_participaciones.participaciones IS NOT NULL THEN CONCAT('Participaciones: ', tb_participaciones.participaciones) END AS TextoParticipaciones, CASE WHEN tb_participaciones.indicadorCumplimiento IS NOT NULL THEN CONCAT('% Cump: ', tb_participaciones.indicadorCumplimiento) END AS TextoIndCump, CASE WHEN tb_sr_actual.valorSR IS NOT NULL THEN CONCAT('SR: ', tb_sr_actual.valorSR) END AS TextoSR,tb_participaciones.participaciones, tb_participaciones.indicadorCumplimiento, tb_sr_actual.valorSR, tb_licencias_pilotos.idCategoriaELO FROM ( ( ( ( ( ( ( ( tb_pilotos INNER JOIN tb_pilotos_id_sim ON tb_pilotos.id = tb_pilotos_id_sim.idPiloto ) INNER JOIN tb_sim_plat_codplat ON tb_pilotos_id_sim.idSimCodPlataforma = tb_sim_plat_codplat.id ) LEFT JOIN tb_licencias_pilotos ON tb_pilotos.id = tb_licencias_pilotos.idPiloto ) LEFT JOIN tb_categoria_elo ON tb_sim_plat_codplat.idSimulador = tb_categoria_elo.idSimulador ) LEFT JOIN tb_elo_actual ON tb_pilotos.id = tb_elo_actual.idPiloto ) LEFT JOIN tb_info_clasificatorios ON tb_categoria_elo.id = tb_info_clasificatorios.idCategoriaElo ) LEFT JOIN tb_tipo_licencias ON tb_licencias_pilotos.idLicencia = tb_tipo_licencias.id ) LEFT JOIN tb_participaciones ON( tb_sim_plat_codplat.idSimulador = tb_participaciones.idSimulador ) AND( tb_pilotos.id = tb_participaciones.idPiloto ) ) LEFT JOIN tb_sr_actual ON( tb_sim_plat_codplat.idSimulador = tb_sr_actual.idSimulador ) AND( tb_pilotos.id = tb_sr_actual.idPiloto ) GROUP BY tb_pilotos.id, tb_sim_plat_codplat.idSimulador, tb_pilotos_id_sim.idEstado, tb_licencias_pilotos.id, tb_categoria_elo.descripcion, tb_categoria_elo.comoObtenerla, tb_categoria_elo.linkImagen, tb_elo_actual.valorELO, tb_info_clasificatorios.id, tb_info_clasificatorios.requiereSala, tb_info_clasificatorios.linkTiempos, tb_sim_plat_codplat.isVisible, tb_categoria_elo.idEstado, tb_tipo_licencias.nivelLicencia, tb_tipo_licencias.nombre, tb_licencias_pilotos.idCategoriaELO, tb_categoria_elo.id, tb_elo_actual.idCategoriaELO, tb_participaciones.participaciones, tb_participaciones.indicadorCumplimiento, tb_sr_actual.valorSR, tb_licencias_pilotos.idCategoriaELO HAVING ( ((tb_pilotos.id) = ${id}) AND((tb_pilotos_id_sim.idEstado) = 1) AND((tb_categoria_elo.idEstado) = 1) AND( ( tb_licencias_pilotos.idCategoriaELO ) = tb_categoria_elo.id OR( tb_licencias_pilotos.idCategoriaELO ) IS NULL ) AND((tb_categoria_elo.id) > 0) AND( (tb_elo_actual.idCategoriaELO) = tb_categoria_elo.id OR(tb_elo_actual.idCategoriaELO) IS NULL ) );`;
  try {
    const Licencias = await models.tb_simulador.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });

    if (Licencias.length > 0) {
      return res.status(200).json({
        ok: true,
        Licencias,
      });
    } else {
      return res.status(404).json({
        ok: false,
        msg: `No se encuentran Licencias`,
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getReportes = async (req: Request, res: Response) => {
    const { id } = req.params;
  const query = `SELECT tb_reportes_comisarios.id AS idReporte, RutaImagenCompleta(tb_simulador.logo) AS logosimulador, tb_calendario.id AS idCalendario, tb_calendario.fechaHoraCarrera AS Fecha, tb_calendario.codFecha AS Fecha_No, tb_divisiones.id AS idDivision, tb_divisiones.nombre AS NombreDivision, tb_calendario.nombreEvento, tb_torneos.linkOficial, tb_involucrados_sanciones.idPiloto, tb_torneos.idTorneo, RutaImagenCompleta(tb_pistas_sim.imgOntrack) as ImgTrack, tb_pistas_variantes.nombre AS nombrePista, tb_pistas_variantes.imgMapa, RutaImagenCompleta(tb_paises.imgBandera) as Bandera, tb_calendario.nombreEventoCorto, RutaImagenCompleta(tb_torneos.imgLogo) AS logotorneo, RutaImagenCompleta(tb_banners_menu.urlPng) AS imgBanner, tb_banners_menu.urlLink AS urlBanner, tb_torneos.nombre AS nombreTorneo, tb_rol_involucrados.nombre AS nombreRol FROM ( ( ( tb_reportes_comisarios INNER JOIN tb_involucrados_sanciones ON tb_reportes_comisarios.id = tb_involucrados_sanciones.idReporte ) INNER JOIN tb_rol_involucrados ON tb_involucrados_sanciones.idRolInvolucrado = tb_rol_involucrados.id ) INNER JOIN tb_estado_reportes ON tb_reportes_comisarios.idEstadoReporte = tb_estado_reportes.id ) INNER JOIN( ( ( ( ( ( ( ( tb_calendario INNER JOIN tb_divisiones ON tb_calendario.idDivision = tb_divisiones.id ) INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo ) INNER JOIN tb_pistas_sim ON tb_calendario.idPista = tb_pistas_sim.id ) INNER JOIN tb_pistas_variantes ON tb_pistas_sim.idPistaVariante = tb_pistas_variantes.id ) INNER JOIN tb_pistas ON tb_pistas_variantes.idPistaPrincipal = tb_pistas.id ) INNER JOIN tb_paises ON tb_pistas.idPais = tb_paises.id ) INNER JOIN tb_banners_menu ON tb_calendario.idBanner = tb_banners_menu.id ) INNER JOIN tb_simulador ON tb_torneos.idSimulador = tb_simulador.id ) ON tb_reportes_comisarios.idCalendario = tb_calendario.id WHERE ( ( ( tb_involucrados_sanciones.idPiloto ) = ${id} ) AND((tb_estado_reportes.id) > 1) ) ORDER BY tb_calendario.fechaHoraCarrera DESC LIMIT 20;`;
  try {
    const Reportes = await models.tb_reportes_comisarios.sequelize.query(
      query,
      { type: QueryTypes.SELECT }
    );

    if (Reportes.length > 0) {
      return res.status(200).json({
        ok: true,
        Reportes,
      });
    } else {
      return res.status(404).json({
        ok: false,
        msg: `No se encuentran Licencias`,
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};
export const getResultados = async (req: Request, res: Response) => {

  const {id} = req.params;
  const query = `SELECT rutaImagenCompleta(tb_simulador.logo) AS logosimulador, tb_calendario.id AS idCalendario, convertir_a_utc(tb_calendario.fechaHoraCarrera) AS Fecha, tb_calendario.codFecha AS Fecha_No, tb_divisiones.id AS idDivision, tb_divisiones.nombre AS NombreDivision, tb_calendario.nombreEvento, tb_ident_pos.nombreCorto AS Posicion, tb_resultados.nuevoELO, tb_resultados.nuevoSR, tb_torneos.linkOficial, tb_resultados.idPiloto, tb_torneos.idTorneo, rutaImagenCompleta(tb_pistas_sim.imgOntrack) AS ImgTrack, tb_pistas_variantes.nombre AS nombrePista, rutaImagenCompleta(tb_pistas_variantes.imgMapa) AS Mapa, rutaImagenCompleta(tb_paises.imgBandera) AS Bandera, tb_estado_carrera.id AS idEstadoCarrera, tb_estado_carrera.nombre AS EstadoCarrera, tb_calendario.nombreEventoCorto, rutaImagenCompleta(tb_torneos.imgLogo) AS logotorneo, tb_divisiones.permiteReportes, tb_divisiones.requiereRepeticion, tb_divisiones.plazoEnvioRepeticion, tb_divisiones.horasInicioReportes, tb_divisiones.horasFinReportes, tb_coches.idCategoria, tb_cat_coches.nombre AS nombrecatcoche, rutaImagenCompleta(tb_marcas_coches.imglogo) AS logomarcacoche, tb_cat_piloto.nombre AS catPiloto, tb_tipo_piloto.nombre AS tipoPiloto, rutaImagenCompleta(tb_banners_menu.urlPng) AS imgBanner, tb_banners_menu.urlLink AS urlBanner, tb_torneos.nombre AS nombreTorneo, DATE_ADD( convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasInicioReportes HOUR ) AS inicioReportes, DATE_ADD( convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.horasFinReportes HOUR ) AS finReportes, DATE_ADD( convertir_a_utc(tb_calendario.fechaHoraCarrera), INTERVAL tb_divisiones.plazoEnvioRepeticion HOUR ) AS FinRepeticiones FROM ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( tb_resultados INNER JOIN tb_simulador ON tb_resultados.idSimulador = tb_simulador.id ) INNER JOIN tb_calendario ON tb_resultados.idCalendario = tb_calendario.id ) INNER JOIN tb_divisiones ON tb_calendario.idDivision = tb_divisiones.id ) INNER JOIN tb_ident_pos ON tb_resultados.idPosicion = tb_ident_pos.id ) INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo ) INNER JOIN tb_pistas_sim ON tb_calendario.idPista = tb_pistas_sim.id ) INNER JOIN tb_pistas_variantes ON tb_pistas_sim.idPistaVariante = tb_pistas_variantes.id ) INNER JOIN tb_pistas ON tb_pistas_variantes.idPistaPrincipal = tb_pistas.id ) INNER JOIN tb_paises ON tb_pistas.idPais = tb_paises.id ) INNER JOIN tb_estado_carrera ON tb_calendario.idEstadoCarrera = tb_estado_carrera.id ) INNER JOIN tb_coches_sim ON tb_resultados.idCocheSim = tb_coches_sim.id ) INNER JOIN tb_coches ON tb_coches_sim.idCoche = tb_coches.id ) INNER JOIN tb_cat_coches ON tb_coches.idCategoria = tb_cat_coches.id ) INNER JOIN tb_marcas_coches ON tb_coches.idMarca = tb_marcas_coches.id ) INNER JOIN tb_divisiones_pilotos ON tb_resultados.idDivision = tb_divisiones_pilotos.id ) INNER JOIN tb_cat_piloto ON tb_divisiones_pilotos.idCategoriaPiloto = tb_cat_piloto.id ) INNER JOIN tb_tipo_piloto ON tb_divisiones_pilotos.idTipoPiloto = tb_tipo_piloto.id ) INNER JOIN tb_banners_menu ON tb_calendario.idBanner = tb_banners_menu.id WHERE ( ( (tb_resultados.idPiloto) = ${id} ) AND((tb_estado_carrera.id) = 2) ) ORDER BY tb_calendario.fechaHoraCarrera DESC LIMIT 20;`

  try {
    const resultados = await models.tb_calendario.sequelize.query(
      query,
      { type: QueryTypes.SELECT }
    );
    if(resultados.length > 0) {
      return res.status(200).json({
        ok:true,
        resultados
      })
    } else {
      return res.status(404).json({
        ok:false,
        msg:'No cuentas con resultados'
      })
    }
  }  catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }

}

