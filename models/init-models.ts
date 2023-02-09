
import { DataTypes } from "sequelize";
const connection = require("../db/connection");
const _tb_asignacion_comisario = require("./tb_asignacion_comisario");
const _tb_calendario = require("./tb_calendario");
const _tb_cat_coches = require("./tb_cat_coches");
const _tb_cat_piloto = require("./tb_cat_piloto");
const _tb_coches = require("./tb_coches");
const _tb_coches_sim = require("./tb_coches_sim");
const _tb_cod_plataforma = require("./tb_cod_plataforma");
const _tb_cod_sim_preclasificatorio = require("./tb_cod_sim_preclasificatorio");
const _tb_codificacion_divisiones = require("./tb_codificacion_divisiones");
const _tb_codificacion_resultados = require("./tb_codificacion_resultados");
const _tb_conceptos_comisarios = require("./tb_conceptos_comisarios");
const _tb_contenido_grafico = require("./tb_contenido_grafico");
const _tb_descargos_involucrados = require("./tb_descargos_involucrados");
const _tb_divisiones = require("./tb_divisiones");
const _tb_divisiones_pilotos = require("./tb_divisiones_pilotos");
const _tb_equipos = require("./tb_equipos");
const _tb_equipos_sim = require("./tb_equipos_sim");
const _tb_estado_carrera = require("./tb_estado_carrera");
const _tb_estado_general = require("./tb_estado_general");
const _tb_estado_inscripcion = require("./tb_estado_inscripcion");
const _tb_estado_penalizaciones = require("./tb_estado_penalizaciones");
const _tb_estado_preclasificatorios = require("./tb_estado_preclasificatorios");
const _tb_estado_reportes = require("./tb_estado_reportes");
const _tb_estado_torneos = require("./tb_estado_torneos");
const _tb_etapas_calendario = require("./tb_etapas_calendario");
const _tb_eventos_preclasificatorio = require("./tb_eventos_preclasificatorio");
const _tb_evidencias_reportes = require("./tb_evidencias_reportes");
const _tb_formato_carrera = require("./tb_formato_carrera");
const _tb_gravedad_sancion = require("./tb_gravedad_sancion");
const _tb_grupo_coches_personalizado = require("./tb_grupo_coches_personalizado");
const _tb_grupo_equipos = require("./tb_grupo_equipos");
const _tb_ident_pos = require("./tb_ident_pos");
const _tb_ident_pos_sim_preq = require("./tb_ident_pos_sim_preq");
const _tb_incidentes_sim = require("./tb_incidentes_sim");
const _tb_info_preclasificatorios = require("./tb_info_preclasificatorios");
const _tb_inscripcion_preclasificatorio = require("./tb_inscripcion_preclasificatorio");
const _tb_inscripciones = require("./tb_inscripciones");
const _tb_involucrados_incidente_sim = require("./tb_involucrados_incidente_sim");
const _tb_involucrados_sanciones = require("./tb_involucrados_sanciones");
const _tb_ligas = require("./tb_ligas");
const _tb_marcas_coches = require("./tb_marcas_coches");
const _tb_marcas_mando = require("./tb_marcas_mando");
const _tb_neumaticos = require("./tb_neumaticos");
const _tb_neumaticos_sim = require("./tb_neumaticos_sim");
const _tb_nombre_grupo_coches_personalizado = require("./tb_nombre_grupo_coches_personalizado");
const _tb_nombre_grupo_equipos = require("./tb_nombre_grupo_equipos");
const _tb_opcion_preclasificatorios_torneo = require("./tb_opcion_preclasificatorios_torneo");
const _tb_opciones_respuesta = require("./tb_opciones_respuesta");
const _tb_paises = require("./tb_paises");
const _tb_parrilla_calendario = require("./tb_parrilla_calendario");
const _tb_penalizacion_sanciones = require("./tb_penalizacion_sanciones");
const _tb_pilotos = require("./tb_pilotos");
const _tb_pilotos_id_sim = require("./tb_pilotos_id_sim");
const _tb_pilotos_liga = require("./tb_pilotos_liga");
const _tb_pilotos_penalizados = require("./tb_pilotos_penalizados");
const _tb_pistas = require("./tb_pistas");
const _tb_pistas_sim = require("./tb_pistas_sim");
const _tb_pistas_variantes = require("./tb_pistas_variantes");
const _tb_plataforma = require("./tb_plataforma");
const _tb_pregunta_inscripcion = require("./tb_pregunta_inscripcion");
const _tb_puntos = require("./tb_puntos");
const _tb_reparto_puntos = require("./tb_reparto_puntos");
const _tb_repeticiones = require("./tb_repeticiones");
const _tb_reportes_comisarios = require("./tb_reportes_comisarios");
const _tb_resultados = require("./tb_resultados");
const _tb_resultados_preclasificatorio = require("./tb_resultados_preclasificatorio");
const _tb_resultados_sim = require("./tb_resultados_sim");
const _tb_rol_involucrados = require("./tb_rol_involucrados");
const _tb_roles = require("./tb_roles");
const _tb_roles_pilotos = require("./tb_roles_pilotos");
const _tb_sesiones = require("./tb_sesiones");
const _tb_sesiones_sim = require("./tb_sesiones_sim");
const _tb_sim_data_sesion = require("./tb_sim_data_sesion");
const _tb_sim_plat_codplat = require("./tb_sim_plat_codplat");
const _tb_sim_version = require("./tb_sim_version");
const _tb_simcodplat_torneo = require("./tb_simcodplat_torneo");
const _tb_simulador = require("./tb_simulador");
const _tb_sistema_puntos = require("./tb_sistema_puntos");
const _tb_tabla_sanciones = require("./tb_tabla_sanciones");
const _tb_tabla_sanciones_sim = require("./tb_tabla_sanciones_sim");
const _tb_tipo_mando = require("./tb_tipo_mando");
const _tb_tipo_penalizacion = require("./tb_tipo_penalizacion");
const _tb_tipo_piloto = require("./tb_tipo_piloto");
const _tb_tipo_torneo = require("./tb_tipo_torneo");
const _tb_torneos = require("./tb_torneos");


export const  initModels = (sequelize:any = connection.default) => {
  const tb_asignacion_comisario = _tb_asignacion_comisario(sequelize, DataTypes);
  const tb_calendario = _tb_calendario(sequelize, DataTypes);
  const tb_cat_coches = _tb_cat_coches(sequelize, DataTypes);
  const tb_cat_piloto = _tb_cat_piloto(sequelize, DataTypes);
  const tb_coches = _tb_coches(sequelize, DataTypes);
  const tb_coches_sim = _tb_coches_sim(sequelize, DataTypes);
  const tb_cod_plataforma = _tb_cod_plataforma(sequelize, DataTypes);
  const tb_cod_sim_preclasificatorio = _tb_cod_sim_preclasificatorio(sequelize, DataTypes);
  const tb_codificacion_divisiones = _tb_codificacion_divisiones(sequelize, DataTypes);
  const tb_codificacion_resultados = _tb_codificacion_resultados(sequelize, DataTypes);
  const tb_conceptos_comisarios = _tb_conceptos_comisarios(sequelize, DataTypes);
  const tb_contenido_grafico = _tb_contenido_grafico(sequelize, DataTypes);
  const tb_descargos_involucrados = _tb_descargos_involucrados(sequelize, DataTypes);
  const tb_divisiones = _tb_divisiones(sequelize, DataTypes);
  const tb_divisiones_pilotos = _tb_divisiones_pilotos(sequelize, DataTypes);
  const tb_equipos = _tb_equipos(sequelize, DataTypes);
  const tb_equipos_sim = _tb_equipos_sim(sequelize, DataTypes);
  const tb_estado_carrera = _tb_estado_carrera(sequelize, DataTypes);
  const tb_estado_general = _tb_estado_general(sequelize, DataTypes);
  const tb_estado_inscripcion = _tb_estado_inscripcion(sequelize, DataTypes);
  const tb_estado_penalizaciones = _tb_estado_penalizaciones(sequelize, DataTypes);
  const tb_estado_preclasificatorios = _tb_estado_preclasificatorios(sequelize, DataTypes);
  const tb_estado_reportes = _tb_estado_reportes(sequelize, DataTypes);
  const tb_estado_torneos = _tb_estado_torneos(sequelize, DataTypes);
  const tb_etapas_calendario = _tb_etapas_calendario(sequelize, DataTypes);
  const tb_eventos_preclasificatorio = _tb_eventos_preclasificatorio(sequelize, DataTypes);
  const tb_evidencias_reportes = _tb_evidencias_reportes(sequelize, DataTypes);
  const tb_formato_carrera = _tb_formato_carrera(sequelize, DataTypes);
  const tb_gravedad_sancion = _tb_gravedad_sancion(sequelize, DataTypes);
  const tb_grupo_coches_personalizado = _tb_grupo_coches_personalizado(sequelize, DataTypes);
  const tb_grupo_equipos = _tb_grupo_equipos(sequelize, DataTypes);
  const tb_ident_pos = _tb_ident_pos(sequelize, DataTypes);
  const tb_ident_pos_sim_preq = _tb_ident_pos_sim_preq(sequelize, DataTypes);
  const tb_incidentes_sim = _tb_incidentes_sim(sequelize, DataTypes);
  const tb_info_preclasificatorios = _tb_info_preclasificatorios(sequelize, DataTypes);
  const tb_inscripcion_preclasificatorio = _tb_inscripcion_preclasificatorio(sequelize, DataTypes);
  const tb_inscripciones = _tb_inscripciones(sequelize, DataTypes);
  const tb_involucrados_incidente_sim = _tb_involucrados_incidente_sim(sequelize, DataTypes);
  const tb_involucrados_sanciones = _tb_involucrados_sanciones(sequelize, DataTypes);
  const tb_ligas = _tb_ligas(sequelize, DataTypes);
  const tb_marcas_coches = _tb_marcas_coches(sequelize, DataTypes);
  const tb_marcas_mando = _tb_marcas_mando(sequelize, DataTypes);
  const tb_neumaticos = _tb_neumaticos(sequelize, DataTypes);
  const tb_neumaticos_sim = _tb_neumaticos_sim(sequelize, DataTypes);
  const tb_nombre_grupo_coches_personalizado = _tb_nombre_grupo_coches_personalizado(sequelize, DataTypes);
  const tb_nombre_grupo_equipos = _tb_nombre_grupo_equipos(sequelize, DataTypes);
  const tb_opcion_preclasificatorios_torneo = _tb_opcion_preclasificatorios_torneo(sequelize, DataTypes);
  const tb_opciones_respuesta = _tb_opciones_respuesta(sequelize, DataTypes);
  const tb_paises = _tb_paises(sequelize, DataTypes);
  const tb_parrilla_calendario = _tb_parrilla_calendario(sequelize, DataTypes);
  const tb_penalizacion_sanciones = _tb_penalizacion_sanciones(sequelize, DataTypes);
  const tb_pilotos = _tb_pilotos(sequelize, DataTypes);
  const tb_pilotos_id_sim = _tb_pilotos_id_sim(sequelize, DataTypes);
  const tb_pilotos_liga = _tb_pilotos_liga(sequelize, DataTypes);
  const tb_pilotos_penalizados = _tb_pilotos_penalizados(sequelize, DataTypes);
  const tb_pistas = _tb_pistas(sequelize, DataTypes);
  const tb_pistas_sim = _tb_pistas_sim(sequelize, DataTypes);
  const tb_pistas_variantes = _tb_pistas_variantes(sequelize, DataTypes);
  const tb_plataforma = _tb_plataforma(sequelize, DataTypes);
  const tb_pregunta_inscripcion = _tb_pregunta_inscripcion(sequelize, DataTypes);
  const tb_puntos = _tb_puntos(sequelize, DataTypes);
  const tb_reparto_puntos = _tb_reparto_puntos(sequelize, DataTypes);
  const tb_repeticiones = _tb_repeticiones(sequelize, DataTypes);
  const tb_reportes_comisarios = _tb_reportes_comisarios(sequelize, DataTypes);
  const tb_resultados = _tb_resultados(sequelize, DataTypes);
  const tb_resultados_preclasificatorio = _tb_resultados_preclasificatorio(sequelize, DataTypes);
  const tb_resultados_sim = _tb_resultados_sim(sequelize, DataTypes);
  const tb_rol_involucrados = _tb_rol_involucrados(sequelize, DataTypes);
  const tb_roles = _tb_roles(sequelize, DataTypes);
  const tb_roles_pilotos = _tb_roles_pilotos(sequelize, DataTypes);
  const tb_sesiones = _tb_sesiones(sequelize, DataTypes);
  const tb_sesiones_sim = _tb_sesiones_sim(sequelize, DataTypes);
  const tb_sim_data_sesion = _tb_sim_data_sesion(sequelize, DataTypes);
  const tb_sim_plat_codplat = _tb_sim_plat_codplat(sequelize, DataTypes);
  const tb_sim_version = _tb_sim_version(sequelize, DataTypes);
  const tb_simcodplat_torneo = _tb_simcodplat_torneo(sequelize, DataTypes);
  const tb_simulador = _tb_simulador(sequelize, DataTypes);
  const tb_sistema_puntos = _tb_sistema_puntos(sequelize, DataTypes);
  const tb_tabla_sanciones = _tb_tabla_sanciones(sequelize, DataTypes);
  const tb_tabla_sanciones_sim = _tb_tabla_sanciones_sim(sequelize, DataTypes);
  const tb_tipo_mando = _tb_tipo_mando(sequelize, DataTypes);
  const tb_tipo_penalizacion = _tb_tipo_penalizacion(sequelize, DataTypes);
  const tb_tipo_piloto = _tb_tipo_piloto(sequelize, DataTypes);
  const tb_tipo_torneo = _tb_tipo_torneo(sequelize, DataTypes);
  const tb_torneos = _tb_torneos(sequelize, DataTypes);

  tb_conceptos_comisarios.belongsTo(tb_asignacion_comisario, { as: "idAsignacionComisario_tb_asignacion_comisario", foreignKey: "idAsignacionComisario"});
  tb_asignacion_comisario.hasMany(tb_conceptos_comisarios, { as: "tb_conceptos_comisarios", foreignKey: "idAsignacionComisario"});
  tb_pilotos_penalizados.belongsTo(tb_asignacion_comisario, { as: "idRolComisarioSancion_tb_asignacion_comisario", foreignKey: "idRolComisarioSancion"});
  tb_asignacion_comisario.hasMany(tb_pilotos_penalizados, { as: "tb_pilotos_penalizados", foreignKey: "idRolComisarioSancion"});
  tb_etapas_calendario.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_etapas_calendario, { as: "tb_etapas_calendarios", foreignKey: "idCalendario"});
  tb_parrilla_calendario.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_parrilla_calendario, { as: "tb_parrilla_calendarios", foreignKey: "idCalendario"});
  tb_repeticiones.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_repeticiones, { as: "tb_repeticiones", foreignKey: "idCalendario"});
  tb_reportes_comisarios.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_reportes_comisarios, { as: "tb_reportes_comisarios", foreignKey: "idCalendario"});
  tb_resultados.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_resultados, { as: "tb_resultados", foreignKey: "idCalendario"});
  tb_sim_data_sesion.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_sim_data_sesion, { as: "tb_sim_data_sesions", foreignKey: "idCalendario"});
  tb_coches.belongsTo(tb_cat_coches, { as: "idCategoria_tb_cat_coch", foreignKey: "idCategoria"});
  tb_cat_coches.hasMany(tb_coches, { as: "tb_coches", foreignKey: "idCategoria"});
  tb_torneos.belongsTo(tb_cat_coches, { as: "idCategoriaCochePermitida_tb_cat_coch", foreignKey: "idCategoriaCochePermitida"});
  tb_cat_coches.hasMany(tb_torneos, { as: "tb_torneos", foreignKey: "idCategoriaCochePermitida"});
  tb_divisiones.belongsTo(tb_cat_piloto, { as: "idCatPred_tb_cat_piloto", foreignKey: "idCatPred"});
  tb_cat_piloto.hasMany(tb_divisiones, { as: "tb_divisiones", foreignKey: "idCatPred"});
  tb_divisiones_pilotos.belongsTo(tb_cat_piloto, { as: "idCategoriaPiloto_tb_cat_piloto", foreignKey: "idCategoriaPiloto"});
  tb_cat_piloto.hasMany(tb_divisiones_pilotos, { as: "tb_divisiones_pilotos", foreignKey: "idCategoriaPiloto"});
  tb_parrilla_calendario.belongsTo(tb_cat_piloto, { as: "idCategoriaPiloto_tb_cat_piloto", foreignKey: "idCategoriaPiloto"});
  tb_cat_piloto.hasMany(tb_parrilla_calendario, { as: "tb_parrilla_calendarios", foreignKey: "idCategoriaPiloto"});
  tb_coches_sim.belongsTo(tb_coches, { as: "idCoche_tb_coch", foreignKey: "idCoche"});
  tb_coches.hasMany(tb_coches_sim, { as: "tb_coches_sims", foreignKey: "idCoche"});
  tb_calendario.belongsTo(tb_coches_sim, { as: "idCochePermitido_tb_coches_sim", foreignKey: "idCochePermitido"});
  tb_coches_sim.hasMany(tb_calendario, { as: "tb_calendarios", foreignKey: "idCochePermitido"});
  tb_divisiones.belongsTo(tb_coches_sim, { as: "idCochePred_tb_coches_sim", foreignKey: "idCochePred"});
  tb_coches_sim.hasMany(tb_divisiones, { as: "tb_divisiones", foreignKey: "idCochePred"});
  tb_divisiones_pilotos.belongsTo(tb_coches_sim, { as: "idCoche_tb_coches_sim", foreignKey: "idCoche"});
  tb_coches_sim.hasMany(tb_divisiones_pilotos, { as: "tb_divisiones_pilotos", foreignKey: "idCoche"});
  tb_eventos_preclasificatorio.belongsTo(tb_coches_sim, { as: "idCocheSim_tb_coches_sim", foreignKey: "idCocheSim"});
  tb_coches_sim.hasMany(tb_eventos_preclasificatorio, { as: "tb_eventos_preclasificatorios", foreignKey: "idCocheSim"});
  tb_grupo_coches_personalizado.belongsTo(tb_coches_sim, { as: "idCocheSim_tb_coches_sim", foreignKey: "idCocheSim"});
  tb_coches_sim.hasMany(tb_grupo_coches_personalizado, { as: "tb_grupo_coches_personalizados", foreignKey: "idCocheSim"});
  tb_inscripciones.belongsTo(tb_coches_sim, { as: "idCocheInicial_tb_coches_sim", foreignKey: "idCocheInicial"});
  tb_coches_sim.hasMany(tb_inscripciones, { as: "tb_inscripciones", foreignKey: "idCocheInicial"});
  tb_resultados.belongsTo(tb_coches_sim, { as: "idCocheSim_tb_coches_sim", foreignKey: "idCocheSim"});
  tb_coches_sim.hasMany(tb_resultados, { as: "tb_resultados", foreignKey: "idCocheSim"});
  tb_torneos.belongsTo(tb_coches_sim, { as: "idCocheSimPermitido_tb_coches_sim", foreignKey: "idCocheSimPermitido"});
  tb_coches_sim.hasMany(tb_torneos, { as: "tb_torneos", foreignKey: "idCocheSimPermitido"});
  tb_sim_plat_codplat.belongsTo(tb_cod_plataforma, { as: "idCodplataforma_tb_cod_plataforma", foreignKey: "idCodplataforma"});
  tb_cod_plataforma.hasMany(tb_sim_plat_codplat, { as: "tb_sim_plat_codplats", foreignKey: "idCodplataforma"});
  tb_codificacion_divisiones.belongsTo(tb_codificacion_resultados, { as: "idCodificacion_tb_codificacion_resultado", foreignKey: "idCodificacion"});
  tb_codificacion_resultados.hasMany(tb_codificacion_divisiones, { as: "tb_codificacion_divisiones", foreignKey: "idCodificacion"});
  tb_reparto_puntos.belongsTo(tb_codificacion_resultados, { as: "idCodificacion_tb_codificacion_resultado", foreignKey: "idCodificacion"});
  tb_codificacion_resultados.hasMany(tb_reparto_puntos, { as: "tb_reparto_puntos", foreignKey: "idCodificacion"});
  tb_asignacion_comisario.belongsTo(tb_divisiones, { as: "idDivision_tb_divisione", foreignKey: "idDivision"});
  tb_divisiones.hasMany(tb_asignacion_comisario, { as: "tb_asignacion_comisarios", foreignKey: "idDivision"});
  tb_calendario.belongsTo(tb_divisiones, { as: "idDivision_tb_divisione", foreignKey: "idDivision"});
  tb_divisiones.hasMany(tb_calendario, { as: "tb_calendarios", foreignKey: "idDivision"});
  tb_codificacion_divisiones.belongsTo(tb_divisiones, { as: "idDivision_tb_divisione", foreignKey: "idDivision"});
  tb_divisiones.hasMany(tb_codificacion_divisiones, { as: "tb_codificacion_divisiones", foreignKey: "idDivision"});
  tb_contenido_grafico.belongsTo(tb_divisiones, { as: "idDivision_tb_divisione", foreignKey: "idDivision"});
  tb_divisiones.hasMany(tb_contenido_grafico, { as: "tb_contenido_graficos", foreignKey: "idDivision"});
  tb_divisiones_pilotos.belongsTo(tb_divisiones, { as: "idNombreDivision_tb_divisione", foreignKey: "idNombreDivision"});
  tb_divisiones.hasMany(tb_divisiones_pilotos, { as: "tb_divisiones_pilotos", foreignKey: "idNombreDivision"});
  tb_resultados.belongsTo(tb_divisiones, { as: "idNombreDivision_tb_divisione", foreignKey: "idNombreDivision"});
  tb_divisiones.hasMany(tb_resultados, { as: "tb_resultados", foreignKey: "idNombreDivision"});
  tb_parrilla_calendario.belongsTo(tb_divisiones_pilotos, { as: "idDivision_tb_divisiones_piloto", foreignKey: "idDivision"});
  tb_divisiones_pilotos.hasMany(tb_parrilla_calendario, { as: "tb_parrilla_calendarios", foreignKey: "idDivision"});
  tb_resultados.belongsTo(tb_divisiones_pilotos, { as: "idDivision_tb_divisiones_piloto", foreignKey: "idDivision"});
  tb_divisiones_pilotos.hasMany(tb_resultados, { as: "tb_resultados", foreignKey: "idDivision"});
  tb_equipos_sim.belongsTo(tb_equipos, { as: "idEquipo_tb_equipo", foreignKey: "idEquipo"});
  tb_equipos.hasMany(tb_equipos_sim, { as: "tb_equipos_sims", foreignKey: "idEquipo"});
  tb_calendario.belongsTo(tb_equipos_sim, { as: "idEquipoPermitido_tb_equipos_sim", foreignKey: "idEquipoPermitido"});
  tb_equipos_sim.hasMany(tb_calendario, { as: "tb_calendarios", foreignKey: "idEquipoPermitido"});
  tb_divisiones.belongsTo(tb_equipos_sim, { as: "idEquipoPred_tb_equipos_sim", foreignKey: "idEquipoPred"});
  tb_equipos_sim.hasMany(tb_divisiones, { as: "tb_divisiones", foreignKey: "idEquipoPred"});
  tb_divisiones_pilotos.belongsTo(tb_equipos_sim, { as: "idEquipo_tb_equipos_sim", foreignKey: "idEquipo"});
  tb_equipos_sim.hasMany(tb_divisiones_pilotos, { as: "tb_divisiones_pilotos", foreignKey: "idEquipo"});
  tb_grupo_equipos.belongsTo(tb_equipos_sim, { as: "idEquipoSim_tb_equipos_sim", foreignKey: "idEquipoSim"});
  tb_equipos_sim.hasMany(tb_grupo_equipos, { as: "tb_grupo_equipos", foreignKey: "idEquipoSim"});
  tb_inscripciones.belongsTo(tb_equipos_sim, { as: "idEquipoInicial_tb_equipos_sim", foreignKey: "idEquipoInicial"});
  tb_equipos_sim.hasMany(tb_inscripciones, { as: "tb_inscripciones", foreignKey: "idEquipoInicial"});
  tb_resultados.belongsTo(tb_equipos_sim, { as: "idEquipoSim_tb_equipos_sim", foreignKey: "idEquipoSim"});
  tb_equipos_sim.hasMany(tb_resultados, { as: "tb_resultados", foreignKey: "idEquipoSim"});
  tb_calendario.belongsTo(tb_estado_carrera, { as: "idEstadoCarrera_tb_estado_carrera", foreignKey: "idEstadoCarrera"});
  tb_estado_carrera.hasMany(tb_calendario, { as: "tb_calendarios", foreignKey: "idEstadoCarrera"});
  tb_asignacion_comisario.belongsTo(tb_estado_general, { as: "idEstadoRecepcion_tb_estado_general", foreignKey: "idEstadoRecepcion"});
  tb_estado_general.hasMany(tb_asignacion_comisario, { as: "tb_asignacion_comisarios", foreignKey: "idEstadoRecepcion"});
  tb_cat_coches.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_cat_coches, { as: "tb_cat_coches", foreignKey: "idEstado"});
  tb_coches.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_coches, { as: "tb_coches", foreignKey: "idEstado"});
  tb_coches_sim.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_coches_sim, { as: "tb_coches_sims", foreignKey: "idEstado"});
  tb_cod_plataforma.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_cod_plataforma, { as: "tb_cod_plataformas", foreignKey: "idEstado"});
  tb_codificacion_resultados.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_codificacion_resultados, { as: "tb_codificacion_resultados", foreignKey: "idEstado"});
  tb_equipos.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_equipos, { as: "tb_equipos", foreignKey: "idEstado"});
  tb_equipos_sim.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_equipos_sim, { as: "tb_equipos_sims", foreignKey: "idEstado"});
  tb_formato_carrera.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_formato_carrera, { as: "tb_formato_carreras", foreignKey: "idEstado"});
  tb_grupo_coches_personalizado.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_grupo_coches_personalizado, { as: "tb_grupo_coches_personalizados", foreignKey: "idEstado"});
  tb_grupo_equipos.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_grupo_equipos, { as: "tb_grupo_equipos", foreignKey: "idEstado"});
  tb_ligas.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_ligas, { as: "tb_ligas", foreignKey: "idEstado"});
  tb_marcas_coches.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_marcas_coches, { as: "tb_marcas_coches", foreignKey: "idEstado"});
  tb_neumaticos.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_neumaticos, { as: "tb_neumaticos", foreignKey: "idEstado"});
  tb_neumaticos_sim.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_neumaticos_sim, { as: "tb_neumaticos_sims", foreignKey: "idEstado"});
  tb_nombre_grupo_coches_personalizado.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_nombre_grupo_coches_personalizado, { as: "tb_nombre_grupo_coches_personalizados", foreignKey: "idEstado"});
  tb_nombre_grupo_equipos.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_nombre_grupo_equipos, { as: "tb_nombre_grupo_equipos", foreignKey: "idEstado"});
  tb_paises.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_paises, { as: "tb_paises", foreignKey: "idEstado"});
  tb_pilotos.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_pilotos, { as: "tb_pilotos", foreignKey: "idEstado"});
  tb_pilotos_id_sim.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_pilotos_id_sim, { as: "tb_pilotos_id_sims", foreignKey: "idEstado"});
  tb_pilotos_liga.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_pilotos_liga, { as: "tb_pilotos_ligas", foreignKey: "idEstado"});
  tb_pistas.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_pistas, { as: "tb_pista", foreignKey: "idEstado"});
  tb_pistas_sim.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_pistas_sim, { as: "tb_pistas_sims", foreignKey: "idEstado"});
  tb_pistas_variantes.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_pistas_variantes, { as: "tb_pistas_variantes", foreignKey: "idEstado"});
  tb_plataforma.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_plataforma, { as: "tb_plataformas", foreignKey: "idEstado"});
  tb_roles.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_roles, { as: "tb_roles", foreignKey: "idEstado"});
  tb_roles_pilotos.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_roles_pilotos, { as: "tb_roles_pilotos", foreignKey: "idEstado"});
  tb_sesiones.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_sesiones, { as: "tb_sesiones", foreignKey: "idEstado"});
  tb_sesiones_sim.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_sesiones_sim, { as: "tb_sesiones_sims", foreignKey: "idEstado"});
  tb_sim_plat_codplat.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_sim_plat_codplat, { as: "tb_sim_plat_codplats", foreignKey: "idEstado"});
  tb_sim_version.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_sim_version, { as: "tb_sim_versions", foreignKey: "idEstado"});
  tb_simulador.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_simulador, { as: "tb_simuladors", foreignKey: "idEstado"});
  tb_sistema_puntos.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_sistema_puntos, { as: "tb_sistema_puntos", foreignKey: "idEstado"});
  tb_tipo_torneo.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_tipo_torneo, { as: "tb_tipo_torneos", foreignKey: "idEstado"});
  tb_inscripciones.belongsTo(tb_estado_inscripcion, { as: "idEstadoInscr_tb_estado_inscripcion", foreignKey: "idEstadoInscr"});
  tb_estado_inscripcion.hasMany(tb_inscripciones, { as: "tb_inscripciones", foreignKey: "idEstadoInscr"});
  tb_penalizacion_sanciones.belongsTo(tb_estado_penalizaciones, { as: "idEstado_tb_estado_penalizacione", foreignKey: "idEstado"});
  tb_estado_penalizaciones.hasMany(tb_penalizacion_sanciones, { as: "tb_penalizacion_sanciones", foreignKey: "idEstado"});
  tb_tabla_sanciones.belongsTo(tb_estado_penalizaciones, { as: "idEstado_tb_estado_penalizacione", foreignKey: "idEstado"});
  tb_estado_penalizaciones.hasMany(tb_tabla_sanciones, { as: "tb_tabla_sanciones", foreignKey: "idEstado"});
  tb_tabla_sanciones_sim.belongsTo(tb_estado_penalizaciones, { as: "idEstado_tb_estado_penalizacione", foreignKey: "idEstado"});
  tb_estado_penalizaciones.hasMany(tb_tabla_sanciones_sim, { as: "tb_tabla_sanciones_sims", foreignKey: "idEstado"});
  tb_tipo_penalizacion.belongsTo(tb_estado_penalizaciones, { as: "idEstado_tb_estado_penalizacione", foreignKey: "idEstado"});
  tb_estado_penalizaciones.hasMany(tb_tipo_penalizacion, { as: "tb_tipo_penalizacions", foreignKey: "idEstado"});
  tb_eventos_preclasificatorio.belongsTo(tb_estado_preclasificatorios, { as: "idEstado_tb_estado_preclasificatorio", foreignKey: "idEstado"});
  tb_estado_preclasificatorios.hasMany(tb_eventos_preclasificatorio, { as: "tb_eventos_preclasificatorios", foreignKey: "idEstado"});
  tb_info_preclasificatorios.belongsTo(tb_estado_preclasificatorios, { as: "idEstado_tb_estado_preclasificatorio", foreignKey: "idEstado"});
  tb_estado_preclasificatorios.hasMany(tb_info_preclasificatorios, { as: "tb_info_preclasificatorios", foreignKey: "idEstado"});
  tb_reportes_comisarios.belongsTo(tb_estado_reportes, { as: "idEstadoReporte_tb_estado_reporte", foreignKey: "idEstadoReporte"});
  tb_estado_reportes.hasMany(tb_reportes_comisarios, { as: "tb_reportes_comisarios", foreignKey: "idEstadoReporte"});
  tb_torneos.belongsTo(tb_estado_torneos, { as: "idEstadoTorneo_tb_estado_torneo", foreignKey: "idEstadoTorneo"});
  tb_estado_torneos.hasMany(tb_torneos, { as: "tb_torneos", foreignKey: "idEstadoTorneo"});
  tb_resultados_preclasificatorio.belongsTo(tb_eventos_preclasificatorio, { as: "idEventoPreclasificatorio_tb_eventos_preclasificatorio", foreignKey: "idEventoPreclasificatorio"});
  tb_eventos_preclasificatorio.hasMany(tb_resultados_preclasificatorio, { as: "tb_resultados_preclasificatorios", foreignKey: "idEventoPreclasificatorio"});
  tb_sim_data_sesion.belongsTo(tb_eventos_preclasificatorio, { as: "idPreclasificatorio_tb_eventos_preclasificatorio", foreignKey: "idPreclasificatorio"});
  tb_eventos_preclasificatorio.hasMany(tb_sim_data_sesion, { as: "tb_sim_data_sesions", foreignKey: "idPreclasificatorio"});
  tb_calendario.belongsTo(tb_formato_carrera, { as: "idFormatoCarrera_tb_formato_carrera", foreignKey: "idFormatoCarrera"});
  tb_formato_carrera.hasMany(tb_calendario, { as: "tb_calendarios", foreignKey: "idFormatoCarrera"});
  tb_conceptos_comisarios.belongsTo(tb_gravedad_sancion, { as: "idGravedadPropuesta_tb_gravedad_sancion", foreignKey: "idGravedadPropuesta"});
  tb_gravedad_sancion.hasMany(tb_conceptos_comisarios, { as: "tb_conceptos_comisarios", foreignKey: "idGravedadPropuesta"});
  tb_penalizacion_sanciones.belongsTo(tb_gravedad_sancion, { as: "idGravedad_tb_gravedad_sancion", foreignKey: "idGravedad"});
  tb_gravedad_sancion.hasMany(tb_penalizacion_sanciones, { as: "tb_penalizacion_sanciones", foreignKey: "idGravedad"});
  tb_ident_pos_sim_preq.belongsTo(tb_ident_pos, { as: "idIdentPos_tb_ident_po", foreignKey: "idIdentPos"});
  tb_ident_pos.hasMany(tb_ident_pos_sim_preq, { as: "tb_ident_pos_sim_preqs", foreignKey: "idIdentPos"});
  tb_puntos.belongsTo(tb_ident_pos, { as: "idIdentPos_tb_ident_po", foreignKey: "idIdentPos"});
  tb_ident_pos.hasMany(tb_puntos, { as: "tb_puntos", foreignKey: "idIdentPos"});
  tb_resultados.belongsTo(tb_ident_pos, { as: "idPosicion_tb_ident_po", foreignKey: "idPosicion"});
  tb_ident_pos.hasMany(tb_resultados, { as: "tb_resultados", foreignKey: "idPosicion"});
  tb_involucrados_incidente_sim.belongsTo(tb_incidentes_sim, { as: "idIncidenteSim_tb_incidentes_sim", foreignKey: "idIncidenteSim"});
  tb_incidentes_sim.hasMany(tb_involucrados_incidente_sim, { as: "tb_involucrados_incidente_sims", foreignKey: "idIncidenteSim"});
  tb_cod_sim_preclasificatorio.belongsTo(tb_info_preclasificatorios, { as: "idPreclasificatorio_tb_info_preclasificatorio", foreignKey: "idPreclasificatorio"});
  tb_info_preclasificatorios.hasMany(tb_cod_sim_preclasificatorio, { as: "tb_cod_sim_preclasificatorios", foreignKey: "idPreclasificatorio"});
  tb_eventos_preclasificatorio.belongsTo(tb_info_preclasificatorios, { as: "idInfoPreclasificatorio_tb_info_preclasificatorio", foreignKey: "idInfoPreclasificatorio"});
  tb_info_preclasificatorios.hasMany(tb_eventos_preclasificatorio, { as: "tb_eventos_preclasificatorios", foreignKey: "idInfoPreclasificatorio"});
  tb_inscripcion_preclasificatorio.belongsTo(tb_info_preclasificatorios, { as: "idPreclasificatorio_tb_info_preclasificatorio", foreignKey: "idPreclasificatorio"});
  tb_info_preclasificatorios.hasMany(tb_inscripcion_preclasificatorio, { as: "tb_inscripcion_preclasificatorios", foreignKey: "idPreclasificatorio"});
  tb_opcion_preclasificatorios_torneo.belongsTo(tb_info_preclasificatorios, { as: "idPreclasificatorio_tb_info_preclasificatorio", foreignKey: "idPreclasificatorio"});
  tb_info_preclasificatorios.hasMany(tb_opcion_preclasificatorios_torneo, { as: "tb_opcion_preclasificatorios_torneos", foreignKey: "idPreclasificatorio"});
  tb_resultados_preclasificatorio.belongsTo(tb_inscripcion_preclasificatorio, { as: "idInscripcionPreclasficatorio_tb_inscripcion_preclasificatorio", foreignKey: "idInscripcionPreclasficatorio"});
  tb_inscripcion_preclasificatorio.hasMany(tb_resultados_preclasificatorio, { as: "tb_resultados_preclasificatorios", foreignKey: "idInscripcionPreclasficatorio"});
  tb_divisiones_pilotos.belongsTo(tb_inscripciones, { as: "idInscripcion_tb_inscripcione", foreignKey: "idInscripcion"});
  tb_inscripciones.hasMany(tb_divisiones_pilotos, { as: "tb_divisiones_pilotos", foreignKey: "idInscripcion"});
  tb_resultados.belongsTo(tb_inscripciones, { as: "idInscripcion_tb_inscripcione", foreignKey: "idInscripcion"});
  tb_inscripciones.hasMany(tb_resultados, { as: "tb_resultados", foreignKey: "idInscripcion"});
  tb_descargos_involucrados.belongsTo(tb_involucrados_sanciones, { as: "idInvolucradoSancion_tb_involucrados_sancione", foreignKey: "idInvolucradoSancion"});
  tb_involucrados_sanciones.hasMany(tb_descargos_involucrados, { as: "tb_descargos_involucrados", foreignKey: "idInvolucradoSancion"});
  tb_evidencias_reportes.belongsTo(tb_involucrados_sanciones, { as: "idInvolucradoSancion_tb_involucrados_sancione", foreignKey: "idInvolucradoSancion"});
  tb_involucrados_sanciones.hasMany(tb_evidencias_reportes, { as: "tb_evidencias_reportes", foreignKey: "idInvolucradoSancion"});
  tb_pilotos_penalizados.belongsTo(tb_involucrados_sanciones, { as: "idInvolucradoSancion_tb_involucrados_sancione", foreignKey: "idInvolucradoSancion"});
  tb_involucrados_sanciones.hasMany(tb_pilotos_penalizados, { as: "tb_pilotos_penalizados", foreignKey: "idInvolucradoSancion"});
  tb_paises.belongsTo(tb_ligas, { as: "idLigaAdicional_tb_liga", foreignKey: "idLigaAdicional"});
  tb_ligas.hasMany(tb_paises, { as: "tb_paises", foreignKey: "idLigaAdicional"});
  tb_pilotos_liga.belongsTo(tb_ligas, { as: "idLiga_tb_liga", foreignKey: "idLiga"});
  tb_ligas.hasMany(tb_pilotos_liga, { as: "tb_pilotos_ligas", foreignKey: "idLiga"});
  tb_torneos.belongsTo(tb_ligas, { as: "idLiga_tb_liga", foreignKey: "idLiga"});
  tb_ligas.hasMany(tb_torneos, { as: "tb_torneos", foreignKey: "idLiga"});
  tb_coches.belongsTo(tb_marcas_coches, { as: "idMarca_tb_marcas_coch", foreignKey: "idMarca"});
  tb_marcas_coches.hasMany(tb_coches, { as: "tb_coches", foreignKey: "idMarca"});
  tb_torneos.belongsTo(tb_marcas_coches, { as: "idMarcaCochePermitida_tb_marcas_coch", foreignKey: "idMarcaCochePermitida"});
  tb_marcas_coches.hasMany(tb_torneos, { as: "tb_torneos", foreignKey: "idMarcaCochePermitida"});
  tb_tipo_mando.belongsTo(tb_marcas_mando, { as: "idMarca_tb_marcas_mando", foreignKey: "idMarca"});
  tb_marcas_mando.hasMany(tb_tipo_mando, { as: "tb_tipo_mandos", foreignKey: "idMarca"});
  tb_neumaticos_sim.belongsTo(tb_neumaticos, { as: "idNeumaticos_tb_neumatico", foreignKey: "idNeumaticos"});
  tb_neumaticos.hasMany(tb_neumaticos_sim, { as: "tb_neumaticos_sims", foreignKey: "idNeumaticos"});
  tb_grupo_coches_personalizado.belongsTo(tb_nombre_grupo_coches_personalizado, { as: "idNombreGrupo_tb_nombre_grupo_coches_personalizado", foreignKey: "idNombreGrupo"});
  tb_nombre_grupo_coches_personalizado.hasMany(tb_grupo_coches_personalizado, { as: "tb_grupo_coches_personalizados", foreignKey: "idNombreGrupo"});
  tb_torneos.belongsTo(tb_nombre_grupo_coches_personalizado, { as: "idGrupoCochePersonalizado_tb_nombre_grupo_coches_personalizado", foreignKey: "idGrupoCochePersonalizado"});
  tb_nombre_grupo_coches_personalizado.hasMany(tb_torneos, { as: "tb_torneos", foreignKey: "idGrupoCochePersonalizado"});
  tb_grupo_equipos.belongsTo(tb_nombre_grupo_equipos, { as: "idNombre_tb_nombre_grupo_equipo", foreignKey: "idNombre"});
  tb_nombre_grupo_equipos.hasMany(tb_grupo_equipos, { as: "tb_grupo_equipos", foreignKey: "idNombre"});
  tb_torneos.belongsTo(tb_nombre_grupo_equipos, { as: "idGrupoEquipoPersonalizado_tb_nombre_grupo_equipo", foreignKey: "idGrupoEquipoPersonalizado"});
  tb_nombre_grupo_equipos.hasMany(tb_torneos, { as: "tb_torneos", foreignKey: "idGrupoEquipoPersonalizado"});
  tb_inscripciones.belongsTo(tb_opciones_respuesta, { as: "idRespuesta_tb_opciones_respuestum", foreignKey: "idRespuesta"});
  tb_opciones_respuesta.hasMany(tb_inscripciones, { as: "tb_inscripciones", foreignKey: "idRespuesta"});
  tb_pilotos.belongsTo(tb_paises, { as: "idPaisResidencia_tb_paise", foreignKey: "idPaisResidencia"});
  tb_paises.hasMany(tb_pilotos, { as: "tb_pilotos", foreignKey: "idPaisResidencia"});
  tb_pilotos.belongsTo(tb_paises, { as: "idNacionalidad_tb_paise", foreignKey: "idNacionalidad"});
  tb_paises.hasMany(tb_pilotos, { as: "idNacionalidad_tb_pilotos", foreignKey: "idNacionalidad"});
  tb_pistas.belongsTo(tb_paises, { as: "idPais_tb_paise", foreignKey: "idPais"});
  tb_paises.hasMany(tb_pistas, { as: "tb_pista", foreignKey: "idPais"});
  tb_pilotos_penalizados.belongsTo(tb_penalizacion_sanciones, { as: "idPenalizacion_tb_penalizacion_sancione", foreignKey: "idPenalizacion"});
  tb_penalizacion_sanciones.hasMany(tb_pilotos_penalizados, { as: "tb_pilotos_penalizados", foreignKey: "idPenalizacion"});
  tb_inscripciones.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_inscripciones, { as: "tb_inscripciones", foreignKey: "idPiloto"});
  tb_involucrados_sanciones.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_involucrados_sanciones, { as: "tb_involucrados_sanciones", foreignKey: "idPiloto"});
  tb_pilotos_id_sim.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_pilotos_id_sim, { as: "tb_pilotos_id_sims", foreignKey: "idPiloto"});
  tb_pilotos_liga.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_pilotos_liga, { as: "tb_pilotos_ligas", foreignKey: "idPiloto"});
  tb_repeticiones.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_repeticiones, { as: "tb_repeticiones", foreignKey: "idPiloto"});
  tb_resultados.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_resultados, { as: "tb_resultados", foreignKey: "idPiloto"});
  tb_roles_pilotos.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_roles_pilotos, { as: "tb_roles_pilotos", foreignKey: "idPiloto"});
  tb_inscripcion_preclasificatorio.belongsTo(tb_pilotos_id_sim, { as: "idSimIdPiloto_tb_pilotos_id_sim", foreignKey: "idSimIdPiloto"});
  tb_pilotos_id_sim.hasMany(tb_inscripcion_preclasificatorio, { as: "tb_inscripcion_preclasificatorios", foreignKey: "idSimIdPiloto"});
  tb_inscripciones.belongsTo(tb_pilotos_id_sim, { as: "idPilotoIdSim_tb_pilotos_id_sim", foreignKey: "idPilotoIdSim"});
  tb_pilotos_id_sim.hasMany(tb_inscripciones, { as: "tb_inscripciones", foreignKey: "idPilotoIdSim"});
  tb_pistas_variantes.belongsTo(tb_pistas, { as: "idPistaPrincipal_tb_pista", foreignKey: "idPistaPrincipal"});
  tb_pistas.hasMany(tb_pistas_variantes, { as: "tb_pistas_variantes", foreignKey: "idPistaPrincipal"});
  tb_calendario.belongsTo(tb_pistas_sim, { as: "idPista_tb_pistas_sim", foreignKey: "idPista"});
  tb_pistas_sim.hasMany(tb_calendario, { as: "tb_calendarios", foreignKey: "idPista"});
  tb_eventos_preclasificatorio.belongsTo(tb_pistas_sim, { as: "idPistaSim_tb_pistas_sim", foreignKey: "idPistaSim"});
  tb_pistas_sim.hasMany(tb_eventos_preclasificatorio, { as: "tb_eventos_preclasificatorios", foreignKey: "idPistaSim"});
  tb_pistas_sim.belongsTo(tb_pistas_variantes, { as: "idPistaVariante_tb_pistas_variante", foreignKey: "idPistaVariante"});
  tb_pistas_variantes.hasMany(tb_pistas_sim, { as: "tb_pistas_sims", foreignKey: "idPistaVariante"});
  tb_sim_plat_codplat.belongsTo(tb_plataforma, { as: "idPlataforma_tb_plataforma", foreignKey: "idPlataforma"});
  tb_plataforma.hasMany(tb_sim_plat_codplat, { as: "tb_sim_plat_codplats", foreignKey: "idPlataforma"});
  tb_sim_version.belongsTo(tb_plataforma, { as: "idPlataforma_tb_plataforma", foreignKey: "idPlataforma"});
  tb_plataforma.hasMany(tb_sim_version, { as: "tb_sim_versions", foreignKey: "idPlataforma"});
  tb_opciones_respuesta.belongsTo(tb_pregunta_inscripcion, { as: "idPregunta_tb_pregunta_inscripcion", foreignKey: "idPregunta"});
  tb_pregunta_inscripcion.hasMany(tb_opciones_respuesta, { as: "tb_opciones_respuesta", foreignKey: "idPregunta"});
  tb_torneos.belongsTo(tb_pregunta_inscripcion, { as: "idPreguntaInscripcion_tb_pregunta_inscripcion", foreignKey: "idPreguntaInscripcion"});
  tb_pregunta_inscripcion.hasMany(tb_torneos, { as: "tb_torneos", foreignKey: "idPreguntaInscripcion"});
  tb_reparto_puntos.belongsTo(tb_puntos, { as: "idPuntos_tb_punto", foreignKey: "idPuntos"});
  tb_puntos.hasMany(tb_reparto_puntos, { as: "tb_reparto_puntos", foreignKey: "idPuntos"});
  tb_conceptos_comisarios.belongsTo(tb_reportes_comisarios, { as: "idReporte_tb_reportes_comisario", foreignKey: "idReporte"});
  tb_reportes_comisarios.hasMany(tb_conceptos_comisarios, { as: "tb_conceptos_comisarios", foreignKey: "idReporte"});
  tb_involucrados_sanciones.belongsTo(tb_reportes_comisarios, { as: "idReporte_tb_reportes_comisario", foreignKey: "idReporte"});
  tb_reportes_comisarios.hasMany(tb_involucrados_sanciones, { as: "tb_involucrados_sanciones", foreignKey: "idReporte"});
  tb_reparto_puntos.belongsTo(tb_resultados, { as: "idResultado_tb_resultado", foreignKey: "idResultado"});
  tb_resultados.hasMany(tb_reparto_puntos, { as: "tb_reparto_puntos", foreignKey: "idResultado"});
  tb_involucrados_sanciones.belongsTo(tb_rol_involucrados, { as: "idRolInvolucrado_tb_rol_involucrado", foreignKey: "idRolInvolucrado"});
  tb_rol_involucrados.hasMany(tb_involucrados_sanciones, { as: "tb_involucrados_sanciones", foreignKey: "idRolInvolucrado"});
  tb_roles_pilotos.belongsTo(tb_roles, { as: "idRol_tb_role", foreignKey: "idRol"});
  tb_roles.hasMany(tb_roles_pilotos, { as: "tb_roles_pilotos", foreignKey: "idRol"});
  tb_asignacion_comisario.belongsTo(tb_roles_pilotos, { as: "idRolPilotoComisario_tb_roles_piloto", foreignKey: "idRolPilotoComisario"});
  tb_roles_pilotos.hasMany(tb_asignacion_comisario, { as: "tb_asignacion_comisarios", foreignKey: "idRolPilotoComisario"});
  tb_sesiones_sim.belongsTo(tb_sesiones, { as: "idSesion_tb_sesione", foreignKey: "idSesion"});
  tb_sesiones.hasMany(tb_sesiones_sim, { as: "tb_sesiones_sims", foreignKey: "idSesion"});
  tb_incidentes_sim.belongsTo(tb_sim_data_sesion, { as: "idSimDataSesion_tb_sim_data_sesion", foreignKey: "idSimDataSesion"});
  tb_sim_data_sesion.hasMany(tb_incidentes_sim, { as: "tb_incidentes_sims", foreignKey: "idSimDataSesion"});
  tb_resultados_preclasificatorio.belongsTo(tb_sim_data_sesion, { as: "idSimDataSesion_tb_sim_data_sesion", foreignKey: "idSimDataSesion"});
  tb_sim_data_sesion.hasMany(tb_resultados_preclasificatorio, { as: "tb_resultados_preclasificatorios", foreignKey: "idSimDataSesion"});
  tb_resultados_sim.belongsTo(tb_sim_data_sesion, { as: "idSimDataSesion_tb_sim_data_sesion", foreignKey: "idSimDataSesion"});
  tb_sim_data_sesion.hasMany(tb_resultados_sim, { as: "tb_resultados_sims", foreignKey: "idSimDataSesion"});
  tb_cod_sim_preclasificatorio.belongsTo(tb_sim_plat_codplat, { as: "idSimPlatCodPlat_tb_sim_plat_codplat", foreignKey: "idSimPlatCodPlat"});
  tb_sim_plat_codplat.hasMany(tb_cod_sim_preclasificatorio, { as: "tb_cod_sim_preclasificatorios", foreignKey: "idSimPlatCodPlat"});
  tb_pilotos_id_sim.belongsTo(tb_sim_plat_codplat, { as: "idSimCodPlataforma_tb_sim_plat_codplat", foreignKey: "idSimCodPlataforma"});
  tb_sim_plat_codplat.hasMany(tb_pilotos_id_sim, { as: "tb_pilotos_id_sims", foreignKey: "idSimCodPlataforma"});
  tb_simcodplat_torneo.belongsTo(tb_sim_plat_codplat, { as: "idSimCodPlat_tb_sim_plat_codplat", foreignKey: "idSimCodPlat"});
  tb_sim_plat_codplat.hasMany(tb_simcodplat_torneo, { as: "tb_simcodplat_torneos", foreignKey: "idSimCodPlat"});
  tb_resultados.belongsTo(tb_sim_version, { as: "idSimVersion_tb_sim_version", foreignKey: "idSimVersion"});
  tb_sim_version.hasMany(tb_resultados, { as: "tb_resultados", foreignKey: "idSimVersion"});
  tb_coches_sim.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_coches_sim, { as: "tb_coches_sims", foreignKey: "idSimulador"});
  tb_equipos_sim.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_equipos_sim, { as: "tb_equipos_sims", foreignKey: "idSimulador"});
  tb_eventos_preclasificatorio.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_eventos_preclasificatorio, { as: "tb_eventos_preclasificatorios", foreignKey: "idSimulador"});
  tb_ident_pos_sim_preq.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_ident_pos_sim_preq, { as: "tb_ident_pos_sim_preqs", foreignKey: "idSimulador"});
  tb_neumaticos_sim.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_neumaticos_sim, { as: "tb_neumaticos_sims", foreignKey: "idSimulador"});
  tb_nombre_grupo_coches_personalizado.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_nombre_grupo_coches_personalizado, { as: "tb_nombre_grupo_coches_personalizados", foreignKey: "idSimulador"});
  tb_nombre_grupo_equipos.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_nombre_grupo_equipos, { as: "tb_nombre_grupo_equipos", foreignKey: "idSimulador"});
  tb_pistas_sim.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_pistas_sim, { as: "tb_pistas_sims", foreignKey: "idSimulador"});
  tb_sesiones_sim.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_sesiones_sim, { as: "tb_sesiones_sims", foreignKey: "idSimulador"});
  tb_sim_data_sesion.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_sim_data_sesion, { as: "tb_sim_data_sesions", foreignKey: "idSimulador"});
  tb_sim_plat_codplat.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_sim_plat_codplat, { as: "tb_sim_plat_codplats", foreignKey: "idSimulador"});
  tb_sim_version.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_sim_version, { as: "tb_sim_versions", foreignKey: "idSimulador"});
  tb_tabla_sanciones_sim.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_tabla_sanciones_sim, { as: "tb_tabla_sanciones_sims", foreignKey: "idSimulador"});
  tb_calendario.belongsTo(tb_sistema_puntos, { as: "idSistemaPuntos_tb_sistema_punto", foreignKey: "idSistemaPuntos"});
  tb_sistema_puntos.hasMany(tb_calendario, { as: "tb_calendarios", foreignKey: "idSistemaPuntos"});
  tb_puntos.belongsTo(tb_sistema_puntos, { as: "idSistemaPuntos_tb_sistema_punto", foreignKey: "idSistemaPuntos"});
  tb_sistema_puntos.hasMany(tb_puntos, { as: "tb_puntos", foreignKey: "idSistemaPuntos"});
  tb_conceptos_comisarios.belongsTo(tb_tabla_sanciones, { as: "idSancionPropuesta_tb_tabla_sancione", foreignKey: "idSancionPropuesta"});
  tb_tabla_sanciones.hasMany(tb_conceptos_comisarios, { as: "tb_conceptos_comisarios", foreignKey: "idSancionPropuesta"});
  tb_penalizacion_sanciones.belongsTo(tb_tabla_sanciones, { as: "idSancion_tb_tabla_sancione", foreignKey: "idSancion"});
  tb_tabla_sanciones.hasMany(tb_penalizacion_sanciones, { as: "tb_penalizacion_sanciones", foreignKey: "idSancion"});
  tb_tabla_sanciones_sim.belongsTo(tb_tabla_sanciones, { as: "idSancion_tb_tabla_sancione", foreignKey: "idSancion"});
  tb_tabla_sanciones.hasMany(tb_tabla_sanciones_sim, { as: "tb_tabla_sanciones_sims", foreignKey: "idSancion"});
  tb_pilotos.belongsTo(tb_tipo_mando, { as: "idMando_tb_tipo_mando", foreignKey: "idMando"});
  tb_tipo_mando.hasMany(tb_pilotos, { as: "tb_pilotos", foreignKey: "idMando"});
  tb_penalizacion_sanciones.belongsTo(tb_tipo_penalizacion, { as: "idTipoPenalizacion_tb_tipo_penalizacion", foreignKey: "idTipoPenalizacion"});
  tb_tipo_penalizacion.hasMany(tb_penalizacion_sanciones, { as: "tb_penalizacion_sanciones", foreignKey: "idTipoPenalizacion"});
  tb_divisiones.belongsTo(tb_tipo_piloto, { as: "idTipoPred_tb_tipo_piloto", foreignKey: "idTipoPred"});
  tb_tipo_piloto.hasMany(tb_divisiones, { as: "tb_divisiones", foreignKey: "idTipoPred"});
  tb_divisiones_pilotos.belongsTo(tb_tipo_piloto, { as: "idTipoPiloto_tb_tipo_piloto", foreignKey: "idTipoPiloto"});
  tb_tipo_piloto.hasMany(tb_divisiones_pilotos, { as: "tb_divisiones_pilotos", foreignKey: "idTipoPiloto"});
  tb_parrilla_calendario.belongsTo(tb_tipo_piloto, { as: "idTipoPiloto_tb_tipo_piloto", foreignKey: "idTipoPiloto"});
  tb_tipo_piloto.hasMany(tb_parrilla_calendario, { as: "tb_parrilla_calendarios", foreignKey: "idTipoPiloto"});
  tb_torneos.belongsTo(tb_tipo_torneo, { as: "idTipoTorneo_tb_tipo_torneo", foreignKey: "idTipoTorneo"});
  tb_tipo_torneo.hasMany(tb_torneos, { as: "tb_torneos", foreignKey: "idTipoTorneo"});
  tb_divisiones.belongsTo(tb_torneos, { as: "idTorneo_tb_torneo", foreignKey: "idTorneo"});
  tb_torneos.hasMany(tb_divisiones, { as: "tb_divisiones", foreignKey: "idTorneo"});
  tb_inscripciones.belongsTo(tb_torneos, { as: "idTorneo_tb_torneo", foreignKey: "idTorneo"});
  tb_torneos.hasMany(tb_inscripciones, { as: "tb_inscripciones", foreignKey: "idTorneo"});
  tb_opcion_preclasificatorios_torneo.belongsTo(tb_torneos, { as: "idTorneo_tb_torneo", foreignKey: "idTorneo"});
  tb_torneos.hasMany(tb_opcion_preclasificatorios_torneo, { as: "tb_opcion_preclasificatorios_torneos", foreignKey: "idTorneo"});
  tb_simcodplat_torneo.belongsTo(tb_torneos, { as: "idTorneo_tb_torneo", foreignKey: "idTorneo"});
  tb_torneos.hasMany(tb_simcodplat_torneo, { as: "tb_simcodplat_torneos", foreignKey: "idTorneo"});

  return {
    tb_asignacion_comisario,
    tb_calendario,
    tb_cat_coches,
    tb_cat_piloto,
    tb_coches,
    tb_coches_sim,
    tb_cod_plataforma,
    tb_cod_sim_preclasificatorio,
    tb_codificacion_divisiones,
    tb_codificacion_resultados,
    tb_conceptos_comisarios,
    tb_contenido_grafico,
    tb_descargos_involucrados,
    tb_divisiones,
    tb_divisiones_pilotos,
    tb_equipos,
    tb_equipos_sim,
    tb_estado_carrera,
    tb_estado_general,
    tb_estado_inscripcion,
    tb_estado_penalizaciones,
    tb_estado_preclasificatorios,
    tb_estado_reportes,
    tb_estado_torneos,
    tb_etapas_calendario,
    tb_eventos_preclasificatorio,
    tb_evidencias_reportes,
    tb_formato_carrera,
    tb_gravedad_sancion,
    tb_grupo_coches_personalizado,
    tb_grupo_equipos,
    tb_ident_pos,
    tb_ident_pos_sim_preq,
    tb_incidentes_sim,
    tb_info_preclasificatorios,
    tb_inscripcion_preclasificatorio,
    tb_inscripciones,
    tb_involucrados_incidente_sim,
    tb_involucrados_sanciones,
    tb_ligas,
    tb_marcas_coches,
    tb_marcas_mando,
    tb_neumaticos,
    tb_neumaticos_sim,
    tb_nombre_grupo_coches_personalizado,
    tb_nombre_grupo_equipos,
    tb_opcion_preclasificatorios_torneo,
    tb_opciones_respuesta,
    tb_paises,
    tb_parrilla_calendario,
    tb_penalizacion_sanciones,
    tb_pilotos,
    tb_pilotos_id_sim,
    tb_pilotos_liga,
    tb_pilotos_penalizados,
    tb_pistas,
    tb_pistas_sim,
    tb_pistas_variantes,
    tb_plataforma,
    tb_pregunta_inscripcion,
    tb_puntos,
    tb_reparto_puntos,
    tb_repeticiones,
    tb_reportes_comisarios,
    tb_resultados,
    tb_resultados_preclasificatorio,
    tb_resultados_sim,
    tb_rol_involucrados,
    tb_roles,
    tb_roles_pilotos,
    tb_sesiones,
    tb_sesiones_sim,
    tb_sim_data_sesion,
    tb_sim_plat_codplat,
    tb_sim_version,
    tb_simcodplat_torneo,
    tb_simulador,
    tb_sistema_puntos,
    tb_tabla_sanciones,
    tb_tabla_sanciones_sim,
    tb_tipo_mando,
    tb_tipo_penalizacion,
    tb_tipo_piloto,
    tb_tipo_torneo,
    tb_torneos,
  };
}


module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
