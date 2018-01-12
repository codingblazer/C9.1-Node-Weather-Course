const yargs = require('yargs');
const weather = require('./weather/weather.js');
const geocode = require('./geocode/geocode.js');
const zomato = require('./zomato/zomato.js')

var argv = yargs
          .options({
            a : {
              demand : true,
              alias : 'address',
              describe : 'Address of the user',
              string : true
            }
          })
          .help()
          .alias('help','h')
          .argv;

var address = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(argv.a);
//now we will add abstraction usign the callback
//we should call this funciton and it should give us error message and the body
//look at the modified code below

geocode.getData(address, (error,result)=>{
  if(error){
    console.log(error);
  }else{
    console.log(result.address);
    // weather.getWeather(result.latitude,result.longitude, (error,weatherResult) => {
    //   if(error){
    //     console.log(error);
    //   }else{
    //     console.log(`Weather at your coordinates is ${weatherResult}`);
    //   }
    // });
    zomato.getData(result.latitude,result.longitude,(result)=>{
      var arr = result.nearby_restaurants;
      console.log(arr[0].restaurant.name);
    });
  }
});
