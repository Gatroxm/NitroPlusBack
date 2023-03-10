const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_subtramos', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idPistaSim: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_pistas_sim',
        key: 'id'
      }
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idOrientacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_orientacion_pista',
        key: 'id'
      }
    },
    longitudMetros: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idCoche: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_coches_sim',
        key: 'id'
      }
    },
    idResultado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_resultados_subtramos',
        key: 'id'
      }
    },
    idPiloto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_pilotos',
        key: 'id'
      }
    },
    valorMs: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_subtramos',
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
        name: "fk_tb_subtramos_tb_pistas_sim1_idx",
        using: "BTREE",
        fields: [
          { name: "idPistaSim" },
        ]
      },
      {
        name: "fk_tb_subtramos_tb_orientacion_pista1_idx",
        using: "BTREE",
        fields: [
          { name: "idOrientacion" },
        ]
      },
      {
        name: "fk_tb_subtramos_tb_coches_sim1_idx",
        using: "BTREE",
        fields: [
          { name: "idCoche" },
        ]
      },
      {
        name: "fk_tb_subtramos_tb_resultados_subtramos1_idx",
        using: "BTREE",
        fields: [
          { name: "idResultado" },
        ]
      },
      {
        name: "fk_tb_subtramos_tb_pilotos1_idx",
        using: "BTREE",
        fields: [
          { name: "idPiloto" },
        ]
      },
    ]
  });
};
