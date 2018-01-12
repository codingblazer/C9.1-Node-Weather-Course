const request = require('request');

var geocodeAddress = (address)=>{
  return new Promise((resolve,reject)=>{

    request (
      {
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address),
        json: true
      },
    (error,response,body) => {
      if(error){
        reject('Unable to Connect');
      }else if(body.status === 'ZERO_RESULTS'){
        reject('Wrong Address');
      }else if(body.status === 'OK'){
        resolve({
          longitude : body.results[0].geometry.location.lng,
          latitude : body.results[0].geometry.location.lat,
          address : body.results[0].formatted_address
        });
      }else{
        reject('Something went wrong');
      }
    }
  );
})
}


geocodeAddress('19146').then((location)=>{
  console.log(JSON.stringify(location,undefined,2));
}),((error)=>{
  console.log(error);
});
