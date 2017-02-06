/**
 * Created by sample on 06-Feb-17.
 */

var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var mongoOp     =   require("./model/sentence.model");
var mongoose = require('mongoose');
var config = require('./config/config');

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

require('./router/router')(app);


var db = mongoose.connect(config.db);
app.listen(config.port);
console.log("App listening on port "+config.port);

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + config.db);
});


