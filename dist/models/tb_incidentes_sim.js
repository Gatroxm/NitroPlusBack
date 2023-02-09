const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_incidentes_sim', {
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
        idSimSancion: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        msTime: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        vueltaNo: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'tb_incidentes_sim',
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
                name: "fk_tb_incidentes_sim_tb_sim_sesiones1_idx",
                using: "BTREE",
                fields: [
                    { name: "idSimDataSesion" },
                ]
            },
        ]
    });
};