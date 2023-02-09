const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_pistas_variantes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    variante: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    longitud_metros: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    noDeCurvas: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    idPistaPrincipal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_pistas',
        key: 'id'
      }
    },
    imgMapa: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    idEstado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: {
        model: 'tb_estado_general',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_pistas_variantes',
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
        name: "fk_tb_pistas_tb_pistas_principal1_idx",
        using: "BTREE",
        fields: [
          { name: "idPistaPrincipal" },
        ]
      },
      {
        name: "fk_tb_pistas_variantes_tb_estado_general1_idx",
        using: "BTREE",
        fields: [
          { name: "idEstado" },
        ]
      },
    ]
  });
};
