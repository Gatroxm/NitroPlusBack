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
    PosSalida: {
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
    ]
  });
};
