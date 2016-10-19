const express = require('express'); // import the express module
const path = require('path'); // node module - path helper
const api_creds = require('./api-keys'); // grab kraken credentials
const KrakenClient = require('./kraken'); // require kraken http client
const kraken = new KrakenClient(api_creds.api_key, api_creds.api_secret); // instantiate a new client!!



// create router object
var router = express.Router(); // will apply all our routes to router instead of entire router
// allows us to use several different routers if needed (more modular/reusable approach)

// route our router to the '/' root folder (homepage)
router.get('/', function(request, response) {
    // Get Ticker Info
    kraken.api('Ticker', {
        "pair": 'XETHZUSD'
    }, function(error, data) {
        if (error) {
            console.log(error);
        } else {
            // Use render index.ejs and a data object to the home page view
            response.render('index', {
                data: data.result
            });
        }
    });

});

// export our router so index.js can have access to it.
module.exports = router;
