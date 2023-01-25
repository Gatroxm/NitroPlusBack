import { Response, Request } from "express";
import tb_pilotos from "../models/tb_pilotos";
const { Op } = require("sequelize");
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

export const LogIn = async (req: Request, res: Response) => {
  const {email, password} = req.body;
  try {
    const piloto = await tb_pilotos.findAll({
      where: {useremail: email, password: password}
    });
    if(piloto.length >0){
      return res.json({
        ok: true,
        piloto: piloto[0],
      });
    } else {
      res.status(404).json({
        ok: false,
        msg: `error al ingresar`,
      });
    }
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
}

export const getPilotosDesActivados = async (req: Request, res: Response) => {
  const param = req.query.param;
  console.log(req.query)
  try {
    
    const pilotos = await tb_pilotos.findAll({ 
      attributes: ['PK_ID_PILOTO', 'NOMBRECORTO', 'DISCORD_ID', 'zona_horaria', 'whatsapp', 'ACTIVO'],
      where: {
        ACTIVO: 0,
        [Op.or]:[
          {
            NOMBRECORTO: {
              [Op.like]: `${param}%`
            }
          }
        ]
      },
      offset:1,

    });
    res.json({
      ok:true,
      pilotos
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }

}

export const updatePilotoInActivo = async (req: Request, res: Response) => {
  const {
    zona_horaria,
    whatsapp,
    useremail,
    password,
    PK_ID_PILOTO,
    DISCORD_ID
  } = req.body;
  try {
    const piloto = await tb_pilotos.update(
      {
        ACTIVO: 1,
        zona_horaria: zona_horaria,
        whatsapp: whatsapp,
        useremail: useremail,
        DISCORD_ID: DISCORD_ID,
        password: password,
      }, {
        where :{
          PK_ID_PILOTO: PK_ID_PILOTO
        }
      }
    )
    if( piloto[0]===1 ){
      return res.json({
        ok:true,
        msg: 'Piloto actualizado'
      })
    } else {

      return res.json({
        ok:false,
        msg: 'El piloto no se puedo actualizar por que o no existe o no detecta cambios'
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
