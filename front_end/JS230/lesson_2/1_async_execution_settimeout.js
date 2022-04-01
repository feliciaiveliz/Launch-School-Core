// (1) 
function timeout(n) {
  let delay = 1000;

  setTimeout(() => {
    console.log(n);
  }, delay * n);
}

let number = 1;

function delayLog() {
  if (number >= 11) return;
  timeout(number);
  number++;
  delayLog();
}

delayLog();

// LS solution

function makeLogger(number) {
  return function() {
    console.log(number);
  }
}

function delayLog() {
  for (let i = 1; i <= 10; i += 1) {
    let logger = makeLogger(i);
    setTimeout(logger, i * 1000);
  }
}

delayLog();

// (2) In what sequence will the JavaScript runtime run the following lines of code? Number them from 1-8 to show the order of execution.

setTimeout(() => {     // 1
  console.log('Once'); // 5
}, 1000);

setTimeout(() => {     // 2
  console.log('upon'); // 7
}, 3000);

setTimeout(() => {     // 3
  console.log('a');    // 6
}, 2000);  

setTimeout(() => {     // 4
  console.log('time'); // 8
}, 4000);

// (3) In what sequence does the JavaScript runtime run the functions q, d, n, z, s, f, and g in the following code?

setTimeout(() => { 
  setTimeout(() => {
    q(); // 6 -> actually 7
  }, 15);

  d(); // 3

  setTimeout(() => {
    n(); // 5
  }, 5);

  z(); // 4
}, 10); 

setTimeout(() => {
  s(); // 7 -> actually 6
}, 20); 

setTimeout(() => {
  f(); // 2
});

// (4) Write a function named afterNSeconds that takes two arguments: a callback and a time duration in seconds. The function should wait for the indicated period, then invoke the callback function.

function afterNSeconds(callback, time) {
  time = time * 1000;
  setTimeout(() => {
    callback();
  }, time);
}

function greet() {
  console.log('HOWDY!');
}

afterNSeconds(greet, 7);

// LS

function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}

g(); // 1