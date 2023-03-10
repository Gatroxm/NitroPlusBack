const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_plantillas_graficos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idTipoGrafico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_tipos_graficos',
        key: 'id'
      }
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    plantillaPHP: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fondoPNG: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_plantillas_graficos',
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
        name: "fk_tb_plantillas_graficos_tb_tipos_graficos1_idx",
        using: "BTREE",
        fields: [
          { name: "idTipoGrafico" },
        ]
      },
    ]
  });
};
