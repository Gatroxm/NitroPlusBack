import { QueryTypes } from "sequelize";
const { sequelize } = require("sequelize");
import { initModels } from "../models/init-models";
import { Response, Request } from "express";
const models = initModels(sequelize);

export const getComunicados = async (req: Request, res: Response) => {
    try {
        const comunicados = await models.tb_comunicados.findAll({
            where: {
                activo:1
            },
            orderBy: {
                id: 'desc'
            }
        });
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