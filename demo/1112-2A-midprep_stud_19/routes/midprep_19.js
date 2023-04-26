var express = require('express');
var router = express.Router();
let db = require('../utils/database');

/* GET home page. */
router.get('/overview_19', function (req, res, next) {
  res.render('midprep_19/overview_19', { name: 'Chen Ji Wei', ID: '410410319' });
});

router.get('/overview2_19', async function (req, res, next) {
  try{
    let results1 = await db.query(`select * from product_19 where cat_id = 1`);
    console.log('data1', JSON.stringify(results1.rows));

    let results2 = await db.query(`select * from product_19 where cat_id = 4`);
    console.log('data2', JSON.stringify(results2.rows));

    res.render('midprep_19/overview2_19', { 
      data1: results1.rows,
      data2: results2.rows,
      name: 'Chen Ji Wei', 
      ID: '410410319' 
    });
  }catch{
    console.log(err)
  }

  
});

module.exports = router;
