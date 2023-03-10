const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_evidencias_reportes', {
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
    linkEvidencia: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fechaCreacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tb_evidencias_reportes',
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
        name: "fk_tb_evidencias_reportes_tb_involucrados_sanciones1_idx",
        using: "BTREE",
        fields: [
          { name: "idInvolucradoSancion" },
        ]
      },
    ]
  });
};
