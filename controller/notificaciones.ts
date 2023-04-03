import { QueryTypes } from "sequelize";
const { sequelize } = require("sequelize");
import { initModels } from "../models/init-models";
import { Response, Request } from "express";
const models = initModels(sequelize);

export const getNotificaciones = async (req: Request, res: Response) => {
    const {id} = req.params;
    const query = `SELECT tb_notificaciones.id, rutaimagencompleta(tb_tipo_notificacion.imgIcono) as Icono, tb_tipo_notificacion.nombre, tb_notificaciones.texto, tb_notificaciones.esleido, tb_notificaciones.fechaCreacion FROM tb_tipo_notificacion INNER JOIN tb_notificaciones ON tb_tipo_notificacion.id = tb_notificaciones.idTipoNotificacion WHERE (((tb_notificaciones.idPiloto)=${id})) ORDER BY tb_notificaciones.id DESC;`;
    
    try {
        const notificaciones = await models.tb_tipo_notificacion.sequelize?.query(
            query,
            { type: QueryTypes.SELECT }
          );
          if(notificaciones.length > 0){

              return res.status(200).json({
                ok:true,
                notificaciones
              })
            }else {
              return res.status(200).json({
                ok:false,
                msg:'No tiene notificaciones'
              })
          }
    } catch (error) {
        return res.status(500).json({
          ok: false,
          error: error,
        });
      }

}

export const updateNotification = async (req: Request, res: Response) => {
  const {id} = req.params;
  try{

    const notification = await models.tb_notificaciones.update({
      esleido:1
    },{
      where: {
        id,
      },
    })
    if (notification[0] === 1) {
      return res.json({
        ok: true,
        msg: "Notificación  actualizada",
      });
    } else {
      return res.json({
        ok: false,
        msg: "La notificación no se puede actualizar por que o no existe o no detecta cambios",
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
}
