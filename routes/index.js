var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var html = require("fs").readFileSync(__dirname + "/../index.html", "utf8");
	res.send(html);
  // res.render('index', { title: 'Express' });
});

module.exports = router;
