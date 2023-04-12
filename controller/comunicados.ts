import { QueryTypes } from "sequelize";
const { sequelize } = require("sequelize");
import { initModels } from "../models/init-models";
import { Response, Request } from "express";
const models = initModels(sequelize);

export const getComunicados = async (req: Request, res: Response) => {
    const { id } = req.params;
    const query = `SELECT DISTINCT c.id, c.fecha, c.asunto, c.linkPNG, c.linkPDF, c.textoAdicional, c.fechaVencimiento, CASE WHEN cl.idComunicado IS NOT NULL THEN 1 ELSE 0 END AS leido FROM tb_comunicados c LEFT JOIN tb_comunicados_leidos cl ON c.id = cl.idComunicado AND cl.idPiloto = ${id} LEFT JOIN tb_pilotos p ON c.idPiloto = p.id AND p.id = ${id} LEFT JOIN tb_pilotos_liga pl ON c.idLiga = pl.idLiga AND pl.idPiloto = ${id} AND pl.idEstado = 1 LEFT JOIN tb_sim_plat_codplat sp ON c.idSimulador = sp.idSimulador LEFT JOIN tb_pilotos_id_sim pis ON sp.id = pis.idSimCodPlataforma AND pis.idPiloto = ${id} AND pis.idEstado = 1 LEFT JOIN tb_inscripciones i ON c.idTorneo = i.idTorneo LEFT JOIN tb_torneos t ON c.idTorneo = t.idTorneo AND t.idEstadoTorneo = 1 LEFT JOIN tb_divisiones_pilotos dp ON c.idDivision = dp.idNombreDivision LEFT JOIN tb_roles_pilotos rp ON c.idRol = rp.idRol AND rp.idPiloto = ${id} AND rp.idEstado = 1 LEFT JOIN tb_resultados_clasificatorios rc ON c.idClasificatorio = rc.idClasificatorio AND rc.idPiloto = ${id} LEFT JOIN tb_licencias_pilotos lp ON c.idLicencia = lp.idLicencia AND lp.idPiloto = ${id} LEFT JOIN tb_pilotos p2 ON c.idPais = p2.id AND p2.id = ${id} WHERE c.activo = 1 AND ( p.id IS NOT NULL OR pl.idLiga IS NOT NULL OR pis.idPiloto IS NOT NULL OR i.idPiloto IS NOT NULL OR dp.idInscripcion IS NOT NULL OR rp.idPiloto IS NOT NULL OR rc.idPiloto IS NOT NULL OR lp.idPiloto IS NOT NULL OR p2.id IS NOT NULL ) ORDER BY c.fecha DESC`;
    try {
        const comunicados = await models.tb_comunicados.sequelize.query(
            query,
            { type: QueryTypes.SELECT }
          );
        if(comunicados.length > 0) {
            return res.status(200).json({
                ok:true,
                comunicados
              })
        }else {
            return res.status(200).json({
                ok:false,
                msg: 'No hay comunicados nuevos'
              })
        }
    } catch (error) {
        return res.status(500).json({
          ok: false,
          error: error,
        });
    }
    

}

export const PutComunicado = async (req: Request, res: Response) =>{

  const { idPiloto, idComunicado } = req.body;
  const comunicado = await models.tb_comunicados_leidos.create({ idPiloto, idComunicado })
  return res.status(200).json({
    ok: true,
    comunicado,
    msg:'Comunidado Leído'
  })

}
export const getComunicadosLeidos = async (req: Request, res: Response) => {
  const {id} = req.params;
  const query = `SELECT COUNT(*) AS cantidad_no_leidos FROM ( SELECT DISTINCT c.id, c.fecha, c.asunto, c.linkPNG, c.linkPDF, c.textoAdicional, c.fechaVencimiento, CASE WHEN cl.idComunicado IS NOT NULL THEN 1 ELSE 0 END AS leido FROM tb_comunicados c LEFT JOIN tb_comunicados_leidos cl ON c.id = cl.idComunicado AND cl.idPiloto = ${id} LEFT JOIN tb_pilotos p ON c.idPiloto = p.id AND p.id = ${id} LEFT JOIN tb_pilotos_liga pl ON c.idLiga = pl.idLiga AND pl.idPiloto = ${id} AND pl.idEstado = 1 LEFT JOIN tb_sim_plat_codplat sp ON c.idSimulador = sp.idSimulador LEFT JOIN tb_pilotos_id_sim pis ON sp.id = pis.idSimCodPlataforma AND pis.idPiloto = ${id} AND pis.idEstado = 1 LEFT JOIN tb_inscripciones i ON c.idTorneo = i.idTorneo LEFT JOIN tb_torneos t ON c.idTorneo = t.idTorneo AND t.idEstadoTorneo = 1 LEFT JOIN tb_divisiones_pilotos dp ON c.idDivision = dp.idNombreDivision LEFT JOIN tb_roles_pilotos rp ON c.idRol = rp.idRol AND rp.idPiloto = ${id} AND rp.idEstado = 1 LEFT JOIN tb_resultados_clasificatorios rc ON c.idClasificatorio = rc.idClasificatorio AND rc.idPiloto = ${id} LEFT JOIN tb_licencias_pilotos lp ON c.idLicencia = lp.idLicencia AND lp.idPiloto = ${id} LEFT JOIN tb_pilotos p2 ON c.idPais = p2.id AND p2.id = ${id} WHERE c.activo = 1 AND ( p.id IS NOT NULL OR pl.idLiga IS NOT NULL OR pis.idPiloto IS NOT NULL OR i.idPiloto IS NOT NULL OR dp.idInscripcion IS NOT NULL OR rp.idPiloto IS NOT NULL OR rc.idPiloto IS NOT NULL OR lp.idPiloto IS NOT NULL OR p2.id IS NOT NULL ) ) t WHERE t.leido = 0;`

  const comunicados = await models.tb_comunicados_leidos.sequelize.query(
    query,
    { type: QueryTypes.SELECT }
  );
if(comunicados.length > 0) {
    return res.status(200).json({
        ok:true,
        comunicados:comunicados[0].cantidad_no_leidos,
      })
}else {
    return res.status(200).json({
        ok:false,
        msg: 'No hay comunicados nuevos'
      })
}
}