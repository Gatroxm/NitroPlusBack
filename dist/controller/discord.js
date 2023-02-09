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
exports.LoginDiscord = void 0;
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client();
const clientId = `${process.env.CHANNEL_ID}`;
const clientSecret = `${process.env.CLIENT_SECRET}`;
const redirectUri = ``;
const scopes = ["identify", "email", "guilds"];
const authorization_token = `${process.env.DISCORD_BOT_TOKEN}`;
const LoginDiscord = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    client.login('MTA3MDM4Mjk5NzQxMDQyNjk3MQ.GmYOFn._hU4kige4_iucNQ2WgHd6lcrg6h_Y-HxWcOhko');
    client.on("ready", () => {
        console.log(client.user);
    });
});
exports.LoginDiscord = LoginDiscord;
//# sourceMappingURL=discord.js.map