const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_divisiones', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idTorneo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_torneos',
        key: 'idTorneo'
      }
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    imgLogo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    descDiaHora: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    idCatPred: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_cat_piloto',
        key: 'id'
      }
    },
    idTipoPred: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_tipo_piloto',
        key: 'id'
      }
    },
    idCochePred: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_coches_sim',
        key: 'id'
      }
    },
    idEquipoPred: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_equipos_sim',
        key: 'id'
      }
    },
    requiereConfirmacion: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    horasAntesConfirmacionApertura: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    horasAntesConfirmacionCierre: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    horasAntesRecordatorio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idNivelDivision: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    permiteReservas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    idRoleDiscord: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    permiteReportes: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    requiereRepeticion: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    plazoEnvioRepeticion: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    horasInicioReportes: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    horasFinReportes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    afectaIndiceParticipacion: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    idCategoriaELO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_categoria_elo',
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
    tableName: 'tb_divisiones',
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
        name: "fk_tb_divisiones_tb_torneos1_idx",
        using: "BTREE",
        fields: [
          { name: "idTorneo" },
        ]
      },
      {
        name: "fk_tb_divisiones_tb_cat_piloto1_idx",
        using: "BTREE",
        fields: [
          { name: "idCatPred" },
        ]
      },
      {
        name: "fk_tb_divisiones_tb_tipo_piloto1_idx",
        using: "BTREE",
        fields: [
          { name: "idTipoPred" },
        ]
      },
      {
        name: "fk_tb_divisiones_tb_coches_sim1_idx",
        using: "BTREE",
        fields: [
          { name: "idCochePred" },
        ]
      },
      {
        name: "fk_tb_divisiones_tb_equipos_sim1_idx",
        using: "BTREE",
        fields: [
          { name: "idEquipoPred" },
        ]
      },
      {
        name: "fk_tb_divisiones_tb_categoria_elo1_idx",
        using: "BTREE",
        fields: [
          { name: "idCategoriaELO" },
        ]
      },
    ]
  });
};
