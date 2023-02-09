const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_resultados_sim', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idSimDataSesion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_sim_data_sesion',
        key: 'id'
      }
    },
    idCocheSim: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idEquipoSim: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idResultadoSesionSim: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "idSesionSim_UNIQUE"
    },
    idSimPiloto: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idSimPosicion: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    msMejorVuelta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    msMejorS1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    msMejorS2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    msMejorS3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    msTiempoTotal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    noVueltas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    missing_mandatory_pitstop: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    posSalida: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numPitStops: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    resultStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penaltisTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    noPenaltis: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rankLap: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rankS1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rankS2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rankS3: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_resultados_sim',
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
        name: "idSesionSim_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idResultadoSesionSim" },
        ]
      },
      {
        name: "fk_tb_resultados_sim_tb_sim_sesiones1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimDataSesion" },
        ]
      },
    ]
  });
};
