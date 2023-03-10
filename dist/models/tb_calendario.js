const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_calendario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idPista: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_pistas_sim',
        key: 'id'
      }
    },
    idDivision: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_divisiones',
        key: 'id'
      }
    },
    contablilizaPuntos: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    codFecha: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    fechaNo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fechaHoraCarrera: {
      type: DataTypes.DATE,
      allowNull: false
    },
    idFormatoCarrera: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_formato_carrera',
        key: 'id'
      }
    },
    idEstadoCarrera: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_estado_carrera',
        key: 'id'
      }
    },
    idSistemaPuntos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_sistema_puntos',
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
    idCochePermitido: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_coches_sim',
        key: 'id'
      }
    },
    idEquipoPermitido: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_equipos_sim',
        key: 'id'
      }
    },
    confirmacionCreada: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    nombreEvento: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nombreEventoCorto: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    horaVirtual: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tempAire: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    tempPista: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nubosidad: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lluvia: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    idTipoTransmision: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_tipos_transmisiones',
        key: 'id'
      }
    },
    urlTransmision: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    requisitoBoxes: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    host: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    esPorEtapas: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    noVueltasRequeridas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    elo_multiplicador: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      defaultValue: 1.00
    },
    afectaELO: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    afectaSR: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    afectaParticipacion: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    afectaIndiceParticipacion: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    fechaCreacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    fechaActualizacion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_calendario',
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
        name: "fk_tb_calendario_tb_pistas_sim1_idx",
        using: "BTREE",
        fields: [
          { name: "idPista" },
        ]
      },
      {
        name: "fk_tb_calendario_tb_divisiones1_idx",
        using: "BTREE",
        fields: [
          { name: "idDivision" },
        ]
      },
      {
        name: "fk_tb_calendario_tb_formato_carrera1_idx",
        using: "BTREE",
        fields: [
          { name: "idFormatoCarrera" },
        ]
      },
      {
        name: "fk_tb_calendario_tb_estado_carrera1_idx",
        using: "BTREE",
        fields: [
          { name: "idEstadoCarrera" },
        ]
      },
      {
        name: "fk_tb_calendario_tb_sistema_puntos1_idx",
        using: "BTREE",
        fields: [
          { name: "idSistemaPuntos" },
        ]
      },
      {
        name: "fk_tb_calendario_tb_coches_sim1_idx",
        using: "BTREE",
        fields: [
          { name: "idCochePermitido" },
        ]
      },
      {
        name: "fk_tb_calendario_tb_equipos_sim1_idx",
        using: "BTREE",
        fields: [
          { name: "idEquipoPermitido" },
        ]
      },
      {
        name: "fk_tb_calendario_tb_categoria_elo1_idx",
        using: "BTREE",
        fields: [
          { name: "idCategoriaELO" },
        ]
      },
      {
        name: "fk_tb_calendario_tb_tipos_transmisiones1_idx",
        using: "BTREE",
        fields: [
          { name: "idTipoTransmision" },
        ]
      },
    ]
  });
};
