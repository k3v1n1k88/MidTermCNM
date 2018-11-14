var express = require('express');

var router = express.Router();
var userRepo = require('../repos/userRepo'),
    moment = require('moment');

router.post('/request', (req, res) => {
    console.log("Sending request");
    c ={
        Name:req.query.name,
        Address:req.query.address,
        Phone:req.query.phone,
        Location:req.query.Location,
        Time:moment().format("YYYY-MM-DD HH:mm:ss"),
        Status:'1' 
    };
    console.log("dang gui request");
    userRepo.addRequest(c).then((value)=>{
        console.log("Request Added!!!");
        
    }).catch((err)=>{
        console.log('ERROR');
        console.log(err);
    });
        res.json(c);
});
    
module.exports = router;