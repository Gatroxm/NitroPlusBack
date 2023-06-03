import { Response, Request } from "express";
import { QueryTypes } from "sequelize";
const { sequelize } = require("sequelize");
import { initModels } from "../models/init-models";

const models = initModels(sequelize);

export const gettablaLocutores = async (req: Request, res: Response) => {
  const query = `SELECT CONCAT(tb_calendario.id,' - ',tb_torneos.nombre,' - ',tb_divisiones.nombre,' - ',tb_calendario.nombreEvento) AS EventoCargado,tb_salas_transmision.id, tb_salas_transmision.idCalendario, tb_salas_transmision.nombre, tb_salas_transmision.idEstado, tb_salas_transmision.noOrden, tb_salas_transmision.linkChat, tb_salas_transmision.linkTransmision, tb_salas_transmision.linkLiveTiming1, tb_salas_transmision.linkLiveTiming2, tb_salas_transmision.linkBotonera, tb_salas_transmision.linkObsControl, tb_salas_transmision.mensajeControl, tb_divisiones.requiereConfirmacion, tb_salas_transmision.linkCamaraCompartida
  FROM ((tb_salas_transmision LEFT JOIN tb_calendario ON tb_salas_transmision.idCalendario = tb_calendario.id) LEFT JOIN tb_divisiones ON tb_calendario.idDivision = tb_divisiones.id) LEFT JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo
  WHERE (((tb_salas_transmision.idEstado)=1))
  ORDER BY tb_salas_transmision.noOrden;`;

  try {
    const respuesta =
      await models.tb_salas_transmision.sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
    return res.json({
      ok: true,
      respuesta,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};
export const SelectorCarreraLocutores = async (req: Request, res: Response) => {
  const query = `SELECT CONCAT(tb_calendario.id,' - ',tb_torneos.nombre,' - ',tb_divisiones.nombre,' - ',tb_calendario.nombreEvento) AS Evento, tb_calendario.id FROM (tb_divisiones INNER JOIN tb_calendario ON tb_divisiones.id = tb_calendario.idDivision) INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo WHERE (tb_calendario.idEstadoCarrera = 1) AND (tb_divisiones.idEstado = 1) AND (tb_torneos.idEstadoTorneo = 1) AND tb_calendario.fechaHoraCarrera BETWEEN DATE_SUB(CURDATE(), INTERVAL 1 DAY) AND DATE_ADD(CURDATE(), INTERVAL 15 DAY) ORDER BY tb_calendario.fechaHoraCarrera;`;

  try {
    const respuesta =
      await models.tb_calendario.sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
    return res.json({
      ok: true,
      respuesta,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};
export const LIMPIARSALATRANSMISION = async (req: Request, res: Response) => {
  const {id}=req.params;
  const query = `CALL limpiar_sala_transmision(${id})`;

  try {
    const respuesta =
      await models.tb_calendario.sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
    return res.json({
      ok: true,
      respuesta,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getTransmisiones = async (req: Request, res: Response) => {
  const data = await models.tb_salas_transmision.findAll({});
  return res.json({
    data
  })
}

export const updateSala = async (req: Request, res: Response) => {
  const { id, idCalendario }=req.body;

  try {
    const data = await models.tb_salas_transmision.update({
        idCalendario:idCalendario
      }, {
        where:{
          id:id
        }
      })
    return res.json({
      ok: true,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const pestanaOverlays = async (req: Request, res: Response) => {
  const { id } = req.params
  const query = `SELECT tb_tipos_overlay.nombreOverlay, tb_tipos_overlay.esCam, tb_tipos_overlay.escenaObs, tb_overlay_transmisiones.id, tb_overlay_transmisiones.valor FROM tb_overlay_transmisiones INNER JOIN tb_tipos_overlay ON tb_overlay_transmisiones.idOverlay = tb_tipos_overlay.id WHERE (((tb_tipos_overlay.esCam)=0) AND ((tb_tipos_overlay.idEstado)=1) AND ((tb_overlay_transmisiones.esVisible)=1) AND ((tb_overlay_transmisiones.idEstado)=1) AND ((tb_overlay_transmisiones.idSala)=${id}));
  `;

  try {
    const respuesta =
      await models.tb_calendario.sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
    return res.json({
      ok: true,
      respuesta,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const SelectPOverlayRequiereConfirmacion = async (req: Request, res: Response) => {
  const { id } = req.params
  const query = `SELECT IF(tb_sim_plat_codplat.isVisible=0,tb_pilotos.nombreCorto,CONCAT(tb_pilotos.nombreCorto,' - (',tb_pilotos_id_sim.idSimPiloto,')')) AS Piloto, tb_parrilla_calendario.idPiloto FROM ( ( ( ( tb_parrilla_calendario INNER JOIN tb_divisiones_pilotos ON tb_parrilla_calendario.idDivision = tb_divisiones_pilotos.idNombreDivision ) INNER JOIN tb_inscripciones ON( tb_parrilla_calendario.idPiloto = tb_inscripciones.idPiloto ) AND( tb_divisiones_pilotos.idInscripcion = tb_inscripciones.id ) ) INNER JOIN tb_pilotos ON tb_inscripciones.idPiloto = tb_pilotos.id ) INNER JOIN tb_pilotos_id_sim ON tb_inscripciones.idPilotoIdSim = tb_pilotos_id_sim.id ) INNER JOIN tb_sim_plat_codplat ON tb_pilotos_id_sim.idSimCodPlataforma = tb_sim_plat_codplat.id WHERE ( ( ( tb_parrilla_calendario.idCalendario ) = ${id} ) ) ORDER BY tb_pilotos.nombreCorto;`;

  try {
    const respuesta =
      await models.tb_calendario.sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
    return res.json({
      ok: true,
      respuesta,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const SelectPOverlayNoRequiereConfirmacion = async (req: Request, res: Response) => {
  const { id } = req.params
  const query = `SELECT IF(tb_sim_plat_codplat.isVisible=0,tb_pilotos.nombreCorto,CONCAT(tb_pilotos.nombreCorto,' - (',tb_pilotos_id_sim.idSimPiloto,')')) AS Piloto, tb_pilotos.id FROM tb_calendario INNER JOIN( ( ( ( tb_divisiones_pilotos INNER JOIN tb_inscripciones ON tb_divisiones_pilotos.idInscripcion = tb_inscripciones.id ) INNER JOIN tb_pilotos ON tb_inscripciones.idPiloto = tb_pilotos.id ) INNER JOIN tb_pilotos_id_sim ON tb_inscripciones.idPilotoIdSim = tb_pilotos_id_sim.id ) INNER JOIN tb_sim_plat_codplat ON tb_pilotos_id_sim.idSimCodPlataforma = tb_sim_plat_codplat.id ) ON tb_calendario.idDivision = tb_divisiones_pilotos.idNombreDivision WHERE (((tb_calendario.id) = ${id})) ORDER BY tb_pilotos.nombreCorto;`;

  try {
    const respuesta =
      await models.tb_calendario.sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
    return res.json({
      ok: true,
      respuesta,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const updatetTb_overlay_transmisiones = async (req: Request, res: Response) => {
  const { id, idPiloto } = req.body;

  const respuesta = await models.tb_overlay_transmisiones.update({ 
    valor: idPiloto
  }, { 
    where: { id: id}
  });
  return res.status(201).json({ 
    ok:true, 
    respuesta,
    msg: 'Actualización correcta'
  });

}

export const getTablaCams = async (req: Request, res: Response) => {
  const { id } = req.params
  const query = `SELECT tb_tipos_overlay.nombreOverlay, tb_tipos_overlay.esCam, tb_tipos_overlay.escenaObs, tb_overlay_transmisiones.id, tb_overlay_transmisiones.valor FROM tb_overlay_transmisiones INNER JOIN tb_tipos_overlay ON tb_overlay_transmisiones.idOverlay = tb_tipos_overlay.id WHERE (((tb_tipos_overlay.esCam)=1) AND ((tb_tipos_overlay.idEstado)=1) AND ((tb_overlay_transmisiones.esVisible)=1) AND ((tb_overlay_transmisiones.idEstado)=1) AND ((tb_overlay_transmisiones.idSala)=${id}));`;

  try {
    const respuesta =
      await models.tb_overlay_transmisiones.sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
    return res.json({
      ok: true,
      respuesta,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};
export const selectTablaCams = async (req: Request, res: Response) => {
  const { id } = req.params
  const query = `SELECT tb_pilotos.nombreCorto AS Piloto, tb_camaras_transmisiones.idPiloto FROM tb_camaras_transmisiones INNER JOIN tb_pilotos ON tb_camaras_transmisiones.idPiloto = tb_pilotos.id WHERE (((tb_camaras_transmisiones.idPerfil)=2) AND ((tb_camaras_transmisiones.idCalendario)= ${id})) ORDER BY tb_pilotos.nombreCorto;`;

  try {
    const respuesta =
      await models.tb_camaras_transmisiones.sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
    return res.json({
      ok: true,
      respuesta,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};


export const updatetb_salas_transmision = async (req: Request, res: Response) => {
  const { id, linkChat, linkTransmision, linkLiveTiming1, linkLiveTiming2, linkBotonera, linkObsControl, linkCamaraCompartida } = req.body
  console.log({ id, linkChat, linkTransmision, linkLiveTiming1, linkLiveTiming2, linkBotonera, linkObsControl, linkCamaraCompartida })

  try {
    const respuesta =
      await models.tb_salas_transmision.update({
        linkChat:linkChat, 
        linkTransmision:linkTransmision,
        linkLiveTiming1:linkLiveTiming1,
        linkLiveTiming2:linkLiveTiming2,
        linkBotonera:linkBotonera,
        linkObsControl:linkObsControl,
        linkCamaraCompartida:linkCamaraCompartida
      }, { 
        where:{
          id:id
        }
      })
    return res.json({
      ok: true,
      respuesta,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};


export const SelectorMensaje =  async (req: Request, res: Response) => {
  const query = `SELECT tb_mensajes_radio.nombre, tb_mensajes_radio.id FROM tb_mensajes_radio ORDER BY tb_mensajes_radio.nombre;`;

  try {
    const respuesta =
      await models.tb_mensajes_radio.sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
    return res.json({
      ok: true,
      respuesta,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
}
export const insertTbRadioTransmisores =  async (req: Request, res: Response) => {
  const {
    idSala,
    idPiloto,
    idMensaje,
    personalizadoPiloto,
    personalizadoEquipo,
} = req.body;

  try {
    const respuesta =
      await models.tb_radio_transmisiones.update({
        idPiloto: idPiloto,
        idMensaje: idMensaje,
        personalizadoPiloto: personalizadoPiloto,
        personalizadoEquipo: personalizadoEquipo,
      }, {
        where:{
          idSala: idSala
        }
      })
    return res.json({
      ok: true,
      respuesta,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
}
