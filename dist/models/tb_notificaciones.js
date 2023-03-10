const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_notificaciones', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idTipoNotificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_tipo_notificacion',
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
    texto: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    esleido: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'tb_notificaciones',
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
        name: "fk_tb_notificaciones_tb_tipo_notificacion1_idx",
        using: "BTREE",
        fields: [
          { name: "idTipoNotificacion" },
        ]
      },
      {
        name: "fk_tb_notificaciones_tb_pilotos1_idx",
        using: "BTREE",
        fields: [
          { name: "idPiloto" },
        ]
      },
    ]
  });
};
