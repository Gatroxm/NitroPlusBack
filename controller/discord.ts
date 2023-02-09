import { Response, Request, NextFunction } from "express";
import { Client, Message } from 'discord.js';
const client:any = new Client();
import axios from "axios";
const clientId = `${process.env.CHANNEL_ID}`;
const clientSecret = `${process.env.CLIENT_SECRET}`;
const redirectUri = ``;
const scopes = ["identify", "email", "guilds"];
const authorization_token = `${process.env.DISCORD_BOT_TOKEN}`;

export const LoginDiscord = async (req: Request, res: Response, next: NextFunction) =>{
    client.login('MTA3MDM4Mjk5NzQxMDQyNjk3MQ.GmYOFn._hU4kige4_iucNQ2WgHd6lcrg6h_Y-HxWcOhko');
    client.on("ready", () => {
        console.log(client.user);
    });
      
};