
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
var address = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(argv.a);;
geocode.getData(address);
