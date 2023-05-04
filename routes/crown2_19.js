var express = require('express');
var router = express.Router();

let db = require('../utils/database');

router.get('/', async function (req, res, next){
    try{
        let results = await db.query(`select * from category2_19`);
        // console.log('category data', JSON.stringify(results.rows));
        res.render('crown2_19/index', {
            data: results.rows, 
            name: 'Chen Ji Wei', 
            ID: '410410319'
        });
    } catch(error){
        console.log(error);
    }     
});

router.get('/shop2_19/', async function (req, res, next){
    try{
        let results = await db.query(`
            select * from shop2_19`);
        console.log('results', JSON.stringify(results.rows));
        //res.json(results.rows);
        res.render('crown2_19/shop2_19', {
            data: results.rows,
            category: "All products",
            name: 'Chen Ji Wei', 
            ID: '410410319'
        }) 
    } catch(error){
        console.log(error);
    }
});


router.get('/shop2_19/:category', async function (req, res, next){
    console.log('category', req.params.category)
    try{
        let results = await db.query(`
            select C.name as category, S.id, S.name, price, S.local_url 
            from category2_19 as C, shop2_19 as S
            where S.cat_id = C.id
            and C.name = $1
        `, [req.params.category]);
        console.log('results', JSON.stringify(results.rows));
        //res.json(results.rows);
        res.render('crown2_19/shop2_19', {
            data: results.rows,
            category: req.params.category,
            name: 'Chen Ji Wei', 
            ID: '410410319'
        }) 
    } catch(error){
        console.log(error);
    }
});

module.exports = router;