"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('dbagc0jv3og4tp', 'ndconsulta', 'Nitro2021', {
    host: '186.31.136.130',
    dialect: 'mysql',
    // logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map