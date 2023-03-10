const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_pilotos_penalizados', {
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
    idPenalizacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_penalizacion_sanciones',
        key: 'id'
      }
    },
    idRolComisarioSancion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_asignacion_comisario',
        key: 'id'
      }
    },
    observacion: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    tableName: 'tb_pilotos_penalizados',
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
        name: "fk_tb_pilotos_penalizados_tb_involucrados_sanciones1_idx",
        using: "BTREE",
        fields: [
          { name: "idInvolucradoSancion" },
        ]
      },
      {
        name: "fk_tb_pilotos_penalizados_tb_penalizacion_sanciones1_idx",
        using: "BTREE",
        fields: [
          { name: "idPenalizacion" },
        ]
      },
      {
        name: "fk_tb_pilotos_penalizados_tb_asignacion_comisario1_idx",
        using: "BTREE",
        fields: [
          { name: "idRolComisarioSancion" },
        ]
      },
    ]
  });
};
