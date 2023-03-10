const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_elo_variacion', {
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
    idCategoriaELO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_categoria_elo',
        key: 'id'
      }
    },
    valor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nuevoElo: {
      type: DataTypes.INTEGER,
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
    idPreclasificatorio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_info_clasificatorios',
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
    tableName: 'tb_elo_variacion',
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
        name: "variacio",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPiloto" },
          { name: "idSimulador" },
          { name: "idVariacion" },
          { name: "idCalendario" },
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
        name: "fk_tb_elo_variacion_tb_elo_tipo_variacion1_idx",
        using: "BTREE",
        fields: [
          { name: "idVariacion" },
        ]
      },
      {
        name: "fk_tb_elo_variacion_tb_categoria_elo1_idx",
        using: "BTREE",
        fields: [
          { name: "idCategoriaELO" },
        ]
      },
      {
        name: "fk_tb_elo_variacion_tb_info_clasificatorios1_idx",
        using: "BTREE",
        fields: [
          { name: "idPreclasificatorio" },
        ]
      },
    ]
  });
};
