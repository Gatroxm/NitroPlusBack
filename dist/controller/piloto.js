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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePilotoInActivo = exports.getPilotosDesActivados = exports.LogIn = exports.getPiloto = exports.getAllPilotos = void 0;
const tb_pilotos_1 = __importDefault(require("../models/tb_pilotos"));
const { Op } = require("sequelize");
const getAllPilotos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const desde = Number(req.query.desde) || 0;
    try {
        const pilotos = yield tb_pilotos_1.default.findAll({
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
        const piloto = yield tb_pilotos_1.default.findByPk(id);
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
        const piloto = yield tb_pilotos_1.default.findAll({
            where: { useremail: email, password: password }
        });
        console.log(piloto);
        if (piloto.length > 0) {
            return res.json({
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
    console.log(req.query);
    try {
        const pilotos = yield tb_pilotos_1.default.findAll({
            attributes: ['PK_ID_PILOTO', 'NOMBRECORTO', 'DISCORD_ID', 'zona_horaria', 'whatsapp', 'ACTIVO'],
            where: {
                ACTIVO: 0,
                [Op.or]: [
                    {
                        NOMBRECORTO: {
                            [Op.like]: `${param}%`
                        }
                    }
                ]
            },
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
    const { zona_horaria, whatsapp, useremail, password, PK_ID_PILOTO, DISCORD_ID } = req.body;
    try {
        const piloto = yield tb_pilotos_1.default.update({
            ACTIVO: 1,
            zona_horaria: zona_horaria,
            whatsapp: whatsapp,
            useremail: useremail,
            DISCORD_ID: DISCORD_ID,
            password: password,
        }, {
            where: {
                PK_ID_PILOTO: PK_ID_PILOTO
            }
        });
        if (piloto[0] === 1) {
            return res.json({
                ok: true,
                msg: 'Piloto actualizado'
            });
        }
        else {
            return res.json({
                ok: false,
                msg: 'El piloto no se puedo actualizar por que o no existe o no detecta cambios'
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
//# sourceMappingURL=piloto.js.map