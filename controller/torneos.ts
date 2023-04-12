import { Response, Request } from "express";
import { QueryTypes } from "sequelize";
const { sequelize } = require("sequelize");
import { initModels } from "../models/init-models";

const models = initModels(sequelize);

export const getInscritosTorneo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT RutaImagenCompleta(tb_fotos_pilotos.rutaImagen) AS Piloto, tb_pilotos.nombreCorto AS Nombre, IF( tb_sim_plat_codplat.isVisible = 1, tb_pilotos_id_sim.idSimPiloto, 'Oculto' ) AS IdSim, tb_inscripciones.noParticipacion AS NO FROM ( ( ( tb_inscripciones INNER JOIN tb_pilotos ON tb_inscripciones.idPiloto = tb_pilotos.id ) INNER JOIN tb_pilotos_id_sim ON tb_inscripciones.idPilotoIdSim = tb_pilotos_id_sim.id ) INNER JOIN tb_sim_plat_codplat ON tb_pilotos_id_sim.idSimCodPlataforma = tb_sim_plat_codplat.id ) INNER JOIN tb_fotos_pilotos ON tb_pilotos.id = tb_fotos_pilotos.idPiloto WHERE ( ( (tb_inscripciones.idTorneo) = ${id} ) AND( (tb_inscripciones.idEstadoInscr) = 1 ) AND((tb_fotos_pilotos.idTipo) = 1) ) ORDER BY tb_inscripciones.fechaInscripcion ASC;`;

  try {
    const inscritos = await models.tb_inscripciones.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    return res.json({
      ok: true,
      inscritos,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getFormInscripcion = async (req: Request, res: Response) => {
  const { id } = req.params;

  const query = `SELECT tb_torneos.idTorneo, tb_torneos.idCocheSimPermitido, tb_torneos.idMarcaCochePermitida, tb_torneos.idCategoriaCochePermitida, tb_torneos.idGrupoCochePersonalizado, tb_torneos.idGrupoEquipoPersonalizado, tb_torneos.idPreguntaInscripcion, tb_torneos.urlInscripcionAdicional, tb_torneos.instruccionesAdicionales, tb_torneos.DivisionPredeterminada, tb_pregunta_inscripcion.pregunta, tb_pregunta_inscripcion.idTipoPregunta, tb_divisiones.idCatPred, tb_divisiones.idTipoPred, tb_divisiones.idCochePred, tb_divisiones.idEquipoPred FROM (tb_torneos LEFT JOIN tb_pregunta_inscripcion ON tb_torneos.idPreguntaInscripcion = tb_pregunta_inscripcion.id) LEFT JOIN tb_divisiones ON tb_torneos.DivisionPredeterminada = tb_divisiones.id WHERE (((tb_torneos.idTorneo)=${id}));`;

  try {
    console.log(id);
    const FormInscripcion = await models.tb_torneos.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    return res.json({
      ok: true,
      FormInscripcion: FormInscripcion[0],
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const slectidentificadorPilotoSim = async (
  req: Request,
  res: Response
) => {
  const { idPiloto, idTorneo } = req.params;

  const query = `SELECT tb_pilotos_id_sim.idSimPiloto, tb_pilotos_id_sim.id FROM tb_pilotos_id_sim INNER JOIN (tb_sim_plat_codplat INNER JOIN tb_torneos ON tb_sim_plat_codplat.idSimulador = tb_torneos.idSimulador) ON tb_pilotos_id_sim.idSimCodPlataforma = tb_sim_plat_codplat.id WHERE (((tb_pilotos_id_sim.idEstado)=1) AND ((tb_pilotos_id_sim.idPiloto)=${idPiloto}) AND ((tb_torneos.idTorneo)=${idTorneo})) ORDER BY tb_pilotos_id_sim.idSimPiloto;`;

  try {
    const listado = await models.tb_pilotos_id_sim.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    return res.json({
      ok: true,
      listado,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const selectIdCocheInicial = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT tb_coches.nombre, tb_coches_sim.id FROM tb_torneos INNER JOIN (tb_coches_sim INNER JOIN tb_coches ON tb_coches_sim.idCoche = tb_coches.id) ON (tb_torneos.idSimulador = tb_coches_sim.idSimulador) AND (tb_torneos.idCocheSimPermitido = tb_coches_sim.id) WHERE (((tb_torneos.idTorneo)=${id}) AND ((tb_coches_sim.idEstado)=1)) UNION SELECT tb_coches.nombre, tb_coches_sim.id FROM tb_torneos INNER JOIN (tb_coches_sim INNER JOIN tb_coches ON tb_coches_sim.idCoche = tb_coches.id) ON (tb_torneos.idMarcaCochePermitida = tb_coches.idMarca) AND (tb_torneos.idSimulador = tb_coches_sim.idSimulador) WHERE (((tb_torneos.idTorneo)=${id}) AND ((tb_coches_sim.idEstado)=1)) UNION SELECT tb_coches.nombre, tb_coches_sim.id FROM tb_torneos INNER JOIN (tb_coches_sim INNER JOIN tb_coches ON tb_coches_sim.idCoche = tb_coches.id) ON (tb_torneos.idCategoriaCochePermitida = tb_coches.idCategoria) AND (tb_torneos.idSimulador = tb_coches_sim.idSimulador) WHERE (((tb_torneos.idTorneo)=${id}) AND ((tb_coches_sim.idEstado)=1)) UNION SELECT tb_coches.nombre, tb_coches_sim.id FROM ((tb_torneos INNER JOIN tb_nombre_grupo_coches_personalizado ON (tb_torneos.idSimulador = tb_nombre_grupo_coches_personalizado.idSimulador) AND (tb_torneos.idGrupoCochePersonalizado = tb_nombre_grupo_coches_personalizado.id)) INNER JOIN tb_grupo_coches_personalizado ON tb_nombre_grupo_coches_personalizado.id = tb_grupo_coches_personalizado.idNombreGrupo) INNER JOIN (tb_coches_sim INNER JOIN tb_coches ON tb_coches_sim.idCoche = tb_coches.id) ON tb_grupo_coches_personalizado.idCocheSim = tb_coches_sim.id WHERE (((tb_torneos.idTorneo)=${id}) AND ((tb_coches_sim.idEstado)=1)) GROUP BY tb_coches.nombre, tb_coches_sim.id ORDER BY nombre;`;

  try {
    const listado = await models.tb_torneos.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    return res.json({
      ok: true,
      listado,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const selectIdEquipoInicial = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT tb_equipos.nombre, tb_grupo_equipos.idEquipoSim FROM (((tb_torneos INNER JOIN tb_nombre_grupo_equipos ON tb_torneos.idGrupoEquipoPersonalizado =  tb_nombre_grupo_equipos.id) INNER JOIN tb_grupo_equipos ON tb_nombre_grupo_equipos.id = tb_grupo_equipos.idNombre) INNER JOIN tb_equipos_sim ON tb_grupo_equipos.idEquipoSim = tb_equipos_sim.id) INNER JOIN tb_equipos ON tb_equipos_sim.idEquipo = tb_equipos.id WHERE (((tb_torneos.idTorneo)=${id})) ORDER BY tb_equipos.nombre;`;
  try {
    const listado = await models.tb_torneos.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    return res.json({
      ok: true,
      listado,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const pregunta = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT tb_pregunta_inscripcion.pregunta, tb_pregunta_inscripcion.idTipoPregunta FROM tb_torneos INNER JOIN tb_pregunta_inscripcion ON tb_torneos.idPreguntaInscripcion = tb_pregunta_inscripcion.id WHERE (((tb_torneos.idTorneo)=${id})) ORDER BY tb_pregunta_inscripcion.pregunta;`;
  try {
    const listado = await models.tb_torneos.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    return res.json({
      ok: true,
      listado: listado[0],
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};
export const respuestasTipoUno = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT tb_opciones_respuesta.respuesta, tb_opciones_respuesta.id FROM tb_torneos INNER JOIN tb_opciones_respuesta ON tb_torneos.idPreguntaInscripcion = tb_opciones_respuesta.idPregunta WHERE (((tb_torneos.idTorneo)=${id})) ORDER BY tb_opciones_respuesta.noOrden;`;
  try {
    const listado = await models.tb_torneos.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    return res.json({
      ok: true,
      listado,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const insertInscription = async (req: Request, res: Response) => {
  const {
    idEstadoInscripcion,
    idPiloto,
    idTorneo,
    idCocheInicial,
    idEquipoInicial,
    idPilotoIdSim,
    noParticipacion,
    observaciones,
    idRespuesta,
    respuestaPersonalizada,
    DivisionPredeterminada,
    idCochePred,
    idCategoriaPiloto,
    idTipoPiloto,
    idEquipoPred,
  } = req.body;
  const resp = [];
  try {
    const incercion = await models.tb_inscripciones.create({
      idEstadoInscripcion,
      idPiloto,
      idTorneo,
      idCocheInicial: parseFloat(idCocheInicial)?parseFloat(idCocheInicial):null,
      idEquipoInicial: parseFloat(idEquipoInicial)?parseFloat(idEquipoInicial):null,
      idPilotoIdSim: parseFloat(idPilotoIdSim),
      noParticipacion,
      observaciones,
      idRespuesta:idRespuesta?idRespuesta:null,
      respuestaPersonalizada:respuestaPersonalizada?respuestaPersonalizada:respuestaPersonalizada,
    });
    console.log(incercion)
    resp.push(incercion);
    if (incercion) {
      const id = incercion.id;
      let idCocheInicialInset = idCocheInicial;
      let idEquipoInicialInset = idEquipoInicial;
      if (idCocheInicial === null) {
        idCocheInicialInset = idCochePred;
      }
      if (idEquipoInicial === null) {
        idEquipoInicialInset = idEquipoPred;
      }
      if (DivisionPredeterminada != null) {

        const insertdivicionespilotos =
          await models.tb_divisiones_pilotos.create({
            idInscripcion: id,
            idNombreDivision: DivisionPredeterminada,
            idCoche: idCocheInicialInset,
            idEquipo: idEquipoInicialInset,
            idCategoriaPiloto: idCategoriaPiloto,
            idTipoPiloto: idTipoPiloto,
            idEstado: 1,
            noCarreraInicial: 1,
            puntosIniciales: 0,
          });
        resp.push(insertdivicionespilotos);
        return res.json({
          ok: true,
          incerciones: resp,
        });
      }else {
        console.log({
          idInscripcion: id,
            idNombreDivision: DivisionPredeterminada,
            idCoche: idCocheInicialInset,
            idEquipo: idEquipoInicialInset,
            idCategoriaPiloto: idCategoriaPiloto,
            idTipoPiloto: idTipoPiloto,
            idEstado: 1,
            noCarreraInicial: 1,
            puntosIniciales: 0,
        })
        return res.json({
          ok: true,
          incerciones: resp,
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

export const getListadoReserva = async (req: Request, res: Response) => {
  const { idPiloto, idTorneo } = req.params;
  const query = `SELECT d.id, d.nombre, i.id as idInscripcion, d.idNivelDivision, d.descDiaHora, t.idTorneo, IF(COALESCE(dp.id, 0) = 0, 0, 1) AS Inscrito, d.idCatPred, d.idTipoPred, d.idCochePred, dp.idCoche AS CocheInscrito, dp.idEquipo AS EquipoInscrito, d.idEquipoPred, COALESCE( ( SELECT MAX(tb_calendario.fechaNo) FROM tb_calendario WHERE tb_calendario.idDivision = d.id AND tb_calendario.fechaNo > 0 AND tb_calendario.fechaHoraCarrera <= CURDATE()), 0 ) +1 AS CarreraInicial, d.minSrReserva, d.minEloReserva, d.minParticipacionesReserva, d.minCumplimientoReserva, t.idCategoriaELO, d.reservaSelectCoche, d.reservaSelectEquipo, t.idCocheSimPermitido, t.idMarcaCochePermitida, t.idCategoriaCochePermitida, t.idGrupoCochePersonalizado, t.idGrupoEquipoPersonalizado, t.idSimulador, CASE WHEN COALESCE( ( SELECT valorELO FROM tb_elo_actual WHERE idPiloto = i.idPiloto AND idSimulador = t.idSimulador AND idCategoriaElo = t.idCategoriaELO ), 0 ) < COALESCE(d.minEloReserva, 0) THEN 0 WHEN COALESCE( ( SELECT valorSR FROM tb_sr_actual WHERE idPiloto = i.idPiloto AND idSimulador = t.idSimulador ), 0 ) < COALESCE(d.minSrReserva, 0) THEN 0 WHEN COALESCE( ( SELECT participaciones FROM tb_participaciones WHERE idPiloto = i.idPiloto AND idSimulador = t.idSimulador ), 0 ) < COALESCE(d.minParticipacionesReserva, 0) THEN 0 WHEN COALESCE( ( SELECT indicadorCumplimiento FROM tb_participaciones WHERE idPiloto = i.idPiloto AND idSimulador = t.idSimulador ), 0 ) < COALESCE(d.minCumplimientoReserva, 0) THEN 0 ELSE 1 END AS idCumple, CASE WHEN COALESCE( ( SELECT valorELO FROM tb_elo_actual WHERE idPiloto = i.idPiloto AND idSimulador = t.idSimulador AND idCategoriaElo = t.idCategoriaELO ), 0 ) < COALESCE(d.minEloReserva, 0) THEN 'Tu elo es muy bajo' WHEN COALESCE( ( SELECT valorSR FROM tb_sr_actual WHERE idPiloto = i.idPiloto AND idSimulador = t.idSimulador ), 0 ) < COALESCE(d.minSrReserva, 0) THEN 'Tu SR es muy bajo' WHEN COALESCE( ( SELECT participaciones FROM tb_participaciones WHERE idPiloto = i.idPiloto AND idSimulador = t.idSimulador ), 0 ) < COALESCE(d.minParticipacionesReserva, 0) THEN 'Tus participaciones son bajas' WHEN COALESCE( ( SELECT indicadorCumplimiento FROM tb_participaciones WHERE idPiloto = i.idPiloto AND idSimulador = t.idSimulador ), 0 ) < COALESCE(d.minCumplimientoReserva, 0) THEN 'Tu Ind Cump es bajo' ELSE 'Habilitado' END AS mensaje FROM tb_torneos t INNER JOIN tb_divisiones d ON t.idTorneo = d.idTorneo LEFT JOIN tb_inscripciones i ON t.idTorneo = i.idTorneo AND i.idPiloto = ${idPiloto} LEFT JOIN tb_divisiones_pilotos dp ON d.id = dp.idNombreDivision AND i.id = dp.idInscripcion WHERE t.idTorneo = ${idTorneo} ORDER BY IF(COALESCE(dp.id, 0) = 0, 0, 1), d.idNivelDivision; `;
  try {
    const listado = await models.tb_torneos.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    return res.json({
      ok: true,
      listado,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const insertReserva = async (req: Request, res: Response) => {
  const {
    idInscripcion,
    idNombreDivision,
    idCoche,
    idEquipo,
    idCategoriaPiloto,
    idTipoPiloto,
    noCarreraInicial,
    puntosIniciales,
} = req.body;
  try {
    const inserccion = await models.tb_divisiones_pilotos.create({
      idInscripcion,
      idNombreDivision,
      idCoche,
      idEquipo,
      idCategoriaPiloto,
      idTipoPiloto,
      noCarreraInicial,
      puntosIniciales
    })
    if(inserccion){
      return res.json({
        ok: true,
        inserccion,
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

