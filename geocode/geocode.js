const request = require('request');

var getData = (address) => {
  request (
    {
      url: address,
      json: true
    },
  (error,response,body) => {
  if(error){
    console.log('Unable to connect');
  }else if(body.status === 'ZERO_RESULTS'){
    console.log('Wrong Address');
  }else if(body.status === 'OK'){
    console.log(body.results[0].geometry.location.lat);
    console.log(body.results[0].geometry.location.lat);
    console.log(body.results[0].formatted_address);
  }else{
    console.log('Something went wrong');
  }
  }
  );
};

module.exports = {getData};
