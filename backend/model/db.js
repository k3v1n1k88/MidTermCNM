var config = require('../config.json');
const mongoose = require('mongoose');

var uri = "mongodb://"+config.database.host+":"+config.database.port+"/"+config.database.name;
console.log('connect to database with uri = '+uri);

mongoose.connect(uri, { useNewUrlParser: true },function(err){
	if(err) return console.log('Connection fail...');
});

var requestSchema = new mongoose.Schema({
	name: String,
	address: String,
	phone: String,
	note: {
		type: String,
		default: ""
	},
	status: {
		type: Boolean, 
		default: false
	},
	date: {
		type: Date, 
		default: Date.now
	}
});

var Request = mongoose.model('request', requestSchema);

module.exports = Request;
// exports.add_request = function(name, address, phone, note){
// 	return request.create({
// 		name: "21212",
// 		address: "1212",
// 		phone: "i4845"
// 	});
// }