const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_contenido_grafico', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idPlantilla: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_plantillas_graficos',
        key: 'id'
      }
    },
    idDivision: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_divisiones',
        key: 'id'
      }
    },
    idSesion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idCanalDiscord: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esDiscord: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idWebhook: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_webhooks_discord',
        key: 'id'
      }
    },
    esInstagram: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    hashtags: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    esAnuncio: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    esFecha: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    esPosicion: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    noPosicion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esCategoria: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    idCategoria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    encabezado: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_contenido_grafico',
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
        name: "fk_tb_contenido_grafico_tb_divisiones1_idx",
        using: "BTREE",
        fields: [
          { name: "idDivision" },
        ]
      },
      {
        name: "fk_tb_contenido_grafico_tb_plantillas_graficos1_idx",
        using: "BTREE",
        fields: [
          { name: "idPlantilla" },
        ]
      },
      {
        name: "fk_tb_contenido_grafico_tb_webhooks_discord1_idx",
        using: "BTREE",
        fields: [
          { name: "idWebhook" },
        ]
      },
    ]
  });
};
