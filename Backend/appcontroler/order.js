var express = require('express');

var router = express.Router();

//
// load orders by User

router.get('/', (req, res) => {
	var orders = [
		{
			orderId: 1,
			amount: 9999
		},
		{
			orderId: 2,
			amount: 8888
		},
		
	];

	res.json(orders);
})

module.exports = router;