const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_notificaciones_discord', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idwebhook: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_webhooks_discord',
        key: 'id'
      }
    },
    mensaje: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isEnviado: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_notificaciones_discord',
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
        name: "fk_tb_notificaciones_discord_tb_webhooks_discord1_idx",
        using: "BTREE",
        fields: [
          { name: "idwebhook" },
        ]
      },
    ]
  });
};
