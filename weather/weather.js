const request = require('request');

var getWeather = (latitude,longitude,callback) => {
  var requestUrl = `https://api.darksky.net/forecast/84c6d63954e94d8d4dc7f2e65f7b419a/${latitude},${longitude}`;
  request(
    {
      url : requestUrl,
      json : true
    },
    (error,response,body)=>{
      if(!error && response.statusCode === 200)
      callback(undefined,body.currently.temperature);
      else {
        callback('Unable to get weather',undefined);
      }
    }
  );
}


module.exports = {getWeather};
