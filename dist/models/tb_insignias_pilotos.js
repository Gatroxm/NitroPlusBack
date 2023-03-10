const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_insignias_pilotos', {
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
    idInsignia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_insignias_discord',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_insignias_pilotos',
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
        name: "fk_tb_insignias_pilotos_tb_pilotos1_idx",
        using: "BTREE",
        fields: [
          { name: "idPiloto" },
        ]
      },
      {
        name: "fk_tb_insignias_pilotos_tb_insignias_discord1_idx",
        using: "BTREE",
        fields: [
          { name: "idInsignia" },
        ]
      },
    ]
  });
};
