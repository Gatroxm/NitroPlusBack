import { Response, Request } from "express";
import { initModels } from "../models/init-models";
const { Op, sequelize } = require("sequelize");
const models = initModels(sequelize);

export const getPaices = async (req:Request, res:Response) => {

    try {
        const paices = await models.tb_paises.findAll();
        return res.status(200).json({
            ok:true,
            paices
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          ok: false,
          error: error,
        });
      }

}