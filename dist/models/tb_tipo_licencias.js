const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_tipo_licencias', {
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
    nivelLicencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    logo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    requisitoSR: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    requisitoELO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    requisitoCarreras: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    requisitoParticipacion: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    factorSR: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    impulsoSR: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    maximoSR: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    minimoSR: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    bonificacionSR: {
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
    },
    idRoleDiscord: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_tipo_licencias',
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
        name: "fk_tb_licencias_tb_simulador1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
        ]
      },
    ]
  });
};
