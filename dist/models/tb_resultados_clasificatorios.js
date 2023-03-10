const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_resultados_clasificatorios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idClasificatorio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_info_clasificatorios',
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
    idSimulador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_simulador',
        key: 'id'
      }
    },
    valor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idCategoriaElo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_categoria_elo',
        key: 'id'
      }
    },
    asignaLicencia: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    valorEloInicial: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    valorSrInicial: {
      type: DataTypes.DECIMAL(4,2),
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
    tableName: 'tb_resultados_clasificatorios',
    hasTrigger: true,
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
        name: "fk_tb_resultados_preclasificatorio_tb_info_preclasificatori_idx",
        using: "BTREE",
        fields: [
          { name: "idClasificatorio" },
        ]
      },
      {
        name: "fk_tb_resultados_preclasificatorio_tb_pilotos1_idx",
        using: "BTREE",
        fields: [
          { name: "idPiloto" },
        ]
      },
      {
        name: "fk_tb_resultados_preclasificatorio_tb_simulador1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
        ]
      },
      {
        name: "fk_tb_resultados_clasificatorios_tb_categoria_elo1_idx",
        using: "BTREE",
        fields: [
          { name: "idCategoriaElo" },
        ]
      },
    ]
  });
};
