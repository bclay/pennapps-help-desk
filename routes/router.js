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
app.post('/pass', function (req, res) {
    res.send('index.jade', { name: req.body.name });
    console.log ("asdf");
});
}

var routes = {
	launch: launch,
	search: search
}

module.exports = routes;