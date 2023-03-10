const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_resultados', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idCalendario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_calendario',
        key: 'id'
      }
    },
    idInscripcion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_inscripciones',
        key: 'id'
      }
    },
    idNombreDivision: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_divisiones',
        key: 'id'
      }
    },
    idDivision: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_divisiones_pilotos',
        key: 'id'
      }
    },
    idPiloto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_pilotos',
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
    idSimVersion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_sim_version',
        key: 'id'
      }
    },
    idCocheSim: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_coches_sim',
        key: 'id'
      }
    },
    idEquipoSim: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_equipos_sim',
        key: 'id'
      }
    },
    idPosicion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_ident_pos',
        key: 'id'
      }
    },
    idCategoriaELO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_categoria_elo',
        key: 'id'
      }
    },
    numeroDeVueltas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    msTiempoTotal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    msDiferencia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    msParadasBox: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    msMejorVuelta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    msTiempoQualy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    posicionELO: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PosSalida: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    posGanadas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    observaciones: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    idRegExt: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    eloAnterior: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    variacionELO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nuevoELO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    anteriorSR: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    variacionSR: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    nuevoSR: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
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
    incidentesCarrera: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    curvasTotales: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    indiceSR: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    licenciaActual: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    licenciaFactorSR: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    licenciaImpulsoSR: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    licenciaMaximoSR: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    licenciaMinimoSR: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    licenciaBonificacionSR: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_resultados',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_tb_resultados_tb_calendario1_idx",
        using: "BTREE",
        fields: [
          { name: "idCalendario" },
        ]
      },
      {
        name: "fk_tb_resultados_tb_inscripciones1_idx",
        using: "BTREE",
        fields: [
          { name: "idInscripcion" },
        ]
      },
      {
        name: "fk_tb_resultados_tb_divisiones1_idx",
        using: "BTREE",
        fields: [
          { name: "idNombreDivision" },
        ]
      },
      {
        name: "fk_tb_resultados_tb_pilotos1_idx",
        using: "BTREE",
        fields: [
          { name: "idPiloto" },
        ]
      },
      {
        name: "fk_tb_resultados_tb_sim_version1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimVersion" },
        ]
      },
      {
        name: "fk_tb_resultados_tb_coches_sim1_idx",
        using: "BTREE",
        fields: [
          { name: "idCocheSim" },
        ]
      },
      {
        name: "fk_tb_resultados_tb_equipos_sim1_idx",
        using: "BTREE",
        fields: [
          { name: "idEquipoSim" },
        ]
      },
      {
        name: "fk_tb_resultados_tb_divisiones2_idx",
        using: "BTREE",
        fields: [
          { name: "idDivision" },
        ]
      },
      {
        name: "fk_tb_resultados_tb_ident_pos1_idx",
        using: "BTREE",
        fields: [
          { name: "idPosicion" },
        ]
      },
      {
        name: "fk_tb_resultados_tb_simulador1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
        ]
      },
      {
        name: "fk_tb_resultados_tb_categoria_elo1_idx",
        using: "BTREE",
        fields: [
          { name: "idCategoriaELO" },
        ]
      },
    ]
  });
};
