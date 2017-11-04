const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
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
    console.log(JSON.stringify(result,undefined,2));
  }
});
