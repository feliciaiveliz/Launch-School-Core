// higher-order functions accept a function as an argument, return a function when invoked or both

[1, 2, 3, 4].forEach(function(number) {
  console.log(number);
});

// functions that return functions
function helloFactory() {
  return function() {
    console.log('hi');
  };
}

helloFactory();   // returns function
helloFactory()(); // hi
let hello = helloFactory();
hello(); // hi

function timed(func) {
  return function() {
    let start = new Date();
    func();
    let stop = new Date();
    console.log((stop - start).toString() + ' ms have elapsed');
  };
}

let timedHi = timed(function() { console.log('hi'); });
timedHi; // function
timedHi(); 
// hi
// 0 ms have elapsed

function loopy() {
  let sum = 0;
  for (i = 1; i < 1000000000; i += 1) {
    sum += i;
  }

  console.log(sum);
}

loopy();
timed(loopy)(); 