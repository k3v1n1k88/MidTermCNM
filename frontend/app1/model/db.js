const mongoose = require('mongoose');

var uri = "mongodb://localhost:27017/userdata";


mongoose.connect(uri, { useNewUrlParser: true },function(err){
    if(err) return console.log('Connection fail...');
    console.log('connect to database with uri = '+uri);
});

var userSchema = new mongoose.Schema({
	displayname: String,
	username: String,
	password: String,
	
});

var Request = mongoose.model('request', userSchema);

module.exports = Request;