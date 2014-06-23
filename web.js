var express = require('express');
var app = express();
var logfmt = require("logfmt");
var router = require("./routes/router.js");

app.use(logfmt.requestLogger());

app.get('/', router.launch);

var port = Number(process.env.PORT || 5000);
app.listen(port, function(){
	console.log("Listening on " + port);
});