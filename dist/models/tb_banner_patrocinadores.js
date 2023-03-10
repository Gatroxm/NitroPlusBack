const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_banner_patrocinadores', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    asunto: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    linkPNG: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    linkPDF: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    urlAdicional: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    textoAdicional: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fechaVencimiento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    activo: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    idPiloto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_pilotos',
        key: 'id'
      }
    },
    idLiga: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_pilotos_liga',
        key: 'id'
      }
    },
    idPlataforma: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_plataforma',
        key: 'id'
      }
    },
    idSimulador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_simulador',
        key: 'id'
      }
    },
    idTorneo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_torneos',
        key: 'idTorneo'
      }
    },
    idDivision: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_divisiones_pilotos',
        key: 'id'
      }
    },
    idCalendario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_calendario',
        key: 'id'
      }
    },
    idRol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_roles_pilotos',
        key: 'id'
      }
    },
    idPais: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_paises',
        key: 'id'
      }
    },
    idClasificatorio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_inscripcion_clasificatorios',
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
    }
  }, {
    sequelize,
    tableName: 'tb_banner_patrocinadores',
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
        name: "fk_tb_comunicados_tb_pilotos1_idx",
        using: "BTREE",
        fields: [
          { name: "idPiloto" },
        ]
      },
      {
        name: "fk_tb_comunicados_tb_pilotos_liga1_idx",
        using: "BTREE",
        fields: [
          { name: "idLiga" },
        ]
      },
      {
        name: "fk_tb_comunicados_tb_plataforma1_idx",
        using: "BTREE",
        fields: [
          { name: "idPlataforma" },
        ]
      },
      {
        name: "fk_tb_comunicados_tb_simulador1_idx",
        using: "BTREE",
        fields: [
          { name: "idSimulador" },
        ]
      },
      {
        name: "fk_tb_comunicados_tb_torneos1_idx",
        using: "BTREE",
        fields: [
          { name: "idTorneo" },
        ]
      },
      {
        name: "fk_tb_comunicados_tb_divisiones_pilotos1_idx",
        using: "BTREE",
        fields: [
          { name: "idDivision" },
        ]
      },
      {
        name: "fk_tb_comunicados_tb_calendario1_idx",
        using: "BTREE",
        fields: [
          { name: "idCalendario" },
        ]
      },
      {
        name: "fk_tb_comunicados_tb_roles_pilotos1_idx",
        using: "BTREE",
        fields: [
          { name: "idRol" },
        ]
      },
      {
        name: "fk_tb_comunicados_tb_paises1_idx",
        using: "BTREE",
        fields: [
          { name: "idPais" },
        ]
      },
      {
        name: "fk_tb_comunicados_tb_inscripcion_clasificatorios1_idx",
        using: "BTREE",
        fields: [
          { name: "idClasificatorio" },
        ]
      },
      {
        name: "fk_tb_comunicados_tb_tipo_licencias1_idx",
        using: "BTREE",
        fields: [
          { name: "idLicencia" },
        ]
      },
    ]
  });
};
