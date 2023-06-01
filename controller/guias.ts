import { Response, Request } from "express";
import { QueryTypes } from "sequelize";
const { sequelize } = require("sequelize");
import { initModels } from "../models/init-models";

const models = initModels(sequelize);

export const getGias = async (req: Request, res: Response) => {

    const query = `SELECT IFNULL(tb_simulador.nombre,'General') AS Simulador, tb_guias.nombre AS Guia, tb_guias.guiaHTML FROM tb_guias LEFT JOIN tb_simulador ON tb_guias.idSimulador = tb_simulador.id WHERE (((tb_simulador.idEstado)=1)) OR (((tb_guias.idEstado)=1)) ORDER BY tb_guias.noOrden; `;
  
    try {
      const respuesta =
        await models.tb_guias.sequelize.query(query, {
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