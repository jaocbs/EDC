var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mustacheExpress = require('mustache-express');
var crypto = require('crypto');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes/index');
app.use('/', routes);

app.get ('/', function ( req, res) {

})

app.post('/', function (req, res) {

res.redirect('/admin');

console.log('got a POST request');
console.log(req.body.login);
console.log(req.body.password);
});



var port = process.env.PORT || 3000;

app.listen(port);
console.log('Listening on port ' + port);

module.exports = app;
