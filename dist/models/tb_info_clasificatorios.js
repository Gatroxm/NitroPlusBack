const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_info_clasificatorios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idSimulador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_simulador',
        key: 'id'
      }
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fechaInicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fechaFin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    infoMetodo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idEstado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_estado_clasificatorios',
        key: 'id'
      }
    },
    idLicencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_tipo_licencias',
        key: 'id'
      }
    },
    asignaLicencia: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    idCategoriaElo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_categoria_elo',
        key: 'id'
      }
    },
    inicialSR: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    eloBase: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eloMin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eloMax: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RangoEloTiempoMsMin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RangoEloTiempoMsMax: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idMetodologiaCalculo: {
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
    },
    fechaActualizacion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_info_clasificatorios',
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
        name: "fk_tb_info_preclasificatorios_tb_estado_preclasificatorios1_idx",
        using: "BTREE",
        fields: [
          { name: "idEstado" },
        ]
      },
      {
        name: "fk_tb_info_preclasificatorios_tb_metodologias_prequaly1_idx",
        using: "BTREE",
        fields: [
          { name: "idMetodologiaCalculo" },
        ]
      },
      {
        name: "fk_tb_info_preclasificatorios_tb_simulador1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
        ]
      },
      {
        name: "fk_tb_info_clasificatorios_tb_categoria_elo1_idx",
        using: "BTREE",
        fields: [
          { name: "idCategoriaElo" },
        ]
      },
      {
        name: "fk_tb_info_clasificatorios_tb_licencias1_idx",
        using: "BTREE",
        fields: [
          { name: "idLicencia" },
        ]
      },
    ]
  });
};
