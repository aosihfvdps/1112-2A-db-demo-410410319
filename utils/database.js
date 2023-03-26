const { Pool } = require('pg');

pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: '5432',
    database: 'crown_19',
    password: 'tamkkungSingle',
});

console.log(`Postgres server running on ${pool.options.database} database`);

//console.log('pool', pool.options.database);

module.exports = pool;