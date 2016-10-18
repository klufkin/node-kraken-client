var express = require('express'); // import the express module
var path = require('path'); // node module - path helper

// create router object
var router = express.Router(); // will apply all our routes to router instead of entire router
// allows us to use several different routers if needed (more modular/reusable approach)

// route our router to the '/' root folder (homepage)
router.get('/', function(request, response) {
    // Use render index.ejs and a data object to the home page view
    response.render('index', {});
});

// export our router so index.js can have access to it.
module.exports = router;
