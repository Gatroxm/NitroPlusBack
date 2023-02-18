"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPilotoByidSim = exports.updatePiloto = exports.changePassword = exports.createPiloto = exports.updatePilotoInActivo = exports.getPilotosDesActivados = exports.LogIn = exports.getPiloto = exports.getAllPilotos = void 0;
const init_models_1 = require("../models/init-models");
const { Op, sequelize, QueryTypes } = require("sequelize");
const models = (0, init_models_1.initModels)(sequelize);
const getAllPilotos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const desde = Number(req.query.desde) || 0;
    try {
        const pilotos = yield models.tb_pilotos.findAll({
            limit: 10,
            offset: desde,
        });
        return res.json({
            ok: true,
            msg: "Nombre Corto pilotos",
            Pilotos: pilotos,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.getAllPilotos = getAllPilotos;
const getPiloto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const piloto = yield models.tb_pilotos.findByPk(id);
        if (piloto) {
            return res.json({
                ok: true,
                piloto,
            });
        }
        else {
            res.status(404).json({
                ok: false,
                msg: `No existe el usuario con el id: ${id}`,
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.getPiloto = getPiloto;
const LogIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const piloto = yield models.tb_pilotos.findAll({
            where: { correoElectronico: email, password: password },
        });
        console.log(piloto);
        if (piloto.length > 0) {
            return res.status(200).json({
                ok: true,
                piloto: piloto[0],
            });
        }
        else {
            res.status(404).json({
                ok: false,
                msg: `error al ingresar`,
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.LogIn = LogIn;
const getPilotosDesActivados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const param = req.query.param;
    let where = {
        idEstado: 0,
        [Op.or]: [
            {
                nombreCorto: {
                    [Op.like]: `${param}%`,
                },
            },
        ],
    };
    if (param === "" || param === undefined) {
        where = {
            idEstado: 0,
        };
    }
    try {
        const PilotosEditados = [];
        const pilotos = yield models.tb_pilotos.findAll({
            attributes: ["id", "nombreCorto", "discordId", "whatsapp", "idEstado"],
            where: where,
            offset: 1,
        });
        res.json({
            ok: true,
            pilotos
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.getPilotosDesActivados = getPilotosDesActivados;
const updatePilotoInActivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { whatsapp, useremail, password, PK_ID_PILOTO, DISCORD_ID, } = req.body;
    try {
        const piloto = yield models.tb_pilotos.update({
            idEstado: 1,
            // zona_horaria: zona_horaria,
            whatsapp: whatsapp,
            correoElectronico: useremail,
            DISCORD_ID: DISCORD_ID,
            password: password,
        }, {
            where: {
                id: PK_ID_PILOTO,
            },
        });
        if (piloto[0] === 1) {
            return res.json({
                ok: true,
                msg: "Piloto actualizado",
            });
        }
        else {
            return res.json({
                ok: false,
                msg: "El piloto no se puedo actualizar por que o no existe o no detecta cambios",
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.updatePilotoInActivo = updatePilotoInActivo;
const createPiloto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, nombreCorto, idEstado, fechaNacimiento, idNacionalidad, ciudad, departamento, idPaisResidencia, resena, correoElectronico, password, whatsapp, created_at, update_at, idMando, discordId, nombreDiscord, canal_twitch, canal_facebook, canal_youtube, aceptaCondiciones } = req.body;
    try {
        const mismoPiloto = yield models.tb_pilotos.findAll({
            where: {
                correoElectronico
            }
        });
        if (mismoPiloto.length > 0) {
            return res.json({
                ok: false,
                msn: `el correo ${correoElectronico} ya se encuentra registrado`
            });
        }
        else {
            const ultimo = yield models.tb_pilotos.findAll({});
            const piloto = yield models.tb_pilotos.create({ nombre, apellido, nombreCorto: `piloto N° ${ultimo[ultimo.length - 1].id + 3}`, idEstado, fechaNacimiento, idNacionalidad, ciudad, departamento, idPaisResidencia, resena, correoElectronico, password, whatsapp, created_at, update_at, idMando, discordId, nombreDiscord, canal_twitch, canal_facebook, canal_youtube, aceptaCondiciones });
            return res.json({
                ok: true,
                piloto
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.createPiloto = createPiloto;
const changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, correoElectronico, password } = req.body;
    try {
        const piloto = yield models.tb_pilotos.findAll({
            where: { id, correoElectronico }
        });
        if (piloto.length > 0) {
            const editPassword = yield models.tb_pilotos.update({
                password: password
            }, {
                where: {
                    id,
                },
            });
            if (editPassword[0] === 1) {
                return res.json({
                    ok: true,
                    msg: "Piloto actualizado",
                });
            }
            else {
                return res.json({
                    ok: false,
                    msg: "El piloto no se puedo actualizar por que o no detecta cambios en la contraseña",
                });
            }
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.changePassword = changePassword;
const updatePiloto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, nombre, apellido, idEstado, fechaNacimiento, idNacionalidad, ciudad, departamento, idPaisResidencia, resena, correoElectronico, whatsapp, idMando, discordId, canal_youtube, canal_twitch, canal_facebook } = req.body;
    try {
        const piloto = yield models.tb_pilotos.update({ id, nombre, apellido, idEstado, fechaNacimiento, idNacionalidad, ciudad, departamento, idPaisResidencia, resena, correoElectronico, whatsapp, idMando, discordId, canal_youtube, canal_twitch, canal_facebook }, {
            where: {
                id,
            },
        });
        if (piloto[0] === 1) {
            return res.json({
                ok: true,
                msg: "Piloto actualizado",
            });
        }
        else {
            return res.json({
                ok: false,
                msg: "El piloto no se puedo actualizar por que o no existe o no detecta cambios",
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.updatePiloto = updatePiloto;
const getPilotoByidSim = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sim } = req.query;
    const query = `SELECT tb_pilotos_id_sim.idSimPiloto, tb_pilotos.nombre, tb_pilotos.apellido, tb_pilotos.nombreCorto
  FROM tb_pilotos_id_sim INNER JOIN tb_pilotos ON tb_pilotos_id_sim.idPiloto = tb_pilotos.id
  WHERE (((tb_pilotos_id_sim.idSimPiloto)="${sim}"));`;
    try {
        const getPilotoByidSim = yield models.tb_pilotos_id_sim.sequelize.query(query, { type: QueryTypes.SELECT });
        res.json({
            ok: true,
            getPilotoByidSim
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: error,
        });
    }
});
exports.getPilotoByidSim = getPilotoByidSim;
//# sourceMappingURL=piloto.js.map