const db = require('./database');


const testDB = async () => {
    try{
        let results = await db.query(`select * from category_19`);
        console.log('results', JSON.stringify(results.rows));
    } catch(error){
        console.log(error);
    }
}

testDB();

module.exports = testDB;