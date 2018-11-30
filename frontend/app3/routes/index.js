var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('app',{
    address: '230 Điện biên phủ',
    addressReceived: '12 Quốc Hương Quận 2'
  });
});
// router.get('/', function(req, res, next) {

//   res.render('app',{
//     addressReceived: '12 Quốc Hương'
//   });
// });

router.get('/abc', function(req, res, next) {
  res.render('app1');
});

module.exports = router;
