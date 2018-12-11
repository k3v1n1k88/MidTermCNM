var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('login');
});

router.post('/login', function (req, res, next) {

  var username = req.body.username;
  var password = req.body.password;

  console.log(`username = ${username} password = ${password}`)

  axios.post('http://localhost:3000/login/app1', {
        username: username,
        password: password  
    })
    .then(function (response) {
      var codeReturn = response.data;
      if(codeReturn.return_code == 0){
        res.render('login',{
          msg: codeReturn.msg
        });
      }
      else if(codeReturn.return_code ==1){
        res.render('success',{
          name: codeReturn.msg
        });
      }
    })
    .catch(function (err) {
      // console.log(err);
    })
});

router.get('/register', function (req, res, next) {
  res.render('signup')
});

router.post('/register', function (req, res, next) {

  var username = req.body.username;
  var password = req.body.password;

  console.log(`username = ${username} password=${password}`)

  axios.post('http://localhost:3000/register/app1', {
      username: username,
      password: password
    })
    .then(function (response) {
      var codeReturn = response.data;
      if(codeReturn.return_code == 0){
        res.render('signup',{
          msg: codeReturn.msg
        });
      }
      else if(codeReturn.return_code ==1){
        res.render('success',{
          name: codeReturn.msg
        });
      }
    })
    .catch(function (err) {
      console.log(err);
    })
});
module.exports = router;