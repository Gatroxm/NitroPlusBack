import { Response, Request } from "express";
import { initModels } from "../models/init-models";
const { Op, sequelize } = require("sequelize");
const models = initModels(sequelize);

export const getAllPilotos = async (req: Request, res: Response) => {
  const desde = Number(req.query.desde) || 0;
  try {
    const pilotos = await models.tb_pilotos.findAll({
      limit: 10,
      offset: desde,
    });

    return res.json({
      ok: true,
      msg: "Nombre Corto pilotos",
      Pilotos: pilotos,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getPiloto = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const piloto = await models.tb_pilotos.findByPk(id);

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
  const { email, password } = req.body;

  try {
    const piloto = await models.tb_pilotos.findAll({
      where: { correoElectronico: email, password: password },
    });
    console.log(piloto);
    if (piloto.length > 0) {
      return res.status(200).json({
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
    console.log(error);
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getPilotosDesActivados = async (req: Request, res: Response) => {
  const param = req.query.param;
  let where: any = {
    idEstado: 0,
    [Op.or]: [
      {
        nombreCorto: {
          [Op.like]: `${param}%`,
        },
      },
    ],
  };
  if (param === "" || param === undefined) {
    where = {
      idEstado: 0,
    };
  }
  try {
    const PilotosEditados: any = [];
    const pilotos = await models.tb_pilotos.findAll({
      attributes: ["id", "nombreCorto", "discordId", "whatsapp", "idEstado"],
      where: where,
      offset: 1,
    });

    
    res.json({
        ok: true,
        pilotos
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const updatePilotoInActivo = async (req: Request, res: Response) => {
  const {
    whatsapp,
    useremail,
    password,
    PK_ID_PILOTO,
    DISCORD_ID,
  } = req.body;
  try {
    const piloto = await models.tb_pilotos.update(
      {
        idEstado: 1,
        // zona_horaria: zona_horaria,
        whatsapp: whatsapp,
        correoElectronico: useremail,
        DISCORD_ID: DISCORD_ID,
        password: password,
      },
      {
        where: {
          id: PK_ID_PILOTO,
        },
      }
    );
    if (piloto[0] === 1) {
      return res.json({
        ok: true,
        msg: "Piloto actualizado",
      });
    } else {
      return res.json({
        ok: false,
        msg: "El piloto no se puedo actualizar por que o no existe o no detecta cambios",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const createPiloto = async ( req:Request, res: Response) => {

  const { nombre, apellido, nombreCorto, idEstado, fechaNacimiento, idNacionalidad, ciudad, departamento, idPaisResidencia, resena, correoElectronico, password, whatsapp, created_at, update_at, idMando, discordId, nombreDiscord, canal_twitch, canal_facebook, canal_youtube,
    aceptaCondiciones } = req.body;
  
  try {
    const mismoPiloto = await models.tb_pilotos.findAll({
      where:{
        correoElectronico
      } 
    });
    if(mismoPiloto.length > 0) {
      return res.json({
        ok:false,
        msn: `el correo ${correoElectronico} ya se encuentra registrado`
      });
    } else {
      const ultimo = await models.tb_pilotos.findAll({});
      const piloto = await models.tb_pilotos.create({ nombre, apellido, nombreCorto:`piloto N° ${ultimo[ultimo.length -1].id + 3}`, idEstado, fechaNacimiento, idNacionalidad, ciudad, departamento, idPaisResidencia, resena, correoElectronico, password, whatsapp, created_at, update_at, idMando, discordId, nombreDiscord, canal_twitch, canal_facebook, canal_youtube, aceptaCondiciones });

      return res.json({
        ok:true,
        piloto
      });


    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }


}

export const changePassword = async (req: Request, res: Response) => {

  const {id, correoElectronico, password} = req.body;

  try {
    
    const piloto =  await models.tb_pilotos.findAll({
      where: {id,correoElectronico}
    })
    if(piloto.length > 0) {

      const editPassword = await models.tb_pilotos.update({
        password: password},
        {

          where: {
            id,
          },
        })
        if (editPassword[0] === 1) {
          return res.json({
            ok: true,
            msg: "Piloto actualizado",
          });
        } else {
          return res.json({
            ok: false,
            msg: "El piloto no se puedo actualizar por que o no detecta cambios en la contraseña",
          });
        }
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }



}

export const updatePiloto = async (req:Request, res:Response) => {
  const { id, nombre, apellido, idEstado, fechaNacimiento, idNacionalidad, ciudad, departamento, idPaisResidencia, resena, correoElectronico, whatsapp, idMando, discordId, canal_youtube, canal_twitch, canal_facebook } = req.body;
  try {
    const piloto = await models.tb_pilotos.update({ id, nombre, apellido, idEstado, fechaNacimiento, idNacionalidad, ciudad, departamento, idPaisResidencia, resena, correoElectronico, whatsapp, idMando, discordId, canal_youtube, canal_twitch, canal_facebook },
      {
        where: {
          id,
        },
      })
    if (piloto[0] === 1) {
      return res.json({
        ok: true,
        msg: "Piloto actualizado",
      });
    } else {
      return res.json({
        ok: false,
        msg: "El piloto no se puedo actualizar por que o no existe o no detecta cambios",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
}
