import { Sequelize } from 'sequelize';

const db = new Sequelize('dbagc0jv3og4tp', 'ndconsulta', 'Nitro2021',{
    host: '186.31.136.130',
    dialect: 'mysql',
    // logging: false
});

export default db;