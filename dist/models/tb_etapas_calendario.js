const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_etapas_calendario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idCalendario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_calendario',
        key: 'id'
      }
    },
    idSubtramo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_subtramos',
        key: 'id'
      }
    },
    infoAdicional: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_etapas_calendario',
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
        name: "fk_tb_stage_calendario_tb_calendario1_idx",
        using: "BTREE",
        fields: [
          { name: "idCalendario" },
        ]
      },
      {
        name: "fk_tb_etapas_calendario_tb_subtramos1_idx",
        using: "BTREE",
        fields: [
          { name: "idSubtramo" },
        ]
      },
    ]
  });
};
