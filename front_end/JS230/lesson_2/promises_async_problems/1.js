// Create a Promise that resolves with a value of "Launch School" after a delay of 2000ms, using setTimeout. Print the Promise's resolved value by using the then method.

let promise = new Promise(resolve => {
  setTimeout(() => {
    resolve('Launch School');
  }, 2000);
});

promise.then(result => {
  console.log(result);
});

// we create a new Promise object on line 3 and save it to variable 'promise'
// 'promise' takes one parameter, 'resolve', a callback function
// the promise 'promises' to resolve after a period of 2 seconds, in which case we can pass 'Launch School' to 'resolve' callback as argument
// question: what is the return value of the 'promise'? (is it 'resolve' callback?)
// after the promise is settled, (fulfilled or rejected), we pass the return value to 'then'
// 'then' takes a callback function, 'result', (which is 'resolve') and logs the value to the console
// 'then's callback 'result' is the 'resolve' callback function that is returned from 'promise' 
