var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('app',{
  	title:'Login'
  });
});

router.get('/abc', function(req, res, next) {
  res.render('app1');
});

module.exports = router;
