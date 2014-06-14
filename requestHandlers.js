function start(response){
	console.log("Request handler 'start' was called.");
	var content = "Hello hacker! Welcome to the PennApps Help Desk!";
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write(content);
	response.end();

	return content;
}

exports.start = start;