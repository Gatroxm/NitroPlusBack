const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_puntos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idSistemaPuntos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_sistema_puntos',
        key: 'id'
      }
    },
    idIdentPos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_ident_pos',
        key: 'id'
      }
    },
    puntos: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_puntos',
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
        name: "fk_tb_puntos_tb_sistema_puntos1_idx",
        using: "BTREE",
        fields: [
          { name: "idSistemaPuntos" },
        ]
      },
      {
        name: "fk_tb_puntos_tb_ident_pos1_idx",
        using: "BTREE",
        fields: [
          { name: "idIdentPos" },
        ]
      },
    ]
  });
};
