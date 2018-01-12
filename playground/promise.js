//this is a function that will create our request just like getWeather() function

var asychAddusingPromise = (a,b)=>{
  return new Promise((resolve,reject)=>{
    //your request here which will take some time
    setTimeout(()=>{
      if(typeof a === 'number' && typeof b === 'number')
      resolve(a+b);
      else
      reject('Arguments must be numbers');
    }, 1500);
  });
};


//now lets see how we can use getWeather in app.js....here lets show for add =>
asychAddusingPromise(5,7).then( (result)=>{console.log(result);} , (error)=>{console.log(error);} );
//=> as you can see the promise has reduced everything to 1 line instead of all if else => we have done abstraction
