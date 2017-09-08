function getMovie(videoID,imdbID,title,year){

    queryYTS(imdbID)

    if queryYTS.moviecount = 1
        queryFURK(hash)
        result == 1 (write_file(URL))
        result == 0 (manual)
    else
        queryFURK(title,year)

    
}



function queryYTS(imdbID)
{
    request({
        url: url,
        json: true
    }, function (error, response, body) {
    
        if (!error && response.statusCode === 200) {
            console.log(body) // Print the json response
        }
    })
    var obj = JSON.parse(response);

    var movieHASH = (getValues(obj,'hash'));




}