//not sure that the db is set up in the best way
//talk about db setup
var AWS = require('aws-sdk');
AWS.config.loadFromPath(../../config.json);
var simpledb = new AWS.SimpleDB();
var async = require('async');

var newQ = [{question:'What\'s in a name?', answer:'That which we call a rose by any other name would smell as sweet.'}];
simpledb.createDomain({DomainName:'helpdeskqs'}, function(err, data){
	if(err){
		console.log("Cannot create: "+err);
    } else {
        async.forEach(helpdeskqs, function(w, callback) {
        simpledb.putAttributes({DomainName:'helpdeskqs', ItemName:w.question,
            Attributes: [{Name:'answer', Value:w.answer}]},
            function(err, data) {
                if (err)
                	console.log("Cannot put: "+err);
                callback();
              });
          });
        }
	}
});
*/