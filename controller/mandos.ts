import { Response, Request } from "express";
import { initModels } from "../models/init-models";
const { Op, sequelize } = require("sequelize");
const models = initModels(sequelize);

export const getMandos = async (req: Request, res:Response) => {

    try {
        const mandos = await models.tb_tipo_mando.findAll({});

        return res.status(200).json({mandos});
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          ok: false,
          error: error,
        });
      }

}