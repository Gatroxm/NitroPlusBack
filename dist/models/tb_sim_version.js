const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_sim_version', {
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
    idPlataforma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_plataforma',
        key: 'id'
      }
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: true
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
    tableName: 'tb_sim_version',
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
        name: "fk_tb_sim_version_tb_simulador1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
        ]
      },
      {
        name: "fk_tb_sim_version_tb_plataforma1_idx",
        using: "BTREE",
        fields: [
          { name: "idPlataforma" },
        ]
      },
      {
        name: "fk_tb_sim_version_tb_estado_general1_idx",
        using: "BTREE",
        fields: [
          { name: "idEstado" },
        ]
      },
    ]
  });
};
