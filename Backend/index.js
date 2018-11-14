var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    cors = require('cors');

var request = require('./appcontroler/getRequest');
var verifyAccessToken = require('./repos/authRepo').verifyAccessToken;
var user = require('./appcontroler/user');
var order = require('./appcontroler/order');

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) =>{
   res.json({
       msg: 'API vanvan'
   });
});

app.use('/app1/',getRequest);
app.use('/users/', user);
app.use('/orders/', verifyAccessToken, orderCtrl);
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Grab API is running on port ${port}`);
})