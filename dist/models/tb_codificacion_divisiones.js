const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_codificacion_divisiones', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idDivision: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_divisiones',
        key: 'id'
      }
    },
    idCodificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_codificacion_resultados',
        key: 'idCodificacion'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_codificacion_divisiones',
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
        name: "fk_tb_codificacion_divisiones_tb_divisiones1_idx",
        using: "BTREE",
        fields: [
          { name: "idDivision" },
        ]
      },
      {
        name: "fk_tb_codificacion_divisiones_tb_codificacion_resultados1_idx",
        using: "BTREE",
        fields: [
          { name: "idCodificacion" },
        ]
      },
    ]
  });
};
