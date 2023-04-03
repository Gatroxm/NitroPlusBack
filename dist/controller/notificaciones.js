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
exports.updateNotification = exports.getNotificaciones = void 0;
const sequelize_1 = require("sequelize");
const { sequelize } = require("sequelize");
const init_models_1 = require("../models/init-models");
const models = (0, init_models_1.initModels)(sequelize);
const getNotificaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    const query = `SELECT tb_notificaciones.id, rutaimagencompleta(tb_tipo_notificacion.imgIcono) as Icono, tb_tipo_notificacion.nombre, tb_notificaciones.texto, tb_notificaciones.esleido, tb_notificaciones.fechaCreacion FROM tb_tipo_notificacion INNER JOIN tb_notificaciones ON tb_tipo_notificacion.id = tb_notificaciones.idTipoNotificacion WHERE (((tb_notificaciones.idPiloto)=${id})) ORDER BY tb_notificaciones.id DESC;`;
    try {
        const notificaciones = yield ((_a = models.tb_tipo_notificacion.sequelize) === null || _a === void 0 ? void 0 : _a.query(query, { type: sequelize_1.QueryTypes.SELECT }));
        if (notificaciones.length > 0) {
            return res.status(200).json({
                ok: true,
                notificaciones
            });
        }
        else {
            return res.status(200).json({
                ok: false,
                msg: 'No tiene notificaciones'
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
exports.getNotificaciones = getNotificaciones;
const updateNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const notification = yield models.tb_notificaciones.update({
            esleido: 1
        }, {
            where: {
                id,
            },
        });
        if (notification[0] === 1) {
            return res.json({
                ok: true,
                msg: "Notificación  actualizada",
            });
        }
        else {
            return res.json({
                ok: false,
                msg: "La notificación no se puede actualizar por que o no existe o no detecta cambios",
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
exports.updateNotification = updateNotification;
//# sourceMappingURL=notificaciones.js.map