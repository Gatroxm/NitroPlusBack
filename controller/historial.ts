import { Response, Request } from "express";
import { QueryTypes } from "sequelize";
const { sequelize } = require("sequelize");
import { initModels } from "../models/init-models";

const models = initModels(sequelize);

export const getReportesHostorial = async (req: Request, res: Response) => {
    const { id } = req.params

    const query = `SELECT tb_reportes_comisarios.id AS ReporteNo,convertir_a_utc(tb_reportes_comisarios.fechaReporte) AS Fecha, tb_torneos.nombre AS Torneo, tb_divisiones.nombre AS Division, tb_calendario.nombreEvento AS Carrera,tb_rol_involucrados.nombre AS Rol, tb_estado_reportes.nombre AS Estado FROM ( ( ( tb_reportes_comisarios INNER JOIN tb_involucrados_sanciones ON tb_reportes_comisarios.id = tb_involucrados_sanciones.idReporte ) INNER JOIN tb_rol_involucrados ON tb_involucrados_sanciones.idRolInvolucrado = tb_rol_involucrados.id ) INNER JOIN tb_estado_reportes ON tb_reportes_comisarios.idEstadoReporte = tb_estado_reportes.id ) INNER JOIN( ( ( ( ( ( ( ( tb_calendario INNER JOIN tb_divisiones ON tb_calendario.idDivision = tb_divisiones.id ) INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo ) INNER JOIN tb_pistas_sim ON tb_calendario.idPista = tb_pistas_sim.id ) INNER JOIN tb_pistas_variantes ON tb_pistas_sim.idPistaVariante = tb_pistas_variantes.id ) INNER JOIN tb_pistas ON tb_pistas_variantes.idPistaPrincipal = tb_pistas.id ) INNER JOIN tb_paises ON tb_pistas.idPais = tb_paises.id ) INNER JOIN tb_banners_menu ON tb_calendario.idBanner = tb_banners_menu.id ) INNER JOIN tb_simulador ON tb_torneos.idSimulador = tb_simulador.id ) ON tb_reportes_comisarios.idCalendario = tb_calendario.id WHERE ( ( tb_involucrados_sanciones.idPiloto ) = ${id}) ORDER BY tb_reportes_comisarios.id DESC;`;
  
    try {
      const respuesta =
        await models.tb_reportes_comisarios.sequelize.query(query, {
          type: QueryTypes.SELECT,
        });
      return res.json({
        ok: true,
        respuesta,
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        error: error,
      });
    }
  };