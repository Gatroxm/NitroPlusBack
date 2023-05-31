import { Response, Request } from "express";
import { QueryTypes } from "sequelize";
const { sequelize } = require("sequelize");
import { initModels } from "../models/init-models";

const models = initModels(sequelize);


export const getDigitadores = async (req: Request, res: Response) => {

    try {
        const respuesta = await models.tb_digitadores.findAll({});
        if(respuesta.length > 0){
            return res.status(200).json({ 
                ok:true,
                respuesta
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }

}

export const getTornesoDigitadores = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const query = `SELECT tb_calendario.fechaNo, tb_calendario.fechaHoraCarrera, tb_torneos.nombre AS Torneo, tb_divisiones.nombre AS Division, tb_calendario.nombreEvento AS Fecha, tb_estado_carrera.nombre AS Estado, tb_torneos.idSimVersion, tb_torneos.idSimulador, tb_calendario.idDivision, tb_divisiones.idTorneo, tb_calendario.idCategoriaELO, tb_calendario.id AS idCalendario FROM (((tb_digitadores INNER JOIN tb_calendario ON tb_digitadores.idDivision = tb_calendario.idDivision) INNER JOIN tb_divisiones ON tb_calendario.idDivision = tb_divisiones.id) INNER JOIN tb_torneos ON tb_divisiones.idTorneo = tb_torneos.idTorneo) INNER JOIN tb_estado_carrera ON tb_calendario.idEstadoCarrera = tb_estado_carrera.id WHERE (((tb_digitadores.idPiloto)=${id})) ORDER BY tb_calendario.fechaHoraCarrera;`;
        const respuesta = await models.tb_digitadores.sequelize?.query(query,{ type: QueryTypes.SELECT });
        if(respuesta.length > 0){
            return res.status(200).json({ 
                ok:true,
                respuesta
            })
        } 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
}

export const getPosiscionesDigitadores = async (req: Request, res: Response) => {
    try {
        const query = `SELECT tb_ident_pos.nombreCorto, tb_ident_pos.id FROM tb_ident_pos ORDER BY tb_ident_pos.nombreCorto;`;
        const respuesta = await models.tb_digitadores.sequelize?.query(query,{ type: QueryTypes.SELECT });
        if(respuesta.length > 0){
            return res.status(200).json({ 
                ok:true,
                respuesta
            })
        } 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
}

export const getPilotosDigitadores = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const query = `SELECT IF(tb_sim_plat_codplat.isVisible=0,tb_pilotos.nombreCorto,CONCAT(tb_pilotos.nombreCorto,' - ',tb_pilotos_id_sim.idSimPiloto)) AS Piloto, tb_inscripciones.id as IdInscripcion, tb_divisiones_pilotos.id as idDivisionPiloto, tb_pilotos.id as idPiloto FROM ( ( tb_calendario INNER JOIN( ( tb_divisiones_pilotos INNER JOIN tb_inscripciones ON tb_divisiones_pilotos.idInscripcion = tb_inscripciones.id ) INNER JOIN tb_pilotos ON tb_inscripciones.idPiloto = tb_pilotos.id ) ON tb_calendario.idDivision = tb_divisiones_pilotos.idNombreDivision ) INNER JOIN tb_pilotos_id_sim ON tb_inscripciones.idPilotoIdSim = tb_pilotos_id_sim.id ) INNER JOIN tb_sim_plat_codplat ON tb_pilotos_id_sim.idSimCodPlataforma = tb_sim_plat_codplat.id WHERE ( ((tb_calendario.id) = ${id}) AND( (tb_inscripciones.idEstadoInscr) = 1 ) ) ORDER BY tb_pilotos.nombreCorto;`;
        const respuesta = await models.tb_digitadores.sequelize?.query(query,{ type: QueryTypes.SELECT });
        if(respuesta.length > 0){
            return res.status(200).json({ 
                ok:true,
                respuesta
            })
        } 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
}

export const getCocheDigitadores = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const query = `SELECT tb_coches.nombre, tb_coches_sim.id FROM tb_torneos INNER JOIN (tb_coches_sim INNER JOIN tb_coches ON tb_coches_sim.idCoche = tb_coches.id) ON (tb_torneos.idSimulador = tb_coches_sim.idSimulador) AND (tb_torneos.idCocheSimPermitido = tb_coches_sim.id) WHERE (((tb_torneos.idTorneo)=${id}) AND ((tb_coches_sim.idEstado)=1)) UNION SELECT tb_coches.nombre, tb_coches_sim.id FROM tb_torneos INNER JOIN (tb_coches_sim INNER JOIN tb_coches ON tb_coches_sim.idCoche = tb_coches.id) ON (tb_torneos.idMarcaCochePermitida = tb_coches.idMarca) AND (tb_torneos.idSimulador = tb_coches_sim.idSimulador) WHERE (((tb_torneos.idTorneo)=${id}) AND ((tb_coches_sim.idEstado)=1)) UNION SELECT tb_coches.nombre, tb_coches_sim.id FROM tb_torneos INNER JOIN (tb_coches_sim INNER JOIN tb_coches ON tb_coches_sim.idCoche = tb_coches.id) ON (tb_torneos.idCategoriaCochePermitida = tb_coches.idCategoria) AND (tb_torneos.idSimulador = tb_coches_sim.idSimulador) WHERE (((tb_torneos.idTorneo)=${id}) AND ((tb_coches_sim.idEstado)=1)) UNION SELECT tb_coches.nombre, tb_coches_sim.id FROM ((tb_torneos INNER JOIN tb_nombre_grupo_coches_personalizado ON (tb_torneos.idSimulador = tb_nombre_grupo_coches_personalizado.idSimulador) AND (tb_torneos.idGrupoCochePersonalizado = tb_nombre_grupo_coches_personalizado.id)) INNER JOIN tb_grupo_coches_personalizado ON tb_nombre_grupo_coches_personalizado.id = tb_grupo_coches_personalizado.idNombreGrupo) INNER JOIN (tb_coches_sim INNER JOIN tb_coches ON tb_coches_sim.idCoche = tb_coches.id) ON tb_grupo_coches_personalizado.idCocheSim = tb_coches_sim.id WHERE (((tb_torneos.idTorneo)=${id}) AND ((tb_coches_sim.idEstado)=1)) GROUP BY tb_coches.nombre, tb_coches_sim.id ORDER BY nombre;`;
        const respuesta = await models.tb_digitadores.sequelize?.query(query,{ type: QueryTypes.SELECT });
        if(respuesta.length > 0){
            return res.status(200).json({ 
                ok:true,
                respuesta
            })
        } 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
}

export const getEquipoDigitadores = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const query = `SELECT tb_equipos.nombre, tb_equipos.id FROM ((tb_torneos INNER JOIN tb_nombre_grupo_equipos ON tb_torneos.idGrupoEquipoPersonalizado = tb_nombre_grupo_equipos.id) INNER JOIN tb_grupo_equipos ON tb_nombre_grupo_equipos.id = tb_grupo_equipos.idNombre) INNER JOIN tb_equipos ON tb_grupo_equipos.idEquipoSim = tb_equipos.id WHERE (((tb_torneos.idTorneo)=${id})) ORDER BY tb_equipos.nombre;`;
        const respuesta = await models.tb_digitadores.sequelize?.query(query,{ type: QueryTypes.SELECT });
        if(respuesta.length > 0){
            return res.status(200).json({ 
                ok:true,
                respuesta
            })
        } 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
}

export const createRegistrosMasivosTblResultados = async (req: Request, res: Response) => { 
    const {idCalendario} = req.body[0]
    try {
        const respuesta = await models.tb_resultados.bulkCreate(req.body);
        if(respuesta.length > 0){

            /** Procedimientos almacenados  */
            const query = `CALL ajustar_datos_tb_resultados (${idCalendario});`
            const proces1 = await models.tb_resultados.sequelize.query(query, { type: QueryTypes.SELECT });
            return res.status(200).json({ 
                ok:true,
                msg: "Filas Registradas"
            });
        }
    } catch (error) {
        return res.status(500).json({
            ok: true,
            msg: "Filas Registradas"
        });
    }
}