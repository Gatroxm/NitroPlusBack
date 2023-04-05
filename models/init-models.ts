
import { DataTypes } from "sequelize";
const connection = require("../db/connection");
var _tb_reglas_torneos = require("./tb_reglas_torneos");
var _tb_analisis_stint = require("./tb_analisis_stint");
var _tb_asignacion_comisario = require("./tb_asignacion_comisario");
var _tb_asignacion_tipo_tickets = require("./tb_asignacion_tipo_tickets");
var _tb_banner_patrocinadores = require("./tb_banner_patrocinadores");
var _tb_banners_menu = require("./tb_banners_menu");
var _tb_calendario_clasificatorios = require("./tb_calendario_clasificatorios");
var _tb_calendario = require("./tb_calendario");
var _tb_cat_coches = require("./tb_cat_coches");
var _tb_cat_piloto = require("./tb_cat_piloto");
var _tb_categoria_elo = require("./tb_categoria_elo");
var _tb_coches = require("./tb_coches");
var _tb_coches_sim = require("./tb_coches_sim");
var _tb_cod_plataforma = require("./tb_cod_plataforma");
var _tb_cod_sim_clasificatorio = require("./tb_cod_sim_clasificatorio");
var _tb_codificacion_divisiones = require("./tb_codificacion_divisiones");
var _tb_codificacion_resultados = require("./tb_codificacion_resultados");
var _tb_comunicados = require("./tb_comunicados");
var _tb_conceptos_comisarios = require("./tb_conceptos_comisarios");
var _tb_contenido_grafico = require("./tb_contenido_grafico");
var _tb_descargos_involucrados = require("./tb_descargos_involucrados");
var _tb_divisiones = require("./tb_divisiones");
var _tb_divisiones_pilotos = require("./tb_divisiones_pilotos");
var _tb_elo_actual = require("./tb_elo_actual");
var _tb_elo_variacion = require("./tb_elo_variacion");
var _tb_equipos = require("./tb_equipos");
var _tb_equipos_sim = require("./tb_equipos_sim");
var _tb_estado_carrera = require("./tb_estado_carrera");
var _tb_estado_clasificatorios = require("./tb_estado_clasificatorios");
var _tb_estado_general = require("./tb_estado_general");
var _tb_estado_inscripcion = require("./tb_estado_inscripcion");
var _tb_estado_penalizaciones = require("./tb_estado_penalizaciones");
var _tb_estado_reportes = require("./tb_estado_reportes");
var _tb_estado_ticket = require("./tb_estado_ticket");
var _tb_estado_torneos = require("./tb_estado_torneos");
var _tb_etapas_calendario = require("./tb_etapas_calendario");
var _tb_eventos_clasificatorios = require("./tb_eventos_clasificatorios");
var _tb_evidencias_reportes = require("./tb_evidencias_reportes");
var _tb_formato_carrera = require("./tb_formato_carrera");
var _tb_fotos_pilotos = require("./tb_fotos_pilotos");
var _tb_gravedad_sancion = require("./tb_gravedad_sancion");
var _tb_grupo_coches_personalizado = require("./tb_grupo_coches_personalizado");
var _tb_grupo_equipos = require("./tb_grupo_equipos");
var _tb_historial_vueltas = require("./tb_historial_vueltas");
var _tb_ident_pos = require("./tb_ident_pos");
var _tb_ident_pos_sim_preq = require("./tb_ident_pos_sim_preq");
var _tb_indicador_cumplimiento_torneo = require("./tb_indicador_cumplimiento_torneo");
var _tb_info_calculo_resultados = require("./tb_info_calculo_resultados");
var _tb_info_clasificatorios = require("./tb_info_clasificatorios");
var _tb_inscripcion_clasificatorios = require("./tb_inscripcion_clasificatorios");
var _tb_inscripciones = require("./tb_inscripciones");
var _tb_insignias_discord = require("./tb_insignias_discord");
var _tb_insignias_pilotos = require("./tb_insignias_pilotos");
var _tb_involucrados_sanciones = require("./tb_involucrados_sanciones");
var _tb_licencias_pilotos = require("./tb_licencias_pilotos");
var _tb_licencias_variacion = require("./tb_licencias_variacion");
var _tb_ligas = require("./tb_ligas");
var _tb_marcas_coches = require("./tb_marcas_coches");
var _tb_marcas_mando = require("./tb_marcas_mando");
var _tb_mensajes_ticket = require("./tb_mensajes_ticket");
var _tb_metodologias_clasificatorio = require("./tb_metodologias_clasificatorio");
var _tb_neumaticos = require("./tb_neumaticos");
var _tb_neumaticos_sim = require("./tb_neumaticos_sim");
var _tb_nombre_grupo_coches_personalizado = require("./tb_nombre_grupo_coches_personalizado");
var _tb_nombre_grupo_equipos = require("./tb_nombre_grupo_equipos");
var _tb_notificaciones = require("./tb_notificaciones");
var _tb_notificaciones_discord = require("./tb_notificaciones_discord");
var _tb_opcion_clasificatorios_torneo = require("./tb_opcion_clasificatorios_torneo");
var _tb_opciones_respuesta = require("./tb_opciones_respuesta");
var _tb_orientacion_pista = require("./tb_orientacion_pista");
var _tb_paises = require("./tb_paises");
var _tb_parrilla_calendario = require("./tb_parrilla_calendario");
var _tb_participaciones = require("./tb_participaciones");
var _tb_penalizacion_sanciones = require("./tb_penalizacion_sanciones");
var _tb_pilotos = require("./tb_pilotos");
var _tb_pilotos_id_sim = require("./tb_pilotos_id_sim");
var _tb_pilotos_liga = require("./tb_pilotos_liga");
var _tb_pilotos_penalizados = require("./tb_pilotos_penalizados");
var _tb_pistas = require("./tb_pistas");
var _tb_pistas_sim = require("./tb_pistas_sim");
var _tb_pistas_variantes = require("./tb_pistas_variantes");
var _tb_plantillas_graficos = require("./tb_plantillas_graficos");
var _tb_plataforma = require("./tb_plataforma");
var _tb_pregunta_inscripcion = require("./tb_pregunta_inscripcion");
var _tb_puntos = require("./tb_puntos");
var _tb_records_pistas = require("./tb_records_pistas");
var _tb_records_por_piloto = require("./tb_records_por_piloto");
var _tb_reparto_puntos = require("./tb_reparto_puntos");
var _tb_repeticiones = require("./tb_repeticiones");
var _tb_reportes_comisarios = require("./tb_reportes_comisarios");
var _tb_resultados = require("./tb_resultados");
var _tb_resultados_clasificatorios = require("./tb_resultados_clasificatorios");
var _tb_resultados_eventos_clasificatorios = require("./tb_resultados_eventos_clasificatorios");
var _tb_resultados_subtramos = require("./tb_resultados_subtramos");
var _tb_rol_involucrados = require("./tb_rol_involucrados");
var _tb_roles = require("./tb_roles");
var _tb_roles_discord_pilotos = require("./tb_roles_discord_pilotos");
var _tb_roles_pilotos = require("./tb_roles_pilotos");
var _tb_sesiones = require("./tb_sesiones");
var _tb_sim_plat_codplat = require("./tb_sim_plat_codplat");
var _tb_sim_version = require("./tb_sim_version");
var _tb_simcodplat_torneo = require("./tb_simcodplat_torneo");
var _tb_simulador = require("./tb_simulador");
var _tb_sistema_puntos = require("./tb_sistema_puntos");
var _tb_sr_actual = require("./tb_sr_actual");
var _tb_sr_variacion = require("./tb_sr_variacion");
var _tb_subtramos = require("./tb_subtramos");
var _tb_tabla_posiciones = require("./tb_tabla_posiciones");
var _tb_tabla_sanciones = require("./tb_tabla_sanciones");
var _tb_tabla_sanciones_sim = require("./tb_tabla_sanciones_sim");
var _tb_tickets = require("./tb_tickets");
var _tb_tipo_fotos = require("./tb_tipo_fotos");
var _tb_tipo_licencias = require("./tb_tipo_licencias");
var _tb_tipo_mando = require("./tb_tipo_mando");
var _tb_tipo_notificacion = require("./tb_tipo_notificacion");
var _tb_tipo_penalizacion = require("./tb_tipo_penalizacion");
var _tb_tipo_piloto = require("./tb_tipo_piloto");
var _tb_tipo_tickets = require("./tb_tipo_tickets");
var _tb_tipo_torneo = require("./tb_tipo_torneo");
var _tb_tipo_variacion_rank = require("./tb_tipo_variacion_rank");
var _tb_tipos_graficos = require("./tb_tipos_graficos");
var _tb_tipos_transmisiones = require("./tb_tipos_transmisiones");
var _tb_torneos = require("./tb_torneos");
var _tb_webhooks_discord = require("./tb_webhooks_discord");


export const  initModels = (sequelize:any = connection.default) => {
  var tb_reglas_torneos = _tb_reglas_torneos(sequelize, DataTypes);
  var tb_analisis_stint = _tb_analisis_stint(sequelize, DataTypes);
  var tb_asignacion_comisario = _tb_asignacion_comisario(sequelize, DataTypes);
  var tb_asignacion_tipo_tickets = _tb_asignacion_tipo_tickets(sequelize, DataTypes);
  var tb_banner_patrocinadores = _tb_banner_patrocinadores(sequelize, DataTypes);
  var tb_banners_menu = _tb_banners_menu(sequelize, DataTypes);
  var tb_calendario_clasificatorios = _tb_calendario_clasificatorios(sequelize, DataTypes);
  var tb_calendario = _tb_calendario(sequelize, DataTypes);
  var tb_cat_coches = _tb_cat_coches(sequelize, DataTypes);
  var tb_cat_piloto = _tb_cat_piloto(sequelize, DataTypes);
  var tb_categoria_elo = _tb_categoria_elo(sequelize, DataTypes);
  var tb_coches = _tb_coches(sequelize, DataTypes);
  var tb_coches_sim = _tb_coches_sim(sequelize, DataTypes);
  var tb_cod_plataforma = _tb_cod_plataforma(sequelize, DataTypes);
  var tb_cod_sim_clasificatorio = _tb_cod_sim_clasificatorio(sequelize, DataTypes);
  var tb_codificacion_divisiones = _tb_codificacion_divisiones(sequelize, DataTypes);
  var tb_codificacion_resultados = _tb_codificacion_resultados(sequelize, DataTypes);
  var tb_comunicados = _tb_comunicados(sequelize, DataTypes);
  var tb_conceptos_comisarios = _tb_conceptos_comisarios(sequelize, DataTypes);
  var tb_contenido_grafico = _tb_contenido_grafico(sequelize, DataTypes);
  var tb_descargos_involucrados = _tb_descargos_involucrados(sequelize, DataTypes);
  var tb_divisiones = _tb_divisiones(sequelize, DataTypes);
  var tb_divisiones_pilotos = _tb_divisiones_pilotos(sequelize, DataTypes);
  var tb_elo_actual = _tb_elo_actual(sequelize, DataTypes);
  var tb_elo_variacion = _tb_elo_variacion(sequelize, DataTypes);
  var tb_equipos = _tb_equipos(sequelize, DataTypes);
  var tb_equipos_sim = _tb_equipos_sim(sequelize, DataTypes);
  var tb_estado_carrera = _tb_estado_carrera(sequelize, DataTypes);
  var tb_estado_clasificatorios = _tb_estado_clasificatorios(sequelize, DataTypes);
  var tb_estado_general = _tb_estado_general(sequelize, DataTypes);
  var tb_estado_inscripcion = _tb_estado_inscripcion(sequelize, DataTypes);
  var tb_estado_penalizaciones = _tb_estado_penalizaciones(sequelize, DataTypes);
  var tb_estado_reportes = _tb_estado_reportes(sequelize, DataTypes);
  var tb_estado_ticket = _tb_estado_ticket(sequelize, DataTypes);
  var tb_estado_torneos = _tb_estado_torneos(sequelize, DataTypes);
  var tb_etapas_calendario = _tb_etapas_calendario(sequelize, DataTypes);
  var tb_eventos_clasificatorios = _tb_eventos_clasificatorios(sequelize, DataTypes);
  var tb_evidencias_reportes = _tb_evidencias_reportes(sequelize, DataTypes);
  var tb_formato_carrera = _tb_formato_carrera(sequelize, DataTypes);
  var tb_fotos_pilotos = _tb_fotos_pilotos(sequelize, DataTypes);
  var tb_gravedad_sancion = _tb_gravedad_sancion(sequelize, DataTypes);
  var tb_grupo_coches_personalizado = _tb_grupo_coches_personalizado(sequelize, DataTypes);
  var tb_grupo_equipos = _tb_grupo_equipos(sequelize, DataTypes);
  var tb_historial_vueltas = _tb_historial_vueltas(sequelize, DataTypes);
  var tb_ident_pos = _tb_ident_pos(sequelize, DataTypes);
  var tb_ident_pos_sim_preq = _tb_ident_pos_sim_preq(sequelize, DataTypes);
  var tb_indicador_cumplimiento_torneo = _tb_indicador_cumplimiento_torneo(sequelize, DataTypes);
  var tb_info_calculo_resultados = _tb_info_calculo_resultados(sequelize, DataTypes);
  var tb_info_clasificatorios = _tb_info_clasificatorios(sequelize, DataTypes);
  var tb_inscripcion_clasificatorios = _tb_inscripcion_clasificatorios(sequelize, DataTypes);
  var tb_inscripciones = _tb_inscripciones(sequelize, DataTypes);
  var tb_insignias_discord = _tb_insignias_discord(sequelize, DataTypes);
  var tb_insignias_pilotos = _tb_insignias_pilotos(sequelize, DataTypes);
  var tb_involucrados_sanciones = _tb_involucrados_sanciones(sequelize, DataTypes);
  var tb_licencias_pilotos = _tb_licencias_pilotos(sequelize, DataTypes);
  var tb_licencias_variacion = _tb_licencias_variacion(sequelize, DataTypes);
  var tb_ligas = _tb_ligas(sequelize, DataTypes);
  var tb_marcas_coches = _tb_marcas_coches(sequelize, DataTypes);
  var tb_marcas_mando = _tb_marcas_mando(sequelize, DataTypes);
  var tb_mensajes_ticket = _tb_mensajes_ticket(sequelize, DataTypes);
  var tb_metodologias_clasificatorio = _tb_metodologias_clasificatorio(sequelize, DataTypes);
  var tb_neumaticos = _tb_neumaticos(sequelize, DataTypes);
  var tb_neumaticos_sim = _tb_neumaticos_sim(sequelize, DataTypes);
  var tb_nombre_grupo_coches_personalizado = _tb_nombre_grupo_coches_personalizado(sequelize, DataTypes);
  var tb_nombre_grupo_equipos = _tb_nombre_grupo_equipos(sequelize, DataTypes);
  var tb_notificaciones = _tb_notificaciones(sequelize, DataTypes);
  var tb_notificaciones_discord = _tb_notificaciones_discord(sequelize, DataTypes);
  var tb_opcion_clasificatorios_torneo = _tb_opcion_clasificatorios_torneo(sequelize, DataTypes);
  var tb_opciones_respuesta = _tb_opciones_respuesta(sequelize, DataTypes);
  var tb_orientacion_pista = _tb_orientacion_pista(sequelize, DataTypes);
  var tb_paises = _tb_paises(sequelize, DataTypes);
  var tb_parrilla_calendario = _tb_parrilla_calendario(sequelize, DataTypes);
  var tb_participaciones = _tb_participaciones(sequelize, DataTypes);
  var tb_penalizacion_sanciones = _tb_penalizacion_sanciones(sequelize, DataTypes);
  var tb_pilotos = _tb_pilotos(sequelize, DataTypes);
  var tb_pilotos_id_sim = _tb_pilotos_id_sim(sequelize, DataTypes);
  var tb_pilotos_liga = _tb_pilotos_liga(sequelize, DataTypes);
  var tb_pilotos_penalizados = _tb_pilotos_penalizados(sequelize, DataTypes);
  var tb_pistas = _tb_pistas(sequelize, DataTypes);
  var tb_pistas_sim = _tb_pistas_sim(sequelize, DataTypes);
  var tb_pistas_variantes = _tb_pistas_variantes(sequelize, DataTypes);
  var tb_plantillas_graficos = _tb_plantillas_graficos(sequelize, DataTypes);
  var tb_plataforma = _tb_plataforma(sequelize, DataTypes);
  var tb_pregunta_inscripcion = _tb_pregunta_inscripcion(sequelize, DataTypes);
  var tb_puntos = _tb_puntos(sequelize, DataTypes);
  var tb_records_pistas = _tb_records_pistas(sequelize, DataTypes);
  var tb_records_por_piloto = _tb_records_por_piloto(sequelize, DataTypes);
  var tb_reparto_puntos = _tb_reparto_puntos(sequelize, DataTypes);
  var tb_repeticiones = _tb_repeticiones(sequelize, DataTypes);
  var tb_reportes_comisarios = _tb_reportes_comisarios(sequelize, DataTypes);
  var tb_resultados = _tb_resultados(sequelize, DataTypes);
  var tb_resultados_clasificatorios = _tb_resultados_clasificatorios(sequelize, DataTypes);
  var tb_resultados_eventos_clasificatorios = _tb_resultados_eventos_clasificatorios(sequelize, DataTypes);
  var tb_resultados_subtramos = _tb_resultados_subtramos(sequelize, DataTypes);
  var tb_rol_involucrados = _tb_rol_involucrados(sequelize, DataTypes);
  var tb_roles = _tb_roles(sequelize, DataTypes);
  var tb_roles_discord_pilotos = _tb_roles_discord_pilotos(sequelize, DataTypes);
  var tb_roles_pilotos = _tb_roles_pilotos(sequelize, DataTypes);
  var tb_sesiones = _tb_sesiones(sequelize, DataTypes);
  var tb_sim_plat_codplat = _tb_sim_plat_codplat(sequelize, DataTypes);
  var tb_sim_version = _tb_sim_version(sequelize, DataTypes);
  var tb_simcodplat_torneo = _tb_simcodplat_torneo(sequelize, DataTypes);
  var tb_simulador = _tb_simulador(sequelize, DataTypes);
  var tb_sistema_puntos = _tb_sistema_puntos(sequelize, DataTypes);
  var tb_sr_actual = _tb_sr_actual(sequelize, DataTypes);
  var tb_sr_variacion = _tb_sr_variacion(sequelize, DataTypes);
  var tb_subtramos = _tb_subtramos(sequelize, DataTypes);
  var tb_tabla_posiciones = _tb_tabla_posiciones(sequelize, DataTypes);
  var tb_tabla_sanciones = _tb_tabla_sanciones(sequelize, DataTypes);
  var tb_tabla_sanciones_sim = _tb_tabla_sanciones_sim(sequelize, DataTypes);
  var tb_tickets = _tb_tickets(sequelize, DataTypes);
  var tb_tipo_fotos = _tb_tipo_fotos(sequelize, DataTypes);
  var tb_tipo_licencias = _tb_tipo_licencias(sequelize, DataTypes);
  var tb_tipo_mando = _tb_tipo_mando(sequelize, DataTypes);
  var tb_tipo_notificacion = _tb_tipo_notificacion(sequelize, DataTypes);
  var tb_tipo_penalizacion = _tb_tipo_penalizacion(sequelize, DataTypes);
  var tb_tipo_piloto = _tb_tipo_piloto(sequelize, DataTypes);
  var tb_tipo_tickets = _tb_tipo_tickets(sequelize, DataTypes);
  var tb_tipo_torneo = _tb_tipo_torneo(sequelize, DataTypes);
  var tb_tipo_variacion_rank = _tb_tipo_variacion_rank(sequelize, DataTypes);
  var tb_tipos_graficos = _tb_tipos_graficos(sequelize, DataTypes);
  var tb_tipos_transmisiones = _tb_tipos_transmisiones(sequelize, DataTypes);
  var tb_torneos = _tb_torneos(sequelize, DataTypes);
  var tb_webhooks_discord = _tb_webhooks_discord(sequelize, DataTypes);

  tb_conceptos_comisarios.belongsTo(tb_asignacion_comisario, { as: "idAsignacionComisario_tb_asignacion_comisario", foreignKey: "idAsignacionComisario"});
  tb_asignacion_comisario.hasMany(tb_conceptos_comisarios, { as: "tb_conceptos_comisarios", foreignKey: "idAsignacionComisario"});
  tb_pilotos_penalizados.belongsTo(tb_asignacion_comisario, { as: "idRolComisarioSancion_tb_asignacion_comisario", foreignKey: "idRolComisarioSancion"});
  tb_asignacion_comisario.hasMany(tb_pilotos_penalizados, { as: "tb_pilotos_penalizados", foreignKey: "idRolComisarioSancion"});
  tb_analisis_stint.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_analisis_stint, { as: "tb_analisis_stints", foreignKey: "idCalendario"});
  tb_banner_patrocinadores.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_banner_patrocinadores, { as: "tb_banner_patrocinadores", foreignKey: "idCalendario"});
  tb_comunicados.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_comunicados, { as: "tb_comunicados", foreignKey: "idCalendario"});
  tb_elo_variacion.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_elo_variacion, { as: "tb_elo_variacions", foreignKey: "idCalendario"});
  tb_etapas_calendario.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_etapas_calendario, { as: "tb_etapas_calendarios", foreignKey: "idCalendario"});
  tb_historial_vueltas.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_historial_vueltas, { as: "tb_historial_vuelta", foreignKey: "idCalendario"});
  tb_info_calculo_resultados.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_info_calculo_resultados, { as: "tb_info_calculo_resultados", foreignKey: "idCalendario"});
  tb_parrilla_calendario.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_parrilla_calendario, { as: "tb_parrilla_calendarios", foreignKey: "idCalendario"});
  tb_records_pistas.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_records_pistas, { as: "tb_records_pista", foreignKey: "idCalendario"});
  tb_records_por_piloto.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_records_por_piloto, { as: "tb_records_por_pilotos", foreignKey: "idCalendario"});
  tb_repeticiones.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_repeticiones, { as: "tb_repeticiones", foreignKey: "idCalendario"});
  tb_reportes_comisarios.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_reportes_comisarios, { as: "tb_reportes_comisarios", foreignKey: "idCalendario"});
  tb_resultados.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_resultados, { as: "tb_resultados", foreignKey: "idCalendario"});
  tb_sr_variacion.belongsTo(tb_calendario, { as: "idCalendario_tb_calendario", foreignKey: "idCalendario"});
  tb_calendario.hasMany(tb_sr_variacion, { as: "tb_sr_variacions", foreignKey: "idCalendario"});
  tb_analisis_stint.belongsTo(tb_cat_coches, { as: "idCategoriaCoche_tb_cat_coch", foreignKey: "idCategoriaCoche"});
  tb_cat_coches.hasMany(tb_analisis_stint, { as: "tb_analisis_stints", foreignKey: "idCategoriaCoche"});
  tb_coches.belongsTo(tb_cat_coches, { as: "idCategoria_tb_cat_coch", foreignKey: "idCategoria"});
  tb_cat_coches.hasMany(tb_coches, { as: "tb_coches", foreignKey: "idCategoria"});
  tb_historial_vueltas.belongsTo(tb_cat_coches, { as: "idCategoriaCoche_tb_cat_coch", foreignKey: "idCategoriaCoche"});
  tb_cat_coches.hasMany(tb_historial_vueltas, { as: "tb_historial_vuelta", foreignKey: "idCategoriaCoche"});
  tb_records_pistas.belongsTo(tb_cat_coches, { as: "idCategoriaCoche_tb_cat_coch", foreignKey: "idCategoriaCoche"});
  tb_cat_coches.hasMany(tb_records_pistas, { as: "tb_records_pista", foreignKey: "idCategoriaCoche"});
  tb_records_por_piloto.belongsTo(tb_cat_coches, { as: "idCategoriaCoche_tb_cat_coch", foreignKey: "idCategoriaCoche"});
  tb_cat_coches.hasMany(tb_records_por_piloto, { as: "tb_records_por_pilotos", foreignKey: "idCategoriaCoche"});
  tb_torneos.belongsTo(tb_cat_coches, { as: "idCategoriaCochePermitida_tb_cat_coch", foreignKey: "idCategoriaCochePermitida"});
  tb_cat_coches.hasMany(tb_torneos, { as: "tb_torneos", foreignKey: "idCategoriaCochePermitida"});
  tb_divisiones.belongsTo(tb_cat_piloto, { as: "idCatPred_tb_cat_piloto", foreignKey: "idCatPred"});
  tb_cat_piloto.hasMany(tb_divisiones, { as: "tb_divisiones", foreignKey: "idCatPred"});
  tb_divisiones_pilotos.belongsTo(tb_cat_piloto, { as: "idCategoriaPiloto_tb_cat_piloto", foreignKey: "idCategoriaPiloto"});
  tb_cat_piloto.hasMany(tb_divisiones_pilotos, { as: "tb_divisiones_pilotos", foreignKey: "idCategoriaPiloto"});
  tb_parrilla_calendario.belongsTo(tb_cat_piloto, { as: "idCategoriaPiloto_tb_cat_piloto", foreignKey: "idCategoriaPiloto"});
  tb_cat_piloto.hasMany(tb_parrilla_calendario, { as: "tb_parrilla_calendarios", foreignKey: "idCategoriaPiloto"});
  tb_calendario.belongsTo(tb_categoria_elo, { as: "idCategoriaELO_tb_categoria_elo", foreignKey: "idCategoriaELO"});
  tb_categoria_elo.hasMany(tb_calendario, { as: "tb_calendarios", foreignKey: "idCategoriaELO"});
  tb_divisiones.belongsTo(tb_categoria_elo, { as: "idCategoriaELO_tb_categoria_elo", foreignKey: "idCategoriaELO"});
  tb_categoria_elo.hasMany(tb_divisiones, { as: "tb_divisiones", foreignKey: "idCategoriaELO"});
  tb_elo_actual.belongsTo(tb_categoria_elo, { as: "idCategoriaELO_tb_categoria_elo", foreignKey: "idCategoriaELO"});
  tb_categoria_elo.hasMany(tb_elo_actual, { as: "tb_elo_actuals", foreignKey: "idCategoriaELO"});
  tb_elo_variacion.belongsTo(tb_categoria_elo, { as: "idCategoriaELO_tb_categoria_elo", foreignKey: "idCategoriaELO"});
  tb_categoria_elo.hasMany(tb_elo_variacion, { as: "tb_elo_variacions", foreignKey: "idCategoriaELO"});
  tb_info_calculo_resultados.belongsTo(tb_categoria_elo, { as: "idCategoriaELO_tb_categoria_elo", foreignKey: "idCategoriaELO"});
  tb_categoria_elo.hasMany(tb_info_calculo_resultados, { as: "tb_info_calculo_resultados", foreignKey: "idCategoriaELO"});
  tb_info_clasificatorios.belongsTo(tb_categoria_elo, { as: "idCategoriaElo_tb_categoria_elo", foreignKey: "idCategoriaElo"});
  tb_categoria_elo.hasMany(tb_info_clasificatorios, { as: "tb_info_clasificatorios", foreignKey: "idCategoriaElo"});
  tb_licencias_pilotos.belongsTo(tb_categoria_elo, { as: "idCategoriaELO_tb_categoria_elo", foreignKey: "idCategoriaELO"});
  tb_categoria_elo.hasMany(tb_licencias_pilotos, { as: "tb_licencias_pilotos", foreignKey: "idCategoriaELO"});
  tb_licencias_variacion.belongsTo(tb_categoria_elo, { as: "idCategoriaELO_tb_categoria_elo", foreignKey: "idCategoriaELO"});
  tb_categoria_elo.hasMany(tb_licencias_variacion, { as: "tb_licencias_variacions", foreignKey: "idCategoriaELO"});
  tb_resultados.belongsTo(tb_categoria_elo, { as: "idCategoriaELO_tb_categoria_elo", foreignKey: "idCategoriaELO"});
  tb_categoria_elo.hasMany(tb_resultados, { as: "tb_resultados", foreignKey: "idCategoriaELO"});
  tb_resultados_clasificatorios.belongsTo(tb_categoria_elo, { as: "idCategoriaElo_tb_categoria_elo", foreignKey: "idCategoriaElo"});
  tb_categoria_elo.hasMany(tb_resultados_clasificatorios, { as: "tb_resultados_clasificatorios", foreignKey: "idCategoriaElo"});
  tb_coches_sim.belongsTo(tb_coches, { as: "idCoche_tb_coch", foreignKey: "idCoche"});
  tb_coches.hasMany(tb_coches_sim, { as: "tb_coches_sims", foreignKey: "idCoche"});
  tb_analisis_stint.belongsTo(tb_coches_sim, { as: "idCocheSim_tb_coches_sim", foreignKey: "idCocheSim"});
  tb_coches_sim.hasMany(tb_analisis_stint, { as: "tb_analisis_stints", foreignKey: "idCocheSim"});
  tb_calendario.belongsTo(tb_coches_sim, { as: "idCochePermitido_tb_coches_sim", foreignKey: "idCochePermitido"});
  tb_coches_sim.hasMany(tb_calendario, { as: "tb_calendarios", foreignKey: "idCochePermitido"});
  tb_divisiones.belongsTo(tb_coches_sim, { as: "idCochePred_tb_coches_sim", foreignKey: "idCochePred"});
  tb_coches_sim.hasMany(tb_divisiones, { as: "tb_divisiones", foreignKey: "idCochePred"});
  tb_divisiones_pilotos.belongsTo(tb_coches_sim, { as: "idCoche_tb_coches_sim", foreignKey: "idCoche"});
  tb_coches_sim.hasMany(tb_divisiones_pilotos, { as: "tb_divisiones_pilotos", foreignKey: "idCoche"});
  tb_eventos_clasificatorios.belongsTo(tb_coches_sim, { as: "idCocheSim_tb_coches_sim", foreignKey: "idCocheSim"});
  tb_coches_sim.hasMany(tb_eventos_clasificatorios, { as: "tb_eventos_clasificatorios", foreignKey: "idCocheSim"});
  tb_grupo_coches_personalizado.belongsTo(tb_coches_sim, { as: "idCocheSim_tb_coches_sim", foreignKey: "idCocheSim"});
  tb_coches_sim.hasMany(tb_grupo_coches_personalizado, { as: "tb_grupo_coches_personalizados", foreignKey: "idCocheSim"});
  tb_historial_vueltas.belongsTo(tb_coches_sim, { as: "idCocheSim_tb_coches_sim", foreignKey: "idCocheSim"});
  tb_coches_sim.hasMany(tb_historial_vueltas, { as: "tb_historial_vuelta", foreignKey: "idCocheSim"});
  tb_inscripciones.belongsTo(tb_coches_sim, { as: "idCocheInicial_tb_coches_sim", foreignKey: "idCocheInicial"});
  tb_coches_sim.hasMany(tb_inscripciones, { as: "tb_inscripciones", foreignKey: "idCocheInicial"});
  tb_records_pistas.belongsTo(tb_coches_sim, { as: "idCocheSim_tb_coches_sim", foreignKey: "idCocheSim"});
  tb_coches_sim.hasMany(tb_records_pistas, { as: "tb_records_pista", foreignKey: "idCocheSim"});
  tb_records_por_piloto.belongsTo(tb_coches_sim, { as: "idCocheSim_tb_coches_sim", foreignKey: "idCocheSim"});
  tb_coches_sim.hasMany(tb_records_por_piloto, { as: "tb_records_por_pilotos", foreignKey: "idCocheSim"});
  tb_resultados.belongsTo(tb_coches_sim, { as: "idCocheSim_tb_coches_sim", foreignKey: "idCocheSim"});
  tb_coches_sim.hasMany(tb_resultados, { as: "tb_resultados", foreignKey: "idCocheSim"});
  tb_resultados_subtramos.belongsTo(tb_coches_sim, { as: "idCocheSim_tb_coches_sim", foreignKey: "idCocheSim"});
  tb_coches_sim.hasMany(tb_resultados_subtramos, { as: "tb_resultados_subtramos", foreignKey: "idCocheSim"});
  tb_subtramos.belongsTo(tb_coches_sim, { as: "idCoche_tb_coches_sim", foreignKey: "idCoche"});
  tb_coches_sim.hasMany(tb_subtramos, { as: "tb_subtramos", foreignKey: "idCoche"});
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
  tb_indicador_cumplimiento_torneo.belongsTo(tb_divisiones, { as: "idDivision_tb_divisione", foreignKey: "idDivision"});
  tb_divisiones.hasMany(tb_indicador_cumplimiento_torneo, { as: "tb_indicador_cumplimiento_torneos", foreignKey: "idDivision"});
  tb_resultados.belongsTo(tb_divisiones, { as: "idNombreDivision_tb_divisione", foreignKey: "idNombreDivision"});
  tb_divisiones.hasMany(tb_resultados, { as: "tb_resultados", foreignKey: "idNombreDivision"});
  tb_banner_patrocinadores.belongsTo(tb_divisiones_pilotos, { as: "idDivision_tb_divisiones_piloto", foreignKey: "idDivision"});
  tb_divisiones_pilotos.hasMany(tb_banner_patrocinadores, { as: "tb_banner_patrocinadores", foreignKey: "idDivision"});
  tb_comunicados.belongsTo(tb_divisiones_pilotos, { as: "idDivision_tb_divisiones_piloto", foreignKey: "idDivision"});
  tb_divisiones_pilotos.hasMany(tb_comunicados, { as: "tb_comunicados", foreignKey: "idDivision"});
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
  tb_eventos_clasificatorios.belongsTo(tb_estado_clasificatorios, { as: "idEstado_tb_estado_clasificatorio", foreignKey: "idEstado"});
  tb_estado_clasificatorios.hasMany(tb_eventos_clasificatorios, { as: "tb_eventos_clasificatorios", foreignKey: "idEstado"});
  tb_info_clasificatorios.belongsTo(tb_estado_clasificatorios, { as: "idEstado_tb_estado_clasificatorio", foreignKey: "idEstado"});
  tb_estado_clasificatorios.hasMany(tb_info_clasificatorios, { as: "tb_info_clasificatorios", foreignKey: "idEstado"});
  tb_asignacion_comisario.belongsTo(tb_estado_general, { as: "idEstadoRecepcion_tb_estado_general", foreignKey: "idEstadoRecepcion"});
  tb_estado_general.hasMany(tb_asignacion_comisario, { as: "tb_asignacion_comisarios", foreignKey: "idEstadoRecepcion"});
  tb_asignacion_tipo_tickets.belongsTo(tb_estado_general, { as: "idEstado_tb_estado_general", foreignKey: "idEstado"});
  tb_estado_general.hasMany(tb_asignacion_tipo_tickets, { as: "tb_asignacion_tipo_tickets", foreignKey: "idEstado"});
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
  tb_reportes_comisarios.belongsTo(tb_estado_reportes, { as: "idEstadoReporte_tb_estado_reporte", foreignKey: "idEstadoReporte"});
  tb_estado_reportes.hasMany(tb_reportes_comisarios, { as: "tb_reportes_comisarios", foreignKey: "idEstadoReporte"});
  tb_tickets.belongsTo(tb_estado_ticket, { as: "idEstadoTicket_tb_estado_ticket", foreignKey: "idEstadoTicket"});
  tb_estado_ticket.hasMany(tb_tickets, { as: "tb_tickets", foreignKey: "idEstadoTicket"});
  tb_torneos.belongsTo(tb_estado_torneos, { as: "idEstadoTorneo_tb_estado_torneo", foreignKey: "idEstadoTorneo"});
  tb_estado_torneos.hasMany(tb_torneos, { as: "tb_torneos", foreignKey: "idEstadoTorneo"});
  tb_resultados_subtramos.belongsTo(tb_etapas_calendario, { as: "idEtapa_tb_etapas_calendario", foreignKey: "idEtapa"});
  tb_etapas_calendario.hasMany(tb_resultados_subtramos, { as: "tb_resultados_subtramos", foreignKey: "idEtapa"});
  tb_resultados_eventos_clasificatorios.belongsTo(tb_eventos_clasificatorios, { as: "idEventoClasificatorio_tb_eventos_clasificatorio", foreignKey: "idEventoClasificatorio"});
  tb_eventos_clasificatorios.hasMany(tb_resultados_eventos_clasificatorios, { as: "tb_resultados_eventos_clasificatorios", foreignKey: "idEventoClasificatorio"});
  tb_calendario.belongsTo(tb_formato_carrera, { as: "idFormatoCarrera_tb_formato_carrera", foreignKey: "idFormatoCarrera"});
  tb_formato_carrera.hasMany(tb_calendario, { as: "tb_calendarios", foreignKey: "idFormatoCarrera"});
  tb_conceptos_comisarios.belongsTo(tb_gravedad_sancion, { as: "idGravedad_tb_gravedad_sancion", foreignKey: "idGravedad"});
  tb_gravedad_sancion.hasMany(tb_conceptos_comisarios, { as: "tb_conceptos_comisarios", foreignKey: "idGravedad"});
  tb_penalizacion_sanciones.belongsTo(tb_gravedad_sancion, { as: "idGravedad_tb_gravedad_sancion", foreignKey: "idGravedad"});
  tb_gravedad_sancion.hasMany(tb_penalizacion_sanciones, { as: "tb_penalizacion_sanciones", foreignKey: "idGravedad"});
  tb_ident_pos_sim_preq.belongsTo(tb_ident_pos, { as: "idIdentPos_tb_ident_po", foreignKey: "idIdentPos"});
  tb_ident_pos.hasMany(tb_ident_pos_sim_preq, { as: "tb_ident_pos_sim_preqs", foreignKey: "idIdentPos"});
  tb_puntos.belongsTo(tb_ident_pos, { as: "idIdentPos_tb_ident_po", foreignKey: "idIdentPos"});
  tb_ident_pos.hasMany(tb_puntos, { as: "tb_puntos", foreignKey: "idIdentPos"});
  tb_resultados.belongsTo(tb_ident_pos, { as: "idPosicion_tb_ident_po", foreignKey: "idPosicion"});
  tb_ident_pos.hasMany(tb_resultados, { as: "tb_resultados", foreignKey: "idPosicion"});
  tb_resultados_subtramos.belongsTo(tb_ident_pos_sim_preq, { as: "idIdentPos_tb_ident_pos_sim_preq", foreignKey: "idIdentPos"});
  tb_ident_pos_sim_preq.hasMany(tb_resultados_subtramos, { as: "tb_resultados_subtramos", foreignKey: "idIdentPos"});
  tb_cod_sim_clasificatorio.belongsTo(tb_info_clasificatorios, { as: "idClasificatorio_tb_info_clasificatorio", foreignKey: "idClasificatorio"});
  tb_info_clasificatorios.hasMany(tb_cod_sim_clasificatorio, { as: "tb_cod_sim_clasificatorios", foreignKey: "idClasificatorio"});
  tb_elo_variacion.belongsTo(tb_info_clasificatorios, { as: "idPreclasificatorio_tb_info_clasificatorio", foreignKey: "idPreclasificatorio"});
  tb_info_clasificatorios.hasMany(tb_elo_variacion, { as: "tb_elo_variacions", foreignKey: "idPreclasificatorio"});
  tb_eventos_clasificatorios.belongsTo(tb_info_clasificatorios, { as: "idInfoClasificatorio_tb_info_clasificatorio", foreignKey: "idInfoClasificatorio"});
  tb_info_clasificatorios.hasMany(tb_eventos_clasificatorios, { as: "tb_eventos_clasificatorios", foreignKey: "idInfoClasificatorio"});
  tb_inscripcion_clasificatorios.belongsTo(tb_info_clasificatorios, { as: "idClasificatorio_tb_info_clasificatorio", foreignKey: "idClasificatorio"});
  tb_info_clasificatorios.hasMany(tb_inscripcion_clasificatorios, { as: "tb_inscripcion_clasificatorios", foreignKey: "idClasificatorio"});
  tb_opcion_clasificatorios_torneo.belongsTo(tb_info_clasificatorios, { as: "idClasificatorio_tb_info_clasificatorio", foreignKey: "idClasificatorio"});
  tb_info_clasificatorios.hasMany(tb_opcion_clasificatorios_torneo, { as: "tb_opcion_clasificatorios_torneos", foreignKey: "idClasificatorio"});
  tb_resultados_clasificatorios.belongsTo(tb_info_clasificatorios, { as: "idClasificatorio_tb_info_clasificatorio", foreignKey: "idClasificatorio"});
  tb_info_clasificatorios.hasMany(tb_resultados_clasificatorios, { as: "tb_resultados_clasificatorios", foreignKey: "idClasificatorio"});
  tb_banner_patrocinadores.belongsTo(tb_inscripcion_clasificatorios, { as: "idClasificatorio_tb_inscripcion_clasificatorio", foreignKey: "idClasificatorio"});
  tb_inscripcion_clasificatorios.hasMany(tb_banner_patrocinadores, { as: "tb_banner_patrocinadores", foreignKey: "idClasificatorio"});
  tb_comunicados.belongsTo(tb_inscripcion_clasificatorios, { as: "idClasificatorio_tb_inscripcion_clasificatorio", foreignKey: "idClasificatorio"});
  tb_inscripcion_clasificatorios.hasMany(tb_comunicados, { as: "tb_comunicados", foreignKey: "idClasificatorio"});
  tb_divisiones_pilotos.belongsTo(tb_inscripciones, { as: "idInscripcion_tb_inscripcione", foreignKey: "idInscripcion"});
  tb_inscripciones.hasMany(tb_divisiones_pilotos, { as: "tb_divisiones_pilotos", foreignKey: "idInscripcion"});
  tb_resultados.belongsTo(tb_inscripciones, { as: "idInscripcion_tb_inscripcione", foreignKey: "idInscripcion"});
  tb_inscripciones.hasMany(tb_resultados, { as: "tb_resultados", foreignKey: "idInscripcion"});
  tb_insignias_pilotos.belongsTo(tb_insignias_discord, { as: "idInsignia_tb_insignias_discord", foreignKey: "idInsignia"});
  tb_insignias_discord.hasMany(tb_insignias_pilotos, { as: "tb_insignias_pilotos", foreignKey: "idInsignia"});
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
  tb_eventos_clasificatorios.belongsTo(tb_metodologias_clasificatorio, { as: "idMetodoCalculo_tb_metodologias_clasificatorio", foreignKey: "idMetodoCalculo"});
  tb_metodologias_clasificatorio.hasMany(tb_eventos_clasificatorios, { as: "tb_eventos_clasificatorios", foreignKey: "idMetodoCalculo"});
  tb_info_clasificatorios.belongsTo(tb_metodologias_clasificatorio, { as: "idMetodologiaCalculo_tb_metodologias_clasificatorio", foreignKey: "idMetodologiaCalculo"});
  tb_metodologias_clasificatorio.hasMany(tb_info_clasificatorios, { as: "tb_info_clasificatorios", foreignKey: "idMetodologiaCalculo"});
  tb_neumaticos_sim.belongsTo(tb_neumaticos, { as: "idNeumaticos_tb_neumatico", foreignKey: "idNeumaticos"});
  tb_neumaticos.hasMany(tb_neumaticos_sim, { as: "tb_neumaticos_sims", foreignKey: "idNeumaticos"});
  tb_analisis_stint.belongsTo(tb_neumaticos_sim, { as: "idNeumatico_tb_neumaticos_sim", foreignKey: "idNeumatico"});
  tb_neumaticos_sim.hasMany(tb_analisis_stint, { as: "tb_analisis_stints", foreignKey: "idNeumatico"});
  tb_eventos_clasificatorios.belongsTo(tb_neumaticos_sim, { as: "neumaticoRequerido_tb_neumaticos_sim", foreignKey: "neumaticoRequerido"});
  tb_neumaticos_sim.hasMany(tb_eventos_clasificatorios, { as: "tb_eventos_clasificatorios", foreignKey: "neumaticoRequerido"});
  tb_historial_vueltas.belongsTo(tb_neumaticos_sim, { as: "idNeumatico_tb_neumaticos_sim", foreignKey: "idNeumatico"});
  tb_neumaticos_sim.hasMany(tb_historial_vueltas, { as: "tb_historial_vuelta", foreignKey: "idNeumatico"});
  tb_records_pistas.belongsTo(tb_neumaticos_sim, { as: "idNeumatico_tb_neumaticos_sim", foreignKey: "idNeumatico"});
  tb_neumaticos_sim.hasMany(tb_records_pistas, { as: "tb_records_pista", foreignKey: "idNeumatico"});
  tb_records_por_piloto.belongsTo(tb_neumaticos_sim, { as: "idNeumatico_tb_neumaticos_sim", foreignKey: "idNeumatico"});
  tb_neumaticos_sim.hasMany(tb_records_por_piloto, { as: "tb_records_por_pilotos", foreignKey: "idNeumatico"});
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
  tb_subtramos.belongsTo(tb_orientacion_pista, { as: "idOrientacion_tb_orientacion_pistum", foreignKey: "idOrientacion"});
  tb_orientacion_pista.hasMany(tb_subtramos, { as: "tb_subtramos", foreignKey: "idOrientacion"});
  tb_banner_patrocinadores.belongsTo(tb_paises, { as: "idPais_tb_paise", foreignKey: "idPais"});
  tb_paises.hasMany(tb_banner_patrocinadores, { as: "tb_banner_patrocinadores", foreignKey: "idPais"});
  tb_comunicados.belongsTo(tb_paises, { as: "idPais_tb_paise", foreignKey: "idPais"});
  tb_paises.hasMany(tb_comunicados, { as: "tb_comunicados", foreignKey: "idPais"});
  tb_pilotos.belongsTo(tb_paises, { as: "idPaisResidencia_tb_paise", foreignKey: "idPaisResidencia"});
  tb_paises.hasMany(tb_pilotos, { as: "tb_pilotos", foreignKey: "idPaisResidencia"});
  tb_pilotos.belongsTo(tb_paises, { as: "idNacionalidad_tb_paise", foreignKey: "idNacionalidad"});
  tb_paises.hasMany(tb_pilotos, { as: "idNacionalidad_tb_pilotos", foreignKey: "idNacionalidad"});
  tb_pistas.belongsTo(tb_paises, { as: "idPais_tb_paise", foreignKey: "idPais"});
  tb_paises.hasMany(tb_pistas, { as: "tb_pista", foreignKey: "idPais"});
  tb_pilotos_penalizados.belongsTo(tb_penalizacion_sanciones, { as: "idPenalizacion_tb_penalizacion_sancione", foreignKey: "idPenalizacion"});
  tb_penalizacion_sanciones.hasMany(tb_pilotos_penalizados, { as: "tb_pilotos_penalizados", foreignKey: "idPenalizacion"});
  tb_analisis_stint.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_analisis_stint, { as: "tb_analisis_stints", foreignKey: "idPiloto"});
  tb_asignacion_tipo_tickets.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_asignacion_tipo_tickets, { as: "tb_asignacion_tipo_tickets", foreignKey: "idPiloto"});
  tb_banner_patrocinadores.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_banner_patrocinadores, { as: "tb_banner_patrocinadores", foreignKey: "idPiloto"});
  tb_comunicados.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_comunicados, { as: "tb_comunicados", foreignKey: "idPiloto"});
  tb_elo_actual.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_elo_actual, { as: "tb_elo_actuals", foreignKey: "idPiloto"});
  tb_elo_variacion.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_elo_variacion, { as: "tb_elo_variacions", foreignKey: "idPiloto"});
  tb_fotos_pilotos.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_fotos_pilotos, { as: "tb_fotos_pilotos", foreignKey: "idPiloto"});
  tb_historial_vueltas.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_historial_vueltas, { as: "tb_historial_vuelta", foreignKey: "idPiloto"});
  tb_indicador_cumplimiento_torneo.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_indicador_cumplimiento_torneo, { as: "tb_indicador_cumplimiento_torneos", foreignKey: "idPiloto"});
  tb_inscripciones.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_inscripciones, { as: "tb_inscripciones", foreignKey: "idPiloto"});
  tb_insignias_pilotos.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_insignias_pilotos, { as: "tb_insignias_pilotos", foreignKey: "idPiloto"});
  tb_involucrados_sanciones.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_involucrados_sanciones, { as: "tb_involucrados_sanciones", foreignKey: "idPiloto"});
  tb_licencias_pilotos.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_licencias_pilotos, { as: "tb_licencias_pilotos", foreignKey: "idPiloto"});
  tb_licencias_variacion.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_licencias_variacion, { as: "tb_licencias_variacions", foreignKey: "idPiloto"});
  tb_mensajes_ticket.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_mensajes_ticket, { as: "tb_mensajes_tickets", foreignKey: "idPiloto"});
  tb_notificaciones.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_notificaciones, { as: "tb_notificaciones", foreignKey: "idPiloto"});
  tb_parrilla_calendario.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_parrilla_calendario, { as: "tb_parrilla_calendarios", foreignKey: "idPiloto"});
  tb_participaciones.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_participaciones, { as: "tb_participaciones", foreignKey: "idPiloto"});
  tb_pilotos_id_sim.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_pilotos_id_sim, { as: "tb_pilotos_id_sims", foreignKey: "idPiloto"});
  tb_pilotos_liga.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_pilotos_liga, { as: "tb_pilotos_ligas", foreignKey: "idPiloto"});
  tb_records_pistas.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_records_pistas, { as: "tb_records_pista", foreignKey: "idPiloto"});
  tb_records_por_piloto.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_records_por_piloto, { as: "tb_records_por_pilotos", foreignKey: "idPiloto"});
  tb_repeticiones.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_repeticiones, { as: "tb_repeticiones", foreignKey: "idPiloto"});
  tb_resultados.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_resultados, { as: "tb_resultados", foreignKey: "idPiloto"});
  tb_resultados_clasificatorios.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_resultados_clasificatorios, { as: "tb_resultados_clasificatorios", foreignKey: "idPiloto"});
  tb_resultados_eventos_clasificatorios.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_resultados_eventos_clasificatorios, { as: "tb_resultados_eventos_clasificatorios", foreignKey: "idPiloto"});
  tb_resultados_subtramos.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_resultados_subtramos, { as: "tb_resultados_subtramos", foreignKey: "idPiloto"});
  tb_roles_discord_pilotos.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_roles_discord_pilotos, { as: "tb_roles_discord_pilotos", foreignKey: "idPiloto"});
  tb_roles_pilotos.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_roles_pilotos, { as: "tb_roles_pilotos", foreignKey: "idPiloto"});
  tb_sr_actual.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_sr_actual, { as: "tb_sr_actuals", foreignKey: "idPiloto"});
  tb_sr_variacion.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_sr_variacion, { as: "tb_sr_variacions", foreignKey: "idPiloto"});
  tb_subtramos.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_subtramos, { as: "tb_subtramos", foreignKey: "idPiloto"});
  tb_tickets.belongsTo(tb_pilotos, { as: "idPiloto_tb_piloto", foreignKey: "idPiloto"});
  tb_pilotos.hasMany(tb_tickets, { as: "tb_tickets", foreignKey: "idPiloto"});
  tb_inscripcion_clasificatorios.belongsTo(tb_pilotos_id_sim, { as: "idSimIdPiloto_tb_pilotos_id_sim", foreignKey: "idSimIdPiloto"});
  tb_pilotos_id_sim.hasMany(tb_inscripcion_clasificatorios, { as: "tb_inscripcion_clasificatorios", foreignKey: "idSimIdPiloto"});
  tb_inscripciones.belongsTo(tb_pilotos_id_sim, { as: "idPilotoIdSim_tb_pilotos_id_sim", foreignKey: "idPilotoIdSim"});
  tb_pilotos_id_sim.hasMany(tb_inscripciones, { as: "tb_inscripciones", foreignKey: "idPilotoIdSim"});
  tb_banner_patrocinadores.belongsTo(tb_pilotos_liga, { as: "idLiga_tb_pilotos_liga", foreignKey: "idLiga"});
  tb_pilotos_liga.hasMany(tb_banner_patrocinadores, { as: "tb_banner_patrocinadores", foreignKey: "idLiga"});
  tb_comunicados.belongsTo(tb_pilotos_liga, { as: "idLiga_tb_pilotos_liga", foreignKey: "idLiga"});
  tb_pilotos_liga.hasMany(tb_comunicados, { as: "tb_comunicados", foreignKey: "idLiga"});
  tb_sr_variacion.belongsTo(tb_pilotos_penalizados, { as: "idPenalizado_tb_pilotos_penalizado", foreignKey: "idPenalizado"});
  tb_pilotos_penalizados.hasMany(tb_sr_variacion, { as: "tb_sr_variacions", foreignKey: "idPenalizado"});
  tb_pistas_variantes.belongsTo(tb_pistas, { as: "idPistaPrincipal_tb_pista", foreignKey: "idPistaPrincipal"});
  tb_pistas.hasMany(tb_pistas_variantes, { as: "tb_pistas_variantes", foreignKey: "idPistaPrincipal"});
  tb_analisis_stint.belongsTo(tb_pistas_sim, { as: "idPistaSim_tb_pistas_sim", foreignKey: "idPistaSim"});
  tb_pistas_sim.hasMany(tb_analisis_stint, { as: "tb_analisis_stints", foreignKey: "idPistaSim"});
  tb_calendario.belongsTo(tb_pistas_sim, { as: "idPista_tb_pistas_sim", foreignKey: "idPista"});
  tb_pistas_sim.hasMany(tb_calendario, { as: "tb_calendarios", foreignKey: "idPista"});
  tb_eventos_clasificatorios.belongsTo(tb_pistas_sim, { as: "idPistaSim_tb_pistas_sim", foreignKey: "idPistaSim"});
  tb_pistas_sim.hasMany(tb_eventos_clasificatorios, { as: "tb_eventos_clasificatorios", foreignKey: "idPistaSim"});
  tb_historial_vueltas.belongsTo(tb_pistas_sim, { as: "idPistaSim_tb_pistas_sim", foreignKey: "idPistaSim"});
  tb_pistas_sim.hasMany(tb_historial_vueltas, { as: "tb_historial_vuelta", foreignKey: "idPistaSim"});
  tb_records_pistas.belongsTo(tb_pistas_sim, { as: "idPistaSim_tb_pistas_sim", foreignKey: "idPistaSim"});
  tb_pistas_sim.hasMany(tb_records_pistas, { as: "tb_records_pista", foreignKey: "idPistaSim"});
  tb_records_por_piloto.belongsTo(tb_pistas_sim, { as: "idPistaSim_tb_pistas_sim", foreignKey: "idPistaSim"});
  tb_pistas_sim.hasMany(tb_records_por_piloto, { as: "tb_records_por_pilotos", foreignKey: "idPistaSim"});
  tb_subtramos.belongsTo(tb_pistas_sim, { as: "idPistaSim_tb_pistas_sim", foreignKey: "idPistaSim"});
  tb_pistas_sim.hasMany(tb_subtramos, { as: "tb_subtramos", foreignKey: "idPistaSim"});
  tb_pistas_sim.belongsTo(tb_pistas_variantes, { as: "idPistaVariante_tb_pistas_variante", foreignKey: "idPistaVariante"});
  tb_pistas_variantes.hasMany(tb_pistas_sim, { as: "tb_pistas_sims", foreignKey: "idPistaVariante"});
  tb_contenido_grafico.belongsTo(tb_plantillas_graficos, { as: "idPlantilla_tb_plantillas_grafico", foreignKey: "idPlantilla"});
  tb_plantillas_graficos.hasMany(tb_contenido_grafico, { as: "tb_contenido_graficos", foreignKey: "idPlantilla"});
  tb_banner_patrocinadores.belongsTo(tb_plataforma, { as: "idPlataforma_tb_plataforma", foreignKey: "idPlataforma"});
  tb_plataforma.hasMany(tb_banner_patrocinadores, { as: "tb_banner_patrocinadores", foreignKey: "idPlataforma"});
  tb_comunicados.belongsTo(tb_plataforma, { as: "idPlataforma_tb_plataforma", foreignKey: "idPlataforma"});
  tb_plataforma.hasMany(tb_comunicados, { as: "tb_comunicados", foreignKey: "idPlataforma"});
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
  tb_subtramos.belongsTo(tb_resultados_subtramos, { as: "idResultado_tb_resultados_subtramo", foreignKey: "idResultado"});
  tb_resultados_subtramos.hasMany(tb_subtramos, { as: "tb_subtramos", foreignKey: "idResultado"});
  tb_involucrados_sanciones.belongsTo(tb_rol_involucrados, { as: "idRolInvolucrado_tb_rol_involucrado", foreignKey: "idRolInvolucrado"});
  tb_rol_involucrados.hasMany(tb_involucrados_sanciones, { as: "tb_involucrados_sanciones", foreignKey: "idRolInvolucrado"});
  tb_roles_pilotos.belongsTo(tb_roles, { as: "idRol_tb_role", foreignKey: "idRol"});
  tb_roles.hasMany(tb_roles_pilotos, { as: "tb_roles_pilotos", foreignKey: "idRol"});
  tb_asignacion_comisario.belongsTo(tb_roles_pilotos, { as: "idRolPilotoComisario_tb_roles_piloto", foreignKey: "idRolPilotoComisario"});
  tb_roles_pilotos.hasMany(tb_asignacion_comisario, { as: "tb_asignacion_comisarios", foreignKey: "idRolPilotoComisario"});
  tb_banner_patrocinadores.belongsTo(tb_roles_pilotos, { as: "idRol_tb_roles_piloto", foreignKey: "idRol"});
  tb_roles_pilotos.hasMany(tb_banner_patrocinadores, { as: "tb_banner_patrocinadores", foreignKey: "idRol"});
  tb_comunicados.belongsTo(tb_roles_pilotos, { as: "idRol_tb_roles_piloto", foreignKey: "idRol"});
  tb_roles_pilotos.hasMany(tb_comunicados, { as: "tb_comunicados", foreignKey: "idRol"});
  tb_analisis_stint.belongsTo(tb_sesiones, { as: "idSesion_tb_sesione", foreignKey: "idSesion"});
  tb_sesiones.hasMany(tb_analisis_stint, { as: "tb_analisis_stints", foreignKey: "idSesion"});
  tb_historial_vueltas.belongsTo(tb_sesiones, { as: "idSesion_tb_sesione", foreignKey: "idSesion"});
  tb_sesiones.hasMany(tb_historial_vueltas, { as: "tb_historial_vuelta", foreignKey: "idSesion"});
  tb_records_pistas.belongsTo(tb_sesiones, { as: "idSesion_tb_sesione", foreignKey: "idSesion"});
  tb_sesiones.hasMany(tb_records_pistas, { as: "tb_records_pista", foreignKey: "idSesion"});
  tb_records_por_piloto.belongsTo(tb_sesiones, { as: "idSesion_tb_sesione", foreignKey: "idSesion"});
  tb_sesiones.hasMany(tb_records_por_piloto, { as: "tb_records_por_pilotos", foreignKey: "idSesion"});
  tb_cod_sim_clasificatorio.belongsTo(tb_sim_plat_codplat, { as: "idSimPlatCodPlat_tb_sim_plat_codplat", foreignKey: "idSimPlatCodPlat"});
  tb_sim_plat_codplat.hasMany(tb_cod_sim_clasificatorio, { as: "tb_cod_sim_clasificatorios", foreignKey: "idSimPlatCodPlat"});
  tb_pilotos_id_sim.belongsTo(tb_sim_plat_codplat, { as: "idSimCodPlataforma_tb_sim_plat_codplat", foreignKey: "idSimCodPlataforma"});
  tb_sim_plat_codplat.hasMany(tb_pilotos_id_sim, { as: "tb_pilotos_id_sims", foreignKey: "idSimCodPlataforma"});
  tb_simcodplat_torneo.belongsTo(tb_sim_plat_codplat, { as: "idSimCodPlat_tb_sim_plat_codplat", foreignKey: "idSimCodPlat"});
  tb_sim_plat_codplat.hasMany(tb_simcodplat_torneo, { as: "tb_simcodplat_torneos", foreignKey: "idSimCodPlat"});
  tb_analisis_stint.belongsTo(tb_sim_version, { as: "idSimVersion_tb_sim_version", foreignKey: "idSimVersion"});
  tb_sim_version.hasMany(tb_analisis_stint, { as: "tb_analisis_stints", foreignKey: "idSimVersion"});
  tb_historial_vueltas.belongsTo(tb_sim_version, { as: "idSimVersion_tb_sim_version", foreignKey: "idSimVersion"});
  tb_sim_version.hasMany(tb_historial_vueltas, { as: "tb_historial_vuelta", foreignKey: "idSimVersion"});
  tb_records_pistas.belongsTo(tb_sim_version, { as: "idSimVersion_tb_sim_version", foreignKey: "idSimVersion"});
  tb_sim_version.hasMany(tb_records_pistas, { as: "tb_records_pista", foreignKey: "idSimVersion"});
  tb_records_por_piloto.belongsTo(tb_sim_version, { as: "idSimVersion_tb_sim_version", foreignKey: "idSimVersion"});
  tb_sim_version.hasMany(tb_records_por_piloto, { as: "tb_records_por_pilotos", foreignKey: "idSimVersion"});
  tb_resultados.belongsTo(tb_sim_version, { as: "idSimVersion_tb_sim_version", foreignKey: "idSimVersion"});
  tb_sim_version.hasMany(tb_resultados, { as: "tb_resultados", foreignKey: "idSimVersion"});
  tb_torneos.belongsTo(tb_sim_version, { as: "idSimVersion_tb_sim_version", foreignKey: "idSimVersion"});
  tb_sim_version.hasMany(tb_torneos, { as: "tb_torneos", foreignKey: "idSimVersion"});
  tb_analisis_stint.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_analisis_stint, { as: "tb_analisis_stints", foreignKey: "idSimulador"});
  tb_banner_patrocinadores.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_banner_patrocinadores, { as: "tb_banner_patrocinadores", foreignKey: "idSimulador"});
  tb_categoria_elo.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_categoria_elo, { as: "tb_categoria_elos", foreignKey: "idSimulador"});
  tb_coches_sim.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_coches_sim, { as: "tb_coches_sims", foreignKey: "idSimulador"});
  tb_comunicados.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_comunicados, { as: "tb_comunicados", foreignKey: "idSimulador"});
  tb_elo_actual.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_elo_actual, { as: "tb_elo_actuals", foreignKey: "idSimulador"});
  tb_elo_variacion.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_elo_variacion, { as: "tb_elo_variacions", foreignKey: "idSimulador"});
  tb_equipos_sim.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_equipos_sim, { as: "tb_equipos_sims", foreignKey: "idSimulador"});
  tb_historial_vueltas.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_historial_vueltas, { as: "tb_historial_vuelta", foreignKey: "idSimulador"});
  tb_ident_pos_sim_preq.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_ident_pos_sim_preq, { as: "tb_ident_pos_sim_preqs", foreignKey: "idSimulador"});
  tb_indicador_cumplimiento_torneo.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_indicador_cumplimiento_torneo, { as: "tb_indicador_cumplimiento_torneos", foreignKey: "idSimulador"});
  tb_info_calculo_resultados.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_info_calculo_resultados, { as: "tb_info_calculo_resultados", foreignKey: "idSimulador"});
  tb_info_clasificatorios.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_info_clasificatorios, { as: "tb_info_clasificatorios", foreignKey: "idSimulador"});
  tb_licencias_pilotos.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_licencias_pilotos, { as: "tb_licencias_pilotos", foreignKey: "idSimulador"});
  tb_licencias_variacion.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_licencias_variacion, { as: "tb_licencias_variacions", foreignKey: "idSimulador"});
  tb_neumaticos_sim.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_neumaticos_sim, { as: "tb_neumaticos_sims", foreignKey: "idSimulador"});
  tb_nombre_grupo_coches_personalizado.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_nombre_grupo_coches_personalizado, { as: "tb_nombre_grupo_coches_personalizados", foreignKey: "idSimulador"});
  tb_nombre_grupo_equipos.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_nombre_grupo_equipos, { as: "tb_nombre_grupo_equipos", foreignKey: "idSimulador"});
  tb_participaciones.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_participaciones, { as: "tb_participaciones", foreignKey: "idSimulador"});
  tb_pistas_sim.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_pistas_sim, { as: "tb_pistas_sims", foreignKey: "idSimulador"});
  tb_records_pistas.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_records_pistas, { as: "tb_records_pista", foreignKey: "idSimulador"});
  tb_records_por_piloto.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_records_por_piloto, { as: "tb_records_por_pilotos", foreignKey: "idSimulador"});
  tb_resultados.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_resultados, { as: "tb_resultados", foreignKey: "idSimulador"});
  tb_resultados_clasificatorios.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_resultados_clasificatorios, { as: "tb_resultados_clasificatorios", foreignKey: "idSimulador"});
  tb_sim_plat_codplat.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_sim_plat_codplat, { as: "tb_sim_plat_codplats", foreignKey: "idSimulador"});
  tb_sim_version.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_sim_version, { as: "tb_sim_versions", foreignKey: "idSimulador"});
  tb_sr_actual.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_sr_actual, { as: "tb_sr_actuals", foreignKey: "idSimulador"});
  tb_sr_variacion.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_sr_variacion, { as: "tb_sr_variacions", foreignKey: "idSimulador"});
  tb_tabla_sanciones_sim.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_tabla_sanciones_sim, { as: "tb_tabla_sanciones_sims", foreignKey: "idSimulador"});
  tb_tipo_licencias.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_tipo_licencias, { as: "tb_tipo_licencia", foreignKey: "idSimulador"});
  tb_torneos.belongsTo(tb_simulador, { as: "idSimulador_tb_simulador", foreignKey: "idSimulador"});
  tb_simulador.hasMany(tb_torneos, { as: "tb_torneos", foreignKey: "idSimulador"});
  tb_calendario.belongsTo(tb_sistema_puntos, { as: "idSistemaPuntos_tb_sistema_punto", foreignKey: "idSistemaPuntos"});
  tb_sistema_puntos.hasMany(tb_calendario, { as: "tb_calendarios", foreignKey: "idSistemaPuntos"});
  tb_puntos.belongsTo(tb_sistema_puntos, { as: "idSistemaPuntos_tb_sistema_punto", foreignKey: "idSistemaPuntos"});
  tb_sistema_puntos.hasMany(tb_puntos, { as: "tb_puntos", foreignKey: "idSistemaPuntos"});
  tb_etapas_calendario.belongsTo(tb_subtramos, { as: "idSubtramo_tb_subtramo", foreignKey: "idSubtramo"});
  tb_subtramos.hasMany(tb_etapas_calendario, { as: "tb_etapas_calendarios", foreignKey: "idSubtramo"});
  tb_conceptos_comisarios.belongsTo(tb_tabla_sanciones, { as: "idSancion_tb_tabla_sancione", foreignKey: "idSancion"});
  tb_tabla_sanciones.hasMany(tb_conceptos_comisarios, { as: "tb_conceptos_comisarios", foreignKey: "idSancion"});
  tb_penalizacion_sanciones.belongsTo(tb_tabla_sanciones, { as: "idSancion_tb_tabla_sancione", foreignKey: "idSancion"});
  tb_tabla_sanciones.hasMany(tb_penalizacion_sanciones, { as: "tb_penalizacion_sanciones", foreignKey: "idSancion"});
  tb_tabla_sanciones_sim.belongsTo(tb_tabla_sanciones, { as: "idSancion_tb_tabla_sancione", foreignKey: "idSancion"});
  tb_tabla_sanciones.hasMany(tb_tabla_sanciones_sim, { as: "tb_tabla_sanciones_sims", foreignKey: "idSancion"});
  tb_mensajes_ticket.belongsTo(tb_tickets, { as: "idTicket_tb_ticket", foreignKey: "idTicket"});
  tb_tickets.hasMany(tb_mensajes_ticket, { as: "tb_mensajes_tickets", foreignKey: "idTicket"});
  tb_fotos_pilotos.belongsTo(tb_tipo_fotos, { as: "idTipo_tb_tipo_foto", foreignKey: "idTipo"});
  tb_tipo_fotos.hasMany(tb_fotos_pilotos, { as: "tb_fotos_pilotos", foreignKey: "idTipo"});
  tb_banner_patrocinadores.belongsTo(tb_tipo_licencias, { as: "idLicencia_tb_tipo_licencia", foreignKey: "idLicencia"});
  tb_tipo_licencias.hasMany(tb_banner_patrocinadores, { as: "tb_banner_patrocinadores", foreignKey: "idLicencia"});
  tb_comunicados.belongsTo(tb_tipo_licencias, { as: "idLicencia_tb_tipo_licencia", foreignKey: "idLicencia"});
  tb_tipo_licencias.hasMany(tb_comunicados, { as: "tb_comunicados", foreignKey: "idLicencia"});
  tb_info_clasificatorios.belongsTo(tb_tipo_licencias, { as: "idLicencia_tb_tipo_licencia", foreignKey: "idLicencia"});
  tb_tipo_licencias.hasMany(tb_info_clasificatorios, { as: "tb_info_clasificatorios", foreignKey: "idLicencia"});
  tb_licencias_pilotos.belongsTo(tb_tipo_licencias, { as: "idLicencia_tb_tipo_licencia", foreignKey: "idLicencia"});
  tb_tipo_licencias.hasMany(tb_licencias_pilotos, { as: "tb_licencias_pilotos", foreignKey: "idLicencia"});
  tb_licencias_variacion.belongsTo(tb_tipo_licencias, { as: "idLicencia_tb_tipo_licencia", foreignKey: "idLicencia"});
  tb_tipo_licencias.hasMany(tb_licencias_variacion, { as: "tb_licencias_variacions", foreignKey: "idLicencia"});
  tb_torneos.belongsTo(tb_tipo_licencias, { as: "idAsignacionLicencia_tb_tipo_licencia", foreignKey: "idAsignacionLicencia"});
  tb_tipo_licencias.hasMany(tb_torneos, { as: "tb_torneos", foreignKey: "idAsignacionLicencia"});
  tb_pilotos.belongsTo(tb_tipo_mando, { as: "idMando_tb_tipo_mando", foreignKey: "idMando"});
  tb_tipo_mando.hasMany(tb_pilotos, { as: "tb_pilotos", foreignKey: "idMando"});
  tb_notificaciones.belongsTo(tb_tipo_notificacion, { as: "idTipoNotificacion_tb_tipo_notificacion", foreignKey: "idTipoNotificacion"});
  tb_tipo_notificacion.hasMany(tb_notificaciones, { as: "tb_notificaciones", foreignKey: "idTipoNotificacion"});
  tb_penalizacion_sanciones.belongsTo(tb_tipo_penalizacion, { as: "idTipoPenalizacion_tb_tipo_penalizacion", foreignKey: "idTipoPenalizacion"});
  tb_tipo_penalizacion.hasMany(tb_penalizacion_sanciones, { as: "tb_penalizacion_sanciones", foreignKey: "idTipoPenalizacion"});
  tb_divisiones.belongsTo(tb_tipo_piloto, { as: "idTipoPred_tb_tipo_piloto", foreignKey: "idTipoPred"});
  tb_tipo_piloto.hasMany(tb_divisiones, { as: "tb_divisiones", foreignKey: "idTipoPred"});
  tb_divisiones_pilotos.belongsTo(tb_tipo_piloto, { as: "idTipoPiloto_tb_tipo_piloto", foreignKey: "idTipoPiloto"});
  tb_tipo_piloto.hasMany(tb_divisiones_pilotos, { as: "tb_divisiones_pilotos", foreignKey: "idTipoPiloto"});
  tb_parrilla_calendario.belongsTo(tb_tipo_piloto, { as: "idTipoPiloto_tb_tipo_piloto", foreignKey: "idTipoPiloto"});
  tb_tipo_piloto.hasMany(tb_parrilla_calendario, { as: "tb_parrilla_calendarios", foreignKey: "idTipoPiloto"});
  tb_asignacion_tipo_tickets.belongsTo(tb_tipo_tickets, { as: "idTipo_tb_tipo_ticket", foreignKey: "idTipo"});
  tb_tipo_tickets.hasMany(tb_asignacion_tipo_tickets, { as: "tb_asignacion_tipo_tickets", foreignKey: "idTipo"});
  tb_tickets.belongsTo(tb_tipo_tickets, { as: "idTipoTicket_tb_tipo_ticket", foreignKey: "idTipoTicket"});
  tb_tipo_tickets.hasMany(tb_tickets, { as: "tb_tickets", foreignKey: "idTipoTicket"});
  tb_torneos.belongsTo(tb_tipo_torneo, { as: "idTipoTorneo_tb_tipo_torneo", foreignKey: "idTipoTorneo"});
  tb_tipo_torneo.hasMany(tb_torneos, { as: "tb_torneos", foreignKey: "idTipoTorneo"});
  tb_elo_variacion.belongsTo(tb_tipo_variacion_rank, { as: "idVariacion_tb_tipo_variacion_rank", foreignKey: "idVariacion"});
  tb_tipo_variacion_rank.hasMany(tb_elo_variacion, { as: "tb_elo_variacions", foreignKey: "idVariacion"});
  tb_licencias_variacion.belongsTo(tb_tipo_variacion_rank, { as: "idVariacion_tb_tipo_variacion_rank", foreignKey: "idVariacion"});
  tb_tipo_variacion_rank.hasMany(tb_licencias_variacion, { as: "tb_licencias_variacions", foreignKey: "idVariacion"});
  tb_sr_variacion.belongsTo(tb_tipo_variacion_rank, { as: "idVariacion_tb_tipo_variacion_rank", foreignKey: "idVariacion"});
  tb_tipo_variacion_rank.hasMany(tb_sr_variacion, { as: "tb_sr_variacions", foreignKey: "idVariacion"});
  tb_plantillas_graficos.belongsTo(tb_tipos_graficos, { as: "idTipoGrafico_tb_tipos_grafico", foreignKey: "idTipoGrafico"});
  tb_tipos_graficos.hasMany(tb_plantillas_graficos, { as: "tb_plantillas_graficos", foreignKey: "idTipoGrafico"});
  tb_calendario.belongsTo(tb_tipos_transmisiones, { as: "idTipoTransmision_tb_tipos_transmisione", foreignKey: "idTipoTransmision"});
  tb_tipos_transmisiones.hasMany(tb_calendario, { as: "tb_calendarios", foreignKey: "idTipoTransmision"});
  tb_banner_patrocinadores.belongsTo(tb_torneos, { as: "idTorneo_tb_torneo", foreignKey: "idTorneo"});
  tb_torneos.hasMany(tb_banner_patrocinadores, { as: "tb_banner_patrocinadores", foreignKey: "idTorneo"});
  tb_comunicados.belongsTo(tb_torneos, { as: "idTorneo_tb_torneo", foreignKey: "idTorneo"});
  tb_torneos.hasMany(tb_comunicados, { as: "tb_comunicados", foreignKey: "idTorneo"});
  tb_divisiones.belongsTo(tb_torneos, { as: "idTorneo_tb_torneo", foreignKey: "idTorneo"});
  tb_torneos.hasMany(tb_divisiones, { as: "tb_divisiones", foreignKey: "idTorneo"});
  tb_inscripciones.belongsTo(tb_torneos, { as: "idTorneo_tb_torneo", foreignKey: "idTorneo"});
  tb_torneos.hasMany(tb_inscripciones, { as: "tb_inscripciones", foreignKey: "idTorneo"});
  tb_opcion_clasificatorios_torneo.belongsTo(tb_torneos, { as: "idTorneo_tb_torneo", foreignKey: "idTorneo"});
  tb_torneos.hasMany(tb_opcion_clasificatorios_torneo, { as: "tb_opcion_clasificatorios_torneos", foreignKey: "idTorneo"});
  tb_simcodplat_torneo.belongsTo(tb_torneos, { as: "idTorneo_tb_torneo", foreignKey: "idTorneo"});
  tb_torneos.hasMany(tb_simcodplat_torneo, { as: "tb_simcodplat_torneos", foreignKey: "idTorneo"});
  tb_contenido_grafico.belongsTo(tb_webhooks_discord, { as: "idWebhook_tb_webhooks_discord", foreignKey: "idWebhook"});
  tb_webhooks_discord.hasMany(tb_contenido_grafico, { as: "tb_contenido_graficos", foreignKey: "idWebhook"});
  tb_notificaciones_discord.belongsTo(tb_webhooks_discord, { as: "idwebhook_tb_webhooks_discord", foreignKey: "idwebhook"});
  tb_webhooks_discord.hasMany(tb_notificaciones_discord, { as: "tb_notificaciones_discords", foreignKey: "idwebhook"});

  return {
    tb_reglas_torneos,
    tb_analisis_stint,
    tb_asignacion_comisario,
    tb_asignacion_tipo_tickets,
    tb_banner_patrocinadores,
    tb_banners_menu,
    tb_calendario_clasificatorios,
    tb_calendario,
    tb_cat_coches,
    tb_cat_piloto,
    tb_categoria_elo,
    tb_coches,
    tb_coches_sim,
    tb_cod_plataforma,
    tb_cod_sim_clasificatorio,
    tb_codificacion_divisiones,
    tb_codificacion_resultados,
    tb_comunicados,
    tb_conceptos_comisarios,
    tb_contenido_grafico,
    tb_descargos_involucrados,
    tb_divisiones,
    tb_divisiones_pilotos,
    tb_elo_actual,
    tb_elo_variacion,
    tb_equipos,
    tb_equipos_sim,
    tb_estado_carrera,
    tb_estado_clasificatorios,
    tb_estado_general,
    tb_estado_inscripcion,
    tb_estado_penalizaciones,
    tb_estado_reportes,
    tb_estado_ticket,
    tb_estado_torneos,
    tb_etapas_calendario,
    tb_eventos_clasificatorios,
    tb_evidencias_reportes,
    tb_formato_carrera,
    tb_fotos_pilotos,
    tb_gravedad_sancion,
    tb_grupo_coches_personalizado,
    tb_grupo_equipos,
    tb_historial_vueltas,
    tb_ident_pos,
    tb_ident_pos_sim_preq,
    tb_indicador_cumplimiento_torneo,
    tb_info_calculo_resultados,
    tb_info_clasificatorios,
    tb_inscripcion_clasificatorios,
    tb_inscripciones,
    tb_insignias_discord,
    tb_insignias_pilotos,
    tb_involucrados_sanciones,
    tb_licencias_pilotos,
    tb_licencias_variacion,
    tb_ligas,
    tb_marcas_coches,
    tb_marcas_mando,
    tb_mensajes_ticket,
    tb_metodologias_clasificatorio,
    tb_neumaticos,
    tb_neumaticos_sim,
    tb_nombre_grupo_coches_personalizado,
    tb_nombre_grupo_equipos,
    tb_notificaciones,
    tb_notificaciones_discord,
    tb_opcion_clasificatorios_torneo,
    tb_opciones_respuesta,
    tb_orientacion_pista,
    tb_paises,
    tb_parrilla_calendario,
    tb_participaciones,
    tb_penalizacion_sanciones,
    tb_pilotos,
    tb_pilotos_id_sim,
    tb_pilotos_liga,
    tb_pilotos_penalizados,
    tb_pistas,
    tb_pistas_sim,
    tb_pistas_variantes,
    tb_plantillas_graficos,
    tb_plataforma,
    tb_pregunta_inscripcion,
    tb_puntos,
    tb_records_pistas,
    tb_records_por_piloto,
    tb_reparto_puntos,
    tb_repeticiones,
    tb_reportes_comisarios,
    tb_resultados,
    tb_resultados_clasificatorios,
    tb_resultados_eventos_clasificatorios,
    tb_resultados_subtramos,
    tb_rol_involucrados,
    tb_roles,
    tb_roles_discord_pilotos,
    tb_roles_pilotos,
    tb_sesiones,
    tb_sim_plat_codplat,
    tb_sim_version,
    tb_simcodplat_torneo,
    tb_simulador,
    tb_sistema_puntos,
    tb_sr_actual,
    tb_sr_variacion,
    tb_subtramos,
    tb_tabla_posiciones,
    tb_tabla_sanciones,
    tb_tabla_sanciones_sim,
    tb_tickets,
    tb_tipo_fotos,
    tb_tipo_licencias,
    tb_tipo_mando,
    tb_tipo_notificacion,
    tb_tipo_penalizacion,
    tb_tipo_piloto,
    tb_tipo_tickets,
    tb_tipo_torneo,
    tb_tipo_variacion_rank,
    tb_tipos_graficos,
    tb_tipos_transmisiones,
    tb_torneos,
    tb_webhooks_discord,
  };
}


module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
