
var express = require('express');

var expressHandlebars  = require('express-handlebars');
var app = express();

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.use('/assets', express.static('assets'));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

var port = process.env.PORT || 3434;
app.listen(port);
console.log(port + '  is the magic port');