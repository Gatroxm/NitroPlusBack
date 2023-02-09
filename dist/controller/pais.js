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
exports.getPaices = void 0;
const init_models_1 = require("../models/init-models");
const { Op, sequelize } = require("sequelize");
const models = (0, init_models_1.initModels)(sequelize);
const getPaices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paices = yield models.tb_paises.findAll();
        return res.status(200).json({
            ok: true,
            paices
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
exports.getPaices = getPaices;
//# sourceMappingURL=pais.js.map