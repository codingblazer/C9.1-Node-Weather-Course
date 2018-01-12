const yargs = require('yargs');
const axios = require('axios');
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
axios.get(address).then((response)=>{
  if(response.data.status === 'ZERO_RESULTS')
  throw new Error('Unable to find that address');
  console.log(response.data);
}).catch((e)=>{
  if(e.code==='ENOTFOUND')
  console.log(e);
  else
  console.log(e.message); //in case it's coming from throw e of ZERO_RESULTS
});
