// Pull in dependencies
const express = require('express'); // import the node framework express
const app = express(); // create an instance of express
const port = 8080; // store the port number we'd like to use
const router = require('./routes'); // navigates to where we have our routes stored

// implement router
app.use('/', router); // app.use - is an Express middleware object which has access to all of our requests and responses
// Set view engine
app.set('view engine', 'ejs'); //tell Express we're using EJS

//put your static files (js, css, images) into /public directory
app.use('/public', express.static(__dirname + '/public'));

// start the server
app.listen(port, function() {
    console.log('app started, listening on port ' + port); // indicate our server is running
}); // ^ code above is not enough to display page, we need to create a path to route to. (created in routes.js)
