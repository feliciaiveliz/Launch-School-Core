// Starting from the left side of an integer, adjacent digits pair up in "battle" and the larger digit wins. If two digits are the same, they both lose. A lone digit automatically wins.

// Create a function that returns the victorious digits.

// There are no winners in a battle with equal digits (neither should be printed).
// If the length of the number is odd, the lone digit should be printed at the end of the number.

// INPUT:
// - positive number

// OUTPUT:
// - positive number

// RULES:
// - the larger number in a pair wins
// - if one number is left at the end, append it to the end of the winning numbers

// DATA STRUCTURES:
// - numbers -> array 

// ALGORITHM:
// - create an empty array called result
// - put input number into an array called 'digits'
//   - convert number into string, split on '', then map to Number
// - while the length of 'digits' is > 0
// - splice out of 'digits' two numbers
//   - save to 'slice'
//   - if the length of 'slice' is 1, add element to 'result'
//     - break
//   - if the first and second element are equal, skip
// - find the max of the 'slice' and push to 'result'
// - join result to a string, then convert to number
// - return result

function battleOutcome(number) {
  let result = [];
  let digits = String(number).split('').map(Number);

  while (digits.length > 0) {
    let slice = digits.splice(0, 2);
    if (slice.length === 1) {
      result.push(slice[0]);
      break;
    }
    if (slice[0] !== slice[1]) {
      result.push(Math.max(...slice));
    }
  }
  
  return Number(result.join(''));
}

console.log(battleOutcome(578921445)); // 7925
console.log(battleOutcome(32531));     // 351
console.log(battleOutcome(111));       // 1
console.log(battleOutcome(78925));     // 895
console.log(battleOutcome(789251));    // 895
console.log(battleOutcome(789257));    // 897
console.log(battleOutcome(789255));    // 89


