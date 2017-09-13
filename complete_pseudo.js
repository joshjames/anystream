

core.

run http listener:

get URL POST data

url variable(videoID) = $videoID
url variable(user) = user


RUN function  get_videoID_data(videoID)

RUN function createJOB(videoID,imdbID,title,year,user,class)

if streamaVideo.class = movie
{
    RUN function get_movie
}

if streamaVideo.class = show
{
    RUN function get_show
}


RUN function download_URL(url)

if extension = mp4
    {
        RUN function update_videotable(videoID)
    }
    else
        {
            RUN function convertVideo(filename)
            RUN function update_videotable(videoID)
        }


RUN function addvideotomoveQUE(videoID)















//functions

//connect DB run query
function connect_to_mysql_run_query (dbname,username,password,query)
{
return resultsobject_array
}

//get video ID data
function get_videoID_data(videoID)
{
    connect_to_mysql_run_query(streama,user,pass,query)
    $results[]
    video.class = results[video.class]
    video.title = results[vidio.title]
    video.year = results[video.year]
    blah
    blah
}

//function create job
function createJOB(videoID,imdbID,title,year,user,class)
{
    connecttoSQS
}



//get movie
function get_movie (streamaVideo.title, streamaVideo.IMDBid,streamaVideo.year)
run function queryYTSAPI(imdbID)
    if YTSresult = 1
    {
       run function queryFURKAPI(HASH) 
    }
    if YTSresult = 0
    {
        run function queryFURKAPI(title,year)
    }

//get show
function get_show(title, season_num, airdate, episode_num)
{
    
    //build show ID eg. S04E08

    if season_num > 9 {
      showIDNUM = "S" + season_num  
    }
    else{
        showIDNUM = "S0" + season_num
    }

    if episode_num > 9 {
        showIDNUM = showIDNUM + E + episode_num
    }
    else{
        showIDNUM = showIDNUM + E0 + episode_num
    }

queryEZTV(title,showIDNUM)

    if eztvresults = 1
        {
            queryFURKAPI(HASH)
        }
        else
            {
                queryFURKAPI(title,showIDNUM)
            }

}



//query EZTV
function queryEZTV(title,season_num,episode_num,showIDNUM)
{
    web service call http://api.eztv.ag/query="title&showIDNUM"
    get json data
    count results
    if results = 1
        {
            read json data get HASH
            resturn eztvresults = 1
        }
    else
        {
            return eztvresults = 0
        }
}


//queryYTSAPI
function queryYTSAPI(imdb.ID)
{
  web service call http://yts.com/api/query=IMDBid
read json data get key value moviecount
if moviecount = 1
    {
    read json data get HASH
    return YTSresults = 1
    }
if moviecount = 0
    {
    return YTSresults=0
    }  
}





//queryFURKAPI
function queryFURKAPI()
{
if HASH is not null
{
  web service call http:\\furk.com\api\query=HASH
read json data get key value 'id'
web service call http://furk.com/api/getfile?id=id;t_files=1
read json data get URL
return $URL=URL  
}
if HASH is null
{
        
        search array =
        searchterm[0] = "title + year + 1080p + mp4"
        searchterm[1] = "title + year + 720p + mp4"
        searchterm[2] = "title + year + 1080p"
        searchterm[3] = "title + year"

                
    
    x = 0
    do while results == 0
    web service call http://furk.com/api/search="searchterm[x]" limit results 10
    read json results 
    seperate in to results[count]
    count results
    if results = 0 x++

    get results as object
    y = result obect.count

    groupings
    1gb_group = 0
    1_2_group = 0
    2_3_group = 0
    3_4_group = 0
    4_5_group = 0
    6_6_group = 0

    for each object
        {
    if object.filesize = <1000mb then 1gb_group ++
        place object.files in object_group1gb.[loopcount]
    if object.filesize = 1000<2000 then 1_2_group ++
        place object.files in object_group1_2gb.[loopcount]
     blah blah
    loopcount++
        }

    count occurances

    get most occurance group

    get t_file most_occurance_group.id
    url = results.url
}
}

//function download_url

function download_url(url, videoID)
{
count = 0
do while count <2

if extension = mp4
    {
       curl url save as /blah/videoID.mp4 
    }
else
    {
        curl url save as /blah/toconvert/filename
    }
    if error  count++ try again

}

//function convert video
function convertVideo(filename)
{
    run console binary command "ffmpeg - a:v x264 /convert/ " filename "output" videoid ".mp4"
}


//function update video table
function update_videotable(videoID)
{
    connect to database streamaDB
    run query "update table files with values "http://path/to/video/videoid.mp4"
}


//function add video to move queue
function addvideotomoveQUE(videoID)
{
    connect to database anystreamDB
    queury = "update table mediaqueue status = "tomove";
}
