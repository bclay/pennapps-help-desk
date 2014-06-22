var AWS = require('aws-sdk');
AWS.config.loadFromPath('../config.json');
var simpledb = new AWS.SimpleDB();

var search = function(searchTerm){
	//do nothing right now
}

var database = {
	search: search;
}