import { QueryTypes } from "sequelize";
const { sequelize } = require("sequelize");
import { initModels } from "../models/init-models";
import { Response, Request } from "express";
const models = initModels(sequelize);

export const getComunicados = async (req: Request, res: Response) => {
    const { id } = req.params;
    const query = `SELECT tb_comunicados.id, tb_comunicados.fecha, tb_comunicados.asunto, tb_comunicados.linkPDF FROM tb_comunicados LEFT JOIN (tb_pilotos_id_sim RIGHT JOIN tb_sim_plat_codplat ON tb_pilotos_id_sim.idSimCodPlataforma = tb_sim_plat_codplat.id) ON tb_comunicados.idSimulador = tb_sim_plat_codplat.idSimulador WHERE (((tb_pilotos_id_sim.idPiloto)=124 Or (tb_pilotos_id_sim.idPiloto) Is Null) AND ((tb_comunicados.activo)=1 Or (tb_comunicados.activo) Is Null) AND ((tb_pilotos_id_sim.idEstado)=1 Or (tb_pilotos_id_sim.idEstado) Is Null) AND ((tb_comunicados.idSimulador)=1 Or (tb_comunicados.idSimulador) Is Null)) ORDER BY tb_comunicados.id DESC;`;
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
        console.log(error)
        return res.status(500).json({
          ok: false,
          error: error,
        });
    }
}