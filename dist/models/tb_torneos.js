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
    fechaLiimiteInscripcion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idRoleDiscord: {
      type: DataTypes.STRING(45),
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
    ]
  });
};
