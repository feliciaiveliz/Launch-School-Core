(function() {
  console.log('hello');
})();

// without extra () 

function() {
  console.log('hello');
}();

// grouping operator

(2) // 2
(['apple', 'carrot']) // ['apple', 'carrot']

// the parentheses lets JS know that we want to parse a function definition as an expression
// the value returned is the function that we can immediately invoke

(function(a) { // argument list outside
  return a + 1;
})(2); // 3

(function() {
  console.log('hello'); // argument list inside
}()); // hello

let foo = function() {  // omit parentheses when f.d is a f.e that doesn't occur at begining of line
  return function() {
    return 10;
  }();
}();

console.log(foo); // 10