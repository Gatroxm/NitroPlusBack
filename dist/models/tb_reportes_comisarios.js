const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_reportes_comisarios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idCalendario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_calendario',
        key: 'id'
      }
    },
    idEstadoReporte: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_estado_reportes',
        key: 'id'
      }
    },
    noVuelta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_ref_ext_reporte: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    fechaReporte: {
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
    tableName: 'tb_reportes_comisarios',
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
        name: "fk_tb_reportes_comisarios_tb_calendario1_idx",
        using: "BTREE",
        fields: [
          { name: "idCalendario" },
        ]
      },
      {
        name: "fk_tb_reportes_comisarios_tb_estado_reportes1_idx",
        using: "BTREE",
        fields: [
          { name: "idEstadoReporte" },
        ]
      },
    ]
  });
};
