var config = require('../config.json');
const mongoose = require('mongoose');

var uri = "mongodb://"+config.database.host+":"+config.database.port+"/"+config.database.name;
console.log('connected to database with uri = '+uri);

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

var app1Schema = new mongoose.Schema({
	username: String,
	password: String
});

var app2Schema = new mongoose.Schema({
	username: String,
	password: String
});

var app3Schema = new mongoose.Schema({
	username: String,
	password: String
});

var app4Schema = new mongoose.Schema({
	username: String,
	password: String
});
var user_app1 = mongoose.model('app1', app1Schema);
var user_app2 = mongoose.model('app2', app2Schema);
var user_app3 = mongoose.model('app3', app3Schema);
var user_app4 = mongoose.model('app4', app4Schema);
var Request = mongoose.model('request', requestSchema);

module.exports = {
	user_app1,
	user_app2,
	user_app3,
	user_app4,
	Request
}