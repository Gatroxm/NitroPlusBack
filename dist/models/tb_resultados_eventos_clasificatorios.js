const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_resultados_eventos_clasificatorios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idEventoClasificatorio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_eventos_clasificatorios',
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
    idSimDataSesion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    valor: {
      type: DataTypes.INTEGER,
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
    tableName: 'tb_resultados_eventos_clasificatorios',
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
        name: "fk_tb_eventos_prequaly_completado_tb_eventos_preclasificato_idx",
        using: "BTREE",
        fields: [
          { name: "idEventoClasificatorio" },
        ]
      },
      {
        name: "fk_tb_resultados_eventos_preclasificatorio_tb_pilotos1_idx",
        using: "BTREE",
        fields: [
          { name: "idPiloto" },
        ]
      },
    ]
  });
};
