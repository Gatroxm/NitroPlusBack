const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_sesiones_sim', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idSesion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_sesiones',
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
    idSesionSim: {
      type: DataTypes.STRING(255),
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
    tableName: 'tb_sesiones_sim',
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
        name: "Sesiones",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idSesion" },
          { name: "idSimulador" },
          { name: "idSesionSim" },
        ]
      },
      {
        name: "fk_tb_sesiones_sim_tb_sesiones1_idx",
        using: "BTREE",
        fields: [
          { name: "idSesion" },
        ]
      },
      {
        name: "fk_tb_sesiones_sim_tb_simulador1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
        ]
      },
      {
        name: "fk_tb_sesiones_sim_tb_estado_general1_idx",
        using: "BTREE",
        fields: [
          { name: "idEstado" },
        ]
      },
    ]
  });
};
