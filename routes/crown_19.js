var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_19/index', { title: 'Chen Ji Wei', ID: '410410319' });
});

module.exports = router;