const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_descargos_involucrados', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idInvolucradoSancion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_involucrados_sanciones',
        key: 'id'
      }
    },
    descargo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fechaCreacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tb_descargos_involucrados',
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
        name: "fk_tb_descargos_involucrados_tb_involucrados_sanciones1_idx",
        using: "BTREE",
        fields: [
          { name: "idInvolucradoSancion" },
        ]
      },
    ]
  });
};
