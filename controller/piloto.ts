import { Response, Request } from "express";
import { initModels } from "../models/init-models";
const bcrypt = require("bcrypt");
const { Op, sequelize, QueryTypes } = require("sequelize");
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
    piloto.password = '';
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
    const piloto = await models.tb_pilotos.findOne({
      where: { correoElectronico: email },
    });
    bcrypt.compare(
      password,
      piloto.dataValues.password,
      (err: any, result: any) => {
        console.log(result)
        if (err) {
          console.log(err);
        } else if (result) {
          piloto.dataValues.password = '';
          return res.status(200).json({
            ok: true,
            piloto: piloto.dataValues,
          });
          
        } else {
         return res.status(404).json({
          ok: false,
          msg: `error al ingresar`,
        });
        }
      }
    );
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
    
    [Op.or]: [
      {
        nombreCorto: {
          [Op.like]: `%${param}%`,
        },
      },
    ],
    idEstado: 0
    
  };
  if (param === "" || param === undefined) {
    where = {
      idEstado: 0,
    };
  }
  try { 
    const pilotos = await models.tb_pilotos.findAll({
      attributes: ["id", "nombreCorto", "discordId", "whatsapp", "idEstado"],
      where: where,
      // offset: 1,
      order: [
        ['nombreCorto', 'ASC'],
      ],
    });

    res.json({
      ok: true,
      pilotos,
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
  const { whatsapp, useremail, password, PK_ID_PILOTO, DISCORD_ID } = req.body;
  try {
    bcrypt.hash(password, 10, async (err: any, hashedPassword: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log(hashedPassword);
        const correo = useremail.replace(/\s+/g, '')
        const tel = whatsapp.replace(/\s+/g, '')
        const piloto = await models.tb_pilotos.update(
          {
            idEstado: 1,
            // zona_horaria: zona_horaria,
            whatsapp: tel,
            correoElectronico: correo,
            DISCORD_ID: DISCORD_ID,
            password: hashedPassword,
            aceptaCondiciones:1
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
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const createPiloto = async (req: Request, res: Response) => {
  const {
    nombre,
    apellido,
    nombreCorto,
    idEstado,
    fechaNacimiento,
    idNacionalidad,
    ciudad,
    departamento,
    idPaisResidencia,
    resena,
    correoElectronico,
    password,
    whatsapp,
    created_at,
    update_at,
    idMando,
    discordId,
    nombreDiscord,
    canal_twitch,
    canal_facebook,
    canal_youtube,
    aceptaCondiciones,
  } = req.body;

  try {
    bcrypt.hash(password, 10, async (err: any, hashedPassword: any) => {
      if (err) {
        console.log(err);
      } else {
        const mismoPiloto = await models.tb_pilotos.findAll({
          where: {
            correoElectronico,
          },
        });
        if (mismoPiloto.length > 0) {
          return res.json({
            ok: false,
            msn: `el correo ${correoElectronico} ya se encuentra registrado`,
          });
        } else {
          const correo = correoElectronico.replace(/\s+/g, '');
          const tel = whatsapp.replace(/\s+/g, '');
          const ultimo = await models.tb_pilotos.findAll({
            order: [
              // Will escape title and validate DESC against a list of valid direction parameters
              ['id', 'DESC'],
            ],
            limit:1
          });
          const piloto = await models.tb_pilotos.create({
            nombre,
            apellido,
            nombreCorto: `piloto N° ${ultimo[0].id + 1}`,
            idEstado,
            fechaNacimiento,
            idNacionalidad,
            ciudad,
            departamento,
            idPaisResidencia,
            resena,
            correoElectronico:correo,
            password:hashedPassword,
            whatsapp:tel,
            created_at,
            update_at,
            idMando,
            discordId,
            nombreDiscord,
            canal_twitch,
            canal_facebook,
            canal_youtube,
            aceptaCondiciones,
          });
    
          return res.json({
            ok: true,
            piloto,
          });
        }
      }
    });
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const changePassword = async (req: Request, res: Response) => {
  const { id, correoElectronico, password } = req.body;

  try {
    bcrypt.hash(password, 10, async (err: any, hashedPassword: any) => {
      if (err) {
        console.log(err);
      } else {
        const piloto = await models.tb_pilotos.findAll({
          where: { id, correoElectronico },
        });
        if (piloto.length > 0) {
          const editPassword = await models.tb_pilotos.update(
            {
              password: hashedPassword,
            },
            {
              where: {
                id,
              },
            }
          );
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
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const updatePiloto = async (req: Request, res: Response) => {  
  const {
    id,
    nombre,
    apellido,
    idEstado,
    fechaNacimiento,
    idNacionalidad,
    ciudad,
    departamento,
    idPaisResidencia,
    resena,
    correoElectronico,
    whatsapp,
    idMando,
    discordId,
    canal_youtube,
    canal_twitch,
    canal_facebook,
    instagram
  } = req.body;
  try {
    const correo = correoElectronico.replace(/\s+/g, '');
    const tel = whatsapp.replace(/\s+/g, '');

    const piloto = await models.tb_pilotos.update(
      {
        id,
        nombre,
        apellido,
        idEstado,
        fechaNacimiento,
        idNacionalidad,
        ciudad,
        departamento,
        idPaisResidencia,
        resena,
        correoElectronico:correo,
        whatsapp:tel,
        idMando,
        discordId,
        canal_youtube,
        canal_twitch,
        canal_facebook,
        instagram
      },
      {
        where: {
          id,
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
export const getPilotoByidSim = async (req: Request, res: Response) => {
  const { sim } = req.query;
  const query = `SELECT tb_pilotos_id_sim.idSimPiloto, tb_pilotos.nombre, tb_pilotos.apellido, tb_pilotos.nombreCorto
  FROM tb_pilotos_id_sim INNER JOIN tb_pilotos ON tb_pilotos_id_sim.idPiloto = tb_pilotos.id
  WHERE (((tb_pilotos_id_sim.idSimPiloto)="${sim}"));`;
  try {
    const getPilotoByidSim = await models.tb_pilotos_id_sim.sequelize.query(
      query,
      { type: QueryTypes.SELECT }
    );

    res.json({
      ok: true,
      getPilotoByidSim,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const getImagenPiloto = async (req:Request, res:Response) => {

  const { id } = req.params;
  try {
    const query = `SELECT fotoPiloto(${id},1) as Foto`
    const foto: any = await models.tb_pilotos.sequelize?.query(query,{ type: QueryTypes.SELECT });
    res.status(200).json({
      foto: foto[0]['Foto']
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }

}

export const AceptaCorreos = async (req:Request, res:Response) => {

  const {id, aceptaCorreos} = req.body;

  const respuesta = await models.tb_pilotos.update({
    aceptaCorreos:aceptaCorreos
  }, {
    where: {id: id}
  })
  return res.status(200).json({
    ok:true,
    respuesta
  });
}
export const AceptaWhatsapp = async (req:Request, res:Response) => {

  const {id, aceptaWhatsapp} = req.body;

  const respuesta = await models.tb_pilotos.update({
    aceptaWhatsapp:aceptaWhatsapp
  }, {
    where: {id: id}
  })
  return res.status(200).json({
    ok:true,
    respuesta
  });
}