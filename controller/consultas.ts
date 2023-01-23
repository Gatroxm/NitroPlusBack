import { Response, Request } from "express";
import { QueryTypes } from "sequelize";
import tb_calendario from "../models/tb_calendario";
import tb_pilotos from "../models/tb_pilotos";
import tb_reportes_comisarios from "../models/tb_reportes_comisarios";
import tb_tabla_puntos from "../models/tb_tabla_puntos";

export const totalParticipaciones = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const Participaciones: any = await tb_tabla_puntos.sequelize?.query(
      `SELECT Sum(tb_tabla_puntos.ES_POSICION) AS Participaciones FROM tb_resultados INNER JOIN tb_tabla_puntos ON tb_resultados.FK_ID_PUNTOS = tb_tabla_puntos.PK_ID_PUNTOS GROUP BY tb_resultados.FK_ID_PILOTO HAVING (((tb_resultados.FK_ID_PILOTO)=${id}))`,
      { type: QueryTypes.SELECT }
    );
    return res.json({
        ok:true,
        Participaciones
    });
  } catch (error) {
    return res.status(500).json({
        ok:false,
        error: error,
    });
  }
};

export const totalVictorias = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const Victorias = await tb_tabla_puntos.sequelize?.query(
      `SELECT Sum(tb_tabla_puntos.ES_VICTORIA) AS Victorias FROM tb_resultados INNER JOIN tb_tabla_puntos ON tb_resultados.FK_ID_PUNTOS = tb_tabla_puntos.PK_ID_PUNTOS GROUP BY tb_resultados.FK_ID_PILOTO HAVING (((tb_resultados.FK_ID_PILOTO)=${id}))`,
      { type: QueryTypes.SELECT }
    );
    return res.json({
        ok:true,
      Victorias,
    });
  } catch (error) {
    return res.status(500).json({
        ok:false,
        error: error,
    });
  }
};

export const nombreCortoPiloto = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const NombreCorto = await tb_pilotos.sequelize?.query(`SELECT tb_pilotos.NOMBRECORTO as NOMBRECORTO FROM tb_pilotos WHERE tb_pilotos.PK_ID_PILOTO = ${id} `, { type: QueryTypes.SELECT });

        return res.json({
            ok:true,
            NombreCorto
        })
    } catch (error) {
        return res.status(500).json({
            ok:false,
            error: error,
        });
    }
    
}

export const getProximasCarreras = async (req: Request, res: Response) => {

    const { id } = req.params;
    const date  = new Date();
    try {
        const query = `SELECT tb_calendario.FECHA, tb_calendario.HORA, tb_plataformas.URL_LOGO_PLATAFORMA, tb_simulador.URL_LOGO_SIMULADOR, tb_torneos.NOMBRE_TORNEO, tb_divisiones_salas.NOMBRE_DIVISION, tb_pistas.PNG_BANDERA, tb_pistas.NOMBRE_PISTA, tb_coches.NOMBRE_COCHE
        FROM ((((((tb_calendario 
        INNER JOIN tb_participantes ON tb_calendario.FK_DIVISION_SALA = tb_participantes.FK_DIVISION_SALA) 
        INNER JOIN tb_divisiones_salas ON tb_participantes.FK_DIVISION_SALA = tb_divisiones_salas.PK_DIVISION_SALA) 
        INNER JOIN tb_torneos ON tb_divisiones_salas.FK_TORNEO = tb_torneos.PK_TORNEO) 
        INNER JOIN tb_pistas ON tb_calendario.FK_ID_PISTA = tb_pistas.PK_ID_PISTA)
        INNER JOIN tb_coches ON tb_participantes.FK_COCHE_PREDETERMINADO = tb_coches.PK_COCHE) 
        INNER JOIN tb_plataformas ON tb_torneos.FK_PLATAFORMA = tb_plataformas.PK_ID_PLATAFORMA)
        INNER JOIN tb_simulador ON tb_torneos.FK_SIMULADOR = tb_simulador.PK_SIMULADOR
        WHERE ( ((tb_calendario.FECHA)>="${date.getFullYear()}/${date.getMonth()}/${date.getDay()}") AND ((tb_participantes.ES_TITULAR)=1) AND ((tb_participantes.FK_ID_PILOTO)=${id}))
        ORDER BY tb_calendario.FECHA DESC LIMIT 5 ;`
        const top5Carreras:any = await tb_calendario.sequelize?.query(query, { type: QueryTypes.SELECT });
        if(top5Carreras.length > 0){
            return res.json({
                ok:true,
                carreras:true,
                top5Carreras
            })
        }else {
            return res.json({
                ok:true,
                carreras:false,
                msg: 'No cuentas con carreras programadas'
            })
        }

    } catch (error) {
        return res.status(500).json({
            ok:false,
            error: error,
        });
    }

}

export const getUltimosResultados = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const query = `SELECT tb_calendario.FECHA, tb_calendario.HORA, tb_plataformas.URL_LOGO_PLATAFORMA, tb_simulador.SIMULADOR, tb_torneos.NOMBRE_TORNEO, tb_divisiones_salas.NOMBRE_DIVISION, tb_pistas.PNG_BANDERA, tb_pistas.NOMBRE_PISTA, tb_calendario.NOMBRE_EVENTO, tb_tabla_puntos.ID_POSICION_FINAL AS Gen, tb_tabla_puntos_1.ID_POSICION_FINAL AS Cat
        FROM (((((((tb_resultados 
        INNER JOIN tb_calendario ON tb_resultados.FK_ID_CALENDARIO = tb_calendario.PK_ID_CALENDARIO) 
        INNER JOIN tb_divisiones_salas ON tb_calendario.FK_DIVISION_SALA = tb_divisiones_salas.PK_DIVISION_SALA) 
        INNER JOIN tb_torneos ON tb_divisiones_salas.FK_TORNEO = tb_torneos.PK_TORNEO) 
        INNER JOIN tb_plataformas ON tb_torneos.FK_PLATAFORMA = tb_plataformas.PK_ID_PLATAFORMA) 
        INNER JOIN tb_simulador ON tb_torneos.FK_SIMULADOR = tb_simulador.PK_SIMULADOR) 
        INNER JOIN tb_pistas ON tb_calendario.FK_ID_PISTA = tb_pistas.PK_ID_PISTA) 
        INNER JOIN tb_tabla_puntos ON tb_resultados.FK_ID_PUNTOS = tb_tabla_puntos.PK_ID_PUNTOS) 
        INNER JOIN tb_tabla_puntos AS tb_tabla_puntos_1 ON tb_resultados.FK_ID_PUNTOS_CAT = tb_tabla_puntos_1.PK_ID_PUNTOS
        WHERE (((tb_resultados.FK_ID_PILOTO)=${id}))
        ORDER BY tb_calendario.FECHA DESC LIMIT 10;`;
        const ultimosResultados:any = await tb_calendario.sequelize?.query(query,{ type: QueryTypes.SELECT });
        if(ultimosResultados.length > 0){
            return res.json({
                ok:true,
                resultados:true,
                ultimosResultados
            })
        }else {
            return res.json({
                ok:true,
                resultados:false,
                msg: 'No cuentas con Reportes'
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            ok:false,
            error: error,
        });
    }
}

export const gteUltimosReportesRecibidos = async (req:Request, res:Response) => {
    const {id} = req.params;
    const date = new Date();
    const query = `SELECT tb_reportes_comisarios.PK_ID_REPORTE, tb_reportes_comisarios.FECHA_REPORTE, tb_pilotos.NOMBRECORTO, tb_calendario.NOMBRE_CORTO, tb_divisiones_salas.NOMBRE_DIVISION, tb_torneos.NOMBRE_TORNEO, TB_PISTA_PRINCIPAL.URL_BANDERA, TB_ESTADO_REPORTES.NOMBRE_ESTADO_REPORTES, tb_reportes_comisarios.PUNTOS_PENALIZACION, tb_reportes_comisarios.SEGUNDOS_PENALIZACION, tb_reportes_comisarios.POS_PENALIZACION FROM ((((((tb_reportes_comisarios INNER JOIN tb_calendario ON tb_reportes_comisarios.FK_ID_EVENTO = tb_calendario.PK_ID_CALENDARIO) INNER JOIN tb_pistas ON tb_calendario.FK_ID_PISTA = tb_pistas.PK_ID_PISTA) INNER JOIN tb_divisiones_salas ON tb_calendario.FK_DIVISION_SALA = tb_divisiones_salas.PK_DIVISION_SALA) INNER JOIN tb_torneos ON tb_divisiones_salas.FK_TORNEO = tb_torneos.PK_TORNEO) INNER JOIN TB_PISTA_PRINCIPAL ON tb_pistas.FK_PISTA_PRINCIPAL = TB_PISTA_PRINCIPAL.PK_ID_PISTA) INNER JOIN TB_ESTADO_REPORTES ON tb_reportes_comisarios.FK_ESTADO_REPORTE = TB_ESTADO_REPORTES.PK_ESTADO_REPORTE) INNER JOIN tb_pilotos ON tb_reportes_comisarios.FK_DENUNCIANTE = tb_pilotos.PK_ID_PILOTO WHERE (((tb_reportes_comisarios.FECHA_REPORTE)>="${ SumaRestaDias(date, -7)}")  AND ((tb_reportes_comisarios.FK_DENUNCIADO)=${id})) ORDER BY tb_reportes_comisarios.FECHA_REPORTE DESC;`
    try {
        const ultimosReportesRecibidos:any = await tb_reportes_comisarios.sequelize?.query(query, { type: QueryTypes.SELECT });
        if(ultimosReportesRecibidos.length > 0){
            return res.json({
                ok:true,
                reportes:true,
                ultimosReportesRecibidos
            })
        }else {
            return res.json({
                ok:true,
                reportes:false,
                msg: 'No cuentas con Reportes'
            })
        }
        
    }  catch (error) {
        return res.status(500).json({
            ok:false,
            error: error,
        });
    }

}

export const getUltimosReportesEnviados = async (req: Request, res: Response) => {
    const {id} = req.params;
    const date = new Date();
    const query = `SELECT tb_reportes_comisarios.PK_ID_REPORTE, tb_reportes_comisarios.FECHA_REPORTE, tb_pilotos.NOMBRECORTO, tb_calendario.NOMBRE_CORTO, tb_divisiones_salas.NOMBRE_DIVISION, tb_torneos.NOMBRE_TORNEO, TB_PISTA_PRINCIPAL.URL_BANDERA, TB_ESTADO_REPORTES.NOMBRE_ESTADO_REPORTES, tb_reportes_comisarios.PUNTOS_PENALIZACION, tb_reportes_comisarios.SEGUNDOS_PENALIZACION, tb_reportes_comisarios.POS_PENALIZACION FROM ((((((tb_reportes_comisarios INNER JOIN tb_calendario ON tb_reportes_comisarios.FK_ID_EVENTO = tb_calendario.PK_ID_CALENDARIO) INNER JOIN tb_pistas ON tb_calendario.FK_ID_PISTA = tb_pistas.PK_ID_PISTA) INNER JOIN tb_divisiones_salas ON tb_calendario.FK_DIVISION_SALA = tb_divisiones_salas.PK_DIVISION_SALA) INNER JOIN tb_torneos ON tb_divisiones_salas.FK_TORNEO = tb_torneos.PK_TORNEO) INNER JOIN TB_PISTA_PRINCIPAL ON tb_pistas.FK_PISTA_PRINCIPAL = TB_PISTA_PRINCIPAL.PK_ID_PISTA) INNER JOIN TB_ESTADO_REPORTES ON tb_reportes_comisarios.FK_ESTADO_REPORTE = TB_ESTADO_REPORTES.PK_ESTADO_REPORTE) INNER JOIN tb_pilotos ON tb_reportes_comisarios.FK_DENUNCIADO = tb_pilotos.PK_ID_PILOTO WHERE (((tb_reportes_comisarios.FECHA_REPORTE)>="${SumaRestaDias(date, -7)}") AND ((tb_reportes_comisarios.FK_DENUNCIANTE)=${id}))
    ORDER BY tb_reportes_comisarios.FECHA_REPORTE DESC;`
    try {
        const ultimosReportesEnviados:any = await tb_reportes_comisarios.sequelize?.query(query, { type: QueryTypes.SELECT });
        if(ultimosReportesEnviados.length > 0){
            return res.json({
                ok:true,
                reportes:true,
                ultimosReportesEnviados
            })
        }else {
            return res.json({
                ok:true,
                reportes:false,
                msg: 'No cuentas con Reportes'
            })
        }
        
    }  catch (error) {
        return res.status(500).json({
            ok:false,
            error: error,
        });
    }

}

function SumaRestaDias(fecha:Date, dias:number) {
    fecha.setDate(fecha.getDate() + dias);
    return fecha.getFullYear()+"/"+(fecha.getMonth()+1)+"/"+fecha.getDate();
  }