var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('app',{
  	title:'Request'
  });
});

router.get('/request', function(req, res, next) {
  var name = req.body.name;
  var phone = req.body.phone;
  var address = req.body.address;
  var note = req.body.note;

  console.log(`name = ${name} phone = ${phone} address = ${address} note = ${note}`)
});

module.exports = router;
