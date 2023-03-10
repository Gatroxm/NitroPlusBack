import { Response, Request } from "express";
import { QueryTypes } from "sequelize";
const { sequelize } = require("sequelize");
import { initModels } from "../models/init-models";

const models = initModels(sequelize);

export const getSimuladores = async (req: Request, res: Response) => {
  const query = `SELECT tb_simulador.nombre AS sim, tb_plataforma.nombre AS plat, tb_cod_plataforma.nombre AS cod, tb_sim_plat_codplat.id, tb_sim_plat_codplat.descripcion, tb_sim_plat_codplat.instrucciones, rutaimagencompleta(tb_sim_plat_codplat.imgGuia) as imgGuia, tb_sim_plat_codplat.restricciones FROM ((tb_sim_plat_codplat INNER JOIN tb_simulador ON tb_sim_plat_codplat.idSimulador = tb_simulador.id) INNER JOIN tb_plataforma ON tb_sim_plat_codplat.idPlataforma = tb_plataforma.id) INNER JOIN tb_cod_plataforma ON tb_sim_plat_codplat.idCodplataforma = tb_cod_plataforma.id WHERE tb_sim_plat_codplat.idEstado = 1 ORDER BY tb_simulador.nombre, tb_plataforma.nombre, tb_cod_plataforma.nombre ;`;

  try {
    const simuladores: any = await models.tb_sim_plat_codplat.sequelize?.query(
      query,
      { type: QueryTypes.SELECT }
    );
    return res.json({
      ok: true,
      simuladores,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getSimuladoresById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const query = `SELECT tb_simulador.nombre AS Simulador, tb_plataforma.nombre AS Plataforma, tb_cod_plataforma.nombre AS Identificador, tb_pilotos_id_sim.idSimPiloto AS Valor, tb_estado_general.nombre AS Estado, rutaimagencompleta(tb_simulador.logo) AS logosim, rutaimagencompleta(tb_plataforma.logo) AS logoplat, tb_pilotos_id_sim.id, tb_pilotos_id_sim.idEstado FROM ((((tb_pilotos_id_sim INNER JOIN tb_sim_plat_codplat ON tb_pilotos_id_sim.idSimCodPlataforma = tb_sim_plat_codplat.id) INNER JOIN tb_cod_plataforma ON tb_sim_plat_codplat.idCodplataforma = tb_cod_plataforma.id) INNER JOIN tb_simulador ON tb_sim_plat_codplat.idSimulador = tb_simulador.id) INNER JOIN tb_plataforma ON tb_sim_plat_codplat.idPlataforma = tb_plataforma.id) INNER JOIN tb_estado_general ON tb_pilotos_id_sim.idEstado = tb_estado_general.id WHERE (((tb_pilotos_id_sim.idPiloto)= ${id}) )ORDER BY tb_pilotos_id_sim.idEstado DESC;`;

  try {
    const simuladoresByPiloto = await models.tb_pilotos_id_sim.sequelize?.query(
      query,
      { type: QueryTypes.SELECT }
    );
    if (simuladoresByPiloto.length > 0) {
      return res.status(200).json({
        ok: true,
        simuladores: simuladoresByPiloto,
      });
    } else {
      return res.status(200).json({
        ok: false,
        msg: `No se encuentran identificadores registrados con el id ${id}`,
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const createIndicador = async (req: Request, res: Response) => {
  const { idPiloto, idSimCodPlataforma, idSimPiloto } = req.body;
  try {
  const Indicador = await models.tb_pilotos_id_sim.create({ idPiloto, idSimCodPlataforma, idSimPiloto })
  return res.status(201).json({
    ok:true,
    Indicador
  })

  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const updateIndicadorStatus = async (req: Request, res: Response) => {
    const {estado,id} = req.body;
    try {
        const update = await models.tb_pilotos_id_sim.update({
            idEstado: estado
        },{ where: {id: id}});
        if( update[0]===1){
            return res.json({
              ok: true,
              msg: "Indicador actualizado",
            });
          } else {
            return res.json({
              ok: false,
              msg: "El indicador no se pudo actualizar por que o no existe o no detecta cambios",
            });
          }
    } catch (error) {
        return res.status(500).json({
          ok: false,
          error: error,
        });
      }
}
