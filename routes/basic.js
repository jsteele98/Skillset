var express = require('express');
var router = express.Router();

var path = require('path');
var __basedir = path.join(__dirname, "..");

var ejs = require('ejs');

router.get('/', function(req,res,next){
	return res.render("index.ejs",{invalid:true,invalid_message:"must enter vendorid"});
});


module.exports = router;




