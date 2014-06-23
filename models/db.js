var AWS = require('aws-sdk');
AWS.config.loadFromPath('../config.json');
var simpledb = new AWS.SimpleDB();

var searchQuestion = function (question, route_callback){
	console.log('Searching: ' + question);
};


var database = { 
  searchQuestion: search_question
};
                                        
module.exports = database;