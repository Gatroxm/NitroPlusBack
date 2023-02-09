const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_roles_pilotos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idRol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_roles',
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
    idEstado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_estado_general',
        key: 'id'
      }
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tb_roles_pilotos',
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
        name: "fk_tb_roles_pilotos_tb_roles1_idx",
        using: "BTREE",
        fields: [
          { name: "idRol" },
        ]
      },
      {
        name: "fk_tb_roles_pilotos_tb_pilotos1_idx",
        using: "BTREE",
        fields: [
          { name: "idPiloto" },
        ]
      },
      {
        name: "fk_tb_roles_pilotos_tb_estado_general1_idx",
        using: "BTREE",
        fields: [
          { name: "idEstado" },
        ]
      },
    ]
  });
};
