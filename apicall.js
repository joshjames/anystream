var https = require('https');

/**
 * Get Message - GET
 */
// options for GET
var optionsgetmsg = {
    host : 'yts.ag', // here only the domain name
    // (no http/https !)
    port : 443,
    path : '/api/v2/list_movies.json?query_term=tt1228705', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};

console.info('Options prepared:');
console.info(optionsgetmsg);
console.info('Do the GET call');

// do the GET request
var reqGet = https.request(optionsgetmsg, function(res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
//  console.log("headers: ", res.headers);


    res.on('data', function(d) {
        console.info('GET result after POST:\n');
        process.stdout.write(d);
        console.info('\n\nCall completed');
    });

});

reqGet.end();
reqGet.on('error', function(e) {
    console.error(e);
});