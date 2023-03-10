const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_historial_vueltas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    idPistaSim: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_pistas_sim',
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
    idCategoriaCoche: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_cat_coches',
        key: 'id'
      }
    },
    idSesion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_sesiones',
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
    idCalendario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_calendario',
        key: 'id'
      }
    },
    idNeumatico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_neumaticos_sim',
        key: 'id'
      }
    },
    vueltaNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tiempoVuelta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sector1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sector2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sector3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esValida: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stint: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lapStint: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    desgasteLlantas: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    combustibleTanque: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    speedTrap: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    networkPaused: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cambiosPosicion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    posicionCarrera: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idRegExt: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "idRegExt_UNIQUE"
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
    tableName: 'tb_historial_vueltas',
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
        name: "idRegExt_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idRegExt" },
        ]
      },
      {
        name: "idSimulador_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
          { name: "idSimVersion" },
          { name: "idPistaSim" },
          { name: "idCocheSim" },
          { name: "idCategoriaCoche" },
          { name: "idSesion" },
          { name: "idPiloto" },
          { name: "idCalendario" },
          { name: "vueltaNo" },
        ]
      },
      {
        name: "fk_tb_records_pistas_tb_simulador1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
        ]
      },
      {
        name: "fk_tb_records_pistas_tb_pistas_sim1_idx",
        using: "BTREE",
        fields: [
          { name: "idPistaSim" },
        ]
      },
      {
        name: "fk_tb_records_pistas_tb_coches_sim1_idx",
        using: "BTREE",
        fields: [
          { name: "idCocheSim" },
        ]
      },
      {
        name: "fk_tb_records_pistas_tb_cat_coches1_idx",
        using: "BTREE",
        fields: [
          { name: "idCategoriaCoche" },
        ]
      },
      {
        name: "fk_tb_records_pistas_tb_sesiones1_idx",
        using: "BTREE",
        fields: [
          { name: "idSesion" },
        ]
      },
      {
        name: "fk_tb_records_pistas_tb_pilotos1_idx",
        using: "BTREE",
        fields: [
          { name: "idPiloto" },
        ]
      },
      {
        name: "fk_tb_records_pistas_tb_calendario1_idx",
        using: "BTREE",
        fields: [
          { name: "idCalendario" },
        ]
      },
      {
        name: "fk_tb_records_pistas_tb_sim_version1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimVersion" },
        ]
      },
      {
        name: "fk_tb_records_pistas_tb_neumaticos_sim1_idx",
        using: "BTREE",
        fields: [
          { name: "idNeumatico" },
        ]
      },
      {
        name: "idSimulador",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
          { name: "idSimVersion" },
          { name: "idPistaSim" },
          { name: "idCategoriaCoche" },
          { name: "idSesion" },
          { name: "idPiloto" },
        ]
      },
    ]
  });
};
