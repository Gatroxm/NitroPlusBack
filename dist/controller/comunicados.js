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
exports.getComunicados = void 0;
const { sequelize } = require("sequelize");
const init_models_1 = require("../models/init-models");
const models = (0, init_models_1.initModels)(sequelize);
const getComunicados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comunicados = yield models.tb_comunicados.findAll({
            where: {
                activo: 1
            },
            order: [
                ['id', 'DESC'],
            ]
        });
        if (comunicados.length > 0) {
            return res.status(200).json({
                ok: true,
                comunicados
            });
        }
        else {
            return res.status(200).json({
                ok: false,
                msg: 'No hay comunicados nuevos'
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
exports.getComunicados = getComunicados;
//# sourceMappingURL=comunicados.js.map