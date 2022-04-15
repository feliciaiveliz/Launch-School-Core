// Create a Promise that resolves with a value of "Launch School" after a delay of 2000ms, using setTimeout. Print the Promise's resolved value by using the then method.

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Launch School');
  }, 2000);
});

promise.then((message) => {
  console.log(message);
})

