//core function for getting stuff.

// first define values

//var imdbID = "tt0107688"
var imdbID  = (parse URL variable here)
var request = require("request")
var require ('express')

//yts API base
var url = "https://yts.ag/api/v2/list_movies.json?query_term=";

// FURK API BASE

var furkAPI = https://www.furk.net/api/plugins/metasearch -d 'api_key=de38830f07a3bb95e5a5e4741216c08e1aa7b3a5;q=$HASH;pretty=1' > dl.json


//amend url
url += imdbID;

sql = "SELECT * FROM `video` WHERE id=" + VideoID;

//queryDB for videoID
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
  });



//return an array of values that match on a certain key
function getValues(obj, key) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getValues(obj[i], key));
        } else if (i == key) {
            objects.push(obj[i]);
        }
    }
    return objects;
}



console.log("sending URL request of", url);

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
})
var obj = JSON.parse(response);

//console.log(webdata);


//var obj = require('./furk.search.json');


var id = (getValues(obj,'id'));


var id = JSON.stringify(id).replace(/[\[\]"]+/g,'')


console.log(id);