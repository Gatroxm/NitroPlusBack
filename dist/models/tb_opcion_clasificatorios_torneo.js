const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_opcion_clasificatorios_torneo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idTorneo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_torneos',
        key: 'idTorneo'
      }
    },
    idClasificatorio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_info_clasificatorios',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_opcion_clasificatorios_torneo',
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
        name: "fk_tb_preclasificatorios_torneo_tb_torneos1_idx",
        using: "BTREE",
        fields: [
          { name: "idTorneo" },
        ]
      },
      {
        name: "fk_tb_preclasificatorios_torneo_tb_info_preclasificatorios1_idx",
        using: "BTREE",
        fields: [
          { name: "idClasificatorio" },
        ]
      },
    ]
  });
};
