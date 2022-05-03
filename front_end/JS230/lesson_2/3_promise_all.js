// Promise.all()
// Aggregates the results of multiple promises
// 

const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'Hello');
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'World');
});

const p3 = 1000;

Promise.all([p1, p2, p3]).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log('Promise.all rejection!', error);
};

