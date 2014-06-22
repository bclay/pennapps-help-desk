var express = require('express');
var app = express();

var router = require("./routes/router.js");

//app.use(express.bodyParser());
//app.use(express.logger("default"));

app.get('/', router.launch);




app.listen(80);