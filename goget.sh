 1802  curl -v https://yts.ag/api/v2/list_movies.json?query_term=tt0096874
 1803  curl -v https://www.furk.net/api/plugins/metasearch -d 'api_key=de38830f07a3bb95e5a5e4741216c08e1aa7b3a5;q=73B9EABC2934AB07244B633A01FE5811F8C99912;pretty=1' > dl.json
 1806  curl -v https://www.furk.net/api/file/get -d 'api_key=de38830f07a3bb95e5a5e4741216c08e1aa7b3a5;id=547115159019585448;unlinked=1;pretty=1;t_files=1'


http://www.imdb.com/title/tt2543164


imdb=tt2543164
#!/bin/bash
imdb=$1
curl -s https://yts.ag/api/v2/list_movies.json?query_term=$imdb > ~/yts.json
hash=`cat yts.json | jq '.data.movies[].torrents[] | select(.quality == "1080p") | .hash'`
temp="${hash%\"}"
hash="${temp#\"}"
curl -s https://www.furk.net/api/plugins/metasearch -d 'api_key=de38830f07a3bb95e5a5e4741216c08e1aa7b3a5;q='$hash';pretty=1' > furk1.json
furkid=`cat furk1.json | jq .files[].id`
temp="${furkid%\"}"
furkid="${temp#\"}"
curl -s https://www.furk.net/api/file/get -d 'api_key=de38830f07a3bb95e5a5e4741216c08e1aa7b3a5;id='$furkid';unlinked=1;pretty=1;t_files=1' > furk2.json
urldl=`cat furk2.json | jq '.files[].t_files[] | select(.is_largest == "1") | .url_dl'`
temp="${urldl%\"}"
urldl="${temp#\"}"
wget -O /media/movies/$imdb.mp4 $urldl



 {
  "time": {
    "updated": "Sep 12, 2017 00:49:00 UTC",
    "updatedISO": "2017-09-12T00:49:00+00:00",
    "updateduk": "Sep 12, 2017 at 01:49 BST"
  },
  "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
  "bpi": {
    "USD": {
      "code": "USD",
      "rate": "4,235.8750",
      "description": "United States Dollar",
      "rate_float": 4235.875
    },
    "AUD": {
      "code": "AUD",
      "rate": "5,279.6963",
      "description": "Australian Dollar",
      "rate_float": 5279.6963
    }
  }
}


#!/bin/bash
curl -s http://api.coindesk.com/v1/bpi/currentprice/AUD.json > ~/code/japi/AUD.json
btcprice=`cat ~/code/japi/AUD.json | jq '.bpi.AUD.rate'`
temp="${btcprice%\"}"
btcprice="${temp#\"}"
btcprice=`echo "$btcprice" | tr -d ,`
echo "$" $btcprice
btcprice=`printf "%.0f" $btcprice`