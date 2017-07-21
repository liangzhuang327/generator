var express = require('express');
var router = express.Router();

router.all('/', function(req, res, next) {
	console.log(res.locals)
  res.renderer();
});

module.exports= router