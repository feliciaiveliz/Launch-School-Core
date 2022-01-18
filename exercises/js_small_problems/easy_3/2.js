// let rlSync = require('readline-sync');
// let number1 = rlSync.question("Enter the 1st number:\n");
// let number2 = rlSync.question("Enter the 2nd number:\n");
// let number3 = rlSync.question("Enter the 3rd number:\n");
// let number4 = rlSync.question("Enter the 4th number:\n");
// let number5 = rlSync.question("Enter the 5th number:\n");
// let number6 = rlSync.question("Enter the last number:\n");
// [number1, number2, number3, number4, number5].forEach(number => result.push(number));

let result = [];

result.push(prompt('Enter the 1st number:'));
result.push(prompt('Enter the 2nd number:'));
result.push(prompt('Enter the 3rd number:'));
result.push(prompt('Enter the 4th number:'));
result.push(prompt('Enter the 5th number:'));

let lastNumber = prompt('Enter the last number:');

// if (result.includes(lastNumber)) {
// 	console.log(`The number ${lastNumber} appears in [${result.join(', ')}].`);
// } else {
//   console.log(`The number ${lastNumber} does not appear in [${result.join(', ')}].`);
// }

if (result.includes(lastNumber)) {
	prompt(`The number ${lastNumber} appears in [${result.join(', ')}].`);
} else {
  prompt(`The number ${lastNumber} does not appear in [${result.join(', ')}].`);
}
