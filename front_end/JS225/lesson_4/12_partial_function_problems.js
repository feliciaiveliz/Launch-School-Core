function subtract(a, b) {
  return a - b;
}

function sub5(a) {
  return subtract(a, 5);
}

console.log(sub5(10)); // 5
console.log(sub5(20)); // 15

// (2) This code is a bit limited however, because we can only subtract by 5. Implement the makeSubN function below so that we can supply any value we want to be subtracted from a, and get a new function that will always subtract this value.

function subtract(a, b) {
  return a - b;
}

function makeSubN(n) {
  return function(firstNumber) {
    return subtract(firstNumber, n);
  }
}

let sub5 = makeSubN(5);
console.log(sub5(10)); // 5

// (3) Although the solution above is more flexible, we now want to be able to supply any operation, not just subtraction. Implement makePartialFunc below.

function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b);
  }
}

function multiply(a, b) {
  return a * b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);
multiplyBy5(100); // 500

// (4) In our previous solution, multiplyBy5 retains access to func and b long after makePartialFunc has finished execution. What makes this possible?

// The returned function within makePartialFunc retains access to func and b through the use of a closure. The returned function closes over its lexical environment and all 
// variables that are in its lexical scope that the function needs.  

let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    rollCall('Math', students);
  }
}

let mathRollCall = makeMathRollCall();
console.log(mathRollCall(subjects['Math']));
// Math:
// Fatima
// Gary
// Susan




