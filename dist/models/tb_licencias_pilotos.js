const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_licencias_pilotos', {
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
    idCategoriaELO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_categoria_elo',
        key: 'id'
      }
    },
    idLicencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_tipo_licencias',
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
    tableName: 'tb_licencias_pilotos',
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
        name: "idPiloto",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPiloto" },
          { name: "idSimulador" },
          { name: "idCategoriaELO" },
        ]
      },
      {
        name: "fk_tb_elo_actual_tb_pilotos1_idx",
        using: "BTREE",
        fields: [
          { name: "idPiloto" },
        ]
      },
      {
        name: "fk_tb_elo_actual_tb_simulador1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
        ]
      },
      {
        name: "fk_tb_elo_actual_tb_categoria_elo1_idx",
        using: "BTREE",
        fields: [
          { name: "idCategoriaELO" },
        ]
      },
      {
        name: "fk_tb_licencias_pilotos_tb_tipo_licencias1_idx",
        using: "BTREE",
        fields: [
          { name: "idLicencia" },
        ]
      },
    ]
  });
};
