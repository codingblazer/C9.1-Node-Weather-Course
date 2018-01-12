var somePromise = new Promise((resolve,reject)=>{
  // resolve('hey it worked');
  reject('Unable to fulfill promise');
});


somePromise.then(
  (message)=>{
  console.log('Sucess:',message);
},
(error)=>{
  console.log('Error:',error);
});
