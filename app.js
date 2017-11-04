const yargs = require('yargs');
const request = require('request');
// const geocode = require('./geocode/geocode.js');
// var argv = yargs
//           .options({
//             a : {
//               demand : true,
//               alias : 'address',
//               describe : 'Address of the user',
//               string : true
//             }
//           })
//           .help()
//           .alias('help','h')
//           .argv;
// var address = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(argv.a);
// //now we will add abstraction usign the callback
// //we should call this funciton and it should give us error message and the body
// //look at the modified code below
// geocode.getData(address, (error,result)=>{
//   if(error){
//     console.log(error);
//   }else{
//     console.log(JSON.stringify(result,undefined,2));
//   }
// });

request(
  {
    url : 'https://api.darksky.net/forecast/84c6d63954e94d8d4dc7f2e65f7b419a/28.6139391,77.2090212',
    json : true
  },
  (error,response,body)=>{
    if(!error && response.statusCode === 200)
    console.log(body.currently.temperature);
    else {
      console.log('Unable to retreive');
    }
  }
);
