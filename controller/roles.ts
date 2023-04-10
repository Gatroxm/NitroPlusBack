import { Response, Request } from "express";
import { QueryTypes } from "sequelize";
const { sequelize } = require("sequelize");
import { initModels } from "../models/init-models";

const models = initModels(sequelize);
export const Roles = async (req: Request, res: Response) => {
    const {id} = req.params
    const query = `SELECT tb_roles_pilotos.idPiloto, tb_roles_pilotos.idEstado, tb_roles_pilotos.idRol FROM tb_roles_pilotos WHERE (((tb_roles_pilotos.idPiloto)=${id}) AND ((tb_roles_pilotos.idEstado)=1) );`
    try {
        const rol = await models.tb_roles_pilotos.sequelize.query(query, {
          type: QueryTypes.SELECT,
        });
        return res.json({
          ok: true,
          rol,
        });
      } catch (error) {
        return res.status(500).json({
          ok: false,
          error: error,
        });
      }
}