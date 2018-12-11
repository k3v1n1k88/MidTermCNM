var express = require('express');
var router = express.Router();
var Request = require('../model/db');

/* GET users listing. */
router.post('/', function(req, res, next) {
  var name = req.body.name;
  var phone = req.body.phone;
  var address = req.body.address;
  var note = req.body.note;

  
});

router.get('/', function(req, res, next) {
  var name = req.query.name;
  var phone = req.query.phone;
  var address = req.query.address;
  var note = req.query.note;

  var request = new Request({
    name: name,
    phone: phone,
    address: address,
    note: note
  });

  request.save(function(err,request){
    if (err) {return next(err)};
    // res.status(200).send(request).toString();
  });

  console.log(`name = ${name} phone = ${phone} address = ${address} note = ${note}`);
    res.json({
  	msg: 'success',
    info:{
      name: name,
      phone: phone,
      address: address,
      note: note
    }
  });
});

module.exports = router;
