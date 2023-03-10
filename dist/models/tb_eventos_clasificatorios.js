const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_eventos_clasificatorios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idInfoClasificatorio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_info_clasificatorios',
        key: 'id'
      }
    },
    idCocheSim: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_coches_sim',
        key: 'id'
      }
    },
    idPistaSim: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_pistas_sim',
        key: 'id'
      }
    },
    idEstado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_estado_clasificatorios',
        key: 'id'
      }
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Instrucciones: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    infoMetodo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    vueltasRequeridas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    neumaticoRequerido: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_neumaticos_sim',
        key: 'id'
      }
    },
    idMetodoCalculo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_metodologias_clasificatorio',
        key: 'id'
      }
    },
    fechaCreacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tb_eventos_clasificatorios',
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
        name: "fk_tb_preclasificatorio_tb_info_preclasificatorios1_idx",
        using: "BTREE",
        fields: [
          { name: "idInfoClasificatorio" },
        ]
      },
      {
        name: "fk_tb_preclasificatorio_tb_coches_sim1_idx",
        using: "BTREE",
        fields: [
          { name: "idCocheSim" },
        ]
      },
      {
        name: "fk_tb_preclasificatorio_tb_pistas_sim1_idx",
        using: "BTREE",
        fields: [
          { name: "idPistaSim" },
        ]
      },
      {
        name: "fk_tb_eventos_preclasificatorio_tb_estado_preclasificatorio_idx",
        using: "BTREE",
        fields: [
          { name: "idEstado" },
        ]
      },
      {
        name: "fk_tb_eventos_preclasificatorio_tb_neumaticos_sim1_idx",
        using: "BTREE",
        fields: [
          { name: "neumaticoRequerido" },
        ]
      },
      {
        name: "fk_tb_eventos_preclasificatorio_tb_metodologias_prequaly1_idx",
        using: "BTREE",
        fields: [
          { name: "idMetodoCalculo" },
        ]
      },
    ]
  });
};
