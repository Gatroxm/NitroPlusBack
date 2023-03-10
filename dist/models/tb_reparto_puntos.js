const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_reparto_puntos', {
    idAsginacionResultado: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idResultado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_resultados',
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
    },
    idPuntos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_puntos',
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
    tableName: 'tb_reparto_puntos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAsginacionResultado" },
        ]
      },
      {
        name: "UnicoRepartoPuntos",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idResultado" },
          { name: "idCodificacion" },
          { name: "idPuntos" },
        ]
      },
      {
        name: "fk_tb_reparto_puntos_tb_resultados1_idx",
        using: "BTREE",
        fields: [
          { name: "idResultado" },
        ]
      },
      {
        name: "fk_tb_reparto_puntos_tb_codificacion_resultados1_idx",
        using: "BTREE",
        fields: [
          { name: "idCodificacion" },
        ]
      },
      {
        name: "fk_tb_reparto_puntos_tb_puntos1_idx",
        using: "BTREE",
        fields: [
          { name: "idPuntos" },
        ]
      },
    ]
  });
};
