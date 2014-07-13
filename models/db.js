var AWS = require('aws-sdk');
AWS.config.loadFromPath('../config.json');
var simpledb = new AWS.SimpleDB();

//db: questions, answers, keywords, weights


var searchQuestion = function (question, route_callback){
	console.log('Searching: ' + question);
};


var database = { 
  search_question: searchQuestion
};
                                        
module.exports = database;