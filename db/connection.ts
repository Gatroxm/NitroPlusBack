import { Sequelize } from 'sequelize';

const db = new Sequelize('nitrodb', 'ndconsulta', 'Nitro2021',{
    host: '186.31.136.130',
    dialect: 'mysql',
    // logging: false
});

export default db;