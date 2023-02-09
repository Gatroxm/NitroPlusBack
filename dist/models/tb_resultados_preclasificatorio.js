const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_resultados_preclasificatorio', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idInscripcionPreclasficatorio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_inscripcion_preclasificatorio',
        key: 'id'
      }
    },
    idEventoPreclasificatorio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_eventos_preclasificatorio',
        key: 'id'
      }
    },
    idSimDataSesion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_sim_data_sesion',
        key: 'id'
      }
    },
    esvalido: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    valor: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_resultados_preclasificatorio',
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
        name: "fk_tb_eventos_prequaly_completado_tb_inscripcion_preclasifi_idx",
        using: "BTREE",
        fields: [
          { name: "idInscripcionPreclasficatorio" },
        ]
      },
      {
        name: "fk_tb_eventos_prequaly_completado_tb_eventos_preclasificato_idx",
        using: "BTREE",
        fields: [
          { name: "idEventoPreclasificatorio" },
        ]
      },
      {
        name: "fk_tb_eventos_prequaly_completado_tb_sim_data_sesiones1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimDataSesion" },
        ]
      },
    ]
  });
};
