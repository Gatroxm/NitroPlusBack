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
exports.getTiendaOficial = exports.getApoyanosNitro = void 0;
const sequelize_1 = require("sequelize");
const { sequelize } = require("sequelize");
const init_models_1 = require("../models/init-models");
const models = (0, init_models_1.initModels)(sequelize);
const getApoyanosNitro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `SELECT tb_apoyo.id, tb_apoyo.nombre, tb_apoyo.linkImg, tb_apoyo.orden, tb_apoyo.infoHTML, tb_apoyo.esArticulo, tb_apoyo.idEstado FROM tb_apoyo WHERE (((tb_apoyo.esArticulo)=0) AND ((tb_apoyo.idEstado)=1)) ORDER BY tb_apoyo.orden;`;
    try {
        const resultados = yield models.tb_apoyo.sequelize.query(query, {
            type: sequelize_1.QueryTypes.SELECT,
        });
        if (resultados.length > 0) {
            return res.status(200).json({
                ok: true,
                resultados,
            });
        }
        else {
            return res.status(404).json({
                ok: false,
                msg: "No cuentas con resultados",
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
exports.getApoyanosNitro = getApoyanosNitro;
const getTiendaOficial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `SELECT tb_apoyo.id, tb_apoyo.nombre, tb_apoyo.linkImg, tb_apoyo.orden, tb_apoyo.infoHTML, tb_apoyo.esArticulo, tb_apoyo.idEstado FROM tb_apoyo WHERE (((tb_apoyo.esArticulo)=1) AND ((tb_apoyo.idEstado)=1)) ORDER BY tb_apoyo.orden`;
    try {
        const resultados = yield models.tb_apoyo.sequelize.query(query, {
            type: sequelize_1.QueryTypes.SELECT,
        });
        if (resultados.length > 0) {
            return res.status(200).json({
                ok: true,
                resultados,
            });
        }
        else {
            return res.status(404).json({
                ok: false,
                msg: "No cuentas con resultados",
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
exports.getTiendaOficial = getTiendaOficial;
//# sourceMappingURL=apoyanos.js.map