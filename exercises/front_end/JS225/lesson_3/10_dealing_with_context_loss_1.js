let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  },
};

console.log(john.greetings()); // hello, john doe

let foo = john.greetings; 
// we're not calling greetings yet, so the value of this is not set until execution time -- only the function is set to 'foo', without having set a 'this' value
// extracting method (now a function) from john object, implicit execution context is now global, assign to foo
foo(); // hello, undefined undefined -- since greetings this value is set to global, JS is looking for variables 'firstName' and 'lastName' as properties on global object
// it can't find them, so they are given a value of undefined
// all functions execute with the global object as its execution context when it's called without an explicit execution context
// implicity set by javascript to global object

// Fix with call

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  },
};

console.log(john.greetings()); // hello, john doe

let foo = john.greetings.call(john); 
foo; // hello, john doe

/// passing a method (now function) to another function as argument

function repeatThreeTimes(func) {
  func();       // can't do func.call(john), out of scope because w'ere in the inner function scope of 'repeatThreeTimes'
  func();
  func();
}

function foo() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings); // pass greetings method (now function) to repeathreetimes but it loses it's context
}

foo();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined

/// fix with call and passing context object as argument to use with call within function

function repeatThreeTimes(func, context) {
  func.call(context);
  func.call(context);
  func.call(context);
}

function foo() {
  let john = {
    firstName: "John",
    lastName: "Doe",
    greetings() { 
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings, john); // pass in john object to function and use call in function to set the context object of function within another function
}

foo(); 
// hello, John Doe
// hello, John Doe
// hello, John Doe

/// using bind to set the execution context of a function -- this helps when you can't update the function or supply a context

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

function foo() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings.bind(john));
}

foo();
// => hello, John Doe
// => hello, John Doe
// => hello, John Doe

