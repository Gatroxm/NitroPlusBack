const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_ident_pos_sim_preq', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idIdentPos: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_ident_pos',
                key: 'id'
            }
        },
        idSimulador: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_simulador',
                key: 'id'
            }
        },
        idSimPosId: {
            type: DataTypes.STRING(45),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'tb_ident_pos_sim_preq',
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
                name: "fk_tb_ident_pos_sim_tb_ident_pos1_idx",
                using: "BTREE",
                fields: [
                    { name: "idIdentPos" },
                ]
            },
            {
                name: "fk_tb_ident_pos_sim_tb_simulador1_idx",
                using: "BTREE",
                fields: [
                    { name: "idSimulador" },
                ]
            },
        ]
    });
};