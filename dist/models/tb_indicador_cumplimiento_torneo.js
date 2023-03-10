const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_indicador_cumplimiento_torneo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idDivision: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_divisiones',
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
    carrerasProgramadas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    carrerasCompletadas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    indiceCumplimiento: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      defaultValue: 0.00
    },
    afectaIndice: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tb_indicador_cumplimiento_torneo',
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
        name: "idDivision",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idDivision" },
          { name: "idPiloto" },
        ]
      },
      {
        name: "fk_tb_indicador_cumplimiento_torneo_tb_divisiones1_idx",
        using: "BTREE",
        fields: [
          { name: "idDivision" },
        ]
      },
      {
        name: "fk_tb_indicador_cumplimiento_torneo_tb_pilotos1_idx",
        using: "BTREE",
        fields: [
          { name: "idPiloto" },
        ]
      },
      {
        name: "fk_tb_indicador_cumplimiento_torneo_tb_simulador1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
        ]
      },
    ]
  });
};
