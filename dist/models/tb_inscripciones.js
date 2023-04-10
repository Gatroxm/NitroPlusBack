const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_inscripciones', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idEstadoInscr: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            references: {
                model: 'tb_estado_inscripcion',
                key: 'id'
            }
        },
        idPiloto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_pilotos',
                key: 'id'
            }
        },
        idTorneo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_torneos',
                key: 'idTorneo'
            }
        },
        idCocheInicial: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'tb_coches_sim',
                key: 'id'
            }
        },
        idEquipoInicial: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'tb_equipos_sim',
                key: 'id'
            }
        },
        idPilotoIdSim: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tb_pilotos_id_sim',
                key: 'id'
            }
        },
        noParticipacion: {
            type: DataTypes.STRING(4),
            allowNull: true
        },
        observaciones: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        fechaInscripcion: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
        },
        idRespuesta: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'tb_opciones_respuesta',
                key: 'id'
            }
        },
        respuestaPersonalizada: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'tb_inscripciones',
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
                name: "idPiloto",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "idPiloto" },
                    { name: "idTorneo" },
                ]
            },
            {
                name: "fk_tb_inscripciones_tb_estado_insc1_idx",
                using: "BTREE",
                fields: [
                    { name: "idEstadoInscr" },
                ]
            },
            {
                name: "fk_tb_inscripciones_tb_pilotos1_idx",
                using: "BTREE",
                fields: [
                    { name: "idPiloto" },
                ]
            },
            {
                name: "fk_tb_inscripciones_tb_coches_sim1_idx",
                using: "BTREE",
                fields: [
                    { name: "idCocheInicial" },
                ]
            },
            {
                name: "fk_tb_inscripciones_tb_equipos_sim1_idx",
                using: "BTREE",
                fields: [
                    { name: "idEquipoInicial" },
                ]
            },
            {
                name: "fk_tb_inscripciones_tb_pilotos_id_sim1_idx",
                using: "BTREE",
                fields: [
                    { name: "idPilotoIdSim" },
                ]
            },
            {
                name: "fk_tb_inscripciones_tb_torneos1_idx",
                using: "BTREE",
                fields: [
                    { name: "idTorneo" },
                ]
            },
            {
                name: "fk_tb_inscripciones_tb_opciones_respuesta1_idx",
                using: "BTREE",
                fields: [
                    { name: "idRespuesta" },
                ]
            },
        ]
    });
};