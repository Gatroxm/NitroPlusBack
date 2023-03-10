const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_pistas_sim', {
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
    idPistaVariante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_pistas_variantes',
        key: 'id'
      }
    },
    idTrackSim: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imgOnboard: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imgPanoramico: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imgOntrack: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mp4Intro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mp4Onboard: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isDLC_or_MOD: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    idEstado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: {
        model: 'tb_estado_general',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_pistas_sim',
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
        name: "fk_tb_pistas_tb_simulador1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
        ]
      },
      {
        name: "fk_tb_pistas_tb_pistas_variantes1_idx",
        using: "BTREE",
        fields: [
          { name: "idPistaVariante" },
        ]
      },
      {
        name: "fk_tb_pistas_sim_tb_estado_general1_idx",
        using: "BTREE",
        fields: [
          { name: "idEstado" },
        ]
      },
    ]
  });
};
