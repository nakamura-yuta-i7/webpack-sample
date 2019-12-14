var express = require('express');
var router = express.Router();

router.get('/api/page', function(req, res, next) {
	var contents = {
		"/": {
			title: "キイロイトリ",
			content: "キイロイトリとは",
		},
		"/about": {
			title: "キイロイトリについて",
			content: "キイロイトリとは",
		},
		"/about": {
			title: "キイロイトリについて",
			content: "キイロイトリとは",
		},
		"/album": {
			title: "キイロイトリアルバム",
			content: "キイロイトリアルバムとは",
		},
		"/goods": {
			title: "キイロイトリGoods",
			content: "キイロイトリGoodsとは",
		},
	}
	var data = contents[req.query.page];
	console.log( "req.query.page:", req.query.page );
	if ( ! data ) {
		data = {
			title: "Data not found !!!",
			content: "Data not found ",
		}
	}
	res.json( data );
});

router.get('/*', function(req, res, next) {
	var content = "コンテンツ<br>内容<br>内容";
	console.log( content );
	res.render("page", {content: content} );
});

module.exports = router;
