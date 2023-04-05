import { QueryTypes } from "sequelize";
const { sequelize } = require("sequelize");
import { initModels } from "../models/init-models";
import { Response, Request } from "express";
const models = initModels(sequelize);

export const getComunicados = async (req: Request, res: Response) => {
    const { id } = req.params;
    const query = `SELECT tb_comunicados.id, tb_comunicados.fecha, tb_comunicados.asunto, tb_comunicados.linkPNG, tb_comunicados.linkPDF, tb_comunicados.textoAdicional, tb_comunicados.fechaVencimiento FROM tb_comunicados INNER JOIN tb_pilotos ON tb_comunicados.idPiloto = tb_pilotos.id WHERE (((tb_comunicados.activo)=1) AND ((tb_pilotos.id)=${id})) UNION SELECT tb_comunicados.id, tb_comunicados.fecha, tb_comunicados.asunto, tb_comunicados.linkPNG, tb_comunicados.linkPDF, tb_comunicados.textoAdicional, tb_comunicados.fechaVencimiento FROM tb_comunicados INNER JOIN tb_pilotos_liga ON tb_comunicados.idLiga = tb_pilotos_liga.idLiga WHERE (((tb_comunicados.activo)=1) AND ((tb_pilotos_liga.idPiloto)=${id}) AND ((tb_pilotos_liga.idEstado)=1)) UNION SELECT tb_comunicados.id, tb_comunicados.fecha, tb_comunicados.asunto, tb_comunicados.linkPNG, tb_comunicados.linkPDF, tb_comunicados.textoAdicional, tb_comunicados.fechaVencimiento FROM (tb_comunicados INNER JOIN tb_sim_plat_codplat ON tb_comunicados.idSimulador = tb_sim_plat_codplat.idSimulador) INNER JOIN tb_pilotos_id_sim ON tb_sim_plat_codplat.id = tb_pilotos_id_sim.idSimCodPlataforma WHERE (((tb_comunicados.activo)=1) AND ((tb_pilotos_id_sim.idPiloto)=${id}) AND ((tb_pilotos_id_sim.idEstado)=1)) UNION SELECT tb_comunicados.id, tb_comunicados.fecha, tb_comunicados.asunto, tb_comunicados.linkPNG, tb_comunicados.linkPDF, tb_comunicados.textoAdicional, tb_comunicados.fechaVencimiento FROM (tb_comunicados INNER JOIN tb_inscripciones ON tb_comunicados.idTorneo = tb_inscripciones.idTorneo) INNER JOIN tb_torneos ON tb_comunicados.idTorneo = tb_torneos.idTorneo WHERE (((tb_comunicados.activo)=1) AND ((tb_inscripciones.idPiloto)=${id}) AND ((tb_torneos.idEstadoTorneo)=1)) UNION  SELECT tb_comunicados.id, tb_comunicados.fecha, tb_comunicados.asunto, tb_comunicados.linkPNG, tb_comunicados.linkPDF, tb_comunicados.textoAdicional, tb_comunicados.fechaVencimiento FROM (tb_comunicados INNER JOIN tb_divisiones_pilotos ON tb_comunicados.idDivision = tb_divisiones_pilotos.idNombreDivision) INNER JOIN tb_inscripciones ON tb_divisiones_pilotos.idInscripcion = tb_inscripciones.id WHERE (((tb_comunicados.activo)=1) AND ((tb_inscripciones.idPiloto)=${id}) AND ((tb_divisiones_pilotos.idEstado)=1)) UNION SELECT tb_comunicados.id, tb_comunicados.fecha, tb_comunicados.asunto, tb_comunicados.linkPNG, tb_comunicados.linkPDF, tb_comunicados.textoAdicional, tb_comunicados.fechaVencimiento FROM tb_comunicados INNER JOIN tb_roles_pilotos ON tb_comunicados.idRol = tb_roles_pilotos.idRol WHERE (((tb_comunicados.activo)=1) AND ((tb_roles_pilotos.idPiloto)=${id}) AND ((tb_roles_pilotos.idEstado)=1)) UNION SELECT tb_comunicados.id, tb_comunicados.fecha, tb_comunicados.asunto, tb_comunicados.linkPNG, tb_comunicados.linkPDF, tb_comunicados.textoAdicional, tb_comunicados.fechaVencimiento FROM tb_comunicados INNER JOIN tb_resultados_clasificatorios ON tb_comunicados.idClasificatorio = tb_resultados_clasificatorios.idClasificatorio WHERE (((tb_comunicados.activo)=1) AND ((tb_resultados_clasificatorios.idPiloto)=${id})) UNION SELECT tb_comunicados.id, tb_comunicados.fecha, tb_comunicados.asunto, tb_comunicados.linkPNG, tb_comunicados.linkPDF, tb_comunicados.textoAdicional, tb_comunicados.fechaVencimiento FROM tb_comunicados INNER JOIN tb_licencias_pilotos ON tb_comunicados.idLicencia = tb_licencias_pilotos.idLicencia WHERE (((tb_comunicados.activo)=1) AND ((tb_licencias_pilotos.idPiloto)=${id})) UNION SELECT tb_comunicados.id, tb_comunicados.fecha, tb_comunicados.asunto, tb_comunicados.linkPNG, tb_comunicados.linkPDF, tb_comunicados.textoAdicional, tb_comunicados.fechaVencimiento FROM tb_comunicados INNER JOIN tb_pilotos ON tb_comunicados.idPais = tb_pilotos.idNacionalidad WHERE (((tb_comunicados.activo)=1) AND ((tb_pilotos.id)=${id})) UNION SELECT tb_comunicados.id, tb_comunicados.fecha, tb_comunicados.asunto, tb_comunicados.linkPNG, tb_comunicados.linkPDF, tb_comunicados.textoAdicional, tb_comunicados.fechaVencimiento FROM tb_comunicados WHERE (((tb_comunicados.activo)=1) AND ((tb_comunicados.idPiloto) Is Null) AND ((tb_comunicados.idLiga) Is Null) AND ((tb_comunicados.idPlataforma) Is Null) AND ((tb_comunicados.idSimulador) Is Null) AND ((tb_comunicados.idTorneo) Is Null) AND ((tb_comunicados.idDivision) Is Null) AND ((tb_comunicados.idCalendario) Is Null) AND ((tb_comunicados.idRol) Is Null) AND ((tb_comunicados.idPais) Is Null) AND ((tb_comunicados.idClasificatorio) Is Null) AND ((tb_comunicados.idLicencia) Is Null)) ORDER BY fecha desc;`;
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