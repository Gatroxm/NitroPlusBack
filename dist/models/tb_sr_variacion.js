const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_sr_variacion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    idVariacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_tipo_variacion_rank',
        key: 'id'
      }
    },
    valor: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    nuevoSR: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idCalendario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_calendario',
        key: 'id'
      }
    },
    idPenalizado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_pilotos_penalizados',
        key: 'id'
      }
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
    tableName: 'tb_sr_variacion',
    hasTrigger: true,
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
        name: "fk_tb_elo_variacion_tb_pilotos1_idx",
        using: "BTREE",
        fields: [
          { name: "idPiloto" },
        ]
      },
      {
        name: "fk_tb_elo_variacion_tb_simulador1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
        ]
      },
      {
        name: "fk_tb_elo_variacion_tb_calendario1_idx",
        using: "BTREE",
        fields: [
          { name: "idCalendario" },
        ]
      },
      {
        name: "fk_tb_sa_variacion_tb_pilotos_penalizados1_idx",
        using: "BTREE",
        fields: [
          { name: "idPenalizado" },
        ]
      },
      {
        name: "fk_tb_sr_variacion_tb_tipo_variacion_rank1_idx",
        using: "BTREE",
        fields: [
          { name: "idVariacion" },
        ]
      },
    ]
  });
};
