const db = require('./database');

const testDB = async () => {
  try {
    let results1 = await db.query(`select * from product_19 where cat_id = 1`);
    console.log('results 1', JSON.stringify(results1.rows));

    let results2 = await db.query(`select * from product_19 where cat_id = 4`);
    console.log('results 2', JSON.stringify(results2.rows));
  } catch (error) {
    console.log(error);
  }
};

testDB();

module.exports = testDB;
