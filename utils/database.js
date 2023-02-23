const { Pool } = require('pg');

pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: '5432',
    database: 'crown_19',
    password: '0000',
});

console.log('pool', pool.options.database);

module.exports = pool;