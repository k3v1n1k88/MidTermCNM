var express = require('express');
var router = express.Router();
var Model = require('../model/db')

router.post('/app1', function (req, res, next) {

    var username = req.body.username;
    var password = req.body.password;

    console.log(`username = ${username} password = ${password}`);

    var ret;

    Model.user_app1.findOne({
        username: username
    }, function (err, user) {
        if (err) {
            console.log(err);
            return console.log(err);
        }
        // console.log(user.password);
        // console.log(password);
        if (user == null) {
            console.log(user);
            ret = {
                return_code: 0,
                msg: 'Username is not exist'
            }
        } else if (user.password !== password) {
            console.log(user.username);
            console.log(user.password);
            ret = {
                return_code: 0,
                msg: 'Password incorrect. Please try again'
            }
        } else {
            ret = {
                return_code: 1,
                msg: username
            }
        }
        console.log(ret);
        res.send(ret);
    });
});

router.post('/app2', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    console.log(`username = ${username} password = ${password}`);

    var ret;

    Model.user_app2.findOne({
        username: username
    }, function (err, user) {
        if (err) {
            console.log(err);
            return console.log(err);
        }
        // console.log(user.password);
        // console.log(password);
        if (user == null) {
            console.log(user);
            ret = {
                return_code: 0,
                msg: 'Username is not exist'
            }
        } else if (user.password !== password) {
            console.log(user.username);
            console.log(user.password);
            ret = {
                return_code: 0,
                msg: 'Password incorrect. Please try again'
            }
        } else {
            ret = {
                return_code: 1,
                msg: username
            }
        }
        console.log(ret);
        res.send(ret);
    });
});

router.post('/app4', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    console.log(`username = ${username} password = ${password}`);

    var ret;

    Model.user_app4.findOne({
        username: username
    }, function (err, user) {
        if (err) {
            console.log(err);
            return console.log(err);
        }
        // console.log(user.password);
        // console.log(password);
        if (user == null) {
            console.log(user);
            ret = {
                return_code: 0,
                msg: 'Username is not exist'
            }
        } else if (user.password !== password) {
            console.log(user.username);
            console.log(user.password);
            ret = {
                return_code: 0,
                msg: 'Password incorrect. Please try again'
            }
        } else {
            ret = {
                return_code: 1,
                msg: username
            }
        }
        console.log(ret);
        res.send(ret);
    });
});

router.post('/app4', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    console.log(`username = ${username} password = ${password}`);

    var ret;

    Model.user_app4.findOne({
        username: username
    }, function (err, user) {
        if (err) {
            console.log(err);
            return console.log(err);
        }
        // console.log(user.password);
        // console.log(password);
        if (user == null) {
            console.log(user);
            ret = {
                return_code: 0,
                msg: 'Username is not exist'
            }
        } else if (user.password !== password) {
            console.log(user.username);
            console.log(user.password);
            ret = {
                return_code: 0,
                msg: 'Password incorrect. Please try again'
            }
        } else {
            ret = {
                return_code: 1,
                msg: username
            }
        }
        console.log(ret);
        res.send(ret);
    });
});

module.exports = router;