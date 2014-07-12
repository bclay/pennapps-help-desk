dvar db = require("../models/db.js");
/*function route(handle, pathname, response){
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === 'function'){
		handle[pathname](response);
	} else {
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}
exports.route = route;

*/

var launch = function(req, res){
	res.render('index.jade', {});
}

var search = function(req, res){
	db.searchQuestion(req.body,function(data,err){
		if (err) {
			res.render('index.jade',{message:err});
		}
		else if (data){

			res.redirect('/questionpage')
		}
		else{
			res.render('index.jade', {message: 'Invalid question'});
		}
	});
}

var routes = {
	launch: launch,
	search: search
}

module.exports = routes;