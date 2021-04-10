require('dotenv').config({path: './.env'});

var express = require('express');



var app = express();

app.disable('x-powered-by');

// app.get("/.well-known/acme-challenge/:path",function(req,res){
//     return res.sendFile(__dirname + "/.well-known/acme-challenge/" + req.params.path);
// });

//includes
var https = require("https");
var fs = require('fs');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require("express-session");
var ejs = require('ejs');

//server settings
app.disable('x-powered-by');
app.set('view engine', ejs);
app.set('views', __dirname+'/views');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//session cookies
memorystore = require('memorystore')(session);
app.use(session({
  secret: process.env.COOKIE_SECRET,
  name: process.env.COOKIE_NAME,
  resave: true,
  store: new memorystore({
    checkPeriod: 86400000
  }),
  saveUninitialized: false,
	unset: 'destroy',
  secure: true,
  cookie: { maxAge: 60 * 60 * 1000, httpOnly:true,secure:true,sameSite:true } // 30 days
}));



var path = require("path");


// if(process.env.CERT.startsWith(".."))
// 	process.env.CERT = path.join(__dirname, "..", process.env.CERT.substr(2));
// if(process.env.PRIVATE_KEY.startsWith(".."))
// 	process.env.PRIVATE_KEY = path.join(__dirname, "..", process.env.PRIVATE_KEY.substr(2));


//route 1 --- asset files
var asset_routes = require(__dirname + '/routes/assets.js');
app.use(asset_routes);

var basic_routes = require(__dirname + '/routes/basic.js');
app.use(basic_routes);



//error handeling
app.use(function(req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
 	console.error(err.stack);
 	res.send(err.message);
});

require('http').createServer(app).listen(process.env.HTTP, function () {
  console.log('HTTP server hosted on ' + process.env.HTTP);
});