const request = require('request');


var getData = (lat,long,callback)=>{
  var options = {
    url: `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${long}`,
    headers: {
      'user-key': '143471325af8c998c10469bf2a659d4b'
    }
  };

  request(options, (error, response, body)=>{
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      callback(info);
    }
  });
};

module.exports = {getData};
