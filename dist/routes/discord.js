"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const discord_1 = require("../controller/discord");
const routerDiscord = (0, express_1.Router)();
routerDiscord.get('/login-discord', discord_1.LoginDiscord);
exports.default = routerDiscord;
//# sourceMappingURL=discord.js.map