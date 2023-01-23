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
exports.LogIn = exports.getPiloto = exports.getAllPilotos = void 0;
const tb_pilotos_1 = __importDefault(require("../models/tb_pilotos"));
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
//# sourceMappingURL=piloto.js.map