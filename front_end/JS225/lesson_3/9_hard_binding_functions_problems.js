// What function can we use to permanently bind a function to a particular execution context?
// Function method bind

// (2) What will the code below log to console?

let obj = {
  message: 'Javascript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj); // nothing, bind does not execute a function; it only binds a function to a context object 
// it returns a new function that is bound permenantly to the context argument

// (3) What will the code below log to console?

let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);

console.log(bar()); // 5; foo is explicitly bound to obj on line 28

// (4) What will the code below log to console?

let positiveMentality = {
  message: 'Javascript makes sense!',
};

let negativeMentality = {
  message: 'Javascript makes no sense!',
  // logMessage() {
  //   console.log(this.message); // where 'this' is positiveMentality object
  // }
};

function foo() {
  console.log(this.message);
}

let bar = foo.bind(positiveMentality); // bar references a new function -- foo -- with the context now changed to 'positiveMentality'
console.log(bar); // [Function: bound foo]
negativeMentality.logMessage = bar;
console.log(negativeMentality); 
// {
//   message: 'Javascript makes no sense!',
//   logMessage: [Function: bound foo]
// }
negativeMentality.logMessage(); // Javascript makes sense

/// (5) What will the code below output?

let obj = {
  a: 'Amazebulous!',
};

let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj); // function foo -- new copy of 'foo' bound to 'obj' as context object
console.log(bar); // [Function: bound foo]
bar.call(otherObj); // executes 'foo' with 'obj' as context -- 'Amazebulous' -- cannot be called with any other context even explicitly

