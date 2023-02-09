const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_tabla_sanciones_sim', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idSancion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_tabla_sanciones',
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
    idSimSancion: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    idEstado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: {
        model: 'tb_estado_penalizaciones',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_tabla_sanciones_sim',
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
        name: "fk_tb_tabla_sanciones_sim_tb_tabla_sanciones1_idx",
        using: "BTREE",
        fields: [
          { name: "idSancion" },
        ]
      },
      {
        name: "fk_tb_tabla_sanciones_sim_tb_simulador1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
        ]
      },
      {
        name: "fk_tb_tabla_sanciones_sim_tb_estado_penalizaciones1_idx",
        using: "BTREE",
        fields: [
          { name: "idEstado" },
        ]
      },
    ]
  });
};
