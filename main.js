var express = require('express');
var request = require('request');
var app = express();

function startTest() {
	console.time("test");
	request("http://localhost:3000", function(err, res, body) {
		if (err) return console.error(err);
		console.timeEnd("test");
	});
}

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
	startTest()
});
