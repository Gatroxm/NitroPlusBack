import { QueryTypes } from "sequelize";
const { sequelize } = require("sequelize");
import { initModels } from "../models/init-models";
import { Response, Request } from "express";
const models = initModels(sequelize);

export const getApoyanosNitro = async (req: Request, res: Response) => {

    const query = `SELECT tb_apoyo.id, tb_apoyo.nombre, tb_apoyo.linkImg, tb_apoyo.orden, tb_apoyo.infoHTML, tb_apoyo.esArticulo, tb_apoyo.idEstado FROM tb_apoyo WHERE (((tb_apoyo.esArticulo)=0) AND ((tb_apoyo.idEstado)=1)) ORDER BY tb_apoyo.orden;`;

    try {
        const resultados = await models.tb_apoyo.sequelize.query(query, {
          type: QueryTypes.SELECT,
        });
        if (resultados.length > 0) {
          return res.status(200).json({
            ok: true,
            resultados,
          });
        } else {
          return res.status(404).json({
            ok: false,
            msg: "No cuentas con resultados",
          });
        }
      } catch (error) {
        return res.status(500).json({
          ok: false,
          error: error,
        });
      }

}
export const getTiendaOficial = async (req: Request, res: Response) => {

    const query = `SELECT tb_apoyo.id, tb_apoyo.nombre, tb_apoyo.linkImg, tb_apoyo.orden, tb_apoyo.infoHTML, tb_apoyo.esArticulo, tb_apoyo.idEstado FROM tb_apoyo WHERE (((tb_apoyo.esArticulo)=1) AND ((tb_apoyo.idEstado)=1)) ORDER BY tb_apoyo.orden`;

    try {
        const resultados = await models.tb_apoyo.sequelize.query(query, {
          type: QueryTypes.SELECT,
        });
        if (resultados.length > 0) {
          return res.status(200).json({
            ok: true,
            resultados,
          });
        } else {
          return res.status(404).json({
            ok: false,
            msg: "No cuentas con resultados",
          });
        }
      } catch (error) {
        return res.status(500).json({
          ok: false,
          error: error,
        });
      }

}