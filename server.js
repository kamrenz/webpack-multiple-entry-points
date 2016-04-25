// Importing express module for our node middleware
var express = require('express');

//Create the "express" server for routing and static files.
var app = express();

//Setting port
app.set('port', (process.env.PORT || 8080));

//Utilize CORS on express
//	Enable for all routes
//app.use(cors());

// Compute the working directory for serving static files
app.use(express.static(__dirname + '/'));

/**
 * Adds a simple logging, "mounted" on the root path.
 * Using Express middleware
 **/
app.use(function(req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();
});


app.listen(app.get('port'), function() {
	console.log('Node server started @ http://localhost:' + app.get('port'));
	console.log('Press Ctrl + c for server termination');
});