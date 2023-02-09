const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_sim_data_sesion', {
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
    identificadorSesionSim: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "identificadorSesionSim_UNIQUE"
    },
    idSesionSim: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    idTrackSim: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    file_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    version: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    track_conf: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    totalLaps: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idPreclasificatorio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_eventos_preclasificatorio',
        key: 'id'
      }
    },
    idCalendario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_calendario',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_sim_data_sesion',
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
        name: "identificadorSesionSim_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "identificadorSesionSim" },
        ]
      },
      {
        name: "fk_tb_sim_sesiones_tb_simulador1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
        ]
      },
      {
        name: "fk_tb_sim_sesiones_tb_preclasificatorio1_idx",
        using: "BTREE",
        fields: [
          { name: "idPreclasificatorio" },
        ]
      },
      {
        name: "fk_tb_sim_sesiones_tb_calendario1_idx",
        using: "BTREE",
        fields: [
          { name: "idCalendario" },
        ]
      },
    ]
  });
};
