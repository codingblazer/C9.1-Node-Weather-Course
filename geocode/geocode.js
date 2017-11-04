const request = require('request');

//here also making getData function to take callback function
var getData = (address, callback) => {

  request (
    {
      url: address,
      json: true
    },
  (error,response,body) => {
  if(error){
    callback('Unable to Connect',undefined);
  }else if(body.status === 'ZERO_RESULTS'){
    callback('Wrong Address');
  }else if(body.status === 'OK'){
    callback(undefined, {
      longitude : body.results[0].geometry.location.lng,
      latitude : body.results[0].geometry.location.lat,
      address : body.results[0].formatted_address
    });
  }else{
    callback('Something went wrong');
  }
});

};



module.exports = {getData};
//84c6d63954e94d8d4dc7f2e65f7b419a
