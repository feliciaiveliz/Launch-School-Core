// let temperatures = [53, 86, 12, 43];

// function average(values) { // calculates average by looping over array and compounding total
//   let total = 0;
//   let i;
//   for (i = values.length - 1; i >= 0; i -= 1) {
//     total += values[i];
//   }

//   return total / values.length;
// }

// console.log(average(temperatures)); // 48.5

// changing function to work with context variable 'this'

let temperatures = [53, 86, 12, 43];

function average() { 
  let total = 0;
  let i;
  for (i = this.length - 1; i >= 0; i -= 1) {
    total += this[i];
  }

  return total / this.length;
}

console.log(average(temperatures)); // NaN
console.log(average.call(temperatures));  // 48.5
console.log(average.apply(temperatures)); // 48.5
let averageTemperature = average.bind(temperatures);
console.log(averageTemperature()); // 48.5
temperatures.average = average;
console.log(temperatures.average()); // 48.5
// we're calling the function from the global scope
// the context variable 'this' is refering to the global object, window, not temperatures
// use call or apply to get the temperatures array as context
// both methods let us change the object that 'this' references
// using bind permanently sets the execution context of a funciton to a given object that we pass to bind
// we can add a method to temperatures and call when ready