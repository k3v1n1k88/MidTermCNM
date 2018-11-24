var express = require('express');
var router = express.Router();
var request = require('request-promise');


/* GET home page. */
router.get('/', function(req, res, next) {

	res.render('app',{
		title:'Request'
	});
});

router.get('/request', function(req, res, next) {

	var name = req.query.name;
	var phone = req.query.phone;
	var address = req.query.address;
	var note = req.query.note;

	console.log(`name = ${name} phone = ${phone} address = ${address} note = ${note}`)

	var headers = {
		'User-Agent': 'Super Agent/0.0.1',
		'Content-Type': 'application/x-www-form-urlencoded'
	}

	// Configure the request
	var options = {
		url: 'http://localhost:3001/request',
		method: 'GET',
		headers: headers,
		qs: {
			'name': name,
			'phone': phone,
			'address': address,
			'note': note
		}
	};

	request(options)
    	.then(function (body) {
    		body = JSON.parse(body);
    		// console.log(body)
    		// console.log(body.info);
        	res.render('success',{
        		name: body.info.name,
        		phone: body.info.phone,
        		address: body.info.address,
        		note: body.info.note
        	})
    	})
    	.catch(function (err) {
        	console.log(err);
    	})
});

module.exports = router;