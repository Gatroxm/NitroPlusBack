import { Response, Request } from "express";
import { QueryTypes } from "sequelize";
const { sequelize } = require("sequelize");
import { initModels } from "../models/init-models";

const models = initModels(sequelize);

export const getCalendarioLicencias = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT tb_calendario_clasificatorios.id AS idCalendario, convertir_a_utc(tb_calendario_clasificatorios.fechaHoraCarrera) AS Fecha_Hora, tb_calendario_clasificatorios.host, tb_calendario_clasificatorios.infoAdicional, Concat('https://nitrosimracing.com.co/participantes-sala-clasificatoria?var1=',tb_calendario_clasificatorios.id) AS Participantes, tb_estado_carrera.nombre AS Estado, tb_simulador.nombre AS Simulador, tb_info_clasificatorios.nombre AS Licencia, tb_estado_carrera.id AS idEstadoCarrera FROM ((tb_calendario_clasificatorios INNER JOIN tb_estado_carrera ON tb_calendario_clasificatorios.idEstado = tb_estado_carrera.id) INNER JOIN tb_info_clasificatorios ON tb_calendario_clasificatorios.idClasificatorio = tb_info_clasificatorios.id) INNER JOIN tb_simulador ON tb_info_clasificatorios.idSimulador = tb_simulador.id WHERE (((tb_calendario_clasificatorios.idClasificatorio)=${id})) ORDER BY tb_calendario_clasificatorios.fechaHoraCarrera;`;

  try {
    const calendario =
      await models.tb_calendario_clasificatorios.sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
    return res.json({
      ok: true,
      calendario,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const InsertInscripcion = async (req: Request, res: Response) => {
  const { idCalendario, idSimPiloto, idPiloto } = req.body;

  const inscripción = await models.tb_inscripcion_clasificatorios.create({
    idCalendarioClasificatorio:idCalendario,
    idSimPiloto:idSimPiloto,
    idPiloto:idPiloto
  })
  return res.json({
    ok: true,
    inscripción,
  });
};

export const getTiemposActuales = async (req: Request, res: Response) => {

  const {idPiloto, idClasificacion} = req.params;
  const query = `SELECT tb_eventos_clasificatorios.descripcion as Pista, tb_eventos_clasificatorios.Instrucciones as Evento,SUBSTRING(SEC_TO_TIME(tb_resultados_eventos_clasificatorios.valor/1000),4,9) AS Tiempo, tb_resultados_eventos_clasificatorios.idSimDataSesion FROM tb_resultados_eventos_clasificatorios RIGHT JOIN tb_eventos_clasificatorios ON tb_resultados_eventos_clasificatorios.idEventoClasificatorio = tb_eventos_clasificatorios.id AND tb_resultados_eventos_clasificatorios.idPiloto =${idPiloto} WHERE tb_eventos_clasificatorios.idInfoClasificatorio = ${idClasificacion};`;

  try {
    const tiempos =
      await models.tb_resultados_eventos_clasificatorios.sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
    return res.json({
      ok: true,
      tiempos,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
}


export const getTorneos = async (req: Request, res: Response) => {
  const {id} = req.params;
  const query = `SELECT t.*, RutaImagenCompleta(t.imgLogo) as rutaimgLogo, RutaImagenCompleta(t.imgCuadro) as rutaimgCuadro, convertir_a_utc(t.fechaInicio) as convfechadeInicio, convertir_a_utc(t.fechaFin) as convfechadeFin, convertir_a_utc(t.fechaLimiteInscripcion) as convfechafinInscripcion, e.valorELO, sr.valorSR, pt.participaciones, pt.indicadorCumplimiento, ( SELECT COUNT(*) FROM tb_divisiones d WHERE d.idTorneo = t.idTorneo ) AS DivisionesTorneo, EXISTS( SELECT * FROM tb_inscripciones WHERE idPiloto = ${id} AND idTorneo = t.idTorneo ) AS EstaInscrito, ( SELECT COUNT(*) FROM tb_divisiones d WHERE d.idTorneo = t.idTorneo AND d.permiteReservas = 1 AND COALESCE(e.valorELO, 0) >= COALESCE(d.minEloReserva, 0) AND COALESCE(sr.valorSR, 0) >= COALESCE(d.minSrReserva, 0) AND COALESCE(pt.participaciones, 0) >= COALESCE(d.minParticipacionesReserva, 0) AND COALESCE(pt.indicadorCumplimiento, 0) >= COALESCE(d.minCumplimientoReserva, 0) ) AS DivisionesPuedeSerReserva, ( SELECT COUNT(*) FROM tb_divisiones_pilotos dp INNER JOIN tb_inscripciones i ON dp.idInscripcion = i.id WHERE i.idTorneo = t.idTorneo AND dp.idTipoPiloto = 1 AND i.idPiloto = ${id} ) AS InscritoEnDivisionComoTitular, ( SELECT COUNT(*) FROM tb_divisiones_pilotos dp INNER JOIN tb_inscripciones i ON dp.idInscripcion = i.id WHERE i.idTorneo = t.idTorneo AND i.idPiloto = ${id} ) AS InscritoEnDivisionesgeneral, CASE WHEN COUNT(DISTINCT s.idSimCodPlat) > 0 AND COUNT(DISTINCT p.idSimCodPlataforma) = 0 THEN 0 WHEN t.requierePreclasificatorio = 1 AND COUNT(DISTINCT c.idClasificatorio) = 0 THEN 0 WHEN t.idCategoriaELO IS NOT NULL AND t.idCategoriaELO <> COALESCE(e.idCategoriaELO, 0) THEN 0 WHEN t.maxELO IS NOT NULL AND COALESCE(e.valorELO, 0) >= t.maxELO THEN 0 WHEN t.minELO IS NOT NULL AND COALESCE(e.valorELO, 0) <= t.minELO THEN 0 WHEN t.minSR IS NOT NULL AND COALESCE(sr.valorSR, 0) <= t.minSR THEN 0 WHEN t.maxSR IS NOT NULL AND COALESCE(sr.valorSR, 0) >= t.maxSR THEN 0 WHEN t.minParticipaciones IS NOT NULL AND COALESCE(pt.participaciones, 0) <= t.minParticipaciones THEN 0 WHEN t.maxParticipaciones IS NOT NULL AND COALESCE(pt.participaciones, 0) >= t.maxParticipaciones THEN 0 WHEN t.minIndiceCumplimiento IS NOT NULL AND COALESCE(pt.indicadorCumplimiento, 0) <= t.minIndiceCumplimiento THEN 0 WHEN t.maxIndiceCumplimiento IS NOT NULL AND COALESCE(pt.indicadorCumplimiento, 0) >= t.maxIndiceCumplimiento THEN 0 ELSE 1 END AS idCumple, CASE WHEN COUNT(DISTINCT s.idSimCodPlat) > 0 AND COUNT(DISTINCT p.idSimCodPlataforma) = 0 THEN 'No tienes el identificador' WHEN t.requierePreclasificatorio = 1 AND COUNT(DISTINCT c.idClasificatorio) = 0 THEN 'No tienes la clasificatoria requerida' WHEN t.idCategoriaELO IS NOT NULL AND t.idCategoriaELO <> COALESCE(e.idCategoriaELO, 0) THEN 'No tienes la licencia requerida' WHEN t.maxELO IS NOT NULL AND COALESCE(e.valorELO, 0) >= t.maxELO THEN 'Tu elo es demasiado alto' WHEN t.minELO IS NOT NULL AND COALESCE(e.valorELO, 0) <= t.minELO THEN 'Tu elo es demasiado bajo' WHEN t.minSR IS NOT NULL AND COALESCE(sr.valorSR, 0) <= t.minSR THEN 'Tu SR es demasiado bajo' WHEN t.maxSR IS NOT NULL AND COALESCE(sr.valorSR, 0) >= t.maxSR THEN 'Tu SR es demasiado alto' WHEN t.minParticipaciones IS NOT NULL AND COALESCE(pt.participaciones, 0) <= t.minParticipaciones THEN 'Tus participaciones son muy bajas' WHEN t.maxParticipaciones IS NOT NULL AND COALESCE(pt.participaciones, 0) >= t.maxParticipaciones THEN 'Tus participaciones son muy altas' WHEN t.minIndiceCumplimiento IS NOT NULL AND COALESCE(pt.indicadorCumplimiento, 0) <= t.minIndiceCumplimiento THEN 'Tu Ind. Cump. es muy bajo' WHEN t.maxIndiceCumplimiento IS NOT NULL AND COALESCE(pt.indicadorCumplimiento, 0) >= t.maxIndiceCumplimiento THEN 'Tu Ind. Cump. es muy alto' ELSE 'Estas habilitado' END AS Mensaje FROM tb_torneos t LEFT JOIN tb_simcodplat_torneo s ON t.idTorneo = s.idTorneo LEFT JOIN tb_pilotos_id_sim p ON s.idSimCodPlat = p.idSimCodPlataforma LEFT JOIN tb_opcion_clasificatorios_torneo o ON t.idTorneo = o.idTorneo AND t.requierePreclasificatorio = 1 LEFT JOIN tb_resultados_clasificatorios c ON o.idClasificatorio = c.idClasificatorio AND c.idPiloto = ${id} LEFT JOIN tb_elo_actual e ON t.idCategoriaELO = e.idCategoriaELO AND e.idPiloto = ${id} LEFT JOIN tb_sr_actual sr ON t.idSimulador = sr.idSimulador AND sr.idPiloto = ${id} LEFT JOIN tb_participaciones pt ON t.idSimulador = pt.idSimulador AND pt.idPiloto = ${id} WHERE t.idEstadoTorneo = 1 AND( t.permiteReservas = 1 OR( t.permiteReservas = 0 AND( t.fechaLimiteInscripcion IS NULL OR t.fechaLimiteInscripcion >= CURDATE()) ) ) AND( SELECT COUNT(*) FROM tb_divisiones d WHERE d.idTorneo = t.idTorneo AND d.permiteReservas = 1 AND COALESCE(e.valorELO, 0) >= COALESCE(d.minEloReserva, 0) AND COALESCE(sr.valorSR, 0) >= COALESCE(d.minSrReserva, 0) AND COALESCE(pt.participaciones, 0) >= COALESCE(d.minParticipacionesReserva, 0) AND COALESCE(pt.indicadorCumplimiento, 0) >= COALESCE(d.minCumplimientoReserva, 0) ) >( SELECT COUNT(*) FROM tb_divisiones_pilotos dp INNER JOIN tb_inscripciones i ON dp.idInscripcion = i.id WHERE i.idTorneo = t.idTorneo AND i.idPiloto = ${id} ) GROUP BY t.idTorneo ORDER BY t.idTorneo DESC;`;

  try {
    const torneos =
      await models.tb_resultados_eventos_clasificatorios.sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
    return res.json({
      ok: true,
      torneos,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
}