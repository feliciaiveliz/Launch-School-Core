// (1) What are the characteristics that define higher-order functions?
// return a function, accept a function as an argument or both

// (2) Of the two functions invoked (checkEven and filter), which is a higher-order function and why?
let numbers = [1, 2, 3, 4];
function checkEven(number) {
  return number % 2 === 0;
}

numbers.filter(checkEven); // [2, 4]
// filter is a higher order function because it can accept a function as an argument

// (3) Implement makeCheckEven below, such that the last line of the code returns an array [2, 4].
let numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return function(number) {
    return number % 2 === 0;
  };
}

let checkEven = makeCheckEven();
numbers.filter(checkEven); // [2, 4]

// (4) Implement execute below, such that the return values for the two function invocations match the commented values.
function execute(func, operand) {
  return func(operand);
}

execute(function(number) {
  return number * 2;
}, 10); // 20

execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy'); // HEY THERE BUDDY

// (5) Implement makeListTransformer below such that timesTwo's return value matches the commented return value.
function makeListTransformer(func) {
  return function(array) {
    let result = array.map(func);
    return result;
  }
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

timesTwo([1, 2, 3, 4]); // [2, 4, 6, 8]
