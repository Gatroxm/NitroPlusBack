const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_simcodplat_torneo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idSimCodPlat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_sim_plat_codplat',
        key: 'id'
      }
    },
    idTorneo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_torneos',
        key: 'idTorneo'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_simcodplat_torneo',
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
        name: "fk_tb_simcodplat_torneo_tb_sim_plat_codplat1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimCodPlat" },
        ]
      },
      {
        name: "fk_tb_simcodplat_torneo_tb_torneos1_idx",
        using: "BTREE",
        fields: [
          { name: "idTorneo" },
        ]
      },
    ]
  });
};
