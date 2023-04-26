var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('crown_xx/index', { name: 'Hsingtai Chung', ID: '123456789' }); // It will automatically look for the views folder, otherwise if we want to set another default directory, use app.set('views', '~~~~~'); the '~~~~~' is what you want to name it.
});

module.exports = router;
