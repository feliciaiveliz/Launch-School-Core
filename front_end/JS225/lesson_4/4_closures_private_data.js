function makeCounter() {
  let count = 0; // count is private data for function
  return function() {
    count += 1;
    console.log(count);
  };
}

let counter = makeCounter();
counter(); // 1
counter(); // 2
counter(); // 3
console.log(count); // ReferenceError: count is not defined
console.log(counter.count); // undefined

// (1) Create a makeCounterLogger function that takes a number as an argument and returns a function. When we invoke the returned function with a second number, it should count up or down from the first number to the second number, logging each number to the console:

function makeCounterLogger(number) {
  return function(secondNumber) {
    if (number < secondNumber) {
      while (number <= secondNumber) {
        console.log(number);
        number += 1;
      }
    } else {
      while (number >= secondNumber) {
        console.log(number);
        number -= 1;
      }
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8
countlog(2);
// 5
// 4
// 3
// 2

// (2) We'll build a simple todo list program using the techniques we've seen in this assignment. Write a makeList function that returns a new function that implements a todo list. The returned function should have the following behavior:
// When called with an argument that is not already on the list, it adds that argument to the list.
// When called with an argument that is already on the list, it removes the element from the list.
// When called without arguments, it logs all items on the list. If the list is empty, it logs an appropriate message.

function makeList() {
  let list = [];
  return function(todo) {
    if (todo === undefined) {
      if (list.length === 0) {
        console.log('The list is empty.');
      } else {
        list.forEach(todo => {
          console.log(todo);
        });
      }
    } else if (list.includes(todo)) {
      let index = list.indexOf(todo);
      list.splice(index, 1);
      console.log(`${todo} removed!`);
    } else if (!list.includes(todo)) {
        list.push(todo);
        console.log(`${todo} added!`);
    }
  };
}

let list = makeList();
list(); // The list is empty
list('make breakfast'); // make breakfast added!
list('read book'); // read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list(); // read book