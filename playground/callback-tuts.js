//lets see how to make callback functions

//var anyfunc = (a,b) => {definition};   //first you make/define the function
//and then you call it : anyfunc(a,b);

//Similar mechanism but slight different...In callback functions, you can also pass functions as argument (IN java or before, we only passed variables to the function while calling but now you can pass func as argument)
//what do we do with this argiument function
//look => you are getting variables as normal => do your work like fetching databse/network request usign these variables
//after the work is done, now since this is not a normal function => it will call this function that we got as argument
//this is called callback i.e. the function we got was callback function

//lets see example => we will make getUser func - takes id variable to fetch user object with that id from database + takes callbackfunc as argument
//whatever is this func, it will be called after fetching is done

//define the function
var getUser = (id,funcToBecalled) => {
  //fetch from database
  //since we don't have database now, let's create object ourself
  var user = {
    id: id,
    name: 'Varun'
  };
// //Now let's call funcToBecalled BUT let' put it in setTimeOut of 3 sec as database would have taken this much time
// setTimeout(()=>{
// funcToBecalled();
// },3000);
// };
//
// //call this defined functions
// //we will pass id and a function that has to be called => Let's define this "funcToBecalled" here only i.e.
// getUser(54, () =>{
//   console.log("sachin");
// });

//this works
//lets make some modification..this time, our funcToBecalled takes user as argument and print it =>
setTimeout(()=>{
funcToBecalled(user);
},3000);
};
/////END OF GET USER DEFINITION 
getUser(54, (user) =>{
  console.log(user);
});

//work again

//So what is callback => If you remember, You created onAnimationEnd in android powerup
//just like that
//what was "callback" exactly in above program => it was the function passed as argument i.e. funcToBecalled = callback
//the concept is that fetch() would have taken lot of time => we passed callback func (funcToBecalled) to it to tell it that I am moving ahead, and when you are done with fetching, just call this funcToBecalled i.e. callback
//and pass the fetched object to that callback func => Inside this callback definition, you can do whatever you want to do with fetched object
