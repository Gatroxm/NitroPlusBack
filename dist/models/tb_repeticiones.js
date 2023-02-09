const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_repeticiones', {
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
    idPiloto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_pilotos',
        key: 'id'
      }
    },
    segBanderaVerde: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    link_video: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fechaCreado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_repeticiones',
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
        name: "fk_tb_repeticiones_tb_calendario1_idx",
        using: "BTREE",
        fields: [
          { name: "idCalendario" },
        ]
      },
      {
        name: "fk_tb_repeticiones_tb_pilotos1_idx",
        using: "BTREE",
        fields: [
          { name: "idPiloto" },
        ]
      },
    ]
  });
};
