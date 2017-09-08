//core function for getting stuff.

// first define values

//var imdbID = "tt0107688"
var imdbID  = (parse URL variable here)
var request = require("request")
var require ('express')

//yts API base
var YTSAPI = "https://yts.ag/api/v2/list_movies.json?query_term=";

// FURK API BASE

var furkAPI = https://www.furk.net/api/plugins/metasearch -d 'api_key=de38830f07a3bb95e5a5e4741216c08e1aa7b3a5;q=$HASH;pretty=1' > dl.json


//amend url
url += imdbID;

//sql query for video ID
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

//filter array get values we need.

var video[];
var video.class = result[class];
var video.imidbid = result[imdbid];
var video.movieDBid = result[api_id];
var video.title = result[title];
var video.year = result[release_date];
var video.year = (video.year strip date(YYYY);)
var video.airdate = result[air_date];
var video.seasonnum = result[season_number];
var video.episodenum = result[episode_number];
var video.showid = result[show_id]


//core logic.

//1 decide if movie or show

if video.class = streama.movie
    {
        getmovie(video.imdbid)

    }
if video.class = streama.show
    {
        //get additional show info
        getshow(video.title,video.seasonnum,video.episodenum,video.showid)
    }



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





//console.log(webdata);


//var obj = require('./furk.search.json');





var id = JSON.stringify(id).replace(/[\[\]"]+/g,'')



function getmovie(imdbID,title,year)
{
    queryYTS(imdbid)
        if queryYTS(result = null)
            {
                queryFURK(video.title,video.year)
            }
    queryFURK(hash)
    getfile(furkURL)


}





function getfile(URL)
{
    \\file download URL
    \\save to location

}
