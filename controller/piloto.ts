import { Response, Request } from "express";
import tb_pilotos from "../models/tb_pilotos";

export const getAllPilotos = async (req: Request, res: Response) => {
  const desde = Number(req.query.desde) || 0;
  try {
    const pilotos = await tb_pilotos.findAll({
      limit: 10,
      offset: desde,
    });

    return res.json({
      ok: true,
      msg: "Nombre Corto pilotos",
      Pilotos: pilotos,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};
export const getPiloto = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const piloto = await tb_pilotos.findByPk(id);

    if (piloto) {
      return res.json({
        ok: true,
        piloto,
      });
    } else {
      res.status(404).json({
        ok: false,
        msg: `No existe el usuario con el id: ${id}`,
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};
