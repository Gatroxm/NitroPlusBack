const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_ident_pos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nombreCorto: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    numPos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isParticipacion: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    isVictoria: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    isPodio: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    isDNF: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    isDSQ: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    isPole: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    isVueltaRapida: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    isPilotodelDia: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    isInasistencia: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tb_ident_pos',
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
    ]
  });
};
