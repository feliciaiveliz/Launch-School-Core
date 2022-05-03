let allGood = true;

// Define a promise
// A promise is in one of three states:
// - Pending  | hasn't settled to a value yet

let fetchSomeData = new Promise((resolve, reject) => {
  if (!allGood) {
    reject("error fetching data");
  } else {
    resolve({ 
      id: 1,
      message: 'nice work',
    });
  }
});

// Consuming a Promise
fetchSomeData.then(fetchedData => {
  console.log('then:', fetchedData);
}).catch(error => {
  console.error('catch:', error);
});