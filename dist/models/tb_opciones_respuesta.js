const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_opciones_respuesta', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idPregunta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_pregunta_inscripcion',
        key: 'id'
      }
    },
    respuesta: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_opciones_respuesta',
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
        name: "fk_tb_opciones_respuesta_tb_pregunta_inscripcion1_idx",
        using: "BTREE",
        fields: [
          { name: "idPregunta" },
        ]
      },
    ]
  });
};
