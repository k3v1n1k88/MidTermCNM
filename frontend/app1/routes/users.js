var express = require('express');
var User = require('../model/db');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.get('/register',function(req, res, next)
{
  res.render('signup')
  
});
router.post('/register',function(req, res, next){
  var displayname = req.body.displayname;
  var username = req.body.username;
  var password = req.body.password;
  console.log(displayname + username + password)


  var user = new User({
    displayname: displayname,
    username: username,
    password: password,
    
  });

  user.save(function(err,request){
    if (err) {return next(err)};
    // res.status(200).send(request).toString();
  });

  res.render('success',{
    name : displayname
  });
});
module.exports = router;
