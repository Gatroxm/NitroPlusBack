const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_tipo_mando', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isVolante: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    idMarca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_marcas_mando',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_tipo_mando',
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
        name: "fk_tb_tipo_mando_tb_marcas_mando1_idx",
        using: "BTREE",
        fields: [
          { name: "idMarca" },
        ]
      },
    ]
  });
};
