function add(first, second) {
  return first + second;
}

add(1, 2); // 3
add(1, 3015); // 3016

// if we need to call 'add' multiple times with argument set to 1

function addOne(value) {
  return add(1, value);
}

/// 

function primaryFunction(arg1, arg2) { // primary
  console.log(arg1);
  console.log(arg2);
}

function generatorFunction(arg1) {  // generator
  return function(arg2) { // applicator
    return primaryFunction(arg1, arg2);
  }
}

let applicatorFunction = generatorFunction('Hello');
applicatorFunction(37.2); // performs primaryFunction('Hello', 37.2);
// Hello
// 37.2

// we use an outer function to return a function that calls a primary function
// the outer function recieves some arguments while passing some arguments to the returned function
// all arguments are then given to primary function

///

function makeAddN(addend) {
  // saves addend via closure; uses addend when function invoked
  return function(number) {
    return add(addend, number);
  }
}

let add1 = makeAddN(1); 
add1(1); // 2
add1(41); // 42

let add9 = makeAddN(9);
add9(1); // 10
add9(9); // 18

/// we can't reuse the function to do a different operation; must write another method

function multiply(first, second) {
  return first * second;
}

function makeMultiplyN(multiplicand) {
  return function(number) {
    return multiply(multiplicand, number);
  }
}

/// use a more flexible solution; create general purpose generator function that partially applies a single argumnet to any two-arg primary

function add(first, second) {
  return first + second;
}

function repeat(count, string) {
  let result = '';
  let i;
  for (i = 0; i < count; i += 1) {
    result += string;
  }

  return result;
}

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

let add1 = partial(add, 1);
add1(2); // 3
add1(6); // 7

let threeTimes = partial(repeat, 3);
threeTimes('Hello'); // HelloHelloHello
threeTimes('!'); // !!!

// or

let add1 = add.bind(null, 1);
add1(2);
add1(6);

// this is useful because we can pass any two argument function to the primary

/// (1) Write a function named greet that takes two arguments and logs a greeting:

function greet(greeting, name) {
  console.log(`${greeting[0].toUpperCase() + greeting.slice(1)}, ${name}!`);
}

greet('howdy', 'Joe'); // Howdy, Joe!
greet('good morning', 'Sue'); // Good morning Sue!

///

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

function greet(greeting, name) {
  console.log(`${greeting[0].toUpperCase() + greeting.slice(1)}, ${name}!`);
}

let sayHello = partial(greet, 'hello');
let sayHi = partial(greet, 'Hi'); 

sayHello('Brandon');
// Hello, Brandon!
sayHi('Sarah');
// Hi, Sarah!

///




