const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_involucrados_incidente_sim', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idIncidenteSim: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_incidentes_sim',
                key: 'id'
            }
        },
        idSimPiloto: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'tb_involucrados_incidente_sim',
        timestamps: false,
        indexes: [{
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            },
            {
                name: "fk_tb_involucrados_incidente_sim_tb_incidentes_sim1_idx",
                using: "BTREE",
                fields: [
                    { name: "idIncidenteSim" },
                ]
            },
        ]
    });
};