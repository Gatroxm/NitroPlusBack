const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_info_calculo_resultados', {
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
    idCalendario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_calendario',
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
    noParticipantes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isRanked: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    limiteRanked: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    multiplicadorElo: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    afectaSR: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    afectaParticipacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    observaciones: {
      type: DataTypes.STRING(60),
      allowNull: true
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
    tableName: 'tb_info_calculo_resultados',
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
        name: "fk_tb_info_elo_tb_simulador1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
        ]
      },
      {
        name: "fk_tb_info_elo_tb_calendario1_idx",
        using: "BTREE",
        fields: [
          { name: "idCalendario" },
        ]
      },
      {
        name: "fk_tb_info_elo_tb_categoria_elo1_idx",
        using: "BTREE",
        fields: [
          { name: "idCategoriaELO" },
        ]
      },
    ]
  });
};
