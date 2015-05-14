
var express = require('express');
var expressHandlebars  = require('express-handlebars');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var Promise = require('bluebird');

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.use('/assets', express.static('assets'));
app.set('view engine', 'handlebars');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

var mongoose = require('mongoose');
Promise.promisifyAll(mongoose);
mongoose.connect('mongodb://hackerticker:ilovesushi@ds031882.mongolab.com:31882/heroku_app36601556');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log("successfully connected to the mongodb instance");
});

require('./controllers/loginController')(app);
require('./controllers/projectsController')(app);
require('./controllers/contactUsController')(app);
require('./controllers/usersController')(app);

var port = process.env.PORT || 3000;
app.listen(port);
console.log(port + '  is the magic port');