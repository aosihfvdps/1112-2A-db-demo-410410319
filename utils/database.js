const { Pool } = require('pg');
let pool;

if(process.env.DATABASE === 'SUPABASE'){
    pool = new Pool({
        user: 'postgres',
        host: process.env.SUPABASE_HOST,
        port: '5432',
        database: 'postgres',
        password: process.env.SUPABASE_PASSWORD,
    });
    console.log(`Connecting Supabase PostgreSQL running on ${pool.options.database} database`);
}
else{
    pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        port: '5433',
        database: 'crown_19',
        password: '0000',
    });
    console.log(`Connecting local PostgreSQL running on ${pool.options.database} database`);
}









//console.log('pool', pool.options.database);

module.exports = pool;