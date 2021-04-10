var express = require('express');
var router = express.Router();

var path = require('path');
var __basedir = path.join(__dirname, "..");

//public asset files
router.get('/assets/:path', function (req, res) {
	res.sendFile(__basedir + '/assets/' + req.params.path);
});

module.exports = router;



