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
exports.totalResultados = void 0;
const sequelize_1 = require("sequelize");
const tb_tabla_puntos_1 = __importDefault(require("../models/tb_tabla_puntos"));
const totalResultados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const total = yield ((_a = tb_tabla_puntos_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query('SELECT Sum(tb_tabla_puntos.ES_POSICION) AS Participaciones FROM tb_resultados INNER JOIN tb_tabla_puntos ON tb_resultados.FK_ID_PUNTOS = tb_tabla_puntos.PK_ID_PUNTOS GROUP BY tb_resultados.FK_ID_PILOTO HAVING (((tb_resultados.FK_ID_PILOTO)=3));', { type: sequelize_1.QueryTypes.SELECT }));
    res.json({
        msg: 'Nombre Corto pilotos',
        total
    });
});
exports.totalResultados = totalResultados;
//# sourceMappingURL=resultados.js.map