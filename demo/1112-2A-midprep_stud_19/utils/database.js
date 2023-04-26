const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  port: '5432',
  database: 'midprep_19',
  password: 'tamkkungSingle',
});

console.log(`Postgres server running on ${pool.options.database} database`);

module.exports = pool;
