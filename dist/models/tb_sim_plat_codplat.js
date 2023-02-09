const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_sim_plat_codplat', {
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
    idPlataforma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_plataforma',
        key: 'id'
      }
    },
    idCodplataforma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_cod_plataforma',
        key: 'id'
      }
    },
    idEstado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: {
        model: 'tb_estado_general',
        key: 'id'
      }
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    instrucciones: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imgGuia: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    restricciones: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_sim_plat_codplat',
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
        name: "UI_tb_identificador_simulador_plataforma_simulador",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
          { name: "idPlataforma" },
        ]
      },
      {
        name: "idSimulador",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
          { name: "idPlataforma" },
          { name: "idCodplataforma" },
        ]
      },
      {
        name: "fk_tb_identificador_simulador_tb_simulador1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
        ]
      },
      {
        name: "fk_tb_identificador_simulador_tb_plataforma1_idx",
        using: "BTREE",
        fields: [
          { name: "idPlataforma" },
        ]
      },
      {
        name: "fk_tb_sim_plat_codplat_tb_codigos_plataforma1_idx",
        using: "BTREE",
        fields: [
          { name: "idCodplataforma" },
        ]
      },
      {
        name: "fk_tb_sim_plat_codplat_tb_estado_general1_idx",
        using: "BTREE",
        fields: [
          { name: "idEstado" },
        ]
      },
    ]
  });
};
