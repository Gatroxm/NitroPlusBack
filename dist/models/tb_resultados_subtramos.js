const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_resultados_subtramos', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idEtapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_etapas_calendario',
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
    idIdentPos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_ident_pos_sim_preq',
        key: 'id'
      }
    },
    idCocheSim: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_coches_sim',
        key: 'id'
      }
    },
    tiempoMs: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gapMs: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_resultados_subtramos',
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
        name: "fk_tb_resultados_subtramos_tb_etapas_calendario1_idx",
        using: "BTREE",
        fields: [
          { name: "idEtapa" },
        ]
      },
      {
        name: "fk_tb_resultados_subtramos_tb_pilotos1_idx",
        using: "BTREE",
        fields: [
          { name: "idPiloto" },
        ]
      },
      {
        name: "fk_tb_resultados_subtramos_tb_ident_pos_sim_preq1_idx",
        using: "BTREE",
        fields: [
          { name: "idIdentPos" },
        ]
      },
      {
        name: "fk_tb_resultados_subtramos_tb_coches_sim1_idx",
        using: "BTREE",
        fields: [
          { name: "idCocheSim" },
        ]
      },
    ]
  });
};
