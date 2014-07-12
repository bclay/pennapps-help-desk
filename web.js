var express = require('express');
var app = express();
var jade= require ('jade');
var logfmt = require("logfmt");
 bodyParser = require('body-parser');
var router = require("./routes/router.js");
var natural = require('natural');

tokenizer=new natural.WordTokenizer();
app.use(logfmt.requestLogger());
app.use(bodyParser());
/*
app.post('/pass', function(req, res) {
	console.log(tokenizer.tokenize(req.body.ques))
 
});
*/


app.post('/pass', router.search)

app.get('/', router.launch);
var port = Number(process.env.PORT || 5000);
app.listen(port, function(){
	console.log("Listening on " + port);
});