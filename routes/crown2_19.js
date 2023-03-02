var express = require('express');
var router = express.Router();

let db = require('../utils/database');

router.get('/', async function (req, res, next){
    try{
        let results = await db.query(`select * from category_19`);
        console.log('category data', JSON.stringify(results.rows));
        res.render('crown2_19/index', {
            data: results.rows, 
            name: 'Chen Ji Wei', 
            ID: '410410319'
        });
    } catch(error){
        console.log(error);
    }     
});

module.exports = router;