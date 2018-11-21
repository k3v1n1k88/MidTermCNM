var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('About us');
	res.json({
		members: [
		{
			name: 'Nguyen Truong Le Van',
			id: '1512661'
		},
		{
			name: 'Thanh Van',
			id: '1512661'
		},
		{
			name: 'Hua Van Vu',
			id: '1512687'
		}
		],
		description: 'This project created for our midterm project',
		subject: 'CNM',
		version: '0.0.1'
	});
});

module.exports = router;
