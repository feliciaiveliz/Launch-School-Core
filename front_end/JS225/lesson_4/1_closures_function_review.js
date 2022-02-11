// use function keyword to create a function or a function expression
function hello() {
  console.log('Welcome!');
}

// anonymous function syntax
let hi = function() {
  console.log('hi');
};

// passing a function to another function as an argument or return value

let squares = [1, 2, 3, 4, 5].map(function(number) {
  return Math.pow(number, 2);
});

squares; // 81