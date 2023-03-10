const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_torneos', {
    idTorneo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idEstadoTorneo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_estado_torneos',
        key: 'id'
      }
    },
    idLiga: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_ligas',
        key: 'id'
      }
    },
    idTipoTorneo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_tipo_torneo',
        key: 'id'
      }
    },
    idCocheSimPermitido: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_coches_sim',
        key: 'id'
      }
    },
    idMarcaCochePermitida: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_marcas_coches',
        key: 'id'
      }
    },
    idCategoriaCochePermitida: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_cat_coches',
        key: 'id'
      }
    },
    idGrupoCochePersonalizado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_nombre_grupo_coches_personalizado',
        key: 'id'
      }
    },
    idGrupoEquipoPersonalizado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_nombre_grupo_equipos',
        key: 'id'
      }
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imgLogo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    linkOficial: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fechaInicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fechaFin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fechaLimiteInscripcion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idRoleDiscord: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    requierePreclasificatorio: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    idPreguntaInscripcion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_pregunta_inscripcion',
        key: 'id'
      }
    },
    urlInscripcionAdicional: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    instruccionesAdicionales: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    idSimVersion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_sim_version',
        key: 'id'
      }
    },
    idSimulador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_simulador',
        key: 'id'
      }
    },
    fechaCreacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    fechaActualizacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    asignaLicencia: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    idAsignacionLicencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_tipo_licencias',
        key: 'id'
      }
    },
    limiteRanked: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    minELO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    minSR: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    minParticipaciones: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    minIndiceCumplimiento: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    maxELO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxSR: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    maxParticipaciones: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxIndiceCumplimiento: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_torneos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTorneo" },
        ]
      },
      {
        name: "fk_tb_torneos_tb_estado_torneos1_idx",
        using: "BTREE",
        fields: [
          { name: "idEstadoTorneo" },
        ]
      },
      {
        name: "fk_tb_torneos_tb_ligas1_idx",
        using: "BTREE",
        fields: [
          { name: "idLiga" },
        ]
      },
      {
        name: "fk_tb_torneos_tb_tipo_torneo1_idx",
        using: "BTREE",
        fields: [
          { name: "idTipoTorneo" },
        ]
      },
      {
        name: "fk_tb_torneos_tb_coches_sim1_idx",
        using: "BTREE",
        fields: [
          { name: "idCocheSimPermitido" },
        ]
      },
      {
        name: "fk_tb_torneos_tb_marcas_coches1_idx",
        using: "BTREE",
        fields: [
          { name: "idMarcaCochePermitida" },
        ]
      },
      {
        name: "fk_tb_torneos_tb_cat_coches1_idx",
        using: "BTREE",
        fields: [
          { name: "idCategoriaCochePermitida" },
        ]
      },
      {
        name: "fk_tb_torneos_tb_nombre_grupo_coches_personalizado1_idx",
        using: "BTREE",
        fields: [
          { name: "idGrupoCochePersonalizado" },
        ]
      },
      {
        name: "fk_tb_torneos_tb_nombre_grupo_equipos1_idx",
        using: "BTREE",
        fields: [
          { name: "idGrupoEquipoPersonalizado" },
        ]
      },
      {
        name: "fk_tb_torneos_tb_pregunta_inscripcion1_idx",
        using: "BTREE",
        fields: [
          { name: "idPreguntaInscripcion" },
        ]
      },
      {
        name: "fk_tb_torneos_tb_sim_version1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimVersion" },
        ]
      },
      {
        name: "fk_tb_torneos_tb_simulador1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
        ]
      },
      {
        name: "fk_tb_torneos_tb_tipo_licencias1_idx",
        using: "BTREE",
        fields: [
          { name: "idAsignacionLicencia" },
        ]
      },
    ]
  });
};
