const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_conceptos_comisarios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idReporte: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_reportes_comisarios',
        key: 'id'
      }
    },
    idAsignacionComisario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_asignacion_comisario',
        key: 'id'
      }
    },
    idSancion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_tabla_sanciones',
        key: 'id'
      }
    },
    idGravedad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_gravedad_sancion',
        key: 'id'
      }
    },
    concepto: {
      type: DataTypes.TEXT,
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
    },
    id_ref_ext_concepto: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_conceptos_comisarios',
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
        name: "fk_tb_conceptos_comisario_base_tb_reportes_comisarios1_idx",
        using: "BTREE",
        fields: [
          { name: "idReporte" },
        ]
      },
      {
        name: "fk_tb_conceptos_comisario_base_tb_tabla_sanciones1_idx",
        using: "BTREE",
        fields: [
          { name: "idSancion" },
        ]
      },
      {
        name: "fk_tb_conceptos_comisario_base_tb_gravedad_sancion1_idx",
        using: "BTREE",
        fields: [
          { name: "idGravedad" },
        ]
      },
      {
        name: "fk_tb_conceptos_comisario_base_tb_asignacion_comisario1_idx",
        using: "BTREE",
        fields: [
          { name: "idAsignacionComisario" },
        ]
      },
    ]
  });
};
