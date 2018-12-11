var express = require('express');
var router = express.Router();
var Model = require('../model/db')

router.post('/app1', function (req, res, next) {

    var username = req.body.username;
    var password = req.body.password;

    console.log(`username = ${username} password=${password}`)

    var newUser = new Model.user_app1({
        username: username,
        password: password
    });

    Model.user_app1.findOne({
        username: username
    }, function (err, user) {
        if (err) return console.log(err);
        if (user == null) {
            console.log('Register success');
            newUser.save(function (err, request) {
                if (err) {
                    return next(err)
                };
            });

            res.json({
                return_code: 1,
                msg: 'username'
            });

           
        } else {
            console.log('Register failure');
            res.json({
                return_code: 0,
                msg: 'Username is exist'
            });
        }
    });
});

router.post('/app2', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    console.log(`username = ${username} password=${password}`)

    var newUser = new Model.user_app2({
        username: username,
        password: password
    });

    Model.user_app2.findOne({
        username: username
    }, function (err, user) {
        if (err) return console.log(err);
        if (user == null) {
            console.log('Register success');
            newUser.save(function (err, request) {
                if (err) {
                    return next(err)
                };
            });

            res.json({
                return_code: 1,
                msg: 'username'
            });

           
        } else {
            console.log('Register failure');
            res.json({
                return_code: 0,
                msg: 'Username is exist'
            });
        }
    });
});

router.post('/app3', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    console.log(`username = ${username} password=${password}`)

    var newUser = new Model.user_app3({
        username: username,
        password: password
    });

    Model.user_app3.findOne({
        username: username
    }, function (err, user) {
        if (err) return console.log(err);
        if (user == null) {
            console.log('Register success');
            newUser.save(function (err, request) {
                if (err) {
                    return next(err)
                };
            });

            res.json({
                return_code: 1,
                msg: 'username'
            });

           
        } else {
            console.log('Register failure');
            res.json({
                return_code: 0,
                msg: 'Username is exist'
            });
        }
    });
});

router.post('/app4', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    console.log(`username = ${username} password=${password}`)

    var newUser = new Model.user_app4({
        username: username,
        password: password
    });

    Model.user_app4.findOne({
        username: username
    }, function (err, user) {
        if (err) return console.log(err);
        if (user == null) {
            console.log('Register success');
            newUser.save(function (err, request) {
                if (err) {
                    return next(err)
                };
            });

            res.json({
                return_code: 1,
                msg: 'username'
            });

           
        } else {
            console.log('Register failure');
            res.json({
                return_code: 0,
                msg: 'Username is exist'
            });
        }
    });
});

module.exports = router;