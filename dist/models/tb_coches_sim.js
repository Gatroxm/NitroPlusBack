const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_coches_sim', {
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
    idCoche: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_coches',
        key: 'id'
      }
    },
    idCocheSim: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    isDLC: {
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
    tableName: 'tb_coches_sim',
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
        name: "fk_tb_coches_sim_tb_coches1_idx",
        using: "BTREE",
        fields: [
          { name: "idCoche" },
        ]
      },
      {
        name: "fk_tb_coches_sim_tb_simulador1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
        ]
      },
      {
        name: "fk_tb_coches_sim_tb_estado_general1_idx",
        using: "BTREE",
        fields: [
          { name: "idEstado" },
        ]
      },
    ]
  });
};
